import { Link, NavLink } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import Logo_Main from '../assets/Logo_Main.png';
import { useNavHighlight } from '../context/NavHighlightContext';
import { SectionNavLink } from './SectionNavLink';

type QuickLink =
  | { label: string; sectionId: string; to?: never; isRoute?: never }
  | { label: string; to: string; isRoute: true; sectionId?: never };

const quickLinks: QuickLink[] = [
  { label: 'How it works', sectionId: 'how-it-works' },
  { label: 'What we do', sectionId: 'what-we-do' },
  { label: 'Our team', sectionId: 'our-team' },
  { label: 'Blogs', to: '/blogs', isRoute: true },
  { label: 'Contact us', to: '/contact', isRoute: true },
];

export const Footer = () => {
  const { activeSection } = useNavHighlight();

  const sectionClass = (id: string) =>
    activeSection === id ? 'pc-nav-link-active' : undefined;

  return (
    <footer className="pc-footer-light">
      <div className="pc-footer-light-grid">
        <div className="pc-footer-col-main">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Link 
              to="/" 
              aria-label="Go to home page"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <img src={Logo_Main} alt="Proxycare Logo" style={{ height: 64 }} />
            </Link>
          </div>
          <p className="pc-footer-light-desc">Proxycare is an independent fiduciary health advisory service. We support families with physician-led oversight, proactive care planning, and discreet coordination - always in your best health interest.</p>
        </div>
        <div>
          <div className="pc-footer-light-title">Quick Links</div>
          <ul className="pc-footer-light-links">
            {quickLinks.map((item) => (
              <li key={item.label}>
                {'isRoute' in item ? (
                  <NavLink
                    to={item.to}
                    end={false}
                    className={({ isActive }) => (isActive ? 'pc-nav-link-active' : undefined)}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <SectionNavLink
                    sectionId={item.sectionId as string}
                    className={sectionClass(item.sectionId as string)}
                  >
                    {item.label}
                  </SectionNavLink>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="pc-footer-light-title">Follow us</div>
          <ul className="pc-footer-light-links">
            {[
              { name: 'LinkedIn', icon: <img src="/assets/linkedin.png" alt="LinkedIn" style={{ width: 18, height: 18 }} />, url: 'https://www.linkedin.com/company/myproxycare' },
              { name: 'Instagram', icon: <img src="/assets/instagram.png" alt="Instagram" style={{ width: 18, height: 18 }} />, url: 'https://www.instagram.com/proxycare.india?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
              { name: 'FaceBook', icon: <img src="/assets/facebook.png" alt="Facebook" style={{ width: 18, height: 18 }} />, url: 'https://www.facebook.com/proxycare.india' },
              { name: 'Youtube', icon: <img src="/assets/youtube.png" alt="YouTube" style={{ width: 18, height: 18 }} />, url: 'https://www.youtube.com/channel/UC1HKRNh1Z7wbG-F3F0MX0Ug' },
            ].map(s => (
              <li key={s.name} className="pc-footer-light-social">
                <a href={s.url} target="_blank" rel="noopener noreferrer" aria-label={s.name}>
                  <span className="pc-contact-icon">{s.icon}</span>
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="pc-footer-light-title">Contacts us</div>
          <ul className="pc-footer-light-contacts">
            <li>
              <Mail size={18} className="pc-contact-icon" />
              <a href="mailto:sales@proxy.care">sales@proxy.care</a>
            </li>
            <li>
              <Phone size={18} className="pc-contact-icon" />
              <a href="tel:+919182361266">+91 91823 61266</a>
            </li>
            <li style={{ alignItems: 'flex-start' }}>
              <MapPin size={18} className="pc-contact-icon" style={{ marginTop: 2, flexShrink: 0 }} />
              <a 
                href="https://maps.google.com/?q=AWFIS,+2nd+Floor+ICP+800,+Rd+Number+36,+near+metro+pillar+no.+C1669,+CBI+Colony,+Jubilee+Hills,+Hyderabad,+Telangana+500033"
                target="_blank"
                rel="noopener noreferrer"
              >
                ICP 800, Rd Number 36, near metro pillar no. C1669, CBI Colony, Jubilee Hills, Hyderabad, Telangana - 500033 
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="pc-footer-light-bottom">
        <span>Copyright © 2025 Proxycare</span>
        <div>
          All Rights Reserved | <Link to="/terms-and-conditions">Terms and Conditions</Link> | <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
};
