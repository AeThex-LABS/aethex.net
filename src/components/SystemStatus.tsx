import React from 'react';

interface StatusItem {
  service: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
}

const statusItems: StatusItem[] = [
  { service: 'API Gateway', status: 'operational', uptime: '99.99%' },
  { service: 'Authentication', status: 'operational', uptime: '99.98%' },
  { service: 'Database', status: 'operational', uptime: '99.99%' },
  { service: 'CDN', status: 'operational', uptime: '100%' },
  { service: 'Webhooks', status: 'operational', uptime: '99.95%' },
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
      return 'Degraded Performance';
    case 'outage':
      return 'Major Outage';
  }
};

const SystemStatus: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20" id="status">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">System Status</h2>
          <p className="text-xl text-gray-600">
            Real-time status of all AeThex services
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="bg-green-50 border-b border-green-200 px-6 py-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
              <span className="text-green-900 font-semibold">All Systems Operational</span>
            </div>
          </div>

          <div className="divide-y divide-gray-200">
            {statusItems.map((item) => (
              <div key={item.service} className="px-6 py-4 flex items-center justify-between">
                <div className="flex items-center">
                  <div className={`w-2.5 h-2.5 ${getStatusColor(item.status)} rounded-full mr-4`}></div>
                  <span className="text-gray-900 font-medium">{item.service}</span>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-sm text-gray-600">Uptime: {item.uptime}</span>
                  <span className="text-sm text-gray-900 font-medium min-w-[140px]">
                    {getStatusText(item.status)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#"
            className="text-gray-900 font-medium hover:underline inline-flex items-center"
          >
            View status history →
          </a>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">99.99%</div>
            <div className="text-sm text-gray-600">Average Uptime</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">&lt;50ms</div>
            <div className="text-sm text-gray-600">API Response Time</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">24/7</div>
            <div className="text-sm text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemStatus;
