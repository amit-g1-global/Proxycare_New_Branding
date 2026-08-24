import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo_Main from '../assets/Logo_Main.png';
import { useNavHighlight } from '../context/NavHighlightContext';
import { PROXYCARE_LOGIN_URL } from '../constants/externalLinks';
import { SectionNavLink } from './SectionNavLink';

const sectionLinks = [
  { label: 'How it works', id: 'how-it-works' },
  { label: 'What we do', id: 'what-we-do' },
  { label: 'Our team', id: 'our-team' },
] as const;

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { activeSection } = useNavHighlight();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  const sectionClass = (id: string) =>
    activeSection === id ? 'pc-nav-link-active' : undefined;

  return (
    <nav className={`pc-nav ${scrolled ? 'scrolled' : ''}`}>
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
        <NavLink
          to="/blogs"
          end={false}
          className={({ isActive }) => (isActive ? 'pc-nav-link-active' : undefined)}
          onClick={() => setOpen(false)}
        >
          Blogs
        </NavLink>
        <NavLink
          to="/contact"
          end={false}
          className={({ isActive }) => (isActive ? 'pc-nav-link-active' : undefined)}
          onClick={() => setOpen(false)}
        >
          Contact us
        </NavLink>
      </div>
      <a
        href={PROXYCARE_LOGIN_URL}
        className="pc-btn-login"
        rel="noopener noreferrer"
      >
        Login
      </a>
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
        {sectionLinks.map(({ label, id }) => (
          <SectionNavLink key={id} sectionId={id} className={sectionClass(id)} onNavigate={() => setOpen(false)}>
            {label}
          </SectionNavLink>
        ))}
        <NavLink to="/blogs" end={false} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'pc-nav-link-active' : undefined)}>
          Blogs
        </NavLink>
        <NavLink to="/contact" end={false} onClick={() => setOpen(false)} className={({ isActive }) => (isActive ? 'pc-nav-link-active' : undefined)}>
          Contact us
        </NavLink>
        <a
          href={PROXYCARE_LOGIN_URL}
          className="pc-btn-login-mobile"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Login
        </a>
      </div>
    </nav>
  );
};
