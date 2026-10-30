import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

import { PROXYCARE_WHATSAPP_URL } from '../constants/externalLinks';
import WhatsAppButtonIcon from '../assets/contact/whatsapp-button.svg';
import WhatsAppQrLogo from '../assets/contact/whatsapp-qr-logo.svg';
import CardGradientShape from '../assets/contact/card-gradient-shape.svg';

// The WhatsApp QR image is added as src/assets/contact/whatsapp-qr.(png|jpg|svg); until then the tile shows only the WhatsApp logo.
const whatsAppQr = Object.values(
  import.meta.glob<string>('../assets/contact/whatsapp-qr.{png,jpg,jpeg,svg,webp}', { eager: true, import: 'default' })
)[0];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    mail: '',
    phone: '',
    message: '',
  });

  const [toast, setToast] = useState<{ show: boolean; message: string; type: 'success' | 'warning' }>({
    show: false,
    message: '',
    type: 'warning',
  });
  const [isSending, setIsSending] = useState(false);

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
          Message: form.message.trim(),
          'Time (IST)': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });

      const result = await response.json();
      if (response.ok && (result.success === 'true' || result.success === true || result.success)) {
        showNotification('Your details submitted successfully.', 'success');
        setForm({ name: '', mail: '', phone: '', message: '' });
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

      <main className="pc-ct-page">
        <h1 className="pc-ct-title">Ready to start your journey with ProxyCare?</h1>

        <form className="pc-ct-card" onSubmit={handleSubmit} noValidate>
          <div className="pc-ct-top">
            <div className="pc-ct-fields">
              <div className="pc-ct-field">
                <label className="pc-ct-label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="pc-ct-input"
                  autoComplete="name"
                />
              </div>
              <div className="pc-ct-field">
                <label className="pc-ct-label" htmlFor="contact-mail">Mail</label>
                <input
                  id="contact-mail"
                  type="email"
                  name="mail"
                  value={form.mail}
                  onChange={handleChange}
                  className="pc-ct-input"
                  autoComplete="email"
                />
              </div>
              <div className="pc-ct-field">
                <label className="pc-ct-label" htmlFor="contact-phone">Phone</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="pc-ct-input"
                  autoComplete="tel"
                />
              </div>
            </div>

            <div className="pc-ct-wa-card">
              <img src={CardGradientShape} alt="" className="pc-ct-wa-shape" width={539} height={560} />
              <div className="pc-ct-wa-message">
                <p className="pc-ct-wa-title">Prefer WhatsApp?</p>
                <a href={PROXYCARE_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="pc-ct-wa-btn">
                  <img src={WhatsAppButtonIcon} alt="" width={28} height={28} />
                  Chat on WhatsApp
                </a>
              </div>
              <div className="pc-ct-wa-or" aria-hidden="true">
                <span className="pc-ct-wa-or-line" />
                <span className="pc-ct-wa-or-badge">or</span>
                <span className="pc-ct-wa-or-line" />
              </div>
              <a href={PROXYCARE_WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="pc-ct-wa-qr" aria-label="Chat with our team on WhatsApp">
                <span className="pc-ct-wa-qr-tile">
                  {whatsAppQr && <img src={whatsAppQr} alt="WhatsApp QR code" className="pc-ct-wa-qr-img" width={150} height={150} />}
                  <img src={WhatsAppQrLogo} alt="" className="pc-ct-wa-qr-logo" width={42} height={42} />
                </span>
                <span className="pc-ct-wa-qr-caption">Scan to chat with our team</span>
              </a>
            </div>
          </div>

          <div className="pc-ct-bottom">
            <div className="pc-ct-note">
              <label className="pc-ct-label" htmlFor="contact-message">Leave us a note</label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="pc-ct-input pc-ct-textarea"
                placeholder="Tell us how we can help you"
                rows={1}
              />
            </div>
            <button type="submit" className="pc-ct-submit" disabled={isSending}>
              {isSending && <Loader2 size={18} className="pc-spin" />}
              {isSending ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </form>
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
