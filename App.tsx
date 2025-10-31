
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { VisionBot } from './components/VisionBot';
import { SchemeNavigator } from './components/SchemeNavigator';
import { ComplaintTracker } from './components/ComplaintTracker';
import { Dashboard } from './components/Dashboard';
import { Chatbot } from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <VisionBot />
          <SchemeNavigator />
          <ComplaintTracker />
        </div>
        <Dashboard />
      </main>
      <footer className="text-center py-6 bg-slate-800 text-slate-300 mt-12">
        <p>&copy; 2024 Tamizh Kural E-Sevai. All rights reserved.</p>
      </footer>
      <Chatbot />
    </div>
  );
};

export default App;
