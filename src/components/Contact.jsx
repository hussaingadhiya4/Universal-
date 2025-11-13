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
    <section id={anchor} style={{
      padding: '6rem 1.5rem',
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '30%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(102, 126, 234, 0.2) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(100px)'
      }} />

      <div style={{ maxWidth: '72rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{
            display: 'inline-block',
            padding: '0.5rem 1.25rem',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '2rem',
            marginBottom: '1.5rem',
            fontSize: '0.875rem',
            fontWeight: 700,
            color: '#667eea',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            backdropFilter: 'blur(10px)'
          }}>
            Get Started
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
          gap: '4rem',
          alignItems: 'start'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            borderRadius: '2rem',
            padding: '3rem 2.5rem',
            color: 'white',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(255, 255, 255, 0.1)'
          }}>
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              marginBottom: '2.5rem',
              background: 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Get In Touch
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '0.75rem'
                }}>📧</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Email</div>
                <a href={`mailto:${contactDetails.email}`} style={{
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'white',
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = '#667eea'}
                onMouseLeave={(e) => e.target.style.color = 'white'}
                >
                  {contactDetails.email}
                </a>
              </div>

              <div>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '0.75rem'
                }}>📞</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Phone</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 600 }}>{contactDetails.phone}</div>
              </div>

              <div>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '0.75rem'
                }}>📍</div>
                <div style={{ fontSize: '0.875rem', opacity: 0.8, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Address</div>
                <div style={{ fontSize: '1.125rem', fontWeight: 600, lineHeight: 1.6 }}>{contactDetails.address}</div>
              </div>
            </div>
          </div>

          <div style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.1) 100%)',
            borderRadius: '2rem',
            padding: '3rem',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(20px)'
          }}>
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label style={{
                      display: 'block',
                      fontSize: '0.9375rem',
                      fontWeight: 600,
                      color: 'white',
                      marginBottom: '0.75rem'
                    }}>
                      {field.label} {field.required && <span style={{ color: '#f093fb' }}>*</span>}
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
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '0.75rem',
                          padding: '1rem',
                          fontSize: '1rem',
                          fontFamily: 'inherit',
                          transition: 'all 0.3s ease',
                          resize: 'vertical',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'white'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#667eea';
                          e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      />
                    ) : field.type === 'select' ? (
                      <select
                        name={field.name}
                        required={field.required}
                        onChange={handleChange}
                        value={formData[field.name] || ''}
                        style={{
                          width: '100%',
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '0.75rem',
                          padding: '1rem',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'white'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#667eea';
                          e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
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
                          border: '2px solid rgba(255, 255, 255, 0.2)',
                          borderRadius: '0.75rem',
                          padding: '1rem',
                          fontSize: '1rem',
                          transition: 'all 0.3s ease',
                          background: 'rgba(255, 255, 255, 0.1)',
                          color: 'white'
                        }}
                        onFocus={(e) => {
                          e.target.style.borderColor = '#667eea';
                          e.target.style.background = 'rgba(255, 255, 255, 0.15)';
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                        }}
                      />
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    padding: '1.25rem',
                    background: loading ? 'rgba(255, 255, 255, 0.2)' : 'linear-gradient(135deg, #667eea 0%, #f093fb 100%)',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    borderRadius: '1rem',
                    border: 'none',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    boxShadow: loading ? 'none' : '0 10px 40px rgba(102, 126, 234, 0.5)',
                    marginTop: '0.5rem'
                  }}
                  onMouseEnter={(e) => {
                    if (!loading) {
                      e.target.style.transform = 'translateY(-3px) scale(1.02)';
                      e.target.style.boxShadow = '0 15px 50px rgba(102, 126, 234, 0.6)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!loading) {
                      e.target.style.transform = 'translateY(0) scale(1)';
                      e.target.style.boxShadow = '0 10px 40px rgba(102, 126, 234, 0.5)';
                    }
                  }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                {status === 'success' && (
                  <div style={{
                    padding: '1rem',
                    background: 'rgba(16, 185, 129, 0.2)',
                    color: '#10B981',
                    borderRadius: '0.75rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    border: '2px solid rgba(16, 185, 129, 0.3)'
                  }}>
                    Thank you! We'll get back to you soon.
                  </div>
                )}
                {status === 'error' && (
                  <div style={{
                    padding: '1rem',
                    background: 'rgba(239, 68, 68, 0.2)',
                    color: '#EF4444',
                    borderRadius: '0.75rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    border: '2px solid rgba(239, 68, 68, 0.3)'
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
