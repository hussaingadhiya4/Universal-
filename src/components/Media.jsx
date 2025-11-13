export default function Media({ props }) {
  const { anchor, title, description, media, locations } = props;

  return (
    <section id={anchor} style={{ padding: '3rem 1.5rem', backgroundColor: 'var(--gray-50)', textAlign: 'center' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '0.5rem' }}>
          {title}
        </h2>
        <p style={{ color: 'var(--gray-600)', marginBottom: '1.5rem' }}>
          {description}
        </p>
        <div style={{
          marginBottom: '1.5rem',
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}>
          <img src={media} alt={title} style={{ width: '100%' }} />
        </div>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '1rem',
          justifyContent: 'center'
        }}>
          {locations?.map((location, idx) => (
            <span
              key={idx}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'white',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 500,
                color: 'var(--accent-color)',
                border: '1px solid var(--gray-200)'
              }}
            >
              {location}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
