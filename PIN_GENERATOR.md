# 🔐 PIN Generator

A simple 4-digit PIN generator web application with both server-side and client-side generation capabilities.

## Features

- ✅ Generate random 4-digit PINs (0000-9999)
- ✅ Copy PIN to clipboard with one click
- ✅ Track number of generated PINs
- ✅ Beautiful, responsive UI
- ✅ Works both with server API and as standalone (GitHub Pages)
- ✅ Automatic fallback to client-side generation if API unavailable

## Deployment Options

### Option 1: GitHub Pages (Static) ⭐ Currently Active
- **URL:** `https://jjjm03299-wq.github.io/Maria-Md/`
- **Works:** ✅ PIN generation (client-side)
- **Status:** Live and production-ready
- No server required, works entirely in the browser

### Option 2: Local Server (Full-Stack)
Perfect for development and testing with backend API

**Start the server:**
```bash
npm install
npm run server
```
- **Access:** `http://localhost:3000`
- **API:** `/api/generate` (POST and GET)
- Both server and client-side generation available

## Quick Start

### Run Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the server:**
   ```bash
   npm run server
   ```
   The PIN generator will be available at `http://localhost:3000`

3. **Development mode with auto-reload:**
   ```bash
   npm run server:dev
   ```

## API Reference

### Generate PIN (Backend)
- **Endpoint:** `POST /api/generate`
- **Method:** POST or GET
- **Response:**
  ```json
  {
    "success": true,
    "generatedPin": "7352"
  }
  ```

### Example Usage

**cURL:**
```bash
curl -X POST http://localhost:3000/api/generate
```

**JavaScript/Fetch:**
```javascript
fetch('/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(res => res.json())
.then(data => console.log(data.generatedPin));
```

## How It Works

### GitHub Pages (Static)
- PIN generation happens entirely in the browser using JavaScript
- No server required
- No API calls (works offline too)
- Fully functional standalone

### Local Server
- Can use backend API endpoint
- Falls back to client-side generation if API unavailable
- CORS enabled for cross-origin requests
- Development and testing purposes

## Customization

### Change PIN Range

Edit `server.js`:
```javascript
// Current: 0000-9999 (true 4-digit random)
const pin = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
```

### Customize UI

Edit `public/index.html` to change:
- Colors and styling
- Button text and behavior
- Title and branding

## Security Notes

- This PIN generator is for demonstration/casual use
- For production authentication, implement:
  - Rate limiting
  - Server-side PIN validation
  - HTTPS only
  - Database persistence (if needed)

### Add Rate Limiting (Optional):
```javascript
const rateLimit = require('express-rate-limit');
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});
app.post('/api/generate', limiter, (req, res) => { ... });
```

## Environment Variables

- `PORT` - Server port (default: 3000)

## Project Structure

```
Maria-Md/
├── public/
│   └── index.html          # PIN Generator UI
├── server.js               # Express server with /api/generate endpoint
├── index.js               # WhatsApp bot (Baileys)
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment workflow
└── package.json           # Dependencies and scripts
```

## License

MIT

## Support

For issues or questions, open an issue on GitHub.
