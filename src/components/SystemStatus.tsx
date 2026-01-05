import React from 'react';

interface StatusItem {
  service: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  latency?: string;
}

const statusItems: StatusItem[] = [
  { service: 'REST API', status: 'operational', uptime: '99.99%', latency: '45ms' },
  { service: 'WebSocket Gateway', status: 'operational', uptime: '99.98%', latency: '12ms' },
  { service: 'Player Identity Service', status: 'operational', uptime: '99.99%', latency: '38ms' },
  { service: 'State Sync Engine', status: 'operational', uptime: '99.97%', latency: '52ms' },
  { service: 'Analytics Pipeline', status: 'operational', uptime: '99.95%', latency: '—' },
];

const getStatusColor = (status: StatusItem['status']) => {
  switch (status) {
    case 'operational':
      return 'bg-green-500';
    case 'degraded':
      return 'bg-yellow-500';
    case 'outage':
      return 'bg-red-500';
  }
};

const getStatusText = (status: StatusItem['status']) => {
  switch (status) {
    case 'operational':
      return 'Operational';
    case 'degraded':
      return 'Degraded';
    case 'outage':
      return 'Outage';
  }
};

const SystemStatus: React.FC = () => {
  return (
    <section className="bg-white py-20 border-t border-gray-200" id="status">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">System Status</h2>
          <p className="text-xl text-gray-600">
            Real-time infrastructure monitoring
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-green-50 border-b border-green-200 px-6 py-4">
            <div className="flex items-center">
              <div className="w-2.5 h-2.5 bg-green-500 rounded-full mr-3"></div>
              <span className="text-green-900 font-medium text-sm">All Systems Operational</span>
              <span className="ml-auto text-xs text-green-700 font-mono">Last updated: 2 minutes ago</span>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {statusItems.map((item) => (
              <div key={item.service} className="px-6 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-2 h-2 ${getStatusColor(item.status)} rounded-full mr-4`}></div>
                    <span className="text-gray-900 font-medium text-sm">{item.service}</span>
                  </div>
                  <div className="flex items-center gap-8">
                    {item.latency && (
                      <span className="text-xs text-gray-600 font-mono">
                        {item.latency} p95
                      </span>
                    )}
                    <span className="text-xs text-gray-600">
                      {item.uptime} uptime
                    </span>
                    <span className="text-xs text-gray-900 font-medium min-w-[100px] text-right">
                      {getStatusText(item.status)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="text-gray-900 font-medium hover:underline inline-flex items-center text-sm"
          >
            View incident history →
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-gray-900 mb-1 font-mono">99.99%</div>
            <div className="text-xs text-gray-600">30-day uptime</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-gray-900 mb-1 font-mono">&lt;50ms</div>
            <div className="text-xs text-gray-600">API p95 latency</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-gray-900 mb-1 font-mono">5</div>
            <div className="text-xs text-gray-600">Global regions</div>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <div className="text-3xl font-bold text-gray-900 mb-1 font-mono">0</div>
            <div className="text-xs text-gray-600">Incidents this month</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemStatus;
  );
};

export default SystemStatus;
