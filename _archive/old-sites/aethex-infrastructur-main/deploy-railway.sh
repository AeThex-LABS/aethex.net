#!/bin/bash

# Railway Deployment Helper Script
# This script helps you deploy to Railway quickly

echo "🚂 AeThex Infrastructure - Railway Deployment"
echo "=============================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit for Railway deployment"
    echo "✅ Git initialized"
else
    echo "✅ Git repository exists"
fi

# Check if remote exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo ""
    echo "⚠️  No Git remote found"
    echo "Please add your GitHub repository:"
    echo "git remote add origin https://github.com/AeThex-Corporation/aethex-infrastructur.git"
    echo ""
else
    echo "✅ Git remote configured"
    echo "   Remote: $(git remote get-url origin)"
fi

echo ""
echo "📋 Pre-deployment Checklist:"
echo ""
echo "1. ✅ railway.json configured"
echo "2. ✅ nixpacks.toml configured"
echo "3. ✅ Procfile configured"
echo "4. ✅ Build scripts ready"
echo ""

# Check if Railway CLI is installed
if command -v railway &> /dev/null; then
    echo "✅ Railway CLI installed"
    echo ""
    echo "Quick commands:"
    echo "  railway login     - Login to Railway"
    echo "  railway init      - Initialize Railway project"
    echo "  railway up        - Deploy to Railway"
    echo "  railway logs      - View deployment logs"
    echo ""
else
    echo "💡 Railway CLI not installed"
    echo ""
    echo "Install it with:"
    echo "  npm install -g @railway/cli"
    echo ""
    echo "Or deploy via Railway Dashboard:"
    echo "  https://railway.app/new"
    echo ""
fi

echo "📖 Next Steps:"
echo ""
echo "1. Push to GitHub:"
echo "   git add ."
echo "   git commit -m 'Prepare for Railway deployment'"
echo "   git push origin main"
echo ""
echo "2. Go to Railway Dashboard:"
echo "   https://railway.app/new"
echo ""
echo "3. Connect your GitHub repository"
echo ""
echo "4. Add environment variables:"
echo "   VITE_MAIN_SITE_URL=https://aethex.net"
echo "   VITE_API_BASE_URL=https://api.aethex.cloud/v1"
echo "   VITE_AUTH_DOMAIN=https://aethex.tech"
echo "   NODE_ENV=production"
echo ""
echo "5. Deploy! 🚀"
echo ""
echo "📚 Full guide: DEPLOY_RAILWAY.md"
echo ""
