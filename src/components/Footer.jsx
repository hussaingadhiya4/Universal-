export default function Footer({ props }) {
  const { logo, tagline, links, legal, copyright } = props;

  return (
    <footer style={{ padding: '2rem 1.5rem', backgroundColor: 'var(--gray-900)', color: 'var(--gray-200)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          alignItems: 'center',
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          <div>
            {logo && <img src={logo} alt="Universal" style={{ height: '40px', marginBottom: '0.5rem' }} />}
            <p style={{ fontSize: '0.875rem', color: 'var(--gray-400)' }}>{tagline}</p>
          </div>

          <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center' }}>
            {links.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                style={{
                  color: 'var(--gray-200)',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = 'var(--gray-200)'}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div style={{
          borderTop: '1px solid var(--gray-800)',
          paddingTop: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          fontSize: '0.875rem',
          color: 'var(--gray-400)'
        }}>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {legal.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                style={{
                  color: 'var(--gray-400)',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--gray-200)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--gray-400)'}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div>{copyright}</div>
        </div>
      </div>
    </footer>
  );
}
