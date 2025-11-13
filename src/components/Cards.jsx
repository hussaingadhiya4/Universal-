export default function Cards({ props }) {
  const { anchor, title, subtitle, cards } = props;

  return (
    <section id={anchor} style={{ padding: '4rem 1.5rem', backgroundColor: 'var(--gray-50)' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '1.875rem',
          fontWeight: 700,
          color: 'var(--gray-900)',
          textAlign: 'center',
          marginBottom: '0.5rem'
        }}>
          {title}
        </h2>
        <p style={{
          color: 'var(--gray-600)',
          textAlign: 'center',
          maxWidth: '48rem',
          margin: '0 auto 2rem'
        }}>
          {subtitle}
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem'
        }}>
          {cards.map((card, idx) => (
            <div
              key={idx}
              style={{
                padding: '2rem',
                backgroundColor: 'white',
                borderRadius: '1rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{card.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--gray-800)', marginBottom: '0.75rem' }}>
                {card.title}
              </h3>
              <p style={{ color: 'var(--gray-600)', lineHeight: 1.6 }}>
                {card.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
