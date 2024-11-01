import React from 'react';
import { Wrench, RefreshCw } from 'lucide-react';

export function OptionalServices() {
  return (
    <section className="py-20 bg-dark-purple/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Optional Enhancement Services</h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* One-Time Setup */}
          <div className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-pink-500/30 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-pink-500/10 p-3 rounded-xl">
                <Wrench className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">One-Time Setup</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-white/70 mb-4">
                  For a seamless experience, you can choose a one-time setup for €1,440. 
                  This package includes three dedicated days of expert implementation:
                </p>
                <div className="space-y-4">
                  <div className="bg-dark-purple/30 border border-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-white">Day 1: Analysis</h4>
                    <p className="text-white/70">In-depth inspection and analysis of your website to design the best integration strategy.</p>
                  </div>
                  <div className="bg-dark-purple/30 border border-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-white">Day 2: Implementation</h4>
                    <p className="text-white/70">Custom implementation of Mia's AI, tailored specifically to your site's needs.</p>
                  </div>
                  <div className="bg-dark-purple/30 border border-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-white">Day 3: Optimization</h4>
                    <p className="text-white/70">Debugging and final adjustments to ensure smooth operation and a polished look that's built to last.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Autonomous Upgrade Plan */}
          <div className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 rounded-2xl p-8 hover:border-pink-500/30 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-pink-500/10 p-3 rounded-xl">
                <RefreshCw className="h-6 w-6 text-pink-500" />
              </div>
              <h3 className="text-2xl font-bold text-white">Autonomous Upgrade Plan</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-white/70 mb-6">
                  For continuous performance monitoring and optimization, our monthly autonomous 
                  upgrade is available at €500 per year.
                </p>
                <div className="bg-dark-purple/30 border border-white/5 p-6 rounded-lg">
                  <h4 className="font-semibold mb-4 text-white">What's Included:</h4>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-2 mr-2 bg-pink-500 rounded-full"></span>
                      <span>Continuous performance monitoring and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-2 mr-2 bg-pink-500 rounded-full"></span>
                      <span>Regular system optimizations and updates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-2 mr-2 bg-pink-500 rounded-full"></span>
                      <span>Traffic and engagement growth tracking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="block w-2 h-2 mt-2 mr-2 bg-pink-500 rounded-full"></span>
                      <span>24/7 system maintenance and support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}