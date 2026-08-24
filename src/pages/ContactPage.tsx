import React, { useState } from 'react';
import { ChevronDown, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

import ContactRightFrame from '../assets/Contact_Right_Frame.png';
import LocationIcon from '../assets/Location_Icon_Contact.svg';
import CallIcon from '../assets/Call_Icon_Contact.svg';
import MailIcon from '../assets/Mail_Icon_Contact.svg';
import WebIcon from '../assets/Web_Icon_Contact.svg';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    mail: '',
    phone: '',
    location: '',
    message: '',
  });

  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'warning' }>({
    show: false,
    message: '',
    type: 'warning',
  });
  const [isSending, setIsSending] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const formatPhoneNumber = (val: string) => {
    // Keep only numbers
    const digits = val.replace(/\D/g, '');

    // Check if user typed country code 91
    let mobile = digits;
    if (digits.startsWith('91') && digits.length > 2) {
      mobile = digits.slice(2);
    }

    // Limit to 10 digits
    mobile = mobile.slice(0, 10);

    // Format as "+91 98765 43210"
    if (mobile.length > 5) {
      return `+91 ${mobile.slice(0, 5)} ${mobile.slice(5)}`;
    } else if (mobile.length > 0) {
      return `+91 ${mobile}`;
    }
    return '';
  };

  const showNotification = (message: string, type: 'success' | 'warning') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast(prev => ({ ...prev, show: false }));
    }, 4000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (name === 'name') {
      // Strip anything that is NOT a letter or space
      const filteredValue = value.replace(/[^a-zA-Z\s]/g, '');
      setForm(prev => ({ ...prev, name: filteredValue }));
      return;
    }

    if (name === 'phone') {
      const formatted = formatPhoneNumber(value);
      setForm(prev => ({ ...prev, phone: formatted }));
      return;
    }

    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Mandatory checks
    if (!form.name.trim()) {
      showNotification('Name is a mandatory field.', 'warning');
      return;
    }
    if (!form.mail.trim()) {
      showNotification('Email is a mandatory field.', 'warning');
      return;
    }
    if (!form.phone.trim()) {
      showNotification('Phone number is a mandatory field.', 'warning');
      return;
    }
    if (!form.location) {
      showNotification('Location selection is a mandatory field.', 'warning');
      return;
    }
    if (!form.message.trim()) {
      showNotification('Message is a mandatory field.', 'warning');
      return;
    }

    // 2. Format checks
    if (!/^[a-zA-Z\s]+$/.test(form.name)) {
      showNotification('Name can only contain alphabetical letters.', 'warning');
      return;
    }

    // Correct email validation (contains @ symbol, dot and text)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.mail)) {
      showNotification('Please enter a valid email address containing "@" and standard domains.', 'warning');
      return;
    }

    // Exact phone format validation: +91 98765 43210
    const phoneRegex = /^\+91 \d{5} \d{5}$/;
    if (!phoneRegex.test(form.phone)) {
      showNotification('Phone number must contain exactly 10 digits in "+91 XXXXX XXXXX" format.', 'warning');
      return;
    }

    setIsSending(true);

    try {
      // Submit via FormSubmit AJAX endpoint directly to sales@proxy.care (no key required)
      const response = await fetch('https://formsubmit.co/ajax/sales@proxy.care', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Contact Inquiry from ${form.name}`,
          Name: form.name.trim(),
          Email: form.mail.trim(),
          Phone: form.phone.trim(),
          Location: form.location,
          Message: form.message.trim(),
          'Time (IST)': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });

      const result = await response.json();
      if (response.ok && (result.success === 'true' || result.success === true || result.success)) {
        showNotification('Your details submitted successfully.', 'success');
        setForm({ name: '', mail: '', phone: '', location: '', message: '' });
      } else {
        showNotification(result.message || 'Failed to submit details.', 'warning');
      }
    } catch (error) {
      console.error('Submission error:', error);
      showNotification('Network error. Failed to send message.', 'warning');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#faf6f0' }}>
      <Navbar />

      <main className="pc-contact-page">
        {/* Page heading */}
        <div className="pc-contact-heading">
          <h1 className="pc-contact-title">Contact us</h1>
        </div>

        {/* Main contact card */}
        <div className="pc-contact-card">

          {/* ── Left: Office Info Panel ── */}
          <div className="pc-contact-info-panel">
            {/* Background image overlay */}
            <img src={ContactRightFrame} alt="" className="pc-contact-panel-bg" />

            <div className="pc-contact-info-content">
              <h2 className="pc-contact-office-title">Our Office</h2>

              <div className="pc-contact-info-rows">
                {/* Address */}
                <div className="pc-contact-info-row">
                  <div className="pc-contact-icon-circle">
                    <img src={LocationIcon} alt="Location" />
                  </div>
                  <a
                    href="https://maps.google.com/?q=AWFIS,+2nd+Floor+ICP+800,+Rd+Number+36,+near+metro+pillar+no.+C1669,+CBI+Colony,+Jubilee+Hills,+Hyderabad,+Telangana+500033"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    AWFIS, 2nd Floor ICP 800, Rd Number 36, near metro pillar
                    no. C1669, CBI Colony, Jubilee Hills, Hyderabad, Telangana
                    500033
                  </a>
                </div>

                {/* Phone */}
                <div className="pc-contact-info-row">
                  <div className="pc-contact-icon-circle">
                    <img src={CallIcon} alt="Call" />
                  </div>
                  <a href="tel:+919182361266">+91 91823 61266</a>
                </div>

                {/* Email */}
                <div className="pc-contact-info-row">
                  <div className="pc-contact-icon-circle">
                    <img src={MailIcon} alt="Mail" />
                  </div>
                  <a href="mailto:sales@proxy.care">sales@proxy.care</a>
                </div>

                {/* Website */}
                <div className="pc-contact-info-row">
                  <div className="pc-contact-icon-circle">
                    <img src={WebIcon} alt="Website" />
                  </div>
                  <a href="https://www.proxy.care" target="_blank" rel="noopener noreferrer">www.proxy.care</a>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <div className="pc-contact-form-panel">
            <p className="pc-contact-form-subtitle">
              Drop your details here and we'll contact you shortly.
            </p>

            <form className="pc-contact-form" onSubmit={handleSubmit}>
              <div className="pc-contact-form-fields">
                {/* Row 1: Name + Mail */}
                <div className="pc-contact-form-row">
                  <div className="pc-contact-field">
                    <label className="pc-contact-label" htmlFor="contact-name">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="pc-contact-input"
                      autoComplete="name"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div className="pc-contact-field">
                    <label className="pc-contact-label" htmlFor="contact-mail">
                      Mail
                    </label>
                    <input
                      id="contact-mail"
                      type="email"
                      name="mail"
                      value={form.mail}
                      onChange={handleChange}
                      className="pc-contact-input"
                      autoComplete="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Location */}
                <div className="pc-contact-form-row">
                  <div className="pc-contact-field">
                    <label
                      className="pc-contact-label"
                      htmlFor="contact-phone"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="pc-contact-input"
                      autoComplete="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="pc-contact-field">
                    <label
                      className="pc-contact-label"
                      htmlFor="contact-location"
                    >
                      Location
                    </label>
                    <div
                      className="pc-custom-select-container"
                      tabIndex={0}
                      onBlur={() => setTimeout(() => setDropdownOpen(false), 200)}
                    >
                      <div
                        className={`pc-custom-select-trigger ${form.location ? 'selected' : ''}`}
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                      >
                        <span>{form.location || 'Select your location'}</span>
                        <ChevronDown size={18} className={`pc-select-chevron ${dropdownOpen ? 'open' : ''}`} />
                      </div>
                      {dropdownOpen && (
                        <div className="pc-custom-select-options">
                          <div
                            className="pc-custom-select-option"
                            onClick={() => {
                              setForm(prev => ({ ...prev, location: 'Hyderabad' }));
                              setDropdownOpen(false);
                            }}
                          >
                            Hyderabad
                          </div>
                          <div
                            className="pc-custom-select-option"
                            onClick={() => {
                              setForm(prev => ({ ...prev, location: 'Ahmedabad' }));
                              setDropdownOpen(false);
                            }}
                          >
                            Ahmedabad
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="pc-contact-field" style={{ width: '100%' }}>
                  <label
                    className="pc-contact-label"
                    htmlFor="contact-message"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    className="pc-contact-input"
                    placeholder="Write your message..."
                    rows={4}
                    style={{ resize: 'none', minHeight: '100px', paddingTop: '8px' }}
                  />
                </div>
              </div>

              {/* Submit row */}
              <div className="pc-contact-submit-row">
                <button
                  type="submit"
                  className="pc-contact-submit"
                  disabled={isSending}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  {isSending && <Loader2 size={18} className="pc-spin" />}
                  {isSending ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      {/* Top toast notification */}
      {toast.show && (
        <div className={`pc-toast-notification pc-toast-${toast.type}`}>
          <div className="pc-toast-content">
            {toast.type === 'warning' ? (
              <AlertCircle size={20} className="pc-toast-icon-warning" />
            ) : (
              <CheckCircle2 size={20} className="pc-toast-icon-success" />
            )}
            <span className="pc-toast-message">{toast.message}</span>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
