# AeThex Mock API Server

A mock backend API server for the AeThex infrastructure platform. Provides simulated endpoints for development and testing.

## Features

- ✅ Full REST API implementation
- ✅ In-memory data storage
- ✅ Simulated latency for realistic testing
- ✅ CORS enabled for frontend integration
- ✅ Request logging
- ✅ Error handling

## Installation

```bash
cd server
npm install
```

## Usage

### Start the server

```bash
npm start
```

### Development mode (with auto-reload)

```bash
npm run dev
```

The server will run on `http://localhost:3001`

## API Endpoints

### Authentication

- `POST /api/v1/auth/register` - Register a new player
- `POST /api/v1/auth/login` - Login and receive token
- `POST /api/v1/auth/refresh` - Refresh access token

### State Synchronization

- `POST /api/v1/sync/setState` - Update player state
- `GET /api/v1/sync/getState?playerId={id}` - Get player state

### Player Management

- `POST /api/v1/players/create` - Create new player
- `GET /api/v1/players/:id` - Get player profile
- `PUT /api/v1/players/:id` - Update player profile

### Analytics & Events

- `POST /api/v1/events/track` - Track custom event
- `GET /api/v1/analytics/:playerId` - Get player analytics
- `POST /api/v1/metrics/record` - Record custom metric

### Admin

- `GET /api/v1/admin/customers` - Get all customers
- `GET /api/v1/admin/metrics` - Get platform metrics

### Status

- `GET /api/v1/status` - Get system status
- `GET /health` - Health check

## Example Requests

### Register a player

```bash
curl -X POST http://localhost:3001/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "player@example.com",
    "displayName": "DragonSlayer",
    "password": "secure123"
  }'
```

### Login

```bash
curl -X POST http://localhost:3001/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "player@example.com",
    "password": "secure123"
  }'
```

### Sync player state

```bash
curl -X POST http://localhost:3001/api/v1/sync/setState \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "playerId": "player-abc123",
    "state": {
      "position": {"x": 100, "y": 50},
      "health": 100,
      "inventory": ["sword", "shield"]
    }
  }'
```

## Frontend Integration

Update your frontend to point to the API server:

```javascript
// In your frontend code
const API_BASE_URL = 'http://localhost:3001/api/v1';

// Example: Login request
const response = await fetch(`${API_BASE_URL}/auth/login`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    email: 'player@example.com',
    password: 'secure123'
  })
});

const data = await response.json();
```

## Data Storage

This is a **mock server** using in-memory storage. Data is lost when the server restarts. For production, you would replace the `Map` objects with a real database like PostgreSQL, MongoDB, or Redis.

## Production Considerations

To convert this to a production-ready API:

1. Replace in-memory storage with a real database
2. Add proper authentication middleware (JWT verification)
3. Add rate limiting
4. Add input validation and sanitization
5. Add database migrations
6. Add proper error logging
7. Add API documentation (Swagger/OpenAPI)
8. Add tests
9. Add environment configuration
10. Deploy to a cloud provider (AWS, Google Cloud, Azure)

## License

MIT
