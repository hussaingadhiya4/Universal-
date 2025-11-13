export default function Regions({ props }) {
  const { anchor, title, description, regions } = props;

  return (
    <section id={anchor} style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--gray-50)' }}>
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
            {description}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {regions.map((region, idx) => (
            <div
              key={idx}
              style={{
                background: 'white',
                borderRadius: '1rem',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                transition: 'all 0.3s ease',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.12)';
                e.currentTarget.style.borderColor = 'var(--gold)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.06)';
                e.currentTarget.style.borderColor = 'transparent';
              }}
            >
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem',
                filter: 'grayscale(20%)'
              }}>
                {region.icon}
              </div>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-color)',
                marginBottom: '0.75rem'
              }}>
                {region.name}
              </h3>
              <p style={{
                color: 'var(--text-light)',
                fontSize: '0.9375rem',
                lineHeight: 1.6
              }}>
                {region.countries}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
