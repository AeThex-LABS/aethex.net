# Backend API Requirements

This document specifies what needs to be implemented in the separate backend repository at:
**https://github.com/AeThex-Corporation/backend-api**

This backend will be deployed at `https://api.aethex.cloud` and must support all endpoints that this frontend expects.

## Required Environment Configuration

```env
# Server
PORT=3001
NODE_ENV=production

# CORS - Allow frontend domain
CORS_ORIGIN=https://aethex.net

# Database (your choice)
DATABASE_URL=your_database_connection_string

# Authentication
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_IN=24h
REFRESH_TOKEN_EXPIRES_IN=7d

# Optional: Rate limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

## Required API Endpoints

### 1. Authentication Endpoints

#### POST `/api/v1/auth/register`
Register a new player account.

**Request Body:**
```json
{
  "email": "player@example.com",
  "displayName": "PlayerName",
  "password": "securePassword123"
}
```

**Response (201):**
```json
{
  "success": true,
  "player": {
    "id": "player-abc123",
    "email": "player@example.com",
    "displayName": "PlayerName",
    "verificationRequired": true,
    "createdAt": "2026-01-05T10:30:00Z"
  }
}
```

#### POST `/api/v1/auth/login`
Authenticate a player and return a token.

**Request Body:**
```json
{
  "email": "player@example.com",
  "password": "securePassword123"
}
```

**Response (200):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "refresh_abc123",
  "player": {
    "id": "player-abc123",
    "email": "player@example.com",
    "displayName": "PlayerName"
  }
}
```

#### POST `/api/v1/auth/refresh`
Refresh an expired access token.

**Request Body:**
```json
{
  "refreshToken": "refresh_abc123"
}
```

**Response (200):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "refresh_xyz789"
}
```

---

### 2. State Synchronization Endpoints

#### POST `/api/v1/sync/setState`
Save game state for a player.

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "playerId": "player-abc123",
  "state": {
    "level": 10,
    "position": { "x": 100, "y": 200, "z": 50 },
    "inventory": ["sword", "shield", "potion"],
    "stats": { "health": 100, "mana": 50 }
  }
}
```

**Response (200):**
```json
{
  "success": true,
  "playerId": "player-abc123",
  "version": 5,
  "savedAt": "2026-01-05T10:35:00Z"
}
```

#### GET `/api/v1/sync/getState?playerId={playerId}`
Retrieve saved game state for a player.

**Headers:**
```
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "success": true,
  "playerId": "player-abc123",
  "state": {
    "level": 10,
    "position": { "x": 100, "y": 200, "z": 50 },
    "inventory": ["sword", "shield", "potion"],
    "stats": { "health": 100, "mana": 50 }
  },
  "version": 5,
  "lastModified": "2026-01-05T10:35:00Z"
}
```

---

### 3. Player Management Endpoints

#### POST `/api/v1/players/create`
Create a new player profile.

**Request Body:**
```json
{
  "email": "player@example.com",
  "displayName": "PlayerName",
  "metadata": {
    "platform": "PC",
    "region": "US-West"
  }
}
```

**Response (201):**
```json
{
  "success": true,
  "player": {
    "id": "player-abc123",
    "email": "player@example.com",
    "displayName": "PlayerName",
    "level": 1,
    "experience": 0,
    "achievements": 0,
    "totalPlayTime": 0,
    "createdAt": "2026-01-05T10:30:00Z"
  }
}
```

#### GET `/api/v1/players/{playerId}`
Get player profile information.

**Response (200):**
```json
{
  "success": true,
  "player": {
    "id": "player-abc123",
    "email": "player@example.com",
    "displayName": "PlayerName",
    "level": 10,
    "experience": 5000,
    "achievements": 15,
    "totalPlayTime": 72000,
    "createdAt": "2026-01-05T10:30:00Z",
    "lastSeen": "2026-01-05T12:30:00Z"
  }
}
```

#### PUT `/api/v1/players/{playerId}`
Update player profile.

**Request Body:**
```json
{
  "displayName": "NewPlayerName",
  "level": 11,
  "experience": 5500
}
```

**Response (200):**
```json
{
  "success": true,
  "player": {
    "id": "player-abc123",
    "displayName": "NewPlayerName",
    "level": 11,
    "experience": 5500,
    "updatedAt": "2026-01-05T13:00:00Z"
  }
}
```

---

### 4. Analytics Endpoints

#### POST `/api/v1/events/track`
Track a game event.

**Headers:**
```
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "playerId": "player-abc123",
  "eventName": "level_completed",
  "eventData": {
    "levelId": "level-5",
    "score": 1000,
    "timeElapsed": 120
  }
}
```

**Response (200):**
```json
{
  "success": true,
  "eventId": "event-xyz789",
  "recordedAt": "2026-01-05T11:00:00Z"
}
```

#### GET `/api/v1/analytics/{playerId}?period={period}`
Get analytics for a player.

**Query Parameters:**
- `period`: `24h`, `7d`, `30d`, `90d`

**Response (200):**
```json
{
  "success": true,
  "playerId": "player-abc123",
  "period": "7d",
  "analytics": {
    "totalPlayTime": 14400,
    "sessionsCount": 12,
    "averageSessionLength": 1200,
    "levelsCompleted": 5,
    "achievementsUnlocked": 3
  }
}
```

#### POST `/api/v1/metrics/record`
Record a metric.

**Request Body:**
```json
{
  "playerId": "player-abc123",
  "metricName": "coins_earned",
  "value": 150,
  "metadata": {
    "source": "quest_completion"
  }
}
```

**Response (200):**
```json
{
  "success": true,
  "metricId": "metric-abc123",
  "recordedAt": "2026-01-05T11:30:00Z"
}
```

---

### 5. Admin Endpoints

#### GET `/api/v1/admin/customers`
Get list of all customers.

**Headers:**
```
Authorization: Bearer {admin_token}
```

**Response (200):**
```json
{
  "success": true,
  "customers": [
    {
      "id": "customer-1",
      "companyName": "Game Studio A",
      "plan": "Enterprise",
      "monthlySpend": 5000,
      "apiCalls": 1500000,
      "status": "active"
    }
  ],
  "total": 50
}
```

#### GET `/api/v1/admin/metrics`
Get overall platform metrics.

**Response (200):**
```json
{
  "success": true,
  "metrics": {
    "totalRevenue": 250000,
    "activeCustomers": 50,
    "totalApiCalls": 75000000,
    "averageResponseTime": 45,
    "uptime": 99.98
  }
}
```

---

### 6. Status Endpoints

#### GET `/api/v1/status`
Get API status.

**Response (200):**
```json
{
  "status": "operational",
  "version": "1.0.0",
  "uptime": 2592000,
  "services": {
    "database": "healthy",
    "cache": "healthy",
    "authentication": "healthy"
  },
  "timestamp": "2026-01-05T12:00:00Z"
}
```

#### GET `/api/v1/health`
Health check endpoint.

**Response (200):**
```json
{
  "status": "ok",
  "timestamp": "2026-01-05T12:00:00Z"
}
```

---

## Security Requirements

1. **CORS Configuration**
   - Allow requests from `https://aethex.net`
   - Configure proper headers: `Access-Control-Allow-Origin`, `Access-Control-Allow-Methods`, `Access-Control-Allow-Headers`

2. **Authentication**
   - Use JWT tokens for authentication
   - Store tokens securely with proper expiration
   - Implement refresh token rotation
   - Hash passwords with bcrypt (minimum 10 rounds)

3. **Rate Limiting**
   - Implement rate limiting per IP address
   - Different limits for authenticated vs. unauthenticated requests
   - Recommended: 100 requests per 15 minutes

4. **Input Validation**
   - Validate all input data
   - Sanitize user inputs to prevent SQL injection
   - Implement request size limits

5. **HTTPS**
   - Enforce HTTPS in production
   - Use secure headers (helmet.js for Express)

---

## Recommended Tech Stack

### Option 1: Node.js + Express
```
- express: Web framework
- jsonwebtoken: JWT authentication
- bcrypt: Password hashing
- cors: CORS middleware
- helmet: Security headers
- express-rate-limit: Rate limiting
- mongoose/pg: Database driver
```

### Option 2: Node.js + Fastify
```
- fastify: Fast web framework
- @fastify/jwt: JWT plugin
- @fastify/cors: CORS plugin
- @fastify/helmet: Security plugin
- @fastify/rate-limit: Rate limiting
```

### Option 3: Python + FastAPI
```
- fastapi: Modern Python web framework
- pydantic: Data validation
- python-jose: JWT handling
- passlib: Password hashing
- slowapi: Rate limiting
```

---

## Database Schema Recommendations

### Players Table
```sql
CREATE TABLE players (
  id VARCHAR(255) PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  display_name VARCHAR(255) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  level INT DEFAULT 1,
  experience INT DEFAULT 0,
  achievements INT DEFAULT 0,
  total_play_time INT DEFAULT 0,
  verification_required BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_seen TIMESTAMP,
  INDEX idx_email (email)
);
```

### Game States Table
```sql
CREATE TABLE game_states (
  id SERIAL PRIMARY KEY,
  player_id VARCHAR(255) NOT NULL,
  state JSONB NOT NULL,
  version INT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (player_id) REFERENCES players(id),
  INDEX idx_player_id (player_id)
);
```

### Sessions Table
```sql
CREATE TABLE sessions (
  id VARCHAR(255) PRIMARY KEY,
  player_id VARCHAR(255) NOT NULL,
  token VARCHAR(500) NOT NULL,
  refresh_token VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  expires_at TIMESTAMP NOT NULL,
  FOREIGN KEY (player_id) REFERENCES players(id),
  INDEX idx_player_id (player_id)
);
```

### Events Table
```sql
CREATE TABLE events (
  id VARCHAR(255) PRIMARY KEY,
  player_id VARCHAR(255) NOT NULL,
  event_name VARCHAR(255) NOT NULL,
  event_data JSONB,
  recorded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (player_id) REFERENCES players(id),
  INDEX idx_player_event (player_id, event_name),
  INDEX idx_recorded_at (recorded_at)
);
```

---

## Deployment Checklist

- [ ] Configure environment variables
- [ ] Set up production database
- [ ] Enable CORS for `https://aethex.net`
- [ ] Configure JWT secret and expiration
- [ ] Implement rate limiting
- [ ] Set up SSL certificate for `api.aethex.cloud`
- [ ] Configure logging and monitoring
- [ ] Set up error tracking (e.g., Sentry)
- [ ] Implement health check endpoints
- [ ] Configure backup strategy
- [ ] Set up CI/CD pipeline
- [ ] Load testing and performance optimization
- [ ] Security audit
- [ ] API documentation (Swagger/OpenAPI)

---

## Testing

Provide these test credentials for frontend integration testing:

**Test Account:**
- Email: `test@aethex.net`
- Password: `TestPassword123!`
- Player ID: `player-test-001`

**Test API Key:**
- Key: `test_key_abc123xyz789`
- Rate Limit: 1000 requests/hour

---

## Contact & Support

For questions about this API specification, contact the frontend team or refer to:
- Frontend Repository: https://github.com/AeThex-Corporation/aethex-infrastructur
- Frontend Configuration: See `src/lib/api.ts` for exact API client implementation
