export default function Stats({ props }) {
  const { stats } = props;

  return (
    <section style={{
      padding: '4rem 1.5rem',
      background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--accent-dark) 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(200, 165, 104, 0.1) 0%, transparent 50%),radial-gradient(circle at 80% 50%, rgba(200, 165, 104, 0.1) 0%, transparent 50%)'
      }} />

      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          textAlign: 'center'
        }}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 800,
                color: 'var(--gold)',
                marginBottom: '0.5rem',
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '1.125rem',
                color: 'rgba(255, 255, 255, 0.9)',
                fontWeight: 500,
                letterSpacing: '0.05em'
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
