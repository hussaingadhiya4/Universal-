export default function Grid({ props }) {
  const { anchor, title, items } = props;

  return (
    <section id={anchor} style={{ padding: '4rem 1.5rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem'
        }}>
          {items.map((item, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                height: '200px',
                borderRadius: '0.75rem',
                overflow: 'hidden',
                backgroundImage: `url(${item.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.4)'
              }} />
              <h3 style={{
                position: 'relative',
                zIndex: 1,
                color: 'white',
                fontSize: '1.25rem',
                fontWeight: 600
              }}>
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
