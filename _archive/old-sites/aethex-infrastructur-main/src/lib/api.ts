// API Configuration
export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api/v1',
  authDomain: import.meta.env.VITE_AUTH_DOMAIN || 'https://aethex.tech',
  timeout: 10000,
  retryAttempts: 3
}

// Production endpoints
export const PRODUCTION_ENDPOINTS = {
  mainSite: 'https://aethex.net',
  api: 'https://api.aethex.cloud/v1',
  auth: 'https://aethex.tech',
  status: 'https://status.aethex.cloud'
}

// API Client
class ApiClient {
  private baseUrl: string
  private timeout: number
  private retryAttempts: number

  constructor(config = API_CONFIG) {
    this.baseUrl = config.baseUrl
    this.timeout = config.timeout
    this.retryAttempts = config.retryAttempts
  }

  async request(endpoint: string, options: RequestInit = {}) {
    const url = `${this.baseUrl}${endpoint}`
    const token = localStorage.getItem('aethex_token')

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {})
    }

    if (token) {
      headers['Authorization'] = `Bearer ${token}`
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
        signal: AbortSignal.timeout(this.timeout)
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'API request failed')
      }

      return data
    } catch (error) {
      console.error('API Error:', error)
      throw error
    }
  }

  // Auth endpoints
  async register(email, displayName, password) {
    return this.request('/auth/register', {
      method: 'POST',
      body: JSON.stringify({ email, displayName, password })
    })
  }

  async login(email, password) {
    const data = await this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password })
    })
    
    if (data.token) {
      localStorage.setItem('aethex_token', data.token)
    }
    
    return data
  }

  async refreshToken(refreshToken) {
    return this.request('/auth/refresh', {
      method: 'POST',
      body: JSON.stringify({ refreshToken })
    })
  }

  // State sync endpoints
  async setState(playerId, state) {
    return this.request('/sync/setState', {
      method: 'POST',
      body: JSON.stringify({ playerId, state })
    })
  }

  async getState(playerId) {
    return this.request(`/sync/getState?playerId=${playerId}`)
  }

  // Player endpoints
  async createPlayer(email, displayName, metadata) {
    return this.request('/players/create', {
      method: 'POST',
      body: JSON.stringify({ email, displayName, metadata })
    })
  }

  async getPlayer(playerId) {
    return this.request(`/players/${playerId}`)
  }

  async updatePlayer(playerId, updates) {
    return this.request(`/players/${playerId}`, {
      method: 'PUT',
      body: JSON.stringify(updates)
    })
  }

  // Analytics endpoints
  async trackEvent(playerId, eventName, eventData) {
    return this.request('/events/track', {
      method: 'POST',
      body: JSON.stringify({ playerId, eventName, eventData })
    })
  }

  async getAnalytics(playerId, period = '7d') {
    return this.request(`/analytics/${playerId}?period=${period}`)
  }

  async recordMetric(playerId, metricName, value, metadata) {
    return this.request('/metrics/record', {
      method: 'POST',
      body: JSON.stringify({ playerId, metricName, value, metadata })
    })
  }

  // Admin endpoints
  async getCustomers() {
    return this.request('/admin/customers')
  }

  async getAdminMetrics() {
    return this.request('/admin/metrics')
  }

  // Status endpoints
  async getStatus() {
    return this.request('/status')
  }
}

export const apiClient = new ApiClient()
