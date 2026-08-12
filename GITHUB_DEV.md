# 🚀 GitHub Dev Quick Start

**Quick Links:**
- **GitHub.dev Web Editor:** [Open in github.dev](https://github.dev/jjjm03299-wq/Maria-Md/tree/develop)
- **GitHub Codespaces:** [Open in Codespaces](https://codespaces.new/jjjm03299-wq/Maria-Md?ref=develop)
- **VS Code Web:** Open this repo in your browser with `github.dev`

## Quick Start in github.dev

### 1. **Open in github.dev**
```
Press '.' (period) on GitHub repo page
OR
Visit: https://github.dev/jjjm03299-wq/Maria-Md/tree/develop
```

### 2. **Using GitHub Codespaces** (Recommended for development)
```bash
# Automatic setup on Codespace creation:
npm install
npm run server:dev
```

### 3. **Open Terminal in github.dev**
```
Ctrl+J (or Cmd+J on Mac) - Opens integrated terminal
```

### 4. **Run Development Server**
```bash
npm run server:dev
```
Server runs on port `3000` with auto-reload via nodemon

### 5. **Test PIN Generator**
```bash
# In another terminal:
curl -X POST http://localhost:3000/api/generate
```

---

## Development Workflow

### Branch: `develop`
- Feature development happens here
- Auto-deploys to dev environment on push
- Test new features before merging to `main`

### Branch: `main`
- Production branch
- Auto-deploys to https://jjjm03299-wq.github.io/Maria-Md/
- Stable releases only

---

## Available Scripts

```bash
# Start main bot
npm start

# Development bot with auto-reload
npm run dev

# Start PIN Generator server
npm run server

# Start server with auto-reload (Development)
npm run server:dev

# Deploy to GitHub Pages
npm run deploy
```

---

## Project Structure

```
.
├── public/
│   └── index.html          # PIN Generator UI
├── server.js               # Express server
├── index.js               # WhatsApp bot
├── .devcontainer/         # Dev environment config
├── .github/workflows/
│   ├── deploy.yml        # Production deployment
│   └── deploy-dev.yml    # Development deployment
└── package.json
```

---

## Tips for github.dev Development

### Terminal Tips
- `Ctrl+J` - Toggle terminal
- `Ctrl+'` - New terminal
- `Ctrl+Shift+P` - Command palette

### Extension Recommendations
- GitHub Copilot
- ESLint
- Prettier
- Live Server

### File Editing
- Auto-format on save (Prettier enabled)
- ESLint warnings in real-time
- Git integration built-in

---

## Making Changes

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/your-feature
   ```

2. **Make Changes**
   - Edit files in github.dev
   - Changes auto-save

3. **Test Locally**
   ```bash
   npm run server:dev
   # Visit http://localhost:3000
   ```

4. **Commit & Push**
   ```bash
   git add .
   git commit -m "feat: your feature"
   git push origin feature/your-feature
   ```

5. **Create Pull Request**
   - Go to GitHub
   - Create PR to `develop` branch
   - Merge when ready

---

## Debugging Tips

### Check Logs
```bash
# Terminal output shows:
# - Server startup messages
# - API request logs
# - Error messages
```

### Test API
```bash
# Generate PIN
curl -X POST http://localhost:3000/api/generate

# Or GET
curl http://localhost:3000/api/generate
```

### Browser Console
- Open DevTools: `F12`
- Check Network tab for API calls
- Check Console for JavaScript errors

---

## Need Help?

- 📖 See [PIN_GENERATOR.md](../PIN_GENERATOR.md) for full documentation
- 🐛 Check GitHub Issues
- 💬 Create a discussion
- 🔗 Fork and contribute!

**Happy Coding!** 🎉
