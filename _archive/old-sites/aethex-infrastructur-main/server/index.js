import express from 'express';
import cors from 'cors';
import { v4 as uuidv4 } from 'uuid';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory data store (for demo purposes)
const players = new Map();
const sessions = new Map();
const events = [];
const metrics = [];

// Utility function to simulate latency
const delay = (ms = 100) => new Promise(resolve => setTimeout(resolve, ms));

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

// ============================================
// AUTHENTICATION ENDPOINTS
// ============================================

app.post('/api/v1/auth/register', async (req, res) => {
  await delay();
  const { email, displayName, password } = req.body;

  if (!email || !displayName || !password) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields'
    });
  }

  const playerId = `player-${uuidv4().split('-')[0]}`;
  
  players.set(playerId, {
    id: playerId,
    email,
    displayName,
    createdAt: new Date().toISOString(),
    verificationRequired: true,
    level: 1,
    experience: 0,
    achievements: 0,
    totalPlayTime: 0
  });

  res.status(201).json({
    success: true,
    player: {
      id: playerId,
      email,
      displayName,
      verificationRequired: true,
      createdAt: new Date().toISOString()
    }
  });
});

app.post('/api/v1/auth/login', async (req, res) => {
  await delay();
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      error: 'Missing email or password'
    });
  }

  // Find player by email
  const player = Array.from(players.values()).find(p => p.email === email);

  if (!player) {
    return res.status(401).json({
      success: false,
      error: 'Invalid credentials'
    });
  }

  const token = `aethex_token_${uuidv4()}`;
  const sessionId = uuidv4();

  sessions.set(sessionId, {
    playerId: player.id,
    token,
    createdAt: new Date().toISOString(),
    expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
  });

  res.json({
    success: true,
    token,
    expiresIn: 86400,
    player: {
      id: player.id,
      email: player.email,
      displayName: player.displayName,
      createdAt: player.createdAt
    }
  });
});

app.post('/api/v1/auth/refresh', async (req, res) => {
  await delay();
  const { refreshToken } = req.body;

  if (!refreshToken) {
    return res.status(400).json({
      success: false,
      error: 'Missing refresh token'
    });
  }

  const newToken = `aethex_token_${uuidv4()}`;

  res.json({
    success: true,
    token: newToken,
    expiresIn: 86400
  });
});

// ============================================
// STATE SYNCHRONIZATION ENDPOINTS
// ============================================

app.post('/api/v1/sync/setState', async (req, res) => {
  await delay(50);
  const { playerId, state } = req.body;

  if (!playerId || !state) {
    return res.status(400).json({
      success: false,
      error: 'Missing playerId or state'
    });
  }

  const player = players.get(playerId) || {};
  player.state = state;
  player.lastUpdated = new Date().toISOString();
  player.version = (player.version || 0) + 1;
  players.set(playerId, player);

  res.json({
    success: true,
    playerId,
    syncedAt: new Date().toISOString(),
    version: player.version,
    syncedDevices: ['web', 'mobile'],
    latency: 45 + Math.floor(Math.random() * 20)
  });
});

app.get('/api/v1/sync/getState', async (req, res) => {
  await delay(30);
  const { playerId } = req.query;

  if (!playerId) {
    return res.status(400).json({
      success: false,
      error: 'Missing playerId parameter'
    });
  }

  const player = players.get(playerId);

  if (!player || !player.state) {
    return res.status(404).json({
      success: false,
      error: 'Player state not found'
    });
  }

  res.json({
    success: true,
    playerId,
    state: player.state,
    lastUpdated: player.lastUpdated,
    version: player.version || 1
  });
});

// ============================================
// PLAYER MANAGEMENT ENDPOINTS
// ============================================

app.post('/api/v1/players/create', async (req, res) => {
  await delay();
  const { email, displayName, metadata } = req.body;

  if (!email || !displayName) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields'
    });
  }

  const playerId = `player-${uuidv4().split('-')[0]}`;
  
  players.set(playerId, {
    id: playerId,
    email,
    displayName,
    metadata: metadata || {},
    createdAt: new Date().toISOString(),
    level: 1,
    experience: 0,
    achievements: 0,
    totalPlayTime: 0
  });

  res.status(201).json({
    success: true,
    player: {
      id: playerId,
      createdAt: new Date().toISOString()
    }
  });
});

app.get('/api/v1/players/:id', async (req, res) => {
  await delay();
  const { id } = req.params;

  const player = players.get(id);

  if (!player) {
    return res.status(404).json({
      success: false,
      error: 'Player not found'
    });
  }

  res.json({
    success: true,
    player: {
      id: player.id,
      displayName: player.displayName,
      email: player.email,
      level: player.level || 1,
      experience: player.experience || 0,
      achievements: player.achievements || 0,
      totalPlayTime: player.totalPlayTime || 0,
      createdAt: player.createdAt,
      lastSeen: new Date().toISOString()
    }
  });
});

app.put('/api/v1/players/:id', async (req, res) => {
  await delay();
  const { id } = req.params;
  const updates = req.body;

  const player = players.get(id);

  if (!player) {
    return res.status(404).json({
      success: false,
      error: 'Player not found'
    });
  }

  Object.assign(player, updates);
  player.updatedAt = new Date().toISOString();
  players.set(id, player);

  res.json({
    success: true,
    player: {
      id: player.id,
      displayName: player.displayName,
      updatedAt: player.updatedAt
    }
  });
});

// ============================================
// ANALYTICS & EVENTS ENDPOINTS
// ============================================

app.post('/api/v1/events/track', async (req, res) => {
  await delay();
  const { playerId, eventName, eventData } = req.body;

  if (!playerId || !eventName) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields'
    });
  }

  const eventId = `evt_${uuidv4().split('-')[0]}`;
  
  events.push({
    id: eventId,
    playerId,
    eventName,
    eventData: eventData || {},
    trackedAt: new Date().toISOString()
  });

  res.json({
    success: true,
    eventId,
    trackedAt: new Date().toISOString()
  });
});

app.get('/api/v1/analytics/:playerId', async (req, res) => {
  await delay();
  const { playerId } = req.params;
  const { period } = req.query;

  const playerEvents = events.filter(e => e.playerId === playerId);

  res.json({
    success: true,
    analytics: {
      sessionsCount: Math.floor(Math.random() * 20) + 10,
      totalPlayTime: Math.floor(Math.random() * 50) + 10,
      levelsCompleted: Math.floor(Math.random() * 15) + 5,
      achievements: Math.floor(Math.random() * 10) + 3,
      averageSessionDuration: Math.floor(Math.random() * 60) + 30,
      eventsTracked: playerEvents.length
    }
  });
});

app.post('/api/v1/metrics/record', async (req, res) => {
  await delay();
  const { playerId, metricName, value, metadata } = req.body;

  if (!playerId || !metricName || value === undefined) {
    return res.status(400).json({
      success: false,
      error: 'Missing required fields'
    });
  }

  metrics.push({
    playerId,
    metricName,
    value,
    metadata: metadata || {},
    recordedAt: new Date().toISOString()
  });

  res.json({
    success: true,
    recorded: true
  });
});

// ============================================
// ADMIN ENDPOINTS
// ============================================

app.get('/api/v1/admin/customers', async (req, res) => {
  await delay();
  
  const customers = Array.from(players.values()).map(player => ({
    id: player.id,
    name: player.displayName,
    email: player.email,
    plan: ['Free', 'Pro', 'Enterprise'][Math.floor(Math.random() * 3)],
    apiCalls: Math.floor(Math.random() * 1000000),
    status: ['Active', 'Inactive'][Math.floor(Math.random() * 2)],
    createdAt: player.createdAt
  }));

  res.json({
    success: true,
    customers,
    total: customers.length
  });
});

app.get('/api/v1/admin/metrics', async (req, res) => {
  await delay();
  
  res.json({
    success: true,
    metrics: {
      totalCustomers: players.size,
      monthlyRevenue: Math.floor(Math.random() * 100000) + 50000,
      apiCallsToday: Math.floor(Math.random() * 10000000) + 5000000,
      activeUsers: Math.floor(players.size * 0.7)
    }
  });
});

// ============================================
// STATUS ENDPOINTS
// ============================================

app.get('/api/v1/status', async (req, res) => {
  await delay(20);
  
  res.json({
    success: true,
    status: 'operational',
    services: {
      api: { status: 'operational', latency: 45 },
      database: { status: 'operational', latency: 12 },
      cache: { status: 'operational', latency: 3 },
      sync: { status: 'operational', latency: 35 }
    },
    uptime: 99.99,
    timestamp: new Date().toISOString()
  });
});

// ============================================
// HEALTH CHECK
// ============================================

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`
╔═══════════════════════════════════════════╗
║   AeThex Mock API Server                  ║
║   Running on http://localhost:${PORT}      ║
║                                           ║
║   Available Endpoints:                    ║
║   - POST /api/v1/auth/register            ║
║   - POST /api/v1/auth/login               ║
║   - POST /api/v1/sync/setState            ║
║   - GET  /api/v1/sync/getState            ║
║   - POST /api/v1/players/create           ║
║   - GET  /api/v1/players/:id              ║
║   - POST /api/v1/events/track             ║
║   - GET  /api/v1/analytics/:playerId      ║
║   - GET  /api/v1/status                   ║
║   - GET  /health                          ║
╚═══════════════════════════════════════════╝
  `);
});

export default app;
