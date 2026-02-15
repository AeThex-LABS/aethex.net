# 🚂 Deploy to Railway - Step by Step Guide

Deploy your AeThex Infrastructure platform to Railway in minutes!

## Prerequisites

- [ ] GitHub account
- [ ] Railway account (sign up at [railway.app](https://railway.app))
- [ ] This repository pushed to GitHub

## 📋 Deployment Steps

### Step 1: Push to GitHub

```bash
# Initialize git (if not already)
git init

# Add all files
git add .

# Commit
git commit -m "Prepare for Railway deployment"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/AeThex-Corporation/aethex-infrastructur.git

# Push to main branch
git push -u origin main
```

### Step 2: Connect to Railway

1. Go to [railway.app](https://railway.app)
2. Click **"Start a New Project"**
3. Select **"Deploy from GitHub repo"**
4. Authorize Railway to access your GitHub
5. Select **`AeThex-Corporation/aethex-infrastructur`**

### Step 3: Configure Environment Variables

In Railway dashboard, go to **Variables** tab and add:

```bash
# Production API URLs
VITE_MAIN_SITE_URL=https://aethex.net
VITE_API_BASE_URL=https://api.aethex.cloud/v1
VITE_AUTH_DOMAIN=https://aethex.tech

# Node environment
NODE_ENV=production
```

### Step 4: Configure Build Settings

Railway will auto-detect the configuration from `railway.json`, but verify:

- **Build Command**: `npm install && npm run build`
- **Start Command**: `npm run preview -- --host 0.0.0.0 --port $PORT`
- **Node Version**: 20.x

### Step 5: Deploy

1. Railway will automatically start deploying
2. Watch the build logs in real-time
3. Wait for deployment to complete (usually 2-5 minutes)
4. Railway will provide a URL like: `https://aethex-infrastructur-production.up.railway.app`

### Step 6: Configure Custom Domain

1. In Railway dashboard, go to **Settings** → **Domains**
2. Click **"Add Domain"**
3. Enter your domain: `aethex.net`
4. Railway will provide DNS records
5. Add these DNS records to your domain provider:

```
Type: CNAME
Name: www
Value: <your-railway-app>.up.railway.app

Type: A
Name: @
Value: <Railway's IP address>
```

6. Wait for DNS propagation (5-30 minutes)

### Step 7: Enable HTTPS

- ✅ Railway automatically provides SSL certificates
- ✅ Your site will be available at `https://aethex.net`
- ✅ HTTP automatically redirects to HTTPS

## 🔧 Post-Deployment Configuration

### Update Environment Variables

If you need to change any environment variables:

1. Go to Railway dashboard
2. Click **Variables**
3. Update values
4. Click **"Deploy"** to redeploy with new variables

### View Logs

```bash
# Install Railway CLI (optional)
npm install -g @railway/cli

# Login
railway login

# Link to project
railway link

# View logs
railway logs
```

### Rollback if Needed

1. Go to **Deployments** tab
2. Click on a previous successful deployment
3. Click **"Redeploy"**

## 🚀 Deploying the Backend API Separately

The backend API should be deployed as a separate Railway service:

### Create Backend Service

1. In Railway, click **"New Service"**
2. Select **"GitHub Repo"**
3. Choose your backend repository: `AeThex-Corporation/backend-api`
4. Configure environment variables:

```bash
# Server
PORT=$PORT
NODE_ENV=production

# Database (add your DB connection string)
DATABASE_URL=${{Postgres.DATABASE_URL}}

# Authentication
JWT_SECRET=<generate-a-secure-random-string>
JWT_EXPIRES_IN=24h
REFRESH_TOKEN_EXPIRES_IN=7d

# CORS
CORS_ORIGIN=https://aethex.net
```

5. Add custom domain: `api.aethex.cloud`

### Connect Database

1. In Railway, click **"New"** → **"Database"** → **"PostgreSQL"**
2. Railway will automatically create `DATABASE_URL` variable
3. Update your backend to use PostgreSQL instead of in-memory storage

## ✅ Deployment Checklist

- [ ] Repository pushed to GitHub
- [ ] Railway project created
- [ ] Environment variables configured
- [ ] Build completed successfully
- [ ] Site accessible via Railway URL
- [ ] Custom domain added (aethex.net)
- [ ] DNS records configured
- [ ] HTTPS working
- [ ] Backend API deployed (separate service)
- [ ] Backend database connected
- [ ] Frontend connecting to production API

## 📊 Monitoring

### Railway Dashboard

- **Metrics**: View CPU, Memory, Network usage
- **Logs**: Real-time application logs
- **Deployments**: History of all deployments
- **Analytics**: Request counts and response times

### Add Monitoring Tools

```bash
# Add error tracking
npm install @sentry/react @sentry/vite-plugin

# Add analytics
npm install @vercel/analytics
```

## 🔒 Security Checklist

- [ ] Environment variables are secure (no secrets in code)
- [ ] HTTPS enabled (Railway does this automatically)
- [ ] CORS configured for your domain only
- [ ] API rate limiting enabled on backend
- [ ] Database has strong password
- [ ] JWT secret is cryptographically secure
- [ ] No sensitive data in git history

## 💰 Cost Estimation

**Railway Pricing** (as of 2026):

- **Hobby Plan**: $5/month
  - 512 MB RAM
  - 1 GB disk
  - Good for small projects

- **Developer Plan**: $20/month
  - 8 GB RAM
  - 100 GB disk
  - Suitable for production

- **Team Plan**: $100/month+
  - Multiple projects
  - Team collaboration
  - Priority support

**Recommended**: Start with Developer plan for production.

## 🆘 Troubleshooting

### Build Fails

**Error**: `npm ERR! code ELIFECYCLE`

**Solution**: Check build logs, ensure all dependencies are in `package.json`

```bash
# Test build locally
npm run build
```

### Port Issues

**Error**: `Error: listen EADDRINUSE`

**Solution**: Ensure start command uses `$PORT` variable:

```bash
npm run preview -- --host 0.0.0.0 --port $PORT
```

### Environment Variables Not Working

**Error**: `undefined` values in app

**Solution**: 
- Ensure variables start with `VITE_` prefix
- Redeploy after adding variables
- Check they're in the Railway Variables tab

### Domain Not Working

**Error**: DNS not resolving

**Solution**:
- Verify DNS records are correct
- Wait up to 48 hours for propagation
- Use `dig aethex.net` to check DNS

### API Connection Fails

**Error**: CORS or network errors

**Solution**:
- Ensure backend CORS allows your frontend domain
- Check API is deployed and running
- Verify API_BASE_URL is correct

## 🎯 Alternative: Deploy Both Frontend & Backend Together

If you want to deploy frontend and backend in one Railway project:

1. Update `package.json`:

```json
{
  "scripts": {
    "build": "npm run build:frontend && npm run build:backend",
    "build:frontend": "tsc -b --noCheck && vite build",
    "build:backend": "cd server && npm install",
    "start": "npm run start:backend",
    "start:backend": "cd server && npm start"
  }
}
```

2. Update `railway.json`:

```json
{
  "build": {
    "builder": "NIXPACKS",
    "buildCommand": "npm install && npm run build"
  },
  "deploy": {
    "startCommand": "npm start"
  }
}
```

**Note**: Separate services is recommended for better scalability and maintenance.

## 📚 Additional Resources

- [Railway Docs](https://docs.railway.app)
- [Railway CLI](https://docs.railway.app/develop/cli)
- [Custom Domains Guide](https://docs.railway.app/deploy/exposing-your-app)
- [Environment Variables](https://docs.railway.app/develop/variables)

## 🎉 Success!

Once deployed, your site will be live at:
- **Frontend**: https://aethex.net
- **Backend API**: https://api.aethex.cloud
- **Auth Service**: https://aethex.tech
- **Status Page**: https://status.aethex.cloud

Congratulations on your deployment! 🚀
