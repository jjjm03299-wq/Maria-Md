const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// POST endpoint to generate a 4-digit PIN
app.post('/api/generate', (req, res) => {
    // Generate a random 4-digit number between 0000 and 9999
    const pin = Math.floor(1000 + Math.random() * 9000).toString();
    
    res.status(200).json({
        success: true,
        generatedPin: pin
    });
});

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
