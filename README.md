# Maria MD - WhatsApp Bot

A WhatsApp bot powered by [Baileys](https://github.com/WhiskeySockets/Baileys) with pair code login support.

## Features

- ✅ Pair code login (no browser automation needed)
- ✅ Phone number input with readline
- ✅ Automatic credentials saving
- ✅ Message listening and processing
- ✅ Color-coded terminal output

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/jjjm03299-wq/Maria-Md.git
   cd Maria-Md
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

1. **Start the bot:**
   ```bash
   npm start
   ```

2. **Enter your WhatsApp number:**
   - When prompted, enter your phone number with country code (e.g., `+1234567890`)

3. **Get your pair code:**
   - The bot will display a 8-character pair code
   - Your phone number will be saved to `config/phone.json`

4. **Link on WhatsApp:**
   - Open WhatsApp on your phone
   - Go to **Settings → Linked Devices → Link a Device**
   - Select **Link with Phone Number**
   - Enter the pair code when prompted

5. **Done!** 
   - Your bot is now connected and ready to receive messages

## File Structure

```
Maria-Md/
├── index.js              # Main bot entry point
├── package.json          # Project dependencies
├── config/
│   └── phone.json        # Saved phone number (auto-created)
└── auth_info_baileys/    # Session credentials (auto-created)
```

## Configuration

The bot saves your phone number to `config/phone.json`:
```json
{
  "phoneNumber": "+1234567890",
  "savedAt": "2026-07-19T12:00:00.000Z"
}
```

## Development

Run with auto-reload:
```bash
npm run dev
```

## Dependencies

- **@whiskeysockets/baileys** - WhatsApp Web reverse engineering
- **readline** - Command-line input
- **chalk** - Terminal colors
- **qrcode-terminal** - QR code display (optional)

## Troubleshooting

- **"Invalid phone number format"** - Ensure you include the `+` and country code
- **"Connection closed"** - The bot may reconnect automatically
- **Credentials issues** - Delete the `auth_info_baileys` folder and restart

## License

MIT

## Disclaimer

This bot uses Baileys which is reverse-engineered WhatsApp Web. Use responsibly and in compliance with WhatsApp's Terms of Service.
