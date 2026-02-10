import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { ThemedBackground } from '../theme/ThemedBackground';

export function RootLayout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash (e.g., #journey)
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      
      if (element) {
        // Small delay to allow the page to render before scrolling
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    } else {
      // If navigating to a new page without a hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]); // Trigger whenever path or hash changes

  return (
    <ThemedBackground>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-16 sm:pt-20">
          <Outlet />
        </main>
      </div>
    </ThemedBackground>
  );
}