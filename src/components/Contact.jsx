import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_SUPABASE_ANON_KEY
);

export default function Contact({ props }) {
  const { anchor, title, subtitle, formFields, contactDetails } = props;
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
          country: formData.country || null,
          interest: formData.interest || null,
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
    <section id={anchor} style={{ padding: '5rem 1.5rem', backgroundColor: 'white' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
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
          gap: '4rem',
          alignItems: 'start'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, var(--accent-color) 0%, var(--accent-dark) 100%)',
            borderRadius: '1.5rem',
            padding: '3rem 2.5rem',
            color: 'white',
            boxShadow: '0 10px 40px rgba(30, 77, 123, 0.3)'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '2rem',
              color: 'var(--gold)'
            }}>
              Get In Touch
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '0.5rem'
                }}>📧</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.25rem' }}>Email</div>
                <a href={`mailto:${contactDetails.email}`} style={{
                  fontSize: '1.0625rem',
                  fontWeight: 600,
                  color: 'white',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--gold)'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  {contactDetails.email}
                </a>
              </div>

              <div>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '0.5rem'
                }}>📞</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.25rem' }}>Phone</div>
                <div style={{ fontSize: '1.0625rem', fontWeight: 600 }}>{contactDetails.phone}</div>
              </div>

              <div>
                <div style={{
                  fontSize: '2rem',
                  marginBottom: '0.5rem'
                }}>📍</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.9, marginBottom: '0.25rem' }}>Address</div>
                <div style={{ fontSize: '1.0625rem', fontWeight: 600 }}>{contactDetails.address}</div>
              </div>
            </div>
          </div>

          <div style={{
            background: 'white',
            borderRadius: '1.5rem',
            padding: '2.5rem',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
            border: '1px solid var(--gray-200)'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'var(--text-color)',
                      marginBottom: '0.5rem'
                    }}>
                      {field.label} {field.required && <span style={{ color: '#EF4444' }}>*</span>}
                    </label>
                    {field.type === 'textarea' ? (
                      <textarea
                        name={field.name}
                        required={field.required}
                        onChange={handleChange}
                        value={formData[field.name] || ''}
                        rows={4}
                        style={{
                          width: '100%',
                          border: '2px solid var(--gray-200)',
                          borderRadius: '0.75rem',
                          padding: '0.875rem',
                          fontSize: '1rem',
                          fontFamily: 'inherit',
                          transition: 'border-color 0.3s ease',
                          resize: 'vertical'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                      />
                    ) : field.type === 'select' ? (
                      <select
                        name={field.name}
                        required={field.required}
                        onChange={handleChange}
                        value={formData[field.name] || ''}
                        style={{
                          width: '100%',
                          border: '2px solid var(--gray-200)',
                          borderRadius: '0.75rem',
                          padding: '0.875rem',
                          fontSize: '1rem',
                          transition: 'border-color 0.3s ease',
                          backgroundColor: 'white'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                      >
                        <option value="">Select...</option>
                        {field.options?.map((option, idx) => (
                          <option key={idx} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        name={field.name}
                        required={field.required}
                        onChange={handleChange}
                        value={formData[field.name] || ''}
                        style={{
                          width: '100%',
                          border: '2px solid var(--gray-200)',
                          borderRadius: '0.75rem',
                          padding: '0.875rem',
                          fontSize: '1rem',
                          transition: 'border-color 0.3s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--accent-color)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--gray-200)'}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: '1rem',
                    background: loading ? 'var(--gray-400)' : 'linear-gradient(135deg, var(--gold) 0%, #B89554 100%)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.0625rem',
                    borderRadius: '0.75rem',
                    border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: loading ? 'none' : '0 4px 15px rgba(200, 165, 104, 0.3)',
                    marginTop: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.target.style.transform = 'translateY(-2px)';
                      e.target.style.boxShadow = '0 6px 20px rgba(200, 165, 104, 0.4)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.target.style.transform = 'translateY(0)';
                      e.target.style.boxShadow = '0 4px 15px rgba(200, 165, 104, 0.3)';
                    }
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <div style={{
                    padding: '1rem',
                    backgroundColor: '#D1FAE5',
                    color: '#065F46',
                    borderRadius: '0.75rem',
                    fontWeight: 500,
                    textAlign: 'center'
                  }}>
                    Thank you! We'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div style={{
                    padding: '1rem',
                    backgroundColor: '#FEE2E2',
                    color: '#991B1B',
                    borderRadius: '0.75rem',
                    fontWeight: 500,
                    textAlign: 'center'
                  }}>
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
