export default function Split({ props }) {
  const { anchor, title, points, image } = props;

  return (
    <section id={anchor} style={{ padding: '5rem 1.5rem', backgroundColor: 'white' }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '4rem',
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: 'var(--text-color)',
            marginBottom: '2.5rem'
          }}>
            {title}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {points.map((point, idx) => (
              <div
                key={idx}
                style={{
                  paddingLeft: '1.5rem',
                  borderLeft: '3px solid var(--gold)',
                  transition: 'border-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-color)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--gold)'}
              >
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-color)',
                  marginBottom: '0.5rem'
                }}>
                  {point.title}
                </h3>
                <p style={{
                  color: 'var(--text-light)',
                  lineHeight: 1.7,
                  fontSize: '1rem'
                }}>
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              borderRadius: '1.5rem',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
            }}
          />
        </div>
      </div>
    </section>
  );
}
