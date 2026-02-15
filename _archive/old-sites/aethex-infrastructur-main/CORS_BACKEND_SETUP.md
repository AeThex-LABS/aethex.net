# CORS Configuration Required for Backend Services

## Problem
Your frontend at **aethex.net** is getting CORS errors when trying to reach:
- **api.aethex.cloud** - Game API
- **aethex.tech** - Authentication service

Error:
```
Access to fetch at 'https://aethex.tech/api/auth/login' from origin 'https://aethex.net' 
has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present
```

## Solution

Your backend services at **api.aethex.cloud** and **aethex.tech** need to add CORS headers.

---

## For api.aethex.cloud Backend

### Node.js/Express Configuration:

```javascript
const cors = require('cors');

const corsOptions = {
  origin: [
    'https://aethex.net',
    'https://www.aethex.net',
    'http://localhost:5173'  // for local dev
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  maxAge: 600 // 10 minutes
};

app.use(cors(corsOptions));
```

### Fastify Configuration:

```javascript
await fastify.register(require('@fastify/cors'), {
  origin: ['https://aethex.net', 'https://www.aethex.net'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
});
```

### Python/FastAPI Configuration:

```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://aethex.net",
        "https://www.aethex.net",
        "http://localhost:5173"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## For aethex.tech Auth Service

Same configuration as above. The auth endpoints need:

```
Access-Control-Allow-Origin: https://aethex.net
Access-Control-Allow-Credentials: true
Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization
```

---

## If Using Nginx/Apache Reverse Proxy

### Nginx:

```nginx
server {
    listen 443 ssl;
    server_name api.aethex.cloud;

    # CORS headers
    add_header 'Access-Control-Allow-Origin' 'https://aethex.net' always;
    add_header 'Access-Control-Allow-Credentials' 'true' always;
    add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS' always;
    add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization' always;

    # Handle preflight requests
    if ($request_method = 'OPTIONS') {
        add_header 'Access-Control-Allow-Origin' 'https://aethex.net';
        add_header 'Access-Control-Allow-Credentials' 'true';
        add_header 'Access-Control-Allow-Methods' 'GET, POST, PUT, DELETE, OPTIONS';
        add_header 'Access-Control-Allow-Headers' 'Content-Type, Authorization';
        add_header 'Access-Control-Max-Age' 600;
        add_header 'Content-Type' 'text/plain charset=UTF-8';
        add_header 'Content-Length' 0;
        return 204;
    }

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Apache:

```apache
<VirtualHost *:443>
    ServerName api.aethex.cloud

    # CORS headers
    Header always set Access-Control-Allow-Origin "https://aethex.net"
    Header always set Access-Control-Allow-Credentials "true"
    Header always set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
    Header always set Access-Control-Allow-Headers "Content-Type, Authorization"

    # Handle preflight
    RewriteEngine On
    RewriteCond %{REQUEST_METHOD} OPTIONS
    RewriteRule ^(.*)$ $1 [R=204,L]

    ProxyPass / http://localhost:3000/
    ProxyPassReverse / http://localhost:3000/
</VirtualHost>
```

---

## If Using Cloudflare

If your domains are behind Cloudflare:

1. Go to **SSL/TLS** → Set to **Full** (not Flexible)
2. Go to **Network** → Enable **WebSockets** (if needed)
3. Consider creating **Transform Rules** for CORS headers

---

## Quick Test

Test if CORS is working:

```bash
# Test preflight request
curl -X OPTIONS https://aethex.tech/api/auth/login \
  -H "Origin: https://aethex.net" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  -v

# Should return:
# Access-Control-Allow-Origin: https://aethex.net
# Access-Control-Allow-Credentials: true
# Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS
```

---

## Checklist

### On api.aethex.cloud:
- [ ] CORS middleware installed and configured
- [ ] Origin includes `https://aethex.net`
- [ ] Credentials enabled
- [ ] Preflight (OPTIONS) requests handled
- [ ] All API endpoints return CORS headers

### On aethex.tech:
- [ ] CORS middleware installed and configured
- [ ] Origin includes `https://aethex.net`
- [ ] Credentials enabled
- [ ] Auth endpoints return CORS headers
- [ ] `/api/auth/login` endpoint accessible
- [ ] `/api/auth/register` endpoint accessible

### Testing:
- [ ] Preflight OPTIONS request succeeds
- [ ] POST to login endpoint works from aethex.net
- [ ] No CORS errors in browser console
- [ ] Credentials/cookies work cross-origin

---

## Environment Variables on Railway

In your Railway dashboard, make sure these are set:

```bash
VITE_API_BASE_URL=https://api.aethex.cloud/v1
VITE_AUTH_DOMAIN=https://aethex.tech
VITE_MAIN_SITE_URL=https://aethex.net
```

---

## Once CORS is configured:

1. Restart your backend services
2. Clear browser cache
3. Test login from https://aethex.net
4. Should work! ✅

---

**The frontend configuration is correct. The backends just need to allow aethex.net in CORS!**
