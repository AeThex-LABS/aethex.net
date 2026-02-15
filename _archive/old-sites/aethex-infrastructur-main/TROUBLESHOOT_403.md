# 403 Forbidden Error - Troubleshooting Guide

## What's Happening

You're getting:
```
GET https://aethex.net/ 403 (Forbidden)
GET https://aethex.net/favicon.ico 403 (Forbidden)
```

This means the domain is resolving, but access is being denied.

## Likely Causes & Solutions

### 1. Domain Not Connected to Railway Yet

**Check:**
- Go to your Railway project dashboard
- Go to **Settings** → **Domains**
- Is `aethex.net` listed there?

**Fix:**
```
1. In Railway dashboard:
   - Click Settings → Domains
   - Click "Add Domain"
   - Enter: aethex.net
   - Railway will provide a domain/CNAME target

2. Copy the Railway-provided domain
   - Something like: aethex-infrastructur-production.up.railway.app
```

### 2. DNS Records Not Configured Correctly

**Check your DNS provider** (where you registered aethex.net):

**Correct Configuration:**
```
Type: CNAME
Name: @  (or leave blank for root)
Value: aethex-infrastructur-production.up.railway.app

Type: CNAME  
Name: www
Value: aethex-infrastructur-production.up.railway.app
```

**Or if your DNS provider doesn't support CNAME for root:**
```
Type: ALIAS or ANAME
Name: @
Value: aethex-infrastructur-production.up.railway.app

Type: CNAME
Name: www
Value: aethex-infrastructur-production.up.railway.app
```

### 3. SSL Certificate Not Yet Issued

Railway automatically provisions SSL, but it takes 5-10 minutes.

**Check:**
- Try accessing your Railway-provided URL directly: `https://aethex-infrastructur-production.up.railway.app`
- If that works, the issue is with your custom domain

### 4. Railway Deployment Not Public

**Check:**
- Go to Railway dashboard → Settings
- Make sure the service is **not** private
- Check that deployment is **not** paused

## Step-by-Step Fix

### Option A: Use Railway URL First

1. Find your Railway-provided URL:
   - In Railway dashboard: Settings → Domains
   - Look for: `*.up.railway.app`

2. Test it:
   ```bash
   curl -I https://your-app.up.railway.app
   ```

3. If that works, your app is deployed correctly. The issue is just domain configuration.

### Option B: Fix Domain Connection

1. **In Railway Dashboard:**
   - Settings → Domains → Add Domain
   - Enter: `aethex.net`
   - Copy the target domain Railway provides

2. **In Your DNS Provider:**
   - Delete any existing A records for aethex.net
   - Add CNAME record:
     ```
     Type: CNAME
     Name: @
     Target: <Railway-provided-domain>
     TTL: Auto or 3600
     ```

3. **Wait for DNS:**
   - Can take 5 minutes to 48 hours
   - Usually propagates in 5-30 minutes

4. **Check DNS Propagation:**
   ```bash
   # Check if DNS is pointing to Railway
   dig aethex.net
   nslookup aethex.net
   
   # Should show Railway's IP or CNAME
   ```

### Option C: Cloudflare Configuration (if using)

If you're using Cloudflare:

1. Make sure **Proxy status is OFF** (gray cloud, not orange)
2. Or configure SSL/TLS mode to **Full** (not Flexible)
3. Wait for SSL certificate to provision

## Quick Test Commands

```bash
# Test Railway direct URL (replace with yours)
curl -I https://aethex-infrastructur-production.up.railway.app

# Test custom domain
curl -I https://aethex.net

# Check DNS
dig aethex.net

# Check with specific DNS server
nslookup aethex.net 8.8.8.8
```

## What Should Work

Once configured correctly, you should see:

```bash
$ curl -I https://aethex.net

HTTP/2 200 OK
content-type: text/html
# ... other headers
```

## Temporary Workaround

While fixing the domain:

1. **Use the Railway URL directly:**
   - `https://your-app.up.railway.app`

2. **Or update your .env.railway to use Railway URL:**
   ```bash
   VITE_MAIN_SITE_URL=https://your-app.up.railway.app
   ```

3. **Redeploy** after changing env vars

## Common Mistakes

❌ **Pointing to localhost** - Won't work in production
❌ **Using HTTP instead of HTTPS** - Railway requires HTTPS
❌ **Wrong CNAME target** - Must point to Railway-provided domain
❌ **Firewall blocking** - Check Railway isn't restricted
❌ **Wrong DNS records** - Old A records conflicting

## Next Steps

1. ✅ Check if Railway URL works directly
2. ✅ Verify domain is added in Railway dashboard  
3. ✅ Check DNS records point to Railway
4. ✅ Wait for DNS propagation
5. ✅ Test again

## Still Not Working?

Check these:

```bash
# Railway status
railway status  # if CLI installed

# Check deployment logs
# In Railway dashboard: Deployments → View Logs

# Verify build succeeded
# Should show: "✓ built in X seconds"

# Check environment variables
# Railway dashboard: Variables tab
# Verify all VITE_* variables are set
```

## Contact Points

- Railway Status: https://railway.statuspage.io
- Railway Discord: https://discord.gg/railway
- DNS Propagation Checker: https://dnschecker.org

---

**Most likely fix:** Add domain in Railway dashboard, then configure DNS records. Wait 10-30 minutes for propagation.
