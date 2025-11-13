export default function Products({ props }) {
  const { anchor, title, subtitle, categories } = props;

  return (
    <section id={anchor} style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(240, 147, 251, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)'
      }} />

      <div style={{ maxWidth: '80rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2rem',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            fontWeight: 700,
            color: '#f093fb',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            backdropFilter: 'blur(10px)'
          }}>
            What We Trade
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 900,
            color: 'white',
            marginBottom: '1.5rem',
            lineHeight: 1.2
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: '1.25rem',
            color: 'rgba(255, 255, 255, 0.8)',
            maxWidth: '42rem',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            {subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2.5rem'
        }}>
          {categories.map((category, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 25px 60px rgba(102, 126, 234, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(102, 126, 234, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              <div style={{
                height: '240px',
                backgroundImage: `url(${category.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, rgba(10,14,39,0.3) 0%, rgba(10,14,39,0.9) 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  fontSize: '3.5rem',
                  filter: 'drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5))'
                }}>
                  {category.icon}
                </div>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'white',
                  marginBottom: '1rem'
                }}>
                  {category.title}
                </h3>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.7)',
                  lineHeight: 1.8,
                  fontSize: '1.0625rem'
                }}>
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
