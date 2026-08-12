const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse incoming JSON payloads
app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// API routes (define before static middleware)
app.post('/api/generate', (req, res) => {
    // Generate a random 4-digit number between 0000 and 9999
    const pin = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
    
    res.status(200).json({
        success: true,
        generatedPin: pin
    });
});

app.get('/api/generate', (req, res) => {
    // Also support GET for browser testing
    const pin = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
    
    res.status(200).json({
        success: true,
        generatedPin: pin
    });
});

// Serve static files from public directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
