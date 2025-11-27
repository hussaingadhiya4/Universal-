export default function Regions({ props }) {
  const { anchor, title, description, regions } = props;

  return (
    <section id={anchor} style={{
      padding: '5rem 1.5rem',
      background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)'
      }} />

      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(240, 147, 251, 0.1) 100%)',
            borderRadius: '2rem',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            fontWeight: 700,
            color: '#667eea',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Global Reach
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            color: '#1a202c',
            marginBottom: '1rem',
            lineHeight: 1.2
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-light)',
            maxWidth: '42rem',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            {description}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          <div style={{
            gridColumn: window.innerWidth > 1024 ? 'span 2' : 'span 1',
            display: 'grid',
            gridTemplates: 'repeat(2, 1fr)',
            gap: '2rem'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.5rem'
            }}>
              {regions.map((region, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    borderRadius: '1.25rem',
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    border: '2px solid rgba(102, 126, 234, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(102, 126, 234, 0.15)';
                    e.currentTarget.style.borderColor = '#667eea';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.1)';
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '100px',
                    height: '100px',
                    background: 'radial-gradient(circle, rgba(240, 147, 251, 0.15) 0%, transparent 70%)',
                    borderRadius: '50%'
                  }} />
                  <div style={{
                    fontSize: '3.5rem',
                    marginBottom: '1rem',
                    filter: 'grayscale(0%)',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {region.icon}
                  </div>
                  <h3 style={{
                    fontSize: '1.375rem',
                    fontWeight: 700,
                    color: '#1a202c',
                    marginBottom: '0.75rem',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {region.name}
                  </h3>
                  <p style={{
                    color: 'var(--text-light)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.6,
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {region.countries}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            display: window.innerWidth > 1024 ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(240, 147, 251, 0.05) 100%)',
            borderRadius: '1.5rem',
            padding: '3rem',
            border: '2px dashed rgba(102, 126, 234, 0.2)',
            minHeight: '400px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '6rem',
                marginBottom: '1.5rem',
                filter: 'grayscale(20%)'
              }}>
                🌍
              </div>
              <h3 style={{
                fontSize: '1.75rem',
                fontWeight: 700,
                color: '#1a202c',
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Strategic Trade Routes
              </h3>
              <p style={{
                color: 'var(--text-light)',
                fontSize: '1rem',
                lineHeight: 1.7,
                maxWidth: '280px',
                margin: '0 auto'
              }}>
                Building connections across key markets for seamless global trade
              </p>
              <div style={{
                marginTop: '2rem',
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap'
              }}>
                <div style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(102, 126, 234, 0.1)',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#667eea'
                }}>
                  🚢 Sea Freight
                </div>
                <div style={{
                  padding: '0.5rem 1rem',
                  background: 'rgba(240, 147, 251, 0.1)',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  color: '#f093fb'
                }}>
                  ✈️ Air Cargo
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
