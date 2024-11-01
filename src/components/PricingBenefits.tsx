import React from 'react';
import { Euro, FileText, Target, Zap, Brain, Search, Globe, Languages } from 'lucide-react';

export function PricingBenefits() {
  const benefits = [
    {
      icon: Euro,
      title: "Only €2 Per Blog",
      description: "Mia offers scalable pricing to meet your specific needs and budget."
    },
    {
      icon: FileText,
      title: "500 Pages Monthly",
      description: "Generate up to 500 unique, compelling blogs per month, capturing interest with every post."
    },
    {
      icon: Languages,
      title: "Multiple Languages",
      description: "Create and translate content in any language, helping you expand into new markets and reach global audiences effectively."
    },
    {
      icon: Target,
      title: "Multiply Engagement",
      description: "A wider digital footprint translates to more customer touchpoints, higher visibility, and elevated brand awareness."
    },
    {
      icon: Zap,
      title: "Fast Results",
      description: "Noticeable improvements in your traffic and engagement begin within weeks."
    },
    {
      icon: Brain,
      title: "Self-Learning AI",
      description: "Mia continually fine-tunes her content using reinforcement learning, prioritizing the best-performing keywords and topics for your business's specific audience."
    },
    {
      icon: Search,
      title: "Quick Google Ranking",
      description: "SEO-optimized content, designed to accelerate your visibility in search results across multiple languages."
    },
    {
      icon: Globe,
      title: "Global Digital Presence",
      description: "Reach international markets with culturally-aware content that maintains your brand voice in every language."
    }
  ];

  return (
    <section className="py-20 bg-dark-purple/30">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Powerful Benefits</h2>
        <p className="text-white/70 text-center mb-12 max-w-2xl mx-auto">
          With Mia, transform your online presence into a powerful global digital asset that consistently draws in and engages your audience in any language.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 p-6 rounded-xl hover:border-pink-500/30 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-pink-500/10 p-3 rounded-lg">
                  <benefit.icon className="h-6 w-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-white">{benefit.title}</h3>
                  <p className="text-white/70">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}