# 🚀 Quick Start Guide

Get the AeThex platform running locally in 3 steps:

## Prerequisites

- Node.js 18+ installed
- npm or yarn

## Step 1: Install Dependencies

```bash
# Install frontend dependencies
npm install

# Install server dependencies (automatic on first run, or manually)
cd server && npm install && cd ..
```

## Step 2: Start the Backend API Server

```bash
# Option A: Start server only
npm run server

# Option B: Start server with auto-reload
npm run server:dev
```

The API server will start on `http://localhost:3001`

## Step 3: Start the Frontend

Open a new terminal:

```bash
# Start Vite dev server
npm run dev
```

The frontend will start on `http://localhost:5173`

## All-in-One Command

Start both frontend and backend simultaneously:

```bash
npm run dev:all
```

## Test the Integration

Once both servers are running:

1. Open `http://localhost:5173` in your browser
2. Click "Sign In" and create an account
3. Navigate to the API Playground
4. Test any endpoint - it will hit the local API server
5. Check the terminal running the server to see request logs

## Available Features

✅ **Frontend** (Port 5173)
- Marketing homepage with pricing
- Interactive API documentation
- Live API playground
- Real-time status dashboard
- Customer showcase with case studies
- Admin dashboard with metrics
- Authentication dialogs
- Getting started onboarding

✅ **Backend API** (Port 3001)
- All REST endpoints implemented
- In-memory data storage
- CORS enabled
- Request logging
- Simulated latency
- Error handling

## API Endpoints

```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/refresh
POST   /api/v1/sync/setState
GET    /api/v1/sync/getState
POST   /api/v1/players/create
GET    /api/v1/players/:id
PUT    /api/v1/players/:id
POST   /api/v1/events/track
GET    /api/v1/analytics/:playerId
POST   /api/v1/metrics/record
GET    /api/v1/admin/customers
GET    /api/v1/admin/metrics
GET    /api/v1/status
GET    /health
```

## Environment Variables

Create `.env.local` to customize:

```bash
VITE_API_BASE_URL=http://localhost:3001/api/v1
```

## Troubleshooting

**Port already in use?**
```bash
# Kill processes on port 3001
fuser -k 3001/tcp

# Or change the port in server/index.js
const PORT = process.env.PORT || 3002
```

**Frontend can't connect to API?**
- Make sure both servers are running
- Check that API_BASE_URL in `.env.local` is correct
- Verify CORS is enabled (it should be by default)

**Data not persisting?**
- This is expected - the server uses in-memory storage
- Data resets when you restart the server
- For production, replace with a real database

## Next Steps

- [ ] Explore the API Playground at `/playground`
- [ ] Read the documentation at `/docs`
- [ ] Check out case studies at `/showcase`
- [ ] View the admin dashboard at `/admin`
- [ ] Test authentication flows
- [ ] Try the getting started tutorial

## Production Deployment

For production, you'll need:

1. Real database (PostgreSQL, MongoDB)
2. Authentication with JWT
3. Rate limiting
4. Input validation
5. HTTPS/SSL
6. Environment-based configuration
7. Error logging service
8. CI/CD pipeline
9. Cloud hosting (AWS, Vercel, etc.)

See `server/README.md` for more details on production considerations.
