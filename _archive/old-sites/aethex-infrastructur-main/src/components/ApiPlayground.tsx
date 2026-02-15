import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Play, Copy, Check, Lightning } from '@phosphor-icons/react'
import { motion } from 'framer-motion'

interface ApiEndpoint {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  path: string
  description: string
  sampleRequest?: string
  sampleResponse?: string
  headers?: Record<string, string>
  queryParams?: Array<{ name: string; type: string; required: boolean; description: string }>
  bodyParams?: Array<{ name: string; type: string; required: boolean; description: string }>
}

const endpoints: ApiEndpoint[] = [
  {
    method: 'POST',
    path: '/api/v1/sync/setState',
    description: 'Update player state and sync across all platforms',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    bodyParams: [
      { name: 'playerId', type: 'string', required: true, description: 'Unique player identifier' },
      { name: 'state', type: 'object', required: true, description: 'Player state data to sync' }
    ],
    sampleRequest: `{
  "playerId": "player-123",
  "state": {
    "position": { "x": 100, "y": 50, "z": 0 },
    "health": 100,
    "mana": 80,
    "inventory": ["sword", "shield", "potion"],
    "level": 15,
    "experience": 4250
  }
}`,
    sampleResponse: `{
  "success": true,
  "playerId": "player-123",
  "syncedAt": "2026-01-05T14:23:45.123Z",
  "version": 42,
  "syncedDevices": ["pc", "mobile"],
  "latency": 45
}`
  },
  {
    method: 'GET',
    path: '/api/v1/sync/getState',
    description: 'Retrieve current player state',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    queryParams: [
      { name: 'playerId', type: 'string', required: true, description: 'Player ID to retrieve state for' }
    ],
    sampleRequest: '',
    sampleResponse: `{
  "success": true,
  "playerId": "player-123",
  "state": {
    "position": { "x": 100, "y": 50, "z": 0 },
    "health": 100,
    "mana": 80,
    "inventory": ["sword", "shield", "potion"],
    "level": 15,
    "experience": 4250
  },
  "lastUpdated": "2026-01-05T14:23:45.123Z",
  "version": 42
}`
  },
  {
    method: 'POST',
    path: '/api/v1/auth/login',
    description: 'Authenticate player and receive access token',
    headers: {
      'Content-Type': 'application/json'
    },
    bodyParams: [
      { name: 'email', type: 'string', required: true, description: 'Player email address' },
      { name: 'password', type: 'string', required: true, description: 'Player password' }
    ],
    sampleRequest: `{
  "email": "player@example.com",
  "password": "secure_password_123"
}`,
    sampleResponse: `{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "expiresIn": 86400,
  "player": {
    "id": "player-123",
    "email": "player@example.com",
    "displayName": "DragonSlayer42",
    "createdAt": "2025-06-15T10:30:00Z"
  }
}`
  },
  {
    method: 'POST',
    path: '/api/v1/players/create',
    description: 'Create a new player profile',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    bodyParams: [
      { name: 'email', type: 'string', required: true, description: 'Player email address' },
      { name: 'displayName', type: 'string', required: true, description: 'Player display name' },
      { name: 'password', type: 'string', required: true, description: 'Player password' }
    ],
    sampleRequest: `{
  "email": "newplayer@example.com",
  "displayName": "EpicGamer99",
  "password": "secure_password_123"
}`,
    sampleResponse: `{
  "success": true,
  "player": {
    "id": "player-456",
    "email": "newplayer@example.com",
    "displayName": "EpicGamer99",
    "createdAt": "2026-01-05T14:23:45.123Z",
    "verificationRequired": true
  }
}`
  },
  {
    method: 'GET',
    path: '/api/v1/players/:id',
    description: 'Get player profile by ID',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    queryParams: [
      { name: 'id', type: 'string', required: true, description: 'Player ID' }
    ],
    sampleRequest: '',
    sampleResponse: `{
  "success": true,
  "player": {
    "id": "player-123",
    "email": "player@example.com",
    "displayName": "DragonSlayer42",
    "level": 15,
    "experience": 4250,
    "createdAt": "2025-06-15T10:30:00Z",
    "lastSeen": "2026-01-05T14:20:00Z",
    "achievements": 23,
    "totalPlayTime": 156.5
  }
}`
  },
  {
    method: 'POST',
    path: '/api/v1/events/track',
    description: 'Track custom game events for analytics',
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY',
      'Content-Type': 'application/json'
    },
    bodyParams: [
      { name: 'playerId', type: 'string', required: true, description: 'Player ID' },
      { name: 'eventName', type: 'string', required: true, description: 'Event name' },
      { name: 'eventData', type: 'object', required: false, description: 'Additional event metadata' }
    ],
    sampleRequest: `{
  "playerId": "player-123",
  "eventName": "level_completed",
  "eventData": {
    "level": 5,
    "score": 9500,
    "timeSeconds": 245,
    "deaths": 2,
    "collectibles": 15
  }
}`,
    sampleResponse: `{
  "success": true,
  "eventId": "evt_abc123xyz",
  "trackedAt": "2026-01-05T14:23:45.123Z"
}`
  }
]

const MethodBadge = ({ method }: { method: string }) => {
  const colors = {
    GET: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
    POST: 'bg-green-500/10 text-green-500 border-green-500/20',
    PUT: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
    DELETE: 'bg-red-500/10 text-red-500 border-red-500/20'
  }
  
  return (
    <Badge className={`font-mono text-xs ${colors[method as keyof typeof colors]}`}>
      {method}
    </Badge>
  )
}

export function ApiPlayground() {
  const [selectedEndpoint, setSelectedEndpoint] = useState<ApiEndpoint>(endpoints[0])
  const [requestBody, setRequestBody] = useState(endpoints[0].sampleRequest || '')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [copied, setCopied] = useState(false)
  const [language, setLanguage] = useState('javascript')

  const handleEndpointChange = (path: string) => {
    const endpoint = endpoints.find(e => e.path === path)
    if (endpoint) {
      setSelectedEndpoint(endpoint)
      setRequestBody(endpoint.sampleRequest || '')
      setResponse('')
    }
  }

  const handleSendRequest = async () => {
    setIsLoading(true)
    setResponse('')
    
    try {
      // Build the API URL
      // Production: https://api.aethex.cloud/v1
      // Local: http://localhost:3001/api/v1
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3001/api/v1'
      const url = `${apiBaseUrl}${selectedEndpoint.path.replace(':id', 'player-123')}`
      
      // Build query params for GET requests
      const queryParams = selectedEndpoint.method === 'GET' && selectedEndpoint.queryParams
        ? '?' + selectedEndpoint.queryParams.map(p => `${p.name}=player-123`).join('&')
        : ''
      
      // Make the actual API request
      const options: RequestInit = {
        method: selectedEndpoint.method,
        headers: selectedEndpoint.headers || {},
      }
      
      if (selectedEndpoint.method !== 'GET' && requestBody) {
        options.body = requestBody
      }
      
      const apiResponse = await fetch(url + queryParams, options)
      const data = await apiResponse.json()
      
      setResponse(JSON.stringify(data, null, 2))
    } catch (error) {
      // Fallback to sample response if API is not available
      console.warn('API not available, using sample response:', error)
      setResponse(selectedEndpoint.sampleResponse || '{}')
    }
    
    setIsLoading(false)
  }

  const handleCopyCode = () => {
    const codeExamples: Record<string, string> = {
      javascript: `// JavaScript/Node.js
const response = await fetch('https://api.aethex.dev${selectedEndpoint.path}', {
  method: '${selectedEndpoint.method}',
  headers: ${JSON.stringify(selectedEndpoint.headers, null, 2)},
  ${selectedEndpoint.method !== 'GET' ? `body: JSON.stringify(${requestBody || '{}'})` : ''}
});

const data = await response.json();
console.log(data);`,
      
      python: `# Python
import requests

url = 'https://api.aethex.dev${selectedEndpoint.path}'
headers = ${JSON.stringify(selectedEndpoint.headers, null, 2).replace(/"/g, "'")}
${selectedEndpoint.method !== 'GET' ? `data = ${requestBody || '{}'}` : ''}

response = requests.${selectedEndpoint.method.toLowerCase()}(url, headers=headers${selectedEndpoint.method !== 'GET' ? ', json=data' : ''})
print(response.json())`,
      
      csharp: `// C#
using System.Net.Http;
using System.Text.Json;

var client = new HttpClient();
client.DefaultRequestHeaders.Add("Authorization", "Bearer YOUR_API_KEY");

${selectedEndpoint.method !== 'GET' ? `var content = new StringContent(
    @"${requestBody || '{}'}",
    Encoding.UTF8,
    "application/json"
);

var response = await client.${selectedEndpoint.method === 'POST' ? 'PostAsync' : 'PutAsync'}(
    "https://api.aethex.dev${selectedEndpoint.path}",
    content
);` : `var response = await client.GetAsync("https://api.aethex.dev${selectedEndpoint.path}");`}

var result = await response.Content.ReadAsStringAsync();
Console.WriteLine(result);`
    }

    navigator.clipboard.writeText(codeExamples[language])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const getCodeExample = () => {
    const codeExamples: Record<string, string> = {
      javascript: `// JavaScript/Node.js
const response = await fetch('https://api.aethex.dev${selectedEndpoint.path}', {
  method: '${selectedEndpoint.method}',
  headers: ${JSON.stringify(selectedEndpoint.headers, null, 2)},
  ${selectedEndpoint.method !== 'GET' ? `body: JSON.stringify(${requestBody || '{}'})` : ''}
});

const data = await response.json();`,
      
      python: `# Python
import requests

url = 'https://api.aethex.dev${selectedEndpoint.path}'
headers = ${JSON.stringify(selectedEndpoint.headers, null, 2).replace(/"/g, "'")}
${selectedEndpoint.method !== 'GET' ? `data = ${requestBody || '{}'}` : ''}

response = requests.${selectedEndpoint.method.toLowerCase()}(url, headers=headers${selectedEndpoint.method !== 'GET' ? ', json=data' : ''})`,
      
      csharp: `// C#
using System.Net.Http;

var client = new HttpClient();
client.DefaultRequestHeaders.Add("Authorization", "Bearer YOUR_API_KEY");

${selectedEndpoint.method !== 'GET' ? `var content = new StringContent(
    @"${requestBody || '{}'}",
    Encoding.UTF8,
    "application/json"
);

var response = await client.${selectedEndpoint.method === 'POST' ? 'PostAsync' : 'PutAsync'}(
    "https://api.aethex.dev${selectedEndpoint.path}",
    content
);` : `var response = await client.GetAsync("https://api.aethex.dev${selectedEndpoint.path}");`}`
    }

    return codeExamples[language] || codeExamples.javascript
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">API Playground</h2>
          <p className="text-muted-foreground">
            Test API endpoints and see live responses
          </p>
        </div>
        <Lightning className="w-8 h-8 text-primary" />
      </div>

      <Card className="p-6">
        <div className="space-y-6">
          {/* Endpoint Selector */}
          <div className="space-y-2">
            <Label>Select Endpoint</Label>
            <Select value={selectedEndpoint.path} onValueChange={handleEndpointChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {endpoints.map((endpoint) => (
                  <SelectItem key={endpoint.path} value={endpoint.path}>
                    <div className="flex items-center gap-2">
                      <MethodBadge method={endpoint.method} />
                      <span className="font-mono text-sm">{endpoint.path}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">{selectedEndpoint.description}</p>
          </div>

          {/* Parameters Documentation */}
          {(selectedEndpoint.queryParams || selectedEndpoint.bodyParams) && (
            <div className="space-y-3">
              <Label>Parameters</Label>
              <div className="border border-border rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-muted">
                    <tr>
                      <th className="text-left p-3 font-semibold">Name</th>
                      <th className="text-left p-3 font-semibold">Type</th>
                      <th className="text-left p-3 font-semibold">Required</th>
                      <th className="text-left p-3 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...(selectedEndpoint.queryParams || []), ...(selectedEndpoint.bodyParams || [])].map((param) => (
                      <tr key={param.name} className="border-t border-border">
                        <td className="p-3 font-mono text-accent">{param.name}</td>
                        <td className="p-3 font-mono text-xs">{param.type}</td>
                        <td className="p-3">
                          {param.required ? (
                            <Badge variant="destructive" className="text-xs">Required</Badge>
                          ) : (
                            <Badge variant="secondary" className="text-xs">Optional</Badge>
                          )}
                        </td>
                        <td className="p-3 text-muted-foreground">{param.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Request/Response Section */}
          <Tabs defaultValue="request" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="request">Request</TabsTrigger>
              <TabsTrigger value="response">Response</TabsTrigger>
              <TabsTrigger value="code">Code</TabsTrigger>
            </TabsList>

            <TabsContent value="request" className="space-y-4">
              {/* Headers */}
              <div className="space-y-2">
                <Label>Headers</Label>
                <div className="bg-muted rounded-lg p-4 space-y-2">
                  {Object.entries(selectedEndpoint.headers || {}).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-2 text-sm">
                      <span className="font-mono text-accent font-semibold">{key}:</span>
                      <span className="font-mono text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Request Body */}
              {selectedEndpoint.method !== 'GET' && (
                <div className="space-y-2">
                  <Label>Request Body</Label>
                  <Textarea
                    value={requestBody}
                    onChange={(e) => setRequestBody(e.target.value)}
                    className="font-mono text-sm min-h-[200px]"
                    placeholder="Enter JSON request body..."
                  />
                </div>
              )}

              <Button
                onClick={handleSendRequest}
                disabled={isLoading}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    >
                      <Lightning className="w-4 h-4 mr-2" />
                    </motion.div>
                    Sending Request...
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 mr-2" />
                    Send Request
                  </>
                )}
              </Button>
            </TabsContent>

            <TabsContent value="response" className="space-y-4">
              {response ? (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Response</Label>
                    <Badge className="bg-green-500/10 text-green-500">200 OK</Badge>
                  </div>
                  <ScrollArea className="h-[400px]">
                    <pre className="p-4 bg-card rounded-lg border border-border">
                      <code className="text-sm font-mono text-accent">
                        {JSON.stringify(JSON.parse(response), null, 2)}
                      </code>
                    </pre>
                  </ScrollArea>
                </div>
              ) : (
                <div className="h-[400px] flex items-center justify-center border border-dashed border-border rounded-lg">
                  <div className="text-center space-y-2">
                    <Lightning className="w-12 h-12 mx-auto text-muted-foreground" />
                    <p className="text-muted-foreground">
                      Click "Send Request" to see the response
                    </p>
                  </div>
                </div>
              )}
            </TabsContent>

            <TabsContent value="code" className="space-y-4">
              <div className="flex items-center justify-between">
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="javascript">JavaScript</SelectItem>
                    <SelectItem value="python">Python</SelectItem>
                    <SelectItem value="csharp">C#</SelectItem>
                  </SelectContent>
                </Select>
                <Button variant="outline" size="sm" onClick={handleCopyCode}>
                  {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
                  {copied ? 'Copied!' : 'Copy Code'}
                </Button>
              </div>
              <ScrollArea className="h-[400px]">
                <pre className="p-4 bg-card rounded-lg border border-border">
                  <code className="text-sm font-mono text-accent">
                    {getCodeExample()}
                  </code>
                </pre>
              </ScrollArea>
            </TabsContent>
          </Tabs>
        </div>
      </Card>
    </div>
  )
}
