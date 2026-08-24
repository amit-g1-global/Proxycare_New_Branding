/** Fixed nav height + breathing room so section headings aren’t hidden under the bar */
const NAV_OFFSET_PX = 96;

export function scrollToSectionId(sectionId: string, behavior: ScrollBehavior = 'smooth'): boolean {
  const el = document.getElementById(sectionId);
  if (!el) return false;

  const lenis = (window as any).lenis;
  if (lenis) {
    lenis.scrollTo(el, { offset: -NAV_OFFSET_PX });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;
    window.scrollTo({ top: Math.max(0, top), behavior });
  }

  try {
    window.history.replaceState(null, '', `#${sectionId}`);
  } catch {
    /* ignore */
  }
  return true;
}
