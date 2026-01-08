import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ThemedBackground } from '../theme/ThemedBackground';

export const RootLayout: React.FC = () => {
  return (
    <ThemedBackground>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemedBackground>
  );
};