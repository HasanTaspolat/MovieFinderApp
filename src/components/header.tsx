import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">MoviesArchive.IO</Link>
        </div>
        <nav className="nav-links">
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  );
}