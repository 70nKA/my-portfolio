import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
//import { Footer } from './Footer';
import { ThemedBackground } from '../theme/ThemedBackground';
import { ScrollManager } from './ScrollManager';

export function RootLayout() {
  // Show scrollbar only while user is scrolling
  useEffect(() => {
    let timeoutId: number | undefined;

    const handleScroll = () => {
      const root = document.documentElement;
      root.classList.add('scrolling');

      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      // Remove class shortly after scrolling stops
      timeoutId = window.setTimeout(() => {
        root.classList.remove('scrolling');
      }, 200); // ms after last scroll event
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      const root = document.documentElement;
      root.classList.remove('scrolling');
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <ThemedBackground>
      <ScrollManager />

      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-16 sm:pt-20">
          <Outlet />
        </main>
        {/*<Footer />*/}
      </div>
    </ThemedBackground>
  );
}