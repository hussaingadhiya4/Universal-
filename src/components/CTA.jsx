export default function CTA({ props }) {
  const { text, cta } = props;

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
        backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(200, 165, 104, 0.15) 0%, transparent 50%)'
      }} />

      <div style={{
        maxWidth: '56rem',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2rem',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <p style={{
          fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
          fontWeight: 700,
          color: 'white',
          lineHeight: 1.4,
          textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)'
        }}>
          {text}
        </p>
        <a
          href={cta.href}
          style={{
            display: 'inline-block',
            padding: '1rem 3rem',
            borderRadius: '0.75rem',
            background: 'linear-gradient(135deg, var(--gold) 0%, #B89554 100%)',
            color: 'white',
            fontWeight: 700,
            fontSize: '1.125rem',
            transition: 'all 0.3s ease',
            boxShadow: '0 10px 30px rgba(200, 165, 104, 0.4)',
            letterSpacing: '0.02em'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-3px) scale(1.05)';
            e.target.style.boxShadow = '0 15px 40px rgba(200, 165, 104, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0) scale(1)';
            e.target.style.boxShadow = '0 10px 30px rgba(200, 165, 104, 0.4)';
          }}
        >
          {cta.label}
        </a>
      </div>
    </section>
  );
}
