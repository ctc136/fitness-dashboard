import React from 'react';

export default function StravaSection({ data, status, error }) {
  if (status === 'loading') {
    return (
      <div className="loading-grid">
        {[...Array(3)].map((_, i) => <div key={i} className="skeleton" />)}
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="error-box">
        <strong>Strava Error:</strong> {error}
      </div>
    );
  }

  if (!data) return null;

  const { weeklyMiles, monthlyMiles, recentRuns } = data;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div className="grid-3">
        {/* Weekly miles */}
        <div className="card">
          <h3 className="card-title">Weekly Miles</h3>
          <p className="card-subtitle">Current week</p>
          <div style={{ fontSize: 40, fontWeight: 700, color: '#6366f1', lineHeight: 1.1, marginTop: 8 }}>
            {weeklyMiles}
          </div>
          <p style={{ color: '#475569', fontSize: 12, marginTop: 6 }}>miles run</p>
        </div>

        {/* Monthly miles */}
        <div className="card">
          <h3 className="card-title">Monthly Miles</h3>
          <p className="card-subtitle">Current month</p>
          <div style={{ fontSize: 40, fontWeight: 700, color: '#a78bfa', lineHeight: 1.1, marginTop: 8 }}>
            {monthlyMiles}
          </div>
          <p style={{ color: '#475569', fontSize: 12, marginTop: 6 }}>miles run</p>
        </div>

        {/* Recent runs list */}
        <div className="card">
          <h3 className="card-title">Recent Runs</h3>
          <p className="card-subtitle">Last {recentRuns.length} runs</p>
          {recentRuns.length === 0 ? (
            <p style={{ color: '#475569', fontSize: 13, marginTop: 8 }}>No recent runs found.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              {recentRuns.map((run, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    padding: '8px 10px',
                    borderRadius: 8,
                    background: 'rgba(99,102,241,0.06)',
                    border: '1px solid rgba(99,102,241,0.12)',
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 500, color: '#e2e8f0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: 140 }}>
                      {run.name}
                    </div>
                    <div style={{ fontSize: 11, color: '#475569', marginTop: 1 }}>{run.date}</div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: 8 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: '#6366f1' }}>{run.miles} mi</div>
                    <div style={{ fontSize: 11, color: '#475569' }}>{run.movingTime} min</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
