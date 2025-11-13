import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_SUPABASE_ANON_KEY
);

export default function Contact({ props }) {
  const { anchor, title, subtitle, formFields, contactDetails, brochure } = props;
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([{
          name: formData.name,
          company: formData.company || null,
          email: formData.email,
          phone: formData.phone || null,
          message: formData.message
        }]);

      if (error) throw error;

      setStatus('success');
      setFormData({});
      e.target.reset();
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={anchor} style={{ padding: '4rem 1.5rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem'
        }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--gray-900)', marginBottom: '0.5rem' }}>
              {title}
            </h2>
            <p style={{ color: 'var(--gray-600)', marginBottom: '2rem' }}>
              {subtitle}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <div>
                <strong style={{ color: 'var(--gray-800)' }}>Email:</strong>
                <div style={{ color: 'var(--gray-600)' }}>{contactDetails.email}</div>
              </div>
              <div>
                <strong style={{ color: 'var(--gray-800)' }}>Phone:</strong>
                <div style={{ color: 'var(--gray-600)' }}>{contactDetails.phone}</div>
              </div>
              <div>
                <strong style={{ color: 'var(--gray-800)' }}>Address:</strong>
                <div style={{ color: 'var(--gray-600)' }}>{contactDetails.address}</div>
              </div>
            </div>

            {brochure && (
              <a
                href={brochure.href}
                style={{
                  display: 'inline-block',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: 'var(--gray-100)',
                  color: 'var(--accent-color)',
                  fontWeight: 600,
                  borderRadius: '0.5rem',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--gray-200)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'var(--gray-100)'}
              >
                {brochure.label}
              </a>
            )}
          </div>

          <div>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label style={{
                      display: 'block',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: 'var(--gray-700)',
                      marginBottom: '0.25rem'
                    }}>
                      {field.label} {field.required && <span style={{ color: 'red' }}>*</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        name={field.name}
                        required={field.required}
                        onChange={handleChange}
                        rows={4}
                        style={{
                          width: '100%',
                          border: '1px solid var(--gray-200)',
                          borderRadius: '0.5rem',
                          padding: '0.75rem',
                          fontSize: '1rem',
                          fontFamily: 'inherit'
                        }}
                      />
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        onChange={handleChange}
                        style={{
                          width: '100%',
                          border: '1px solid var(--gray-200)',
                          borderRadius: '0.5rem',
                          padding: '0.75rem',
                          fontSize: '1rem'
                        }}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: '0.875rem',
                    backgroundColor: loading ? 'var(--gray-400)' : 'var(--accent-color)',
                    color: 'white',
                    fontWeight: 600,
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => !loading && (e.target.style.backgroundColor = 'var(--accent-dark)')}
                  onMouseLeave={(e) => !loading && (e.target.style.backgroundColor = 'var(--accent-color)')}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <div style={{ padding: '0.75rem', backgroundColor: '#D1FAE5', color: '#065F46', borderRadius: '0.5rem' }}>
                    Thank you! We'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div style={{ padding: '0.75rem', backgroundColor: '#FEE2E2', color: '#991B1B', borderRadius: '0.5rem' }}>
                    Something went wrong. Please try again.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
