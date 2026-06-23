import React, { useState } from 'react';
import './App.css';

// Custom SVG Icons to avoid dependencies
const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="generate-icon" {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
);

const PlusIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 12h14"/><path d="M12 5v14"/>
  </svg>
);

const LayoutIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><path d="M3 9h18"/><path d="M9 21V9"/>
  </svg>
);

const HistoryIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/>
  </svg>
);

const SettingsIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const UserIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
  </svg>
);

function App() {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo-container">
          <div className="logo-icon">
            <SparklesIcon />
          </div>
          SlideX
        </div>
        
        <nav className="nav-menu">
          <a className="nav-item active">
            <PlusIcon /> New Pitch
          </a>
          <a className="nav-item">
            <LayoutIcon /> Templates
          </a>
          <a className="nav-item">
            <HistoryIcon /> My Presentations
          </a>
          <a className="nav-item" style={{ marginTop: 'auto' }}>
            <SettingsIcon /> Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="header">
          <div></div>
          <div className="user-profile">
            <div className="avatar">
              <UserIcon style={{ margin: '10px' }} />
            </div>
          </div>
        </header>

        <div className="generator-container">
          <h1 className="hero-title">Create your next presentation</h1>
          <p className="hero-subtitle">Describe your topic, target audience, and key points. AI will handle the rest.</p>

          <div className="input-group">
            <label className="input-label">What is your presentation about?</label>
            <textarea 
              className="prompt-input"
              placeholder="e.g. A 10-slide pitch deck for a new sustainable fashion brand targeting Gen Z..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
          </div>

          <div className="settings-grid">
            <div className="setting-card">
              <div className="setting-header">
                Target Audience
              </div>
              <div className="setting-value">Investors</div>
            </div>
            <div className="setting-card">
              <div className="setting-header">
                Tone & Style
              </div>
              <div className="setting-value">Professional, Minimal</div>
            </div>
            <div className="setting-card">
              <div className="setting-header">
                Length
              </div>
              <div className="setting-value">10 Slides</div>
            </div>
          </div>

          <button className="generate-btn">
            <SparklesIcon />
            Generate Presentation
          </button>
        </div>

        <section className="recent-section">
          <h2 className="section-title">Recent Generations</h2>
          <div className="projects-grid">
            {[1, 2, 3].map((i) => (
              <div key={i} className="project-card">
                <div className="project-thumbnail">
                  {/* Decorative element for thumbnail */}
                  <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.2 }}>
                    <LayoutIcon />
                  </div>
                </div>
                <div className="project-info">
                  <div className="project-title">Q3 Marketing Strategy {i}</div>
                  <div className="project-date">Created {i} days ago</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
