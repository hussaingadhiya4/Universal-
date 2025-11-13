export default function Carousel({ props }) {
  const { title, logos } = props;

  return (
    <section style={{ padding: '2rem 1.5rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '1.125rem',
          fontWeight: 600,
          color: 'var(--gray-800)',
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          {title}
        </h2>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2rem'
        }}>
          {logos.map((logo, idx) => (
            <div
              key={idx}
              style={{
                width: '120px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                filter: 'grayscale(100%)',
                opacity: 0.6,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = 'grayscale(0%)';
                e.currentTarget.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'grayscale(100%)';
                e.currentTarget.style.opacity = '0.6';
              }}
            >
              <img src={logo} alt={`Client ${idx + 1}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
