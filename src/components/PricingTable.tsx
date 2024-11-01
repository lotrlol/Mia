import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

export function PricingTable() {
  const features = [
    { name: 'Cost', mia: '€5 per blog', human: '~€50,000/year', highlight: true },
    { name: 'Content Volume', mia: 'Up to 500 blogs per month', human: '~4 blogs per week', highlight: true },
    { name: 'SEO & Optimization', mia: 'Automated, self-learning AI\nNo manual SEO or keyword research needed', human: 'Requires extensive SEO planning, research, and brainstorming sessions' },
    { name: 'Adaptability', mia: 'Self-learning: Adapts and optimizes based on best-performing keywords and audience interests', human: 'Manual adjustments and testing' },
    { name: 'Ownership', mia: 'Full ownership of all content created', human: 'Full ownership but limited scalability' },
    { name: 'Time Efficiency', mia: 'Automated and instantaneous content creation', human: '1–3 days per blog', highlight: true },
    { name: 'Traffic Growth', mia: 'Compounding effect: Consistent content builds visibility and authority over time', human: 'Limited by frequency and output' },
    { name: 'Maintenance', mia: 'Self-maintaining AI system', human: 'Ongoing management and oversight required' },
    { name: '24/7 Availability', mia: 'Produces content around the clock', human: 'Limited to work hours' },
  ];

  return (
    <section className="py-20 bg-dark-purple/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">The Clear Choice for Modern Content Creation</h2>
          <p className="text-white/70">
            See why businesses are switching to Mia for their content needs
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="bg-dark-purple/50 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden">
              <table className="min-w-full divide-y divide-white/10">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-white/70 bg-dark-purple/70">
                      Feature
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold bg-pink-500/10">
                      <div className="flex items-center space-x-2">
                        <Sparkles className="h-5 w-5 text-pink-500" />
                        <span className="text-white">Mia AI Copywriting</span>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-white/70 bg-dark-purple/70">
                      Traditional Human Copywriter
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {features.map((feature, index) => (
                    <tr key={index} className={`${feature.highlight ? 'bg-pink-500/5' : ''} hover:bg-pink-500/10 transition-colors`}>
                      <td className="px-6 py-4 text-sm font-medium text-white">
                        {feature.name}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start space-x-2">
                          <div className="flex-shrink-0 w-5">
                            <Check className="h-5 w-5 text-green-400" />
                          </div>
                          <span className="text-sm text-white font-medium whitespace-pre-line">
                            {feature.mia}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-start space-x-2 opacity-75">
                          <div className="flex-shrink-0 w-5">
                            <X className="h-5 w-5 text-red-400" />
                          </div>
                          <span className="text-sm text-white/70 whitespace-pre-line">
                            {feature.human}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-pink-600 text-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-center">Why Mia is the Smart Choice</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Save over €48,000 annually compared to traditional copywriting</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Generate 125x more content, maximizing your online presence</span>
              </li>
              <li className="flex items-start space-x-3">
                <Check className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>Instant content creation with AI-powered optimization</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}