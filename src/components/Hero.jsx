import { useState, useEffect } from 'react';

export default function Hero({ props }) {
  const { logo, tagline, headline, subheadline, primaryCta, secondaryCta, backgroundImage, overlay, overlayColor } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px'
      }}
    >
      {overlay && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(135deg, ${overlayColor} 0%, rgba(22, 58, 95, 0.9) 100%)`,
          backdropFilter: 'blur(2px)'
        }} />
      )}

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(circle at 30% 50%, rgba(200, 165, 104, 0.15) 0%, transparent 50%)'
      }} />

      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '70rem',
        padding: '0 1.5rem',
        animation: loaded ? 'fadeInUp 1s ease forwards' : 'none'
      }}>
        <div style={{
          marginBottom: '2rem',
          animation: loaded ? 'scaleIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none'
        }}>
          <img
            src={logo}
            alt="Universal"
            style={{
              maxWidth: '400px',
              width: '100%',
              height: 'auto',
              margin: '0 auto',
              filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))'
            }}
          />
        </div>

        <div style={{
          fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
          letterSpacing: '0.3em',
          color: 'var(--gold)',
          fontWeight: 600,
          marginBottom: '1.5rem',
          animation: loaded ? 'fadeIn 1.5s ease 0.3s forwards' : 'none',
          opacity: loaded ? 1 : 0
        }}>
          {tagline}
        </div>

        <h1 style={{
          fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
          fontWeight: 800,
          color: 'white',
          lineHeight: 1.2,
          marginBottom: '1.5rem',
          animation: loaded ? 'fadeInUp 1s ease 0.5s forwards' : 'none',
          opacity: loaded ? 1 : 0,
          textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)'
        }}>
          {headline}
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.375rem)',
          color: 'rgba(255, 255, 255, 0.95)',
          marginBottom: '2.5rem',
          maxWidth: '50rem',
          margin: '0 auto 2.5rem',
          lineHeight: 1.7,
          animation: loaded ? 'fadeInUp 1s ease 0.7s forwards' : 'none',
          opacity: loaded ? 1 : 0,
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.3)'
        }}>
          {subheadline}
        </p>

        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: loaded ? 'fadeInUp 1s ease 0.9s forwards' : 'none',
          opacity: loaded ? 1 : 0
        }}>
          <a
            href={primaryCta.href}
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              borderRadius: '0.75rem',
              fontWeight: 700,
              fontSize: '1.0625rem',
              background: 'linear-gradient(135deg, var(--gold) 0%, #B89554 100%)',
              color: 'white',
              boxShadow: '0 10px 30px rgba(200, 165, 104, 0.4)',
              transition: 'all 0.3s ease',
              letterSpacing: '0.02em'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px)';
              e.target.style.boxShadow = '0 15px 40px rgba(200, 165, 104, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 10px 30px rgba(200, 165, 104, 0.4)';
            }}
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            style={{
              display: 'inline-block',
              padding: '1rem 2.5rem',
              borderRadius: '0.75rem',
              border: '2px solid white',
              color: 'white',
              fontWeight: 700,
              fontSize: '1.0625rem',
              transition: 'all 0.3s ease',
              letterSpacing: '0.02em',
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = 'var(--accent-color)';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.target.style.color = 'white';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {secondaryCta.label}
          </a>
        </div>

        <div style={{
          marginTop: '4rem',
          animation: loaded ? 'float 3s ease-in-out infinite' : 'none',
          opacity: 0.7
        }}>
          <div style={{
            fontSize: '2rem',
            color: 'white'
          }}>↓</div>
        </div>
      </div>
    </section>
  );
}
