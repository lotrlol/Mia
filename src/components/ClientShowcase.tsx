import React from 'react';
import { ExternalLink } from 'lucide-react';

export function ClientShowcase() {
  const clients = [
    {
      name: "Trouwfilm Brabant",
      logo: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "Wedding cinematography experts sharing professional insights",
      url: "https://www.trouwfilmbrabant.nl/blog/ontdek-de-ultieme-voorbereidingen-voor-jouw-huwelijksfilm-tips-voor-iedere-bruid/"
    },
    {
      name: "TWST",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
      description: "33% traffic increase achieved through AI-powered content",
      url: "https://www.twst.nl/kennis/een-effectieve-overlegstructuur-is-essentieel-voor-teamontwikkeling-hier-zijn-enkele-tips-om-dit-te-creeren1-bepaal-het-doel-van-het-overleg-voordat-je-een-overleg-plant-is-het-belangrijk-om-he/"
    }
  ];

  return (
    <section className="py-20 bg-dark-purple/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">See Mia in Action</h2>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          Discover how Mia is transforming content creation for businesses across industries
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <a
              key={index}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-dark-purple/50 backdrop-blur-sm border border-white/5 p-6 rounded-xl hover:border-pink-500/30 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-500 transition-colors">
                    {client.name}
                  </h3>
                  <p className="text-white/70">{client.description}</p>
                </div>
                <ExternalLink className="h-5 w-5 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-pink-600 w-1/3 rounded-full transform transition-transform duration-500 group-hover:translate-x-full" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}