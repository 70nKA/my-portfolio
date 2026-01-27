// src/components/layout/RootLayout.tsx
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
// import { Footer } from './Footer';
import { ThemedBackground } from '../theme/ThemedBackground';

export function RootLayout() {
  return (
    <ThemedBackground>

      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1 pt-16 sm:pt-20">
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </ThemedBackground>
  );
}