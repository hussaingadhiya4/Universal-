export default function Split({ props }) {
  const { anchor, title, points, image } = props;

  return (
    <section id={anchor} style={{ padding: '4rem 1.5rem', backgroundColor: 'white' }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '3rem',
        alignItems: 'center'
      }}>
        <div>
          <h2 style={{ fontSize: '1.875rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '2rem' }}>
            {title}
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {points.map((point, idx) => (
              <div key={idx}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--gray-800)', marginBottom: '0.25rem' }}>
                  {point.title}
                </h3>
                <p style={{ color: 'var(--gray-600)' }}>
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
              borderRadius: '1rem',
              boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>
      </div>
    </section>
  );
}
