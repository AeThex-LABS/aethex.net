# Production Deployment Guide

## Infrastructure Overview

### Production Domains
- **API Server**: `https://api.aethex.cloud`
- **Authentication**: `https://aethex.tech`
- **Frontend**: TBD (Vercel/Netlify)
- **Status Page**: `https://status.aethex.cloud`

## Environment Configuration

### Production Environment Variables

Create `.env.production`:

```bash
# Production API
VITE_API_BASE_URL=https://api.aethex.cloud/v1

# Authentication Domain
VITE_AUTH_DOMAIN=https://aethex.tech

# Analytics (Optional)
VITE_ANALYTICS_ID=your-analytics-id

# API Key (if required)
VITE_API_KEY=your-production-key
```

### Development Environment Variables

Keep `.env.local` for local development:

```bash
# Local development
VITE_API_BASE_URL=http://localhost:3001/api/v1
VITE_AUTH_DOMAIN=https://aethex.tech
```

## API Endpoints

### Production API Base
```
https://api.aethex.cloud/v1
```

### Authentication Endpoints (aethex.tech)
```
POST   https://aethex.tech/api/auth/register
POST   https://aethex.tech/api/auth/login
POST   https://aethex.tech/api/auth/refresh
POST   https://aethex.tech/api/auth/logout
```

### Game API Endpoints (api.aethex.cloud)
```
# State Synchronization
POST   https://api.aethex.cloud/v1/sync/setState
GET    https://api.aethex.cloud/v1/sync/getState

# Player Management
POST   https://api.aethex.cloud/v1/players/create
GET    https://api.aethex.cloud/v1/players/:id
PUT    https://api.aethex.cloud/v1/players/:id

# Analytics & Events
POST   https://api.aethex.cloud/v1/events/track
GET    https://api.aethex.cloud/v1/analytics/:playerId
POST   https://api.aethex.cloud/v1/metrics/record

# Admin
GET    https://api.aethex.cloud/v1/admin/customers
GET    https://api.aethex.cloud/v1/admin/metrics

# Status
GET    https://api.aethex.cloud/v1/status
GET    https://api.aethex.cloud/health
```

## Deployment Steps

### 1. Build the Frontend

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### 2. Deploy Frontend

#### Option A: Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Set environment variables in Vercel dashboard
VITE_API_BASE_URL=https://api.aethex.cloud/v1
VITE_AUTH_DOMAIN=https://aethex.tech
```

#### Option B: Netlify
```bash
# Build command: npm run build
# Publish directory: dist

# Set environment variables in Netlify dashboard
VITE_API_BASE_URL=https://api.aethex.cloud/v1
VITE_AUTH_DOMAIN=https://aethex.tech
```

#### Option C: Cloudflare Pages
```bash
# Build command: npm run build
# Build output directory: dist

# Set environment variables in Cloudflare dashboard
VITE_API_BASE_URL=https://api.aethex.cloud/v1
VITE_AUTH_DOMAIN=https://aethex.tech
```

### 3. Configure CORS on Backend

Ensure your backend allows requests from the frontend domain:

```javascript
// On api.aethex.cloud
app.use(cors({
  origin: [
    'https://your-frontend.vercel.app',
    'http://localhost:5173' // for local development
  ],
  credentials: true
}))
```

### 4. SSL/HTTPS

- ✅ Ensure all domains have valid SSL certificates
- ✅ Use HTTPS for all API calls
- ✅ Set secure cookies for authentication

## Testing Production Setup

### Test Authentication
```bash
curl -X POST https://aethex.tech/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "displayName": "TestUser",
    "password": "secure123"
  }'
```

### Test API
```bash
curl https://api.aethex.cloud/v1/status
```

### Test from Frontend
1. Set production environment variables
2. Build: `npm run build`
3. Preview: `npm run preview`
4. Test authentication flows
5. Test API playground

## Security Checklist

- [ ] All domains use HTTPS
- [ ] CORS properly configured
- [ ] API keys stored securely
- [ ] Rate limiting enabled on backend
- [ ] Authentication tokens use JWT
- [ ] Secure cookie settings (httpOnly, secure, sameSite)
- [ ] Input validation on all endpoints
- [ ] SQL injection protection
- [ ] XSS protection headers
- [ ] CSRF protection

## Monitoring

### Health Checks
- API: `https://api.aethex.cloud/health`
- Auth: `https://aethex.tech/health`

### Status Page
- Public status: `https://status.aethex.cloud`

### Logging
- Application logs
- Error tracking (Sentry)
- Performance monitoring (New Relic, Datadog)

## Rollback Plan

If deployment fails:

1. Revert to previous deployment
2. Check environment variables
3. Verify API connectivity
4. Check CORS configuration
5. Review server logs

## Performance Optimization

- [ ] Enable CDN for static assets
- [ ] Compress responses (gzip/brotli)
- [ ] Cache API responses where appropriate
- [ ] Lazy load components
- [ ] Code splitting
- [ ] Image optimization
- [ ] Minimize bundle size

## Domain Architecture

```
┌─────────────────────────┐
│   Frontend              │
│   (Vercel/Netlify)      │
│   your-app.com          │
└───────────┬─────────────┘
            │
            ├─────────────────────────┐
            │                         │
            ▼                         ▼
┌─────────────────────┐   ┌─────────────────────┐
│   Auth Service      │   │   Game API          │
│   aethex.tech       │   │   api.aethex.cloud  │
│   /api/auth/*       │   │   /v1/*             │
└─────────────────────┘   └─────────────────────┘
            │                         │
            ▼                         ▼
    ┌───────────────┐         ┌───────────────┐
    │  User DB      │         │  Game Data    │
    │  (Auth)       │         │  (Postgres)   │
    └───────────────┘         └───────────────┘
```

## Support

For deployment issues:
- Check logs on your hosting platform
- Verify environment variables are set
- Test API endpoints with curl
- Check browser console for errors
- Verify CORS headers

## Next Steps

1. Set up CI/CD pipeline
2. Configure monitoring and alerts
3. Set up automated backups
4. Create staging environment
5. Document API rate limits
6. Set up error tracking
7. Configure CDN
8. Performance testing
