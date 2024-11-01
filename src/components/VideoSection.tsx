import React from 'react';

export function VideoSection() {
  return (
    <section className="py-20 bg-dark-purple/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">See Mia in Action</h2>
        <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-xl border border-white/5">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/22-XXFTt2vY?si=rfHaPrBqDp9aogB0" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}