import React, { useState, useEffect } from 'react';
import { CiMail } from 'react-icons/ci';
import { FaCheckCircle } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (submitted || error) {
      const timeout = setTimeout(() => {
        setSubmitted(false);
        setError(false);
      }, 4000);
      return () => clearTimeout(timeout);
    }
  }, [submitted, error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('https://formspree.io/f/xgvakndb', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        console.error('Form error:', data);
        setError(true);
      }
    } catch (err) {
      console.error('Network error:', err);
      setError(true);
    }
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 d-flex justify-content-center align-items-center gap-2"><CiMail className='mt-1'/> Contact Me</h2>

        <div className="row justify-content-center">
          <div className="col-md-8">
            {submitted && (
              <div className="alert alert-success d-flex align-items-center" role="alert">
                <FaCheckCircle className="me-2" />
                Thank you! Your message has been sent.
              </div>
            )}

            {error && (
              <div className="alert alert-danger" role="alert">
                Oops! Something went wrong. Please try again later.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="text-center">
                <button type="submit" className="btn btn-primary px-5">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
