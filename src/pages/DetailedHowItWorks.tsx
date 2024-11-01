import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, TrendingUp, BarChart, Zap, RefreshCcw, ArrowLeft } from 'lucide-react';
import { Footer } from '../components/Footer';

export function DetailedHowItWorks() {
  const sections = [
    {
      icon: Brain,
      title: "Mia's Philosophy: Sustainable, High-Impact Content",
      content: "Mia combines the precision of AI with your brand's authentic voice, creating content that drives long-term growth. Unlike traditional content strategies that depend on expensive, short-lived ads or intensive manual production, Mia offers an automated, enduring growth solution tailored to your audience's needs."
    },
    {
      icon: RefreshCcw,
      title: "Continuous Learning & Adaptation",
      content: "Mia's self-learning AI adapts continuously, optimizing every piece of content to maximize reach and relevance. By analyzing audience interactions and refining content based on performance, Mia compounds your content's value over time without increasing costs. All content remains yours, building a digital asset that scales effortlessly and maintains authenticity—a powerful, cost-effective investment for any business aiming for sustained growth."
    },
    {
      icon: BarChart,
      title: "High-Volume Strategy: Visibility through Quantity",
      content: "In a digital world where visibility matters, Mia embraces a unique 'quantity over quality' approach. With the capacity to generate up to 500 posts monthly, Mia captures a vast range of search entry points, creating a continuous stream of organic traffic. Each blog post works within a larger content network, driving visitors from multiple directions and amplifying your reach."
    },
    {
      icon: TrendingUp,
      title: "The Compound Effect of Consistent Content Creation",
      content: "The true power of Mia's approach is in its compounding impact. Each article becomes a new entry point for search engines, drawing traffic from diverse keywords and topics. Over time, this expanding library of content enhances your brand authority and steadily boosts organic traffic. Every post contributes to a cumulative, long-lasting increase in visibility, with results that multiply month after month."
    },
    {
      icon: Zap,
      title: "Exponential Growth at Minimal Cost",
      content: "With Mia's continuous output of targeted, high-quality content, your brand's presence expands exponentially across search engines. This approach not only improves your rankings and attracts more visitors but also helps you sustain engagement without the high costs of traditional advertising. Mia's compounding strategy builds a self-sustaining growth cycle, maximizing results with each new blog."
    }
  ];

  return (
    <>
      <div className="bg-white">
        <div className="container mx-auto px-6 py-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-violet-600 hover:text-violet-700 transition-colors mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How Mia Works: In-Depth
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-16 mt-12">
              {sections.map((section, index) => (
                <div key={index} className="bg-gradient-to-br from-violet-50 to-white p-8 rounded-2xl shadow-sm">
                  <div className="flex items-start space-x-4">
                    <div className="bg-violet-100 p-3 rounded-xl">
                      <section.icon className="h-8 w-8 text-violet-600" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                      <p className="text-gray-600 leading-relaxed">{section.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 bg-violet-600 text-white p-8 rounded-2xl">
              <h2 className="text-2xl font-bold mb-4">Effortless Optimization with Self-Learning AI</h2>
              <p className="mb-6">
                Say goodbye to manual SEO and content planning. Mia's self-learning AI leverages reinforcement learning to improve content based on real audience responses, eliminating the need for keyword research, SEO tactics, or brainstorming sessions.
              </p>
              <h3 className="text-xl font-bold mb-4">A Natural Snowball Effect for Content Performance</h3>
              <p>
                Mia's AI lets high-performing content naturally rise to the top, capturing more engagement as it aligns with your audience's interests. The snowball effect ensures that your best pages continue gaining traction, while underperforming content quietly fades into the background. This means your strategy is always evolving and improving as Mia optimizes content for relevance, boosting your digital presence without extra effort.
              </p>
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-violet-600 text-white px-8 py-3 rounded-full hover:bg-violet-700 transition-colors"
              >
                Get Started with Mia
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}