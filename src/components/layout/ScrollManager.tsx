import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function ScrollManager() {
  const location = useLocation();

  useEffect(() => {
    // If URL has a hash (#about, #skills, etc.)
    if (location.hash) {
      const id = location.hash.slice(1); // remove '#'
      const el = document.getElementById(id);

      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }

    // No hash: normal page change -> scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname, location.hash]);

  return null;
}