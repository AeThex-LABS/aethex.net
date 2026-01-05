import React from 'react';

const ApiDocs: React.FC = () => {
  return (
    <section className="bg-white py-20" id="docs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Integration Examples
          </h2>
          <p className="text-xl text-gray-600">
            Start building in minutes with our platform SDKs
          </p>
        </div>

        {/* Roblox Example */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900">Roblox</h3>
            <span className="ml-3 text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">Lua</span>
          </div>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>
              <code>
                <span className="text-gray-500">-- Get player inventory across platforms</span>{'\n'}
                <span className="text-purple-400">local</span> HttpService = game:<span className="text-yellow-400">GetService</span>(<span className="text-green-400">"HttpService"</span>){'\n'}
                {'\n'}
                <span className="text-purple-400">local</span> <span className="text-blue-400">API_KEY</span> = <span className="text-green-400">"your_api_key"</span>{'\n'}
                <span className="text-purple-400">local</span> <span className="text-blue-400">BASE_URL</span> = <span className="text-green-400">"https://api.aethex.net/v1"</span>{'\n'}
                {'\n'}
                <span className="text-purple-400">function</span> <span className="text-yellow-400">GetPlayerInventory</span>(playerId){'\n'}
                {'    '}<span className="text-purple-400">local</span> url = <span className="text-blue-400">BASE_URL</span> .. <span className="text-green-400">"/players/"</span> .. playerId .. <span className="text-green-400">"/inventory"</span>{'\n'}
                {'    '}<span className="text-purple-400">local</span> success, response = <span className="text-yellow-400">pcall</span>(<span className="text-purple-400">function</span>(){'\n'}
                {'        '}<span className="text-purple-400">return</span> HttpService:<span className="text-yellow-400">RequestAsync</span>{'({\n'}
                {'            '}Url = url,{'\n'}
                {'            '}Method = <span className="text-green-400">"GET"</span>,{'\n'}
                {'            '}Headers = {'{\n'}
                {'                '}[<span className="text-green-400">"Authorization"</span>] = <span className="text-green-400">"Bearer "</span> .. <span className="text-blue-400">API_KEY</span>{'\n'}
                {'            }{'}}{'\n'}
                {'        }){'}){'\n'}
                {'    '}end){'\n'}
                {'    '}<span className="text-purple-400">return</span> success <span className="text-purple-400">and</span> HttpService:<span className="text-yellow-400">JSONDecode</span>(response.Body){'\n'}
                <span className="text-purple-400">end</span>
              </code>
            </pre>
          </div>
        </div>

        {/* Unity Example */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900">Unity</h3>
            <span className="ml-3 text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">C#</span>
          </div>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>
              <code>
                <span className="text-gray-500">// Sync player state across platforms</span>{'\n'}
                <span className="text-purple-400">using</span> AeThex.SDK;{'\n'}
                <span className="text-purple-400">using</span> UnityEngine;{'\n'}
                {'\n'}
                <span className="text-purple-400">public class</span> <span className="text-blue-400">PlayerSync</span> : MonoBehaviour{'\n'}
                {'{'}{'\n'}
                {'    '}<span className="text-purple-400">private</span> AeThexClient client;{'\n'}
                {'\n'}
                {'    '}<span className="text-purple-400">async void</span> <span className="text-yellow-400">Start</span>(){'\n'}
                {'    {'}{'\n'}
                {'        '}client = <span className="text-purple-400">new</span> <span className="text-yellow-400">AeThexClient</span>(<span className="text-green-400">"your_api_key"</span>);{'\n'}
                {'        '}{'\n'}
                {'        '}<span className="text-gray-500">// Sync player progress</span>{'\n'}
                {'        '}<span className="text-purple-400">var</span> playerData = <span className="text-purple-400">await</span> client.Players.<span className="text-yellow-400">UpdateState</span>({'\n'}
                {'            '}playerId: <span className="text-green-400">"player_123"</span>,{'\n'}
                {'            '}data: <span className="text-purple-400">new</span> {'{\n'}
                {'                '}level = <span className="text-orange-400">42</span>,{'\n'}
                {'                '}experience = <span className="text-orange-400">15600</span>,{'\n'}
                {'                '}coins = <span className="text-orange-400">2500</span>{'\n'}
                {'            }{'}}{'\n'}
                {'        '});{'\n'}
                {'\n'}
                {'        '}Debug.<span className="text-yellow-400">Log</span>(<span className="text-green-400">$"State synced: </span>{'{'}<span className="text-green-400">playerData.UpdatedAt</span>{'}'}<span className="text-green-400">"</span>);{'\n'}
                {'    }{'}}{'\n'}
                {'}'}
              </code>
            </pre>
          </div>
        </div>

        {/* Web Example */}
        <div className="mb-16">
          <div className="flex items-center mb-4">
            <h3 className="text-2xl font-bold text-gray-900">Web</h3>
            <span className="ml-3 text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">TypeScript</span>
          </div>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg font-mono text-sm overflow-x-auto">
            <pre>
              <code>
                <span className="text-gray-500">// Real-time player events via WebSocket</span>{'\n'}
                <span className="text-purple-400">import</span> {'{ '}AeThexClient {'}'} <span className="text-purple-400">from</span> <span className="text-green-400">'@aethex/sdk'</span>;{'\n'}
                {'\n'}
                <span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-blue-400">AeThexClient</span>({'({\n'}
                {'  '}apiKey: <span className="text-green-400">'your_api_key'</span>,{'\n'}
                {'  '}region: <span className="text-green-400">'us-east-1'</span>{'\n'}
                {'});'}{'\n'}
                {'\n'}
                <span className="text-gray-500">// Subscribe to player inventory updates</span>{'\n'}
                client.<span className="text-yellow-400">subscribe</span>(<span className="text-green-400">'player.inventory.updated'</span>, (event) {'=> {\n'}
                {'  '}console.<span className="text-yellow-400">log</span>(<span className="text-green-400">'Inventory updated:'</span>, event.data);{'\n'}
                {'  '}<span className="text-gray-500">// {`{ playerId: "...", items: [...], source: "roblox" }`}</span>{'\n'}
                {'});'}{'\n'}
                {'\n'}
                <span className="text-gray-500">// Fetch cross-platform leaderboard</span>{'\n'}
                <span className="text-purple-400">const</span> leaderboard = <span className="text-purple-400">await</span> client.leaderboards.<span className="text-yellow-400">get</span>({'({\n'}
                {'  '}gameId: <span className="text-green-400">'your_game_id'</span>,{'\n'}
                {'  '}metric: <span className="text-green-400">'total_wins'</span>,{'\n'}
                {'  '}limit: <span className="text-orange-400">100</span>{'\n'}
                {'});'}
              </code>
            </pre>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">API Reference</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Complete REST API documentation with request/response examples.
            </p>
            <a href="#" className="text-gray-900 font-medium hover:underline text-sm">
              Explore API →
            </a>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">SDK Documentation</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Platform-specific guides for Roblox, Unity, Unreal, and Web.
            </p>
            <a href="#" className="text-gray-900 font-medium hover:underline text-sm">
              View SDKs →
            </a>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Architecture Guide</h4>
            <p className="text-gray-600 mb-4 text-sm">
              Design patterns and best practices for scalable game backends.
            </p>
            <a href="#" className="text-gray-900 font-medium hover:underline text-sm">
              Read Guide →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiDocs;
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Webhooks</h4>
            <p className="text-gray-600 mb-4">
              Listen to events and build real-time integrations.
            </p>
            <a href="#" className="text-gray-900 font-medium hover:underline">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ApiDocs;
