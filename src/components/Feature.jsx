export default function Feature({ props }) {
  const { anchor, title, description, features } = props;

  return (
    <section id={anchor} style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)'
      }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(240, 147, 251, 0.1) 100%)',
            borderRadius: '2rem',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            fontWeight: 700,
            color: '#667eea',
            letterSpacing: '0.1em',
            textTransform: 'uppercase'
          }}>
            Why Choose Us
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            color: 'var(--text-color)',
            marginBottom: '1.5rem',
            lineHeight: 1.2
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-light)',
            maxWidth: '48rem',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            {description}
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {features.map((feature, idx) => (
            <div
              key={idx}
              style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                borderRadius: '1.5rem',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.06)',
                border: '1px solid rgba(102, 126, 234, 0.1)',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(102, 126, 234, 0.15)';
                e.currentTarget.style.borderColor = '#667eea';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.1)';
              }}
            >
              <div style={{
                position: 'absolute',
                top: '-50px',
                right: '-50px',
                width: '150px',
                height: '150px',
                background: 'radial-gradient(circle, rgba(240, 147, 251, 0.1) 0%, transparent 70%)',
                borderRadius: '50%'
              }} />
              <div style={{
                fontSize: '3.5rem',
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1
              }}>
                {feature.icon}
              </div>
              <h3 style={{
                fontSize: '1.375rem',
                fontWeight: 700,
                color: 'var(--text-color)',
                marginBottom: '1rem',
                position: 'relative',
                zIndex: 1
              }}>
                {feature.title}
              </h3>
              <p style={{
                color: 'var(--text-light)',
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                position: 'relative',
                zIndex: 1
              }}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
