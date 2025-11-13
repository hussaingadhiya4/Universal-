export default function Testimonials({ props }) {
  const { anchor, title, items } = props;

  return (
    <section id={anchor} style={{ padding: '3rem 1.5rem', backgroundColor: 'var(--gray-50)' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          color: 'var(--gray-900)',
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          {title}
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
              }}
            >
              <p style={{
                color: 'var(--gray-700)',
                fontSize: '1rem',
                fontStyle: 'italic',
                marginBottom: '1.5rem',
                lineHeight: 1.6
              }}>
                "{item.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <img
                  src={item.photo}
                  alt={item.name}
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    objectFit: 'cover'
                  }}
                />
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--gray-900)' }}>{item.name}</div>
                  <div style={{ fontSize: '0.875rem', color: 'var(--gray-600)' }}>{item.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
