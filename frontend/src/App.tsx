import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './styles/modern-ui.css';
import Header from './components/layout/Header';
import JspListTodosComponent from './JspListTodosComponent';
import JspTodoComponent from './JspTodoComponent';
import JspWelcomeComponent from './JspWelcomeComponent';
import CommonFooterComponent from './CommonFooterComponent';
import Header from './src/components/layout/Header';
import Navigation from './src/components/layout/Navigation';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="modern-app-root">
        <header className="modern-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontWeight: 700, fontSize: '1.1rem', color: '#2563eb' }}>Modernized Application</span>
          </div>
          <nav style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#475569', fontWeight: 500 }}>Home</Link>
          </nav>
        </header>
        <main className="modern-main-content">
          <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/header" element={<Header />} />
        <Route path="/jsplisttodos" element={<JspListTodosComponent />} />
        <Route path="/jsptodo" element={<JspTodoComponent />} />
        <Route path="/jspwelcome" element={<JspWelcomeComponent />} />
        <Route path="/commonfooter" element={<CommonFooterComponent />} />
        <Route path="/header" element={<Header />} />
        <Route path="/navigation" element={<Navigation />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
