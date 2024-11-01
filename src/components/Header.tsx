import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export function Header() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#0a051c] via-[#1a0b2e] to-[#1a0b2e]">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-10"></div>
      
      <div className="container mx-auto px-6 py-16 md:py-24 relative">
        <motion.nav 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-16"
        >
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Brain className="h-5 w-5 text-pink-500" />
            </div>
            <span className="text-2xl font-bold text-white">mia</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/how-it-works" className="text-white/80 hover:text-white transition-colors">
              How It Works
            </Link>
            <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition-colors">
              Get Started
            </button>
          </div>
        </motion.nav>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Unlock Your Content Potential with </span>
              <span className="text-pink-500">AI-Powered </span>
              <span className="text-white">Copywriting</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Double your website traffic and captivate your audience with content uniquely crafted for impact. 
              Join forces with Mia—your AI copywriting partner, designed to make growth effortless.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-pink-600 text-white px-8 py-4 rounded-full hover:bg-pink-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Start Creating with Mia</span>
                <ChevronRight className="h-5 w-5" />
              </button>
              <Link 
                to="/how-it-works"
                className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center backdrop-blur-sm"
              >
                See How It Works
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <img 
              src="https://raw.githubusercontent.com/yourusername/your-repo/main/mia-avatar.png" 
              alt="Mia AI Assistant"
              className="w-full max-w-md mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </header>
  );
}