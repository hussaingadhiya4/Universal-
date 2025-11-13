import { useState, useEffect } from 'react';

export default function Hero({ props }) {
  const { tagline, headline, subheadline, primaryCta, secondaryCta, backgroundImage } = props;
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
        maxWidth: '90rem',
        padding: '0 1.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
        gap: '4rem',
        alignItems: 'center',
        animation: loaded ? 'fadeInUp 1s ease forwards' : 'none'
      }}>
        <div style={{
          textAlign: 'left'
        }}>
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
            lineHeight: 1.7,
            animation: loaded ? 'fadeInUp 1s ease 0.7s forwards' : 'none',
            opacity: loaded ? 1 : 0
          }}>
            {subheadline}
          </p>

          <div style={{
            display: 'flex',
            gap: '1.25rem',
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
        </div>

        <div style={{
          position: 'relative',
          animation: loaded ? 'slideInRight 1.2s ease 0.5s forwards' : 'none',
          opacity: loaded ? 1 : 0
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem'
          }}>
            <div style={{
              gridColumn: 'span 2',
              borderRadius: '1.5rem',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.4s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <img
                src="https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Global shipping container port"
                style={{
                  width: '100%',
                  height: '350px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            <div style={{
              borderRadius: '1.25rem',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.4s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Cargo airplane"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>

            <div style={{
              borderRadius: '1.25rem',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.2)',
              transition: 'transform 0.4s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src="https://images.pexels.com/photos/163726/belgium-antwerp-shipping-container-163726.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Shipping logistics"
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
            </div>
          </div>

          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            padding: '1.5rem 2rem',
            background: 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
            borderRadius: '1rem',
            boxShadow: '0 15px 40px rgba(102, 126, 234, 0.6)',
            animation: 'pulse 3s ease-in-out infinite'
          }}>
            <div style={{
              fontSize: '1.75rem',
              fontWeight: 900,
              color: 'white',
              lineHeight: 1
            }}>
              150+
            </div>
            <div style={{
              fontSize: '0.875rem',
              color: 'rgba(255, 255, 255, 0.9)',
              fontWeight: 600,
              marginTop: '0.25rem'
            }}>
              Countries
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
