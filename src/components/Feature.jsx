export default function Feature({ props }) {
  const { anchor, title, description, features } = props;

  return (
    <section id={anchor} style={{ padding: '4rem 1.5rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '1rem' }}>
          {title}
        </h2>
        <p style={{ color: 'var(--gray-600)', maxWidth: '42rem', marginBottom: '2rem' }}>
          {description}
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--gray-50)',
                borderRadius: '0.75rem',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>{feature.icon}</div>
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--gray-800)', marginBottom: '0.5rem' }}>
                {feature.title}
              </h3>
              <p style={{ color: 'var(--gray-600)', fontSize: '0.9375rem' }}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
