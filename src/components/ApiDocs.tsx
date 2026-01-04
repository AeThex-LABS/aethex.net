import React from 'react';

const ApiDocs: React.FC = () => {
  return (
    <section className="bg-white py-20" id="docs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Developer Documentation
          </h2>
          <p className="text-xl text-gray-600">
            Get started in minutes with our comprehensive API
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Start</h3>
            <p className="text-gray-600 mb-6">
              Install the SDK and make your first API call in seconds.
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Installation</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <span className="text-gray-500">$ </span>npm install @aethex/sdk
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2">Initialize</h4>
                <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <span className="text-purple-400">import</span> AeThex <span className="text-purple-400">from</span> <span className="text-green-400">'@aethex/sdk'</span>;{'\n\n'}
                  <span className="text-purple-400">const</span> client = <span className="text-purple-400">new</span> <span className="text-blue-400">AeThex</span>({'{'}{'{\n'}
                  {'  '}apiKey: <span className="text-green-400">'your-api-key'</span>{'{\n'}
                  {'}'});
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Example Request</h3>
            <p className="text-gray-600 mb-6">
              Make authenticated API requests with automatic retry logic.
            </p>
            
            <div className="bg-gray-900 text-gray-100 p-4 rounded-lg font-mono text-sm overflow-x-auto">
              <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> client.<span className="text-blue-400">users</span>.<span className="text-yellow-400">create</span>({'{'}{'{\n'}
              {'  '}email: <span className="text-green-400">'user@example.com'</span>,{'{\n'}
              {'  '}name: <span className="text-green-400">'John Doe'</span>{'{\n'}
              {'}'});{'\n\n'}
              console.<span className="text-yellow-400">log</span>(response.<span className="text-blue-400">data</span>);{'\n'}
              <span className="text-gray-500">// {'{'}{'{\n'}
              //   id: 'usr_123abc',{'{\n'}
              //   email: 'user@example.com',{'{\n'}
              //   name: 'John Doe',{'{\n'}
              //   created_at: '2024-01-01T00:00:00Z'{'{\n'}
              // {'}'}</span>
            </div>
            
            <div className="mt-6">
              <a
                href="#"
                className="text-gray-900 font-medium hover:underline inline-flex items-center"
              >
                View full documentation →
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">REST API</h4>
            <p className="text-gray-600 mb-4">
              Complete REST API reference with examples in multiple languages.
            </p>
            <a href="#" className="text-gray-900 font-medium hover:underline">
              Explore →
            </a>
          </div>
          
          <div className="border border-gray-200 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-2">SDKs & Libraries</h4>
            <p className="text-gray-600 mb-4">
              Official SDKs for JavaScript, Python, Ruby, Go, and more.
            </p>
            <a href="#" className="text-gray-900 font-medium hover:underline">
              Browse SDKs →
            </a>
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
