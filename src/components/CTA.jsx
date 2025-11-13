export default function CTA({ props }) {
  const { text, cta } = props;

  return (
    <section style={{
      padding: '2rem 1.5rem',
      backgroundColor: 'var(--accent-color)',
      borderTopLeftRadius: '0.75rem',
      borderTopRightRadius: '0.75rem'
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1rem',
        textAlign: 'center'
      }}>
        <p style={{ fontSize: '1.125rem', fontWeight: 600, color: 'white' }}>
          {text}
        </p>
        <a
          href={cta.href}
          style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            borderRadius: '9999px',
            backgroundColor: 'white',
            color: 'var(--accent-color)',
            fontWeight: 600,
            transition: 'opacity 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.9'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          {cta.label}
        </a>
      </div>
    </section>
  );
}
