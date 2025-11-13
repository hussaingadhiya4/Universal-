export default function Footer({ props }) {
  const { logo, tagline, description, links, legal, copyright } = props;

  return (
    <footer style={{
      padding: '4rem 1.5rem 2rem',
      background: 'linear-gradient(to bottom, var(--gray-900) 0%, #000000 100%)',
      color: 'rgba(255, 255, 255, 0.9)'
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            {logo && (
              <img
                src={logo}
                alt="Universal"
                style={{
                  height: '60px',
                  marginBottom: '1rem',
                  filter: 'brightness(1.1)'
                }}
              />
            )}
            <p style={{
              fontSize: '0.9375rem',
              color: 'var(--gold)',
              letterSpacing: '0.15em',
              fontWeight: 600,
              marginBottom: '1rem'
            }}>
              {tagline}
            </p>
            <p style={{
              fontSize: '0.9375rem',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: 1.7
            }}>
              {description}
            </p>
          </div>

          <div>
            <h3 style={{
              fontSize: '1.125rem',
              fontWeight: 700,
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              Quick Links
            </h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {links.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  style={{
                    color: 'rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s ease',
                    fontSize: '0.9375rem'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = 'var(--gold)';
                    e.target.style.paddingLeft = '8px';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = 'rgba(255, 255, 255, 0.7)';
                    e.target.style.paddingLeft = '0';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          alignItems: 'center',
          fontSize: '0.875rem',
          color: 'rgba(255, 255, 255, 0.5)',
          textAlign: 'center'
        }}>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {legal.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                style={{
                  color: 'rgba(255, 255, 255, 0.5)',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'white'}
                onMouseLeave={(e) => e.target.style.color = 'rgba(255, 255, 255, 0.5)'}
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
