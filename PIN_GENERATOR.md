# 🔐 PIN Generator

A simple 4-digit PIN generator web application integrated with the Maria-Md WhatsApp bot.

## Features

- ✅ Generate random 4-digit PINs (0000-9999)
- ✅ Copy PIN to clipboard with one click
- ✅ Track number of generated PINs
- ✅ Beautiful, responsive UI
- ✅ RESTful API endpoint

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

### Generate PIN
- **Endpoint:** `POST /api/generate`
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

## Deployment to GitHub Pages

### Prerequisites
- Repository must be on GitHub
- Push access to the repository

### Automatic Deployment

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically deploys to GitHub Pages when you push to the `main` branch.

#### Setup Steps:

1. **Enable GitHub Pages in your repository:**
   - Go to Settings → Pages
   - Set "Source" to "GitHub Actions"

2. **Push to main branch:**
   ```bash
   git add .
   git commit -m "feat: add PIN generator"
   git push origin main
   ```

3. **Check deployment status:**
   - Go to Actions tab
   - Monitor the "Deploy to GitHub Pages" workflow

4. **Access your site:**
   - URL: `https://username.github.io/Maria-Md/`
   - Or your custom domain if configured

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

## Customization

### Change PIN Range

Edit `server.js` to modify the PIN generation logic:
```javascript
// Current: 1000-9999 (4 digits with leading digit 1-9)
const pin = Math.floor(1000 + Math.random() * 9000).toString();

// For 0000-9999 (true 4-digit random):
const pin = String(Math.floor(Math.random() * 10000)).padStart(4, '0');
```

### Customize UI

Edit `public/index.html` to change:
- Colors and styling
- Button text and behavior
- Title and branding

## Security Notes

- This PIN generator is for demonstration purposes
- For production use with authentication, add rate limiting:
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

## License

MIT

## Support

For issues or questions, open an issue on GitHub.
