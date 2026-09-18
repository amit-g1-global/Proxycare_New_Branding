import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

/** Document order on home page — used by scroll spy so the correct section highlights. */
export const SECTION_IDS = ['what-we-do', 'how-it-works', 'our-team', 'faq', 'contact'] as const;

type NavHighlightContextValue = {
  activeSection: string;
};

const NavHighlightContext = createContext<NavHighlightContextValue>({ activeSection: '' });

export function useNavHighlight() {
  return useContext(NavHighlightContext);
}

export function NavHighlightProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState('');

  const updateFromScroll = useCallback(() => {
    if (location.pathname !== '/') return;
    const offset = 120;
    let current = '';
    for (const id of SECTION_IDS) {
      const el = document.getElementById(id);
      if (!el) continue;
      const top = el.getBoundingClientRect().top;
      if (top <= offset) current = id;
    }
    setActiveSection(current);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== '/') {
      setActiveSection('');
      return;
    }

    updateFromScroll();
    const t = window.setTimeout(updateFromScroll, 150);

    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('hashchange', updateFromScroll);
    window.addEventListener('resize', updateFromScroll);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('hashchange', updateFromScroll);
      window.removeEventListener('resize', updateFromScroll);
    };
  }, [location.pathname, location.hash, updateFromScroll]);

  const value = useMemo(() => ({ activeSection }), [activeSection]);

  return <NavHighlightContext.Provider value={value}>{children}</NavHighlightContext.Provider>;
}
