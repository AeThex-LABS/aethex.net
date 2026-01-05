import React from 'react';

const Status: React.FC = () => {
  const services = [
    { name: 'REST API', status: 'operational', uptime: '99.99%', latency: '45ms', region: 'Global' },
    { name: 'WebSocket Gateway', status: 'operational', uptime: '99.98%', latency: '12ms', region: 'Global' },
    { name: 'Player Identity Service', status: 'operational', uptime: '99.99%', latency: '38ms', region: 'US-East' },
    { name: 'State Sync Engine', status: 'operational', uptime: '99.97%', latency: '52ms', region: 'Global' },
    { name: 'Analytics Pipeline', status: 'operational', uptime: '99.95%', latency: '—', region: 'US-West' },
    { name: 'Asset CDN', status: 'operational', uptime: '100%', latency: '8ms', region: 'Global' },
    { name: 'Database Cluster', status: 'operational', uptime: '99.99%', latency: '3ms', region: 'Multi-Region' },
    { name: 'Authentication Service', status: 'operational', uptime: '99.98%', latency: '22ms', region: 'Global' },
  ];

  const incidents = [
    { date: '2025-12-15', title: 'API Gateway Degraded Performance', duration: '23 minutes', resolved: true },
    { date: '2025-11-08', title: 'WebSocket Connection Issues', duration: '15 minutes', resolved: true },
    { date: '2025-10-22', title: 'Scheduled Maintenance', duration: '2 hours', resolved: true },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <section className="bg-white border-b border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">System Status</h1>
          <p className="text-xl text-slate-600">
            Real-time monitoring of all AeThex infrastructure services
          </p>
        </div>
      </section>

      {/* Overall Status */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-4 animate-pulse"></div>
                <div>
                  <h2 className="text-xl font-bold text-green-900">All Systems Operational</h2>
                  <p className="text-sm text-green-700">Last updated: 2 minutes ago</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-green-900">99.99%</div>
                <div className="text-xs text-green-700">30-day uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Service Status</h3>
            </div>
            <div className="divide-y divide-slate-200">
              {services.map((service) => (
                <div key={service.name} className="p-6 hover:bg-slate-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-4"></div>
                      <div>
                        <h4 className="font-semibold text-slate-900">{service.name}</h4>
                        <p className="text-xs text-slate-500">{service.region}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <div className="text-sm font-mono text-slate-900">{service.latency}</div>
                        <div className="text-xs text-slate-500">p95 latency</div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-mono text-slate-900">{service.uptime}</div>
                        <div className="text-xs text-slate-500">30d uptime</div>
                      </div>
                      <div className="text-right min-w-[100px]">
                        <span className="text-sm font-medium text-green-700">Operational</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-3xl font-bold text-slate-900 mb-1 font-mono">99.99%</div>
              <div className="text-sm text-slate-600">Average Uptime</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-3xl font-bold text-slate-900 mb-1 font-mono">&lt;50ms</div>
              <div className="text-sm text-slate-600">API p95 Latency</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-3xl font-bold text-slate-900 mb-1 font-mono">0</div>
              <div className="text-sm text-slate-600">Incidents This Month</div>
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-6">
              <div className="text-3xl font-bold text-slate-900 mb-1 font-mono">5</div>
              <div className="text-sm text-slate-600">Global Regions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <h3 className="text-xl font-bold text-slate-900">Recent Incidents</h3>
            </div>
            <div className="divide-y divide-slate-200">
              {incidents.map((incident) => (
                <div key={incident.date} className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{incident.title}</h4>
                      <p className="text-sm text-slate-600">Duration: {incident.duration}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-mono text-slate-900">{incident.date}</div>
                      <span className="inline-block mt-1 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                        Resolved
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Status;
