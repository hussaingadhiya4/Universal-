export default function Testimonials({ props }) {
  const { anchor, title, items } = props;

  return (
    <section id={anchor} style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--gray-50)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <h2 style={{
          fontSize: 'clamp(2rem, 4vw, 2.75rem)',
          fontWeight: 800,
          color: 'var(--text-color)',
          textAlign: 'center',
          marginBottom: '3rem'
        }}>
          {title}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '2.5rem',
                backgroundColor: 'white',
                borderRadius: '1.5rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease',
                border: '1px solid var(--gray-200)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.12)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div style={{
                fontSize: '3rem',
                color: 'var(--gold)',
                opacity: 0.2,
                lineHeight: 1,
                marginBottom: '-1rem'
              }}>"
              </div>
              <p style={{
                color: 'var(--text-light)',
                fontSize: '1.0625rem',
                fontStyle: 'italic',
                marginBottom: '2rem',
                lineHeight: 1.7
              }}>
                {item.quote}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={item.photo}
                  alt={item.name}
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    border: '3px solid var(--gold)'
                  }}
                />
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-color)', fontSize: '1.0625rem' }}>{item.name}</div>
                  <div style={{ fontSize: '0.9375rem', color: 'var(--text-light)', marginTop: '0.125rem' }}>{item.company}</div>
                  {item.location && (
                    <div style={{ fontSize: '0.875rem', color: 'var(--gold)', marginTop: '0.125rem' }}>
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
