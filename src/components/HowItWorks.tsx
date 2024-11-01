import React from 'react';
import { Link } from 'react-router-dom';
import { Database, PenTool, Brain, Rocket, ArrowRight } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Database,
      title: "Data Collection & Personalization",
      description: "Mia begins by learning about your business. Through interviews and data integration, Mia captures your brand essence, industry insights, and audience preferences to tailor every piece of content."
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Using advanced AI algorithms, Mia generates SEO-optimized articles, each strategically aligned with high-performing keywords and crafted to engage your target audience. With automation, Mia ensures fresh, relevant content flows to your site consistently."
    },
    {
      icon: Brain,
      title: "Reinforcement Learning",
      description: "Mia continuously evaluates the performance of published content, refining topics, keywords, and style to increase traffic and engagement over time. As a result, each post is better adapted to reach and convert your audience."
    },
    {
      icon: Rocket,
      title: "Autonomous Publishing",
      description: "Once set up, Mia publishes content directly to your website, ensuring an always-active digital presence without the need for constant input or third-party platforms."
    }
  ];

  return (
    <section className="py-20 bg-dark-purple/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6 text-white">How Mia Works</h2>
          <p className="text-xl text-white/70">
            Mia operates as an AI-powered content creator designed to simplify and supercharge your content strategy. From blog posts to newsletters, Mia creates and optimizes every piece of content using your brand's unique voice, tone, and goals.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative bg-dark-purple/50 backdrop-blur-sm border border-white/5 p-8 rounded-xl hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="absolute -top-6 left-8 bg-pink-600 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                  <step.icon className="h-6 w-6 text-white" />
                </div>
                <div className="mt-4">
                  <h3 className="text-xl font-bold mb-4 text-white">{step.title}</h3>
                  <p className="text-white/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-white/70 max-w-3xl mx-auto mb-8">
            With Mia, you gain a dedicated AI partner who not only amplifies your online visibility but also evolves to keep your content in sync with audience interests and market trends.
          </p>
          <Link
            to="/how-it-works"
            className="inline-flex items-center text-pink-500 hover:text-pink-400 transition-colors"
          >
            Learn more about how Mia works
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}