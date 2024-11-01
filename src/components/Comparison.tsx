import React from 'react';
import { Check, X } from 'lucide-react';

export function Comparison() {
  return (
    <section className="py-20 bg-dark-purple/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Why Choose Mia?</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Mia Column */}
          <div className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="bg-pink-600 p-6">
              <h3 className="text-2xl font-bold text-white text-center">Mia AI Copywriting</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-white/70">Your website grows organically, fueled by content that truly reflects your business.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-white/70">Your Mia-created blogs are yours for life.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-white/70">Full autonomy: no reliance on third-party platforms.</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="h-5 w-5 text-green-400 flex-shrink-0" />
                <span className="text-white/70">Compound your results through a self-sustaining content strategy.</span>
              </div>
            </div>
          </div>

          {/* Paid Ads Column */}
          <div className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden">
            <div className="bg-gray-800 p-6">
              <h3 className="text-2xl font-bold text-white text-center">Traditional Paid Advertising</h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-3">
                <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-white/70">Dependence on external platforms.</span>
              </div>
              <div className="flex items-center space-x-3">
                <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-white/70">High financial stakes with variable outcomes.</span>
              </div>
              <div className="flex items-center space-x-3">
                <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-white/70">Lack of long-term ownership.</span>
              </div>
              <div className="flex items-center space-x-3">
                <X className="h-5 w-5 text-red-400 flex-shrink-0" />
                <span className="text-white/70">Temporary growth that lacks sustainability.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}