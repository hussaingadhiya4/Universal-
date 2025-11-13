import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Products', href: '#products' },
    { label: 'Process', href: '#process' },
    { label: 'Why Us', href: '#why' },
    { label: 'Regions', href: '#regions' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
      backdropFilter: scrolled ? 'blur(10px)' : 'none',
      boxShadow: scrolled ? '0 2px 20px rgba(0, 0, 0, 0.08)' : 'none',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      padding: scrolled ? '0.75rem 0' : '1.5rem 0'
    }}>
      <div style={{
        maxWidth: '90rem',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img
            src="/Final approved image.jpg"
            alt="Universal"
            style={{
              height: scrolled ? '45px' : '55px',
              transition: 'height 0.4s ease',
              filter: scrolled ? 'none' : 'drop-shadow(0 2px 8px rgba(255,255,255,0.3))'
            }}
          />
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            fontSize: '1.5rem',
            color: scrolled ? 'var(--text-color)' : 'white',
            cursor: 'pointer'
          }}
          className="mobile-menu-btn"
        >
          ☰
        </button>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2.5rem'
        }} className="desktop-nav">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              style={{
                fontSize: '0.9375rem',
                fontWeight: 500,
                color: scrolled ? 'var(--text-color)' : 'white',
                transition: 'all 0.3s ease',
                position: 'relative',
                letterSpacing: '0.01em'
              }}
              onMouseEnter={(e) => {
                e.target.style.color = 'var(--gold)';
              }}
              onMouseLeave={(e) => {
                e.target.style.color = scrolled ? 'var(--text-color)' : 'white';
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              padding: '0.625rem 1.5rem',
              backgroundColor: 'var(--gold)',
              color: 'white',
              borderRadius: '0.5rem',
              fontWeight: 600,
              fontSize: '0.9375rem',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(200, 165, 104, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 6px 16px rgba(200, 165, 104, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(200, 165, 104, 0.3)';
            }}
          >
            Get Quote
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block !important;
          }
          .desktop-nav {
            display: ${menuOpen ? 'flex' : 'none'} !important;
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            flex-direction: column;
            background: white;
            padding: 1.5rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
            gap: 1rem !important;
          }
          .desktop-nav a {
            color: var(--text-color) !important;
          }
        }
      `}</style>
    </nav>
  );
}
