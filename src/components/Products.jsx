export default function Products({ props }) {
  const { anchor, title, subtitle, categories } = props;

  return (
    <section id={anchor} style={{ padding: '5rem 1.5rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 2.75rem)',
            fontWeight: 800,
            color: 'var(--text-color)',
            marginBottom: '1rem'
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: 'var(--text-light)',
            maxWidth: '42rem',
            margin: '0 auto'
          }}>
            {subtitle}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {categories.map((category, idx) => (
            <div
              key={idx}
              style={{
                position: 'relative',
                borderRadius: '1rem',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                background: 'white'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
              }}
            >
              <div style={{
                height: '220px',
                backgroundImage: `url(${category.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%)'
                }} />
                <div style={{
                  position: 'absolute',
                  bottom: '1rem',
                  left: '1.5rem',
                  fontSize: '3rem'
                }}>
                  {category.icon}
                </div>
              </div>
              <div style={{ padding: '1.75rem' }}>
                <h3 style={{
                  fontSize: '1.375rem',
                  fontWeight: 700,
                  color: 'var(--text-color)',
                  marginBottom: '0.75rem'
                }}>
                  {category.title}
                </h3>
                <p style={{
                  color: 'var(--text-light)',
                  lineHeight: 1.7,
                  fontSize: '0.9375rem'
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
