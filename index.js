const readline = require('readline');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const { default: makeWASocket, DisconnectReason, useMultiFileAuthState } = require('@whiskeysockets/baileys');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to ask user for phone number
function askForPhoneNumber() {
  return new Promise((resolve) => {
    rl.question(chalk.cyan('\n📱 Enter your WhatsApp number with country code (e.g., +1234567890): '), (answer) => {
      resolve(answer.trim());
    });
  });
}

// Function to save phone number to file
function savePhoneNumber(phoneNumber) {
  const configDir = path.join(__dirname, 'config');
  
  // Create config directory if it doesn't exist
  if (!fs.existsSync(configDir)) {
    fs.mkdirSync(configDir, { recursive: true });
  }

  const configPath = path.join(configDir, 'phone.json');
  const config = {
    phoneNumber,
    savedAt: new Date().toISOString()
  };

  fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
  console.log(chalk.green(`✅ Phone number saved to: ${configPath}`));
}

// Main function to start the bot
async function startBot() {
  try {
    console.log(chalk.blue.bold('\n🤖 Maria Bot - WhatsApp Pair Code Login\n'));

    // Get phone number from user
    const phoneNumber = await askForPhoneNumber();

    // Validate phone number format
    if (!phoneNumber.startsWith('+') || phoneNumber.length < 10) {
      console.log(chalk.red('❌ Invalid phone number format. Please include country code (e.g., +1234567890)'));
      rl.close();
      process.exit(1);
    }

    // Save phone number
    savePhoneNumber(phoneNumber);

    // Initialize auth state
    const { state, saveCreds } = await useMultiFileAuthState('auth_info_baileys');

    // Create WhatsApp socket
    const sock = makeWASocket({
      auth: state,
      printQRInTerminal: false
    });

    // Request pair code
    console.log(chalk.yellow('\n⏳ Requesting pair code...\n'));
    const code = await sock.requestPairingCode(phoneNumber);
    
    console.log(chalk.green.bold(`\n✨ Your pair code: ${code}\n`));
    console.log(chalk.cyan('📋 Instructions:'));
    console.log(chalk.cyan('  1. Open WhatsApp on your phone'));
    console.log(chalk.cyan('  2. Go to Settings → Linked Devices → Link a Device'));
    console.log(chalk.cyan('  3. Select "Link with Phone Number"'));
    console.log(chalk.cyan(`  4. Enter the pair code shown above when prompted\n`));

    // Handle connection updates
    sock.ev.on('connection.update', (update) => {
      const { connection, lastDisconnect } = update;
      
      if (connection === 'close') {
        if (lastDisconnect?.error?.output?.statusCode !== DisconnectReason.loggedOut) {
          startBot(); // Reconnect if not logged out
        } else {
          console.log(chalk.red('Connection closed. Logged out.'));
          rl.close();
          process.exit(0);
        }
      } else if (connection === 'open') {
        console.log(chalk.green.bold('\n✅ Bot connected successfully!\n'));
      }
    });

    // Save credentials when updated
    sock.ev.on('creds.update', saveCreds);

    // Listen for incoming messages
    sock.ev.on('messages.upsert', async (m) => {
      const msg = m.messages[0];
      
      if (!msg.key.fromMe && m.type === 'notify') {
        console.log(chalk.yellow(`\n📬 New message from ${msg.pushName}:`));
        console.log(chalk.white(`   ${msg.message?.conversation || msg.message?.extendedTextMessage?.text || '[Media]'}\n`));
      }
    });

  } catch (err) {
    console.error(chalk.red('❌ Error:'), err.message);
    rl.close();
    process.exit(1);
  }
}

// Start the bot
startBot();

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log(chalk.yellow('\n\n👋 Shutting down...\n'));
  rl.close();
  process.exit(0);
});
