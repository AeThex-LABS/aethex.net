# AeThex Infrastructure - Frontend

Frontend for the AeThex cross-platform gaming infrastructure platform. This site is deployed at **aethex.net** and connects to the backend API at **api.aethex.cloud**.

![Status](https://img.shields.io/badge/status-production-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)

## 🌐 Architecture

- **Frontend** (this repo): `https://aethex.net` - Deployed on Railway
- **Backend API**: `https://api.aethex.cloud` - Handles all API requests
- **Database**: Supabase
- **Infrastructure**: Railway

## �� Features

### ✅ Fully Implemented (90%)

**Frontend Platform**
- 🎯 Marketing homepage with pricing tiers
- 📚 Comprehensive API documentation
- ⚡ Interactive API playground with live testing
- 📊 Real-time status dashboard
- 🏆 Customer showcase with detailed case studies
- 👤 Authentication & sign-up flows
- 🚀 Getting started onboarding wizard
- 🔧 Admin dashboard with analytics
- 📱 Fully responsive design
- 🎨 Dark mode with modern UI components

**Backend API**
- 🔐 Authentication endpoints (register, login, refresh)
- 🔄 State synchronization (setState, getState)
- 👥 Player management (CRUD operations)
- 📈 Analytics & event tracking
- 👨‍💼 Admin metrics and customer management
- 💚 Health checks and status monitoring
- 🌐 CORS enabled
- ⚡ Simulated realistic latency

**Developer Experience**
- 💻 Multi-language code examples (JS, Python, C#)
- 🎮 SDK integration guides
- 🔗 Community hub links (GitHub, Discord, Stack Overflow)
- 📞 Contact sales form
- 📖 Getting started tutorial
- 🧪 Mock API server for development

## 🚀 Quick Start

See [QUICKSTART.md](./QUICKSTART.md) for detailed setup instructions.

### Production URLs
- **Main Site**: `https://aethex.net`
- **API**: `https://api.aethex.cloud/v1`
- **Auth**: `https://aethex.tech`
- **Status**: `https://status.aethex.cloud`

### Local Development

```bash
# Install dependencies
npm install

# Start backend API server
npm run server

# In another terminal, start frontend
npm run dev

# Or start both together
npm run dev:all
```

Visit `http://localhost:5173` for the frontend and `http://localhost:3001` for the local API.

### 🚂 Deploy to Railway

Quick deployment to Railway:

```bash
# Run deployment helper
./deploy-railway.sh

# Or manually:
# 1. Push to GitHub
git push origin main

# 2. Go to railway.app/new
# 3. Connect your repo
# 4. Add environment variables (see .env.railway)
# 5. Deploy!
```

See [DEPLOY_RAILWAY.md](./DEPLOY_RAILWAY.md) for complete deployment guide.

## 📁 Project Structure

\`\`\`
aethex-infrastructur/
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Radix UI components
│   │   ├── admin/       # Admin dashboard
│   │   ├── commercial/  # Marketing sections
│   │   └── showcase/    # Customer showcase
│   ├── pages/           # Route pages
│   ├── lib/             # Utilities & API client
│   └── hooks/           # Custom React hooks
├── server/              # Backend API server
│   ├── index.js        # Express server
│   ├── package.json    # Server dependencies
│   └── README.md       # API documentation
└── public/             # Static assets
\`\`\`

## 🛠️ Tech Stack

**Frontend**
- React 19 + TypeScript
- Vite 7.2
- TailwindCSS 4.1
- Radix UI components
- React Router 7
- Framer Motion
- Recharts

**Backend**
- Node.js + Express
- UUID for IDs
- CORS enabled
- In-memorion Deployment](./PRODUCTION_DEPLOYMENT.md) - Deploy to production
- [Backend Integration](./BACKEND_INTEGRATION.md) - Integration guide
- [Producty storage

## 📚 Documentation

- [Quick Start Guide](./QUICKSTART.md) - Get up and running
- [API Server Docs](./server/README.md) - Backend API reference
- [Product Requirements](./PRD.md) - Full feature specification

## 🌐 API Endpoints

\`\`\`
Authentication
POST   /api/v1/auth/register      # Create account
POST   /api/v1/auth/login         # Sign in
POST   /api/v1/auth/refresh       # Refresh token

State Sync
POST   /api/v1/sync/setState      # Update state
GET    /api/v1/sync/getState      # Get state

Players
POST   /api/v1/players/create     # Create player
GET    /api/v1/players/:id        # Get player
PUT    /api/v1/players/:id        # Update player

Analytics
POST   /api/v1/events/track       # Track event
GET    /api/v1/analytics/:id      # Get analytics
POST   /api/v1/metrics/record     # Record metric

Admin
GET    /api/v1/admin/customers    # List customers
GET    /api/v1/admin/metrics      # Platform metrics

Status
GET    /api/v1/status             # System status
GET    /health                    # Health check
\`\`\`

## 🧪 Development

\`\`\`bash
# Run frontend only
npm run dev

# Run backend only
npm run server

# Run both (recommended)
npm run dev:all

# Build for production
npm run build
\`\`\`

## 📄 License

MIT License

---

Built with ❤️ by AeThex Corporation
