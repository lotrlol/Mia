import React from 'react';
import { Brain } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-dark-purple/50 backdrop-blur-sm border-t border-white/5 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
              <Brain className="h-5 w-5 text-pink-500" />
            </div>
            <span className="text-2xl font-bold">Mia</span>
          </div>
          <div className="text-sm text-white/60">
            © {new Date().getFullYear()} Mia AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}