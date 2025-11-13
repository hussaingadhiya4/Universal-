export default function Stats({ props }) {
  const { stats } = props;

  return (
    <section style={{
      padding: '5rem 1.5rem',
      background: 'linear-gradient(135deg, #667eea 0%, #4facfe 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(240, 147, 251, 0.2) 0%, transparent 50%),radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%)'
      }} />

      <div style={{
        position: 'absolute',
        top: '30%',
        left: '10%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }} />

      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(240, 147, 251, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)'
      }} />

      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
          textAlign: 'center'
        }}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                padding: '2.5rem 2rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '1.5rem',
                border: '2px solid rgba(255, 255, 255, 0.2)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.1)';
              }}
            >
              <div style={{
                fontSize: 'clamp(3rem, 5vw, 4.5rem)',
                fontWeight: 900,
                color: 'white',
                marginBottom: '0.75rem',
                textShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                lineHeight: 1
              }}>
                {stat.value}
              </div>
              <div style={{
                fontSize: '1.125rem',
                color: 'rgba(255, 255, 255, 0.95)',
                fontWeight: 600,
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                lineHeight: 1.5
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
