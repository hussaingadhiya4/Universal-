export default function Process({ props }) {
  const { anchor, title, subtitle, steps } = props;

  return (
    <section id={anchor} style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(79, 172, 254, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)'
      }} />

      <div style={{ maxWidth: '70rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.1) 0%, rgba(102, 126, 234, 0.1) 100%)',
            borderRadius: '2rem',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            fontWeight: 700,
            color: '#4facfe',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            How It Works
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--text-color)',
            marginBottom: '1.5rem',
            lineHeight: 1.2
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-light)',
            maxWidth: '42rem',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            {subtitle}
          </p>
        </div>

        <div style={{
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            left: '2.5rem',
            top: '4rem',
            bottom: '4rem',
            width: '3px',
            background: 'linear-gradient(to bottom, #667eea 0%, #4facfe 50%, #f093fb 100%)',
            display: window.innerWidth > 768 ? 'block' : 'none',
            boxShadow: '0 0 20px rgba(102, 126, 234, 0.3)'
          }} />

          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                paddingLeft: window.innerWidth > 768 ? '6rem' : '0',
                marginBottom: idx < steps.length - 1 ? '3rem' : '0'
              }}
            >
              <div style={{
                position: 'absolute',
                left: '0.75rem',
                top: '1rem',
                width: '3.5rem',
                height: '3.5rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 900,
                fontSize: '1.25rem',
                boxShadow: '0 8px 25px rgba(102, 126, 234, 0.4)',
                display: window.innerWidth > 768 ? 'flex' : 'none',
                border: '4px solid white'
              }}>
                {idx + 1}
              </div>

              <div style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                borderRadius: '1.5rem',
                padding: '2.5rem',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
                border: '2px solid rgba(102, 126, 234, 0.1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(102, 126, 234, 0.2)';
                e.currentTarget.style.transform = 'translateX(15px)';
                e.currentTarget.style.borderColor = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.08)';
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.1)';
              }}
              >
                <div style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '-40px',
                  width: '120px',
                  height: '120px',
                  background: 'radial-gradient(circle, rgba(240, 147, 251, 0.1) 0%, transparent 70%)',
                  borderRadius: '50%'
                }} />
                <div style={{
                  fontSize: '3.5rem',
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.15) 0%, rgba(79, 172, 254, 0.15) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '1rem',
                  lineHeight: 1,
                  position: 'relative',
                  zIndex: 1
                }}>
                  {step.number}
                </div>
                <h3 style={{
                  fontSize: '1.625rem',
                  fontWeight: 700,
                  color: 'var(--text-color)',
                  marginBottom: '1rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: 'var(--text-light)',
                  lineHeight: 1.8,
                  fontSize: '1.0625rem',
                  position: 'relative',
                  zIndex: 1
                }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
