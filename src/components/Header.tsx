import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.hash === path;

  const menuItems = [
    { path: '#/', label: 'Home' },
    { path: '#/chi-siamo', label: 'Chi Siamo' },
    { path: '#/servizi', label: 'Servizi' },
    { path: '#/contatti', label: 'Contatti' }
  ];

  return (
    <header className="main-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-text">Jolimonda</span>
          </Link>

          <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <ul className="nav-list">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </div>

      <style>{`
        .main-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          box-shadow: var(--shadow-sm);
          z-index: 1000;
          height: var(--header-height);
        }

        .header-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: var(--header-height);
        }

        .logo {
          display: flex;
          align-items: center;
          font-family: var(--font-headings);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--color-primary);
          text-decoration: none;
          transition: color var(--transition-fast);
        }

        .logo:hover {
          color: var(--color-primary-dark);
        }

        .logo-text {
          letter-spacing: -0.02em;
        }

        .main-nav {
          display: flex;
        }

        .nav-list {
          display: flex;
          list-style: none;
          gap: var(--spacing-lg);
          align-items: center;
        }

        .nav-link {
          font-family: var(--font-headings);
          font-size: 0.9375rem;
          font-weight: 600;
          color: var(--color-foreground);
          text-decoration: none;
          padding: 0.5rem 0;
          position: relative;
          transition: color var(--transition-fast);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-primary);
          transition: width var(--transition-base);
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          width: 100%;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--color-primary);
        }

        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 24px;
        }

        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: var(--color-foreground);
          transition: all var(--transition-base);
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(7px, 7px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        @media (max-width: 768px) {
          .mobile-menu-toggle {
            display: block;
          }

          .main-nav {
            position: fixed;
            top: var(--header-height);
            left: 0;
            right: 0;
            background: var(--color-surface);
            box-shadow: var(--shadow-lg);
            padding: var(--spacing-lg);
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all var(--transition-base);
          }

          .main-nav.mobile-open {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          .nav-list {
            flex-direction: column;
            align-items: stretch;
            gap: 0;
          }

          .nav-list li {
            border-bottom: 1px solid var(--color-border-light);
          }

          .nav-link {
            display: block;
            padding: var(--spacing-md) 0;
            font-size: 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
