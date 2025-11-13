export default function Process({ props }) {
  const { anchor, title, subtitle, steps } = props;

  return (
    <section id={anchor} style={{
      padding: '5rem 1.5rem',
      background: 'linear-gradient(180deg, var(--gray-50) 0%, white 100%)'
    }}>
      <div style={{ maxWidth: '70rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: 'var(--text-color)',
            marginBottom: '1rem'
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-light)',
            maxWidth: '42rem',
            margin: '0 auto'
          }}>
            {subtitle}
          </p>
        </div>

        <div style={{
          position: 'relative'
        }}>
          <div style={{
            position: 'absolute',
            left: '2rem',
            top: '3rem',
            bottom: '3rem',
            width: '2px',
            background: 'linear-gradient(to bottom, var(--accent-color), var(--gold))',
            display: window.innerWidth > 768 ? 'block' : 'none'
          }} />

          {steps.map((step, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                paddingLeft: window.innerWidth > 768 ? '5rem' : '0',
                marginBottom: idx < steps.length - 1 ? '3rem' : '0'
              }}
            >
              <div style={{
                position: 'absolute',
                left: '1rem',
                top: '0',
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--accent-color), var(--gold))',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.875rem',
                boxShadow: '0 4px 15px rgba(30, 77, 123, 0.3)',
                display: window.innerWidth > 768 ? 'flex' : 'none'
              }}>
                {idx + 1}
              </div>

              <div style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                border: '1px solid var(--gray-200)',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.transform = 'translateX(8px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              >
                <div style={{
                  fontSize: '3rem',
                  fontWeight: 800,
                  color: 'var(--gray-100)',
                  marginBottom: '0.5rem',
                  lineHeight: 1
                }}>
                  {step.number}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text-color)',
                  marginBottom: '0.75rem'
                }}>
                  {step.title}
                </h3>
                <p style={{
                  color: 'var(--text-light)',
                  lineHeight: 1.7,
                  fontSize: '1rem'
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
