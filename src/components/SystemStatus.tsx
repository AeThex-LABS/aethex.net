import React, { useState, useEffect } from 'react';

interface StatusItem {
  service: string;
  status: 'operational' | 'degraded' | 'outage';
  uptime: string;
  latency?: string;
  icon: string;
}

const statusItems: StatusItem[] = [
  { service: 'REST API', status: 'operational', uptime: '99.99%', latency: '45ms', icon: '🔌' },
  { service: 'WebSocket Gateway', status: 'operational', uptime: '99.98%', latency: '12ms', icon: '⚡' },
  { service: 'Player Identity Service', status: 'operational', uptime: '99.99%', latency: '38ms', icon: '👤' },
  { service: 'State Sync Engine', status: 'operational', uptime: '99.97%', latency: '52ms', icon: '🔄' },
  { service: 'Analytics Pipeline', status: 'operational', uptime: '99.95%', latency: '—', icon: '📊' },
];

const getStatusColor = (status: StatusItem['status']) => {
  switch (status) {
    case 'operational':
      return '#22c55e';
    case 'degraded':
      return '#eab308';
    case 'outage':
      return '#ef4444';
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
  const [isLoading, setIsLoading] = useState(true);
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    const pulseInterval = setInterval(() => {
      setPulse(prev => !prev);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(pulseInterval);
    };
  }, []);

  return (
    <section style={{
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      padding: '6rem 1.5rem',
      position: 'relative',
      overflow: 'hidden'
    }} id="status">
      {/* Animated Grid Background */}
      <div className="grid-background-animated" style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.15
      }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1rem',
            borderRadius: '9999px',
            backgroundColor: 'var(--bg-secondary)',
            border: '1px solid var(--border-primary)',
            fontSize: '0.875rem',
            fontWeight: '600',
            marginBottom: '1rem',
            color: 'var(--color-gameforge-green)'
          }}>
            📡 Live Status
          </div>
          
          <h2 style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
            background: 'linear-gradient(to right, var(--text-primary), var(--color-gameforge-green))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            System Health Monitor
          </h2>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Real-time infrastructure monitoring across all regions
          </p>
        </div>

        {/* Overall Status Banner */}
        <div className="card" style={{
          padding: '1.5rem 2rem',
          marginBottom: '2rem',
          backgroundColor: 'rgba(34, 197, 94, 0.1)',
          border: '1px solid rgba(34, 197, 94, 0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#22c55e',
                boxShadow: pulse ? '0 0 20px rgba(34, 197, 94, 0.8)' : '0 0 10px rgba(34, 197, 94, 0.4)',
                transition: 'box-shadow 0.5s ease'
              }} />
              <span style={{
                color: '#22c55e',
                fontWeight: '600',
                fontSize: '1.125rem'
              }}>
                All Systems Operational
              </span>
            </div>
            <span style={{
              fontSize: '0.75rem',
              fontFamily: 'monospace',
              color: 'var(--text-secondary)'
            }}>
              Last updated: 2 minutes ago
            </span>
          </div>
        </div>

        {/* Service Status List */}
        <div className="card" style={{
          padding: '0',
          overflow: 'hidden'
        }}>
          {isLoading ? (
            <div style={{ padding: '2rem' }}>
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} style={{ marginBottom: '1rem' }}>
                  <div className="skeleton" style={{ height: '60px' }} />
                </div>
              ))}
            </div>
          ) : (
            <div>
              {statusItems.map((item, index) => (
                <div
                  key={item.service}
                  className="hover-lift"
                  style={{
                    padding: '1.5rem 2rem',
                    borderBottom: index < statusItems.length - 1 ? '1px solid var(--border-primary)' : 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: getStatusColor(item.status)
                      }} />
                      <span style={{
                        fontWeight: '600',
                        fontSize: '1rem',
                        color: 'var(--text-primary)'
                      }}>
                        {item.service}
                      </span>
                    </div>
                    
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2rem'
                    }}>
                      {item.latency && (
                        <div style={{
                          fontSize: '0.875rem',
                          fontFamily: 'monospace',
                          color: 'var(--text-secondary)'
                        }}>
                          {item.latency} <span style={{ opacity: 0.6 }}>p95</span>
                        </div>
                      )}
                      <div style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                        minWidth: '80px'
                      }}>
                        {item.uptime} uptime
                      </div>
                      <div style={{
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: getStatusColor(item.status),
                        minWidth: '100px',
                        textAlign: 'right'
                      }}>
                        {getStatusText(item.status)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Stats Grid */}
        <div style={{
          marginTop: '3rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem'
        }}>
          {[
            { label: '30-day uptime', value: '99.99%', icon: '📈' },
            { label: 'API p95 latency', value: '<50ms', icon: '⚡' },
            { label: 'Global regions', value: '5', icon: '🌐' },
            { label: 'Incidents this month', value: '0', icon: '✅' }
          ].map((stat, index) => (
            <div
              key={index}
              className="card hover-lift"
              style={{
                padding: '1.5rem',
                textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
                {stat.icon}
              </div>
              <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                fontFamily: 'monospace',
                color: 'var(--color-gameforge-green)',
                marginBottom: '0.5rem'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '0.875rem',
                color: 'var(--text-secondary)'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div style={{
          marginTop: '3rem',
          textAlign: 'center'
        }}>
          <a
            href="#"
            style={{
              color: 'var(--accent-primary)',
              fontWeight: '600',
              fontSize: '0.875rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            View incident history →
          </a>
        </div>
      </div>
    </section>
  );
};

export default SystemStatus;