import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#faf6f0', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main className="pc-legal-container">
        <h1 className="pc-legal-title" style={{ textAlign: 'center' }}>
          Privacy Policy
        </h1>
        <p className="pc-legal-subtitle" style={{ textAlign: 'center' }}>
          Your Privacy is Our Promise
        </p>

        <div className="pc-legal-card">
          {/* Section 1: Introduction */}
          <section style={{ marginBottom: '40px' }}>
            <p style={{ fontSize: '16px', fontWeight: 500, color: '#0d2137', marginBottom: '16px' }}>
              At ProHealth Services LLP, your privacy isn't just a policy – it's a promise.
            </p>
            <p style={{ marginBottom: '16px' }}>
              As a pioneering entity in ProHealth Services LLP, we recognize the paramount importance of safeguarding personal data and upholding the trust you bestow upon us. Our commitment is underpinned by transparency and integrity. This policy elucidates the manner in which we handle, use, and store your data. When you visit our website or engage with our services, you do so with the assurance that your information is secure and that you acknowledge the practices described herein.
            </p>
            <p style={{ margin: 0 }}>
              Our principle is simple – minimal, purposeful data collection. The sole piece of personal data we gather is your email address, and this isn't done covertly or without reason. We collect it only when you, the user, voluntarily provide it to us, often through forms or subscription services on our website. You always have a choice, and your consent is the foundation of our data collection.
            </p>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid #efece8', margin: '32px 0' }} />

          {/* Section 2: Data Usage */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', fontWeight: 600, color: '#0d2137', marginBottom: '20px' }}>
              How We Use Your Data
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0d2137', marginBottom: '8px' }}>Customized Communication</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#6f6f6f' }}>
                  At the core of our data collection is the desire to serve you better. By collecting your email address, we aim to curate content that aligns with your interests and requirements. It's not about inundating your inbox; it's about sending communications that add value to your day.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0d2137', marginBottom: '8px' }}>Service Recommendations</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#6f6f6f' }}>
                  ProHealth is a vast domain, and our offerings are expansive. By understanding the kind of content you engage with, we can tailor recommendations that might be of significance to your professional journey. This ensures that you stay abreast of the latest trends and services in ProHealth without having to sift through a plethora of information.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0d2137', marginBottom: '8px' }}>Feedback and Surveys</h3>
                <p style={{ margin: 0, fontSize: '14px', color: '#6f6f6f' }}>
                  Occasionally, we might use your email to seek feedback or have you participate in surveys. This helps us understand user experience and expectations, allowing ProHealth to continually enhance its offerings and user interface.
                </p>
              </div>
            </div>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid #efece8', margin: '32px 0' }} />

          {/* Section 3: Data Security & Retention */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', fontWeight: 600, color: '#0d2137', marginBottom: '20px' }}>
              Data Security & Retention
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0d2137', marginBottom: '6px' }}>Cloud-based Security & Encryption</h3>
                <p style={{ margin: 0 }}>
                  Your data resides in a secure cloud environment, fortified with advanced encryption protocols, ensuring that it remains inaccessible to external threats. We employ end-to-end encryption, ensuring that from the moment your data is inputted to the moment it's processed or stored, it remains encrypted and thus, undecipherable to potential interceptors.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0d2137', marginBottom: '6px' }}>Retention Period & Automatic Deletion</h3>
                <p style={{ margin: 0 }}>
                  Consistent with our commitment to data minimalism, we don't hoard your data indefinitely. Your email address, once provided, remains in our system for a concise period of 30 days. Post this window, our system is programmed to automatically delete your data. This mechanized process ensures there's no oversight, reaffirming our commitment to data security and minimalism.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0d2137', marginBottom: '6px' }}>Proactive Monitoring & Audits</h3>
                <p style={{ margin: 0 }}>
                  Beyond encryption, ProHealth has implemented continuous monitoring tools that scan our databases for any unusual activities. This enables us to identify and counteract potential security threats before they can manifest into breaches. As a testament to these measures, ProHealth has maintained a pristine record of zero data breaches.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0d2137', marginBottom: '6px' }}>Data Integrity, Accuracy & Employee Training</h3>
                <p style={{ margin: 0 }}>
                  While in our system, we ensure that the data remains unaltered and accurate. Any updates or changes made by users are reflected in real-time. Furthermore, all our employees undergo rigorous data protection and cybersecurity training, periodically updated about the latest threats and security protocols.
                </p>
              </div>
            </div>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid #efece8', margin: '32px 0' }} />

          {/* Section 4: User Rights */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', fontWeight: 600, color: '#0d2137', marginBottom: '20px' }}>
              Your Data Rights
            </h2>
            <p style={{ marginBottom: '16px' }}>
              We believe in complete user agency and transparency. As a user, you hold the following rights:
            </p>
            <ul style={{ paddingLeft: '20px', margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <strong>Right to Access:</strong> You hold the right to request and view the specific data we hold about you at any given time.
              </li>
              <li>
                <strong>Data Modification:</strong> You have the right to modify or correct any inaccuracies. If you feel the email or any other related data you provided has changed or was mistakenly entered, you can rectify it seamlessly.
              </li>
              <li>
                <strong>Opt-Out Options:</strong> While we aim to provide value through our communications, we also understand and respect individual preferences. You can choose to opt out of our communications at any point, either by clicking the 'unsubscribe' link in our emails or by reaching out to us directly.
              </li>
              <li>
                <strong>Data Erasure:</strong> Even within the 30-day retention period, if you wish for your data to be removed from our system prematurely, you can exercise this right. Your request will be honored promptly, ensuring your email address and any related data is purged from our database.
              </li>
              <li>
                <strong>Informed Consent:</strong> Any changes to our data collection or usage practices will be communicated to you, ensuring you're always informed.
              </li>
            </ul>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid #efece8', margin: '32px 0' }} />

          {/* Section 5: Data Policies */}
          <section style={{ marginBottom: '40px' }}>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', fontWeight: 600, color: '#0d2137', marginBottom: '20px' }}>
              Sharing & Tracking Policies
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0d2137', marginBottom: '6px' }}>No Sharing Policy</h3>
                <p style={{ margin: 0 }}>
                  At ProHealth, our commitment to privacy extends to external interactions. We firmly adhere to a "No Sharing Policy," meaning that your email address or any other data you provide will not be sold, leased, or shared with third-party entities, integrators, or partners. Should we decide in the future to incorporate any third-party tools, you will be notified well in advance and such integrations would undergo rigorous security scrutiny.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0d2137', marginBottom: '6px' }}>No-Cookie Policy</h3>
                <p style={{ margin: 0 }}>
                  In our endeavor to maintain transparency, ProHealth has opted for a "No-Cookie Policy" for tracking. This means that when you visit our platform, we do not deposit small data files known as "cookies" on your device to monitor your activity.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0d2137', marginBottom: '6px' }}>Analytical Data & Future Implementations</h3>
                <p style={{ margin: 0 }}>
                  While we don't use cookies, like most websites, our servers might automatically collect data like IP address, browser type, and the date and time of access. This data is purely for analytical purposes, helping us understand user behavior and improve our services (it is aggregated and does not personally identify any user). If we implement cookies in the future, clear consent will be sought.
                </p>
              </div>
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#0d2137', marginBottom: '6px' }}>External Links</h3>
                <p style={{ margin: 0 }}>
                  Our website might contain links to external sites or resources. Once you click on these links and leave our site, we don't have any control over the destination site. We cannot be responsible for the protection and privacy of any data you provide while visiting such sites, as they are not governed by this privacy statement.
                </p>
              </div>
            </div>
          </section>

          <hr style={{ border: 'none', borderTop: '1px solid #efece8', margin: '32px 0' }} />

          {/* Section 6: Regulatory Compliance & Contact */}
          <section>
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '24px', fontWeight: 600, color: '#0d2137', marginBottom: '20px' }}>
              Regional Compliance & Inquiries
            </h2>
            <p style={{ marginBottom: '16px' }}>
              ProHealth proudly serves users across diverse geographies, including North America and Europe. With this expansive reach comes the responsibility of understanding and adhering to various regional data protection regulations:
            </p>
            <ul style={{ paddingLeft: '20px', marginBottom: '24px' }}>
              <li style={{ marginBottom: '8px' }}>
                <strong>GDPR Compliance:</strong> For our European users, we rigorously adhere to the General Data Protection Regulation (GDPR), ensuring a lawful basis for processing, providing clear notices, and offering strong data protection rights.
              </li>
              <li>
                <strong>North American Regulations:</strong> Similarly, we comply with regional data protection and privacy laws in North America to safeguard the data of all our users.
              </li>
            </ul>
            <p style={{ margin: '0 0 16px' }}>
              Recognizing the importance of clear communication, ProHealth has established a direct communication channel for all privacy-related concerns. Users can effortlessly reach out via the 'Contact Us' form on our platform or email us directly at <a href="mailto:sales@proxy.care" style={{ color: '#1147a8', textDecoration: 'none', fontWeight: 500 }}>sales@proxy.care</a>.
            </p>
            <p style={{ margin: 0 }}>
              At ProHealth, we view our relationship with users as a partnership. Feedback, be it positive or areas of improvement, is invaluable to us, and our dedicated team works diligently to address all queries in the shortest possible timeframe.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
