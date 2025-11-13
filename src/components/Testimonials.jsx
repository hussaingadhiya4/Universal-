export default function Testimonials({ props }) {
  const { anchor, title, items } = props;

  return (
    <section id={anchor} style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(240, 147, 251, 0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)'
      }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'linear-gradient(135deg, rgba(240, 147, 251, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)',
            borderRadius: '2rem',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            fontWeight: 700,
            color: '#f093fb',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Client Stories
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--text-color)',
            lineHeight: 1.2
          }}>
            {title}
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '2.5rem'
        }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '3rem',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                borderRadius: '1.75rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                border: '2px solid rgba(240, 147, 251, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(240, 147, 251, 0.15)';
                e.currentTarget.style.borderColor = '#f093fb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(240, 147, 251, 0.1)';
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-30px',
                right: '-30px',
                width: '120px',
                height: '120px',
                background: 'radial-gradient(circle, rgba(240, 147, 251, 0.08) 0%, transparent 70%)',
                borderRadius: '50%'
              }} />
              <div style={{
                fontSize: '4rem',
                fontWeight: 900,
                background: 'linear-gradient(135deg, #f093fb 0%, #667eea 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: 0.3,
                lineHeight: 1,
                marginBottom: '0.5rem',
                position: 'relative',
                zIndex: 1
              }}>"
              </div>
              <p style={{
                color: 'var(--text-light)',
                fontSize: '1.125rem',
                fontStyle: 'italic',
                marginBottom: '2.5rem',
                lineHeight: 1.8,
                position: 'relative',
                zIndex: 1
              }}>
                {item.quote}
              </p>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                paddingTop: '1.5rem',
                borderTop: '2px solid rgba(240, 147, 251, 0.1)',
                position: 'relative',
                zIndex: 1
              }}>
                <img
                  src={item.photo}
                  alt={item.name}
                  style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '4px solid white',
                    boxShadow: '0 4px 15px rgba(240, 147, 251, 0.2)'
                  }}
                />
                <div>
                  <div style={{
                    fontWeight: 700,
                    color: 'var(--text-color)',
                    fontSize: '1.125rem',
                    marginBottom: '0.25rem'
                  }}>
                    {item.name}
                  </div>
                  <div style={{
                    fontSize: '0.9375rem',
                    color: 'var(--text-light)',
                    marginBottom: '0.25rem'
                  }}>
                    {item.company}
                  </div>
                  {item.location && (
                    <div style={{
                      fontSize: '0.875rem',
                      color: '#f093fb',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.25rem'
                    }}>
                      📍 {item.location}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
