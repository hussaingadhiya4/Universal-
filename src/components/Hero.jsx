export default function Hero({ props }) {
  const { headline, subheadline, primaryCta, secondaryCta, backgroundImage, overlay, overlayColor } = props;

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {overlay && (
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: overlayColor
        }} />
      )}
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '48rem',
        padding: '0 1.5rem'
      }}>
        <h1 style={{
          fontSize: 'clamp(2rem, 5vw, 3rem)',
          fontWeight: 800,
          color: 'white',
          lineHeight: 1.2,
          marginBottom: '1rem'
        }}>
          {headline}
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.25rem)',
          color: '#F3F4F6',
          marginBottom: '2rem'
        }}>
          {subheadline}
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href={primaryCta.href}
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              borderRadius: '1rem',
              fontWeight: 600,
              backgroundColor: 'var(--accent-color)',
              color: 'white',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--accent-dark)'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--accent-color)'}
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            style={{
              display: 'inline-block',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              border: '2px solid white',
              color: 'white',
              fontWeight: 600,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = 'var(--accent-color)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = 'white';
            }}
          >
            {secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  );
}
