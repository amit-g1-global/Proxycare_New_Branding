import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollToSectionId } from '../utils/scrollToSection';

type SectionNavLinkProps = {
  sectionId: string;
  className?: string | undefined;
  children: React.ReactNode;
  onNavigate?: () => void;
};

/**
 * Hash section links: React Router `Link` to `/#id` does not scroll when already on `/`.
 */
export function SectionNavLink({ sectionId, className, children, onNavigate }: SectionNavLinkProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onNavigate?.();

    if (location.pathname === '/') {
      scrollToSectionId(sectionId);
      return;
    }

    navigate({ pathname: '/', hash: sectionId });
  };

  return (
    <a href={`/#${sectionId}`} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
