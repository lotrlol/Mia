import React from 'react';

export function Testimonials() {
  return (
    <section className="py-20 bg-dark-purple/30">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12 text-white">Endorsed by Business Innovators</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl">
            <p className="text-white/70 mb-6">"Mia has transformed our entire content approach. Our blog traffic has jumped 150% in just three months!"</p>
            <p className="font-semibold text-white">Sarah Chen</p>
            <p className="text-sm text-white/60">Marketing Director, TechFlow</p>
          </div>
          <div className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl">
            <p className="text-white/70 mb-6">"Every piece Mia creates feels so authentic and on-point with our brand—it's hard to believe it's AI!"</p>
            <p className="font-semibold text-white">Mark Thompson</p>
            <p className="text-sm text-white/60">CEO, GrowthLabs</p>
          </div>
          <div className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl">
            <p className="text-white/70 mb-6">"We've cut our production time in half, doubled our output, and love how Mia aligns with our voice."</p>
            <p className="font-semibold text-white">Lisa Rodriguez</p>
            <p className="text-sm text-white/60">Content Manager, Innovate Inc</p>
          </div>
        </div>
      </div>
    </section>
  );
}