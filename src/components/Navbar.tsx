import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import Logo_Main from '../assets/Logo_Main.png';
import { useNavHighlight } from '../context/NavHighlightContext';
import { PROXYCARE_LOGIN_URL } from '../constants/externalLinks';
import { SectionNavLink } from './SectionNavLink';

const sectionLinks = [
  { label: 'How it works', id: 'how-it-works' },
  { label: 'Our team', id: 'our-team' },
] as const;

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mediaOpen, setMediaOpen] = useState(false);
  const { activeSection } = useNavHighlight();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  // the open mobile menu fills the screen, so the page behind it should not scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const sectionClass = (id: string) =>
    activeSection === id ? 'pc-nav-link-active' : undefined;

  return (
    <nav className={`pc-nav ${scrolled ? 'scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <Link 
        to="/" 
        className="pc-nav-logo" 
        onClick={() => {
          setOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        <img src={Logo_Main} alt="Proxycare Logo" />
      </Link>
      <div className="pc-nav-links">
        {sectionLinks.map(({ label, id }) => (
          <SectionNavLink key={id} sectionId={id} className={sectionClass(id)}>
            {label}
          </SectionNavLink>
        ))}
        <div className="pc-nav-dropdown">
          <span className="pc-nav-dropdown-toggle">
            Media <ChevronDown size={16} />
          </span>
          <div className="pc-nav-dropdown-menu">
            <NavLink 
              to="/video" 
              className={({ isActive }) => `pc-nav-dropdown-item ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              Our Journey
            </NavLink>
            <NavLink 
              to="/blogs" 
              className={({ isActive }) => `pc-nav-dropdown-item ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              Blogs
            </NavLink>
          </div>
        </div>
      </div>
      <div className="pc-nav-actions">
        <Link to="/contact" className="pc-btn-nav-outline">
          Get Started
        </Link>
        <a
          href={PROXYCARE_LOGIN_URL}
          className="pc-btn-login"
          rel="noopener noreferrer"
        >
          Member Portal
        </a>
      </div>
      <button 
        className={`pc-nav-mobile-toggle ${open ? 'open' : ''}`} 
        onClick={() => setOpen(!open)} 
        aria-label="Toggle menu"
      >
        <span className="pc-hamburger-bar"></span>
        <span className="pc-hamburger-bar"></span>
        <span className="pc-hamburger-bar"></span>
      </button>
      <div className={`pc-nav-mobile-menu ${open ? 'open' : ''}`}>
        <div className="pc-nav-mobile-list">
          {sectionLinks.map(({ label, id }) => (
            <SectionNavLink
              key={id}
              sectionId={id}
              className={`pc-nav-mobile-item ${sectionClass(id) ?? ''}`}
              onNavigate={() => setOpen(false)}
            >
              {label}
              <ChevronRight size={20} className="pc-nav-mobile-chevron" />
            </SectionNavLink>
          ))}
          <div className={`pc-nav-mobile-dropdown ${mediaOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="pc-nav-mobile-item pc-nav-mobile-dropdown-toggle"
              aria-expanded={mediaOpen}
              onClick={() => setMediaOpen(!mediaOpen)}
            >
              Media
              <ChevronDown size={20} className="pc-nav-mobile-chevron" />
            </button>
            <div className="pc-nav-mobile-dropdown-menu">
              <NavLink
                to="/video"
                className={({ isActive }) => (isActive ? 'pc-nav-link-active' : undefined)}
                onClick={() => { setOpen(false); setMediaOpen(false); }}
              >
                Our Journey
              </NavLink>
              <NavLink to="/blogs" end={false} onClick={() => { setOpen(false); setMediaOpen(false); }} className={({ isActive }) => (isActive ? 'pc-nav-link-active' : undefined)}>
                Blogs
              </NavLink>
            </div>
          </div>
        </div>
        <div className="pc-nav-mobile-footer">
          <Link to="/contact" className="pc-btn-nav-outline-mobile" onClick={() => setOpen(false)}>
            Get Started
          </Link>
          <a
            href={PROXYCARE_LOGIN_URL}
            className="pc-btn-login-mobile"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Member Portal
          </a>
          <p className="pc-nav-mobile-help">Need help? We’re here for you</p>
          <p className="pc-nav-mobile-contact">
            <a href="mailto:sales@proxy.care">sales@proxy.care</a>
            <span aria-hidden="true">·</span>
            <a href="tel:+919182361266">+91 91823 61266</a>
          </p>
        </div>
      </div>
    </nav>
  );
};
