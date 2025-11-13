import { useState, useEffect } from 'react';
import TransparentLogo from './TransparentLogo';

export default function Hero({ props }) {
  const { logo, tagline, headline, subheadline, primaryCta, secondaryCta, backgroundImage } = props;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '80px',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)'
      }}
    >
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 0.15,
        mixBlendMode: 'overlay'
      }} />

      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(240, 147, 251, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 8s ease-in-out infinite'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(79, 172, 254, 0.3) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 10s ease-in-out infinite reverse'
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
          marginBottom: '2.5rem',
          animation: loaded ? 'scaleIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards' : 'none'
        }}>
          <TransparentLogo
            src={logo}
            alt="Universal"
            style={{
              maxWidth: '450px',
              width: '100%',
              height: 'auto',
              margin: '0 auto',
              filter: 'drop-shadow(0 20px 40px rgba(102, 126, 234, 0.6)) drop-shadow(0 10px 20px rgba(240, 147, 251, 0.4))'
            }}
            containerStyle={{
              display: 'inline-block'
            }}
          />
        </div>

        <div style={{
          fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
          letterSpacing: '0.3em',
          background: 'linear-gradient(135deg, #ffd89b 0%, #f093fb 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          fontWeight: 700,
          marginBottom: '2rem',
          animation: loaded ? 'fadeIn 1.5s ease 0.3s forwards' : 'none',
          opacity: loaded ? 1 : 0,
          textTransform: 'uppercase'
        }}>
          {tagline}
        </div>

        <h1 style={{
          fontSize: 'clamp(1.75rem, 5vw, 4rem)',
          fontWeight: 900,
          color: 'white',
          lineHeight: 1.1,
          marginBottom: '1.5rem',
          animation: loaded ? 'fadeInUp 1s ease 0.5s forwards' : 'none',
          opacity: loaded ? 1 : 0,
          textShadow: '0 4px 30px rgba(102, 126, 234, 0.5), 0 2px 10px rgba(0, 0, 0, 0.5)'
        }}>
          {headline}
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2vw, 1.5rem)',
          color: 'var(--text-light)',
          marginBottom: '3rem',
          maxWidth: '55rem',
          margin: '0 auto 3rem',
          lineHeight: 1.7,
          animation: loaded ? 'fadeInUp 1s ease 0.7s forwards' : 'none',
          opacity: loaded ? 1 : 0
        }}>
          {subheadline}
        </p>

        <div style={{
          display: 'flex',
          gap: '1.25rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          animation: loaded ? 'fadeInUp 1s ease 0.9s forwards' : 'none',
          opacity: loaded ? 1 : 0
        }}>
          <a
            href={primaryCta.href}
            style={{
              display: 'inline-block',
              padding: '1.125rem 3rem',
              borderRadius: '1rem',
              fontWeight: 700,
              fontSize: '1.125rem',
              background: 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
              color: 'white',
              boxShadow: '0 10px 40px rgba(102, 126, 234, 0.5), 0 0 20px rgba(240, 147, 251, 0.3)',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.02em'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-3px) scale(1.02)';
              e.target.style.boxShadow = '0 15px 50px rgba(102, 126, 234, 0.6), 0 0 30px rgba(240, 147, 251, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 10px 40px rgba(102, 126, 234, 0.5), 0 0 20px rgba(240, 147, 251, 0.3)';
            }}
          >
            {primaryCta.label}
          </a>
          <a
            href={secondaryCta.href}
            style={{
              display: 'inline-block',
              padding: '1.125rem 3rem',
              borderRadius: '1rem',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              fontWeight: 700,
              fontSize: '1.125rem',
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              letterSpacing: '0.02em',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.15)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.4)';
              e.target.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'rgba(255, 255, 255, 0.05)';
              e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            {secondaryCta.label}
          </a>
        </div>

        <div style={{
          marginTop: '5rem',
          animation: loaded ? 'float 3s ease-in-out infinite' : 'none',
          opacity: 0.6
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
