import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Target, Heart, Star } from 'lucide-react';
import { Footer } from '../components/Footer';

export function AboutPage() {
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

          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">About Mia</h1>

            {/* Founder Section */}
            <section className="mb-16">
              <h2 className="text-2xl font-bold mb-6">About the Founder</h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Daan Van Oploo" 
                    className="rounded-2xl shadow-lg"
                  />
                </div>
                <div>
                  <p className="text-gray-600 leading-relaxed">
                    Mia was founded by Daan Van Oploo, a visionary in digital strategy with a passion for making AI accessible and impactful for businesses of all sizes. Driven by a commitment to innovation, Daan saw the potential for AI not just to automate, but to elevate content creation—empowering brands to scale authentically and sustainably.
                  </p>
                </div>
              </div>
            </section>

            {/* Vision, Mission, Promise Sections */}
            <div className="grid gap-12">
              <section className="bg-gradient-to-br from-violet-50 to-white p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-100 p-3 rounded-xl">
                    <Target className="h-8 w-8 text-violet-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                    <p className="text-gray-600 leading-relaxed">
                      At Mia, we envision a world where businesses can grow autonomously, reaching audiences with content that feels personal and relevant without the usual cost or effort. Mia aims to bridge the gap between powerful AI technology and human-centric branding, enabling companies to tell their stories in ways that resonate and build trust.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-br from-violet-50 to-white p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-100 p-3 rounded-xl">
                    <Heart className="h-8 w-8 text-violet-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Mia's mission is simple: to transform the way businesses connect with their audiences by delivering consistent, high-quality, and optimized content. We strive to provide a solution that frees up time, reduces costs, and compounds in value over time, allowing companies to focus on what truly matters—their growth and their customers.
                    </p>
                  </div>
                </div>
              </section>

              <section className="bg-gradient-to-br from-violet-50 to-white p-8 rounded-2xl">
                <div className="flex items-start space-x-4">
                  <div className="bg-violet-100 p-3 rounded-xl">
                    <Star className="h-8 w-8 text-violet-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-4">Our Promise</h2>
                    <p className="text-gray-600 leading-relaxed">
                      Mia promises to be your unwavering partner in growth. By continuously learning and adapting to your brand's unique needs, Mia ensures that each piece of content isn't just another post, but a step toward building a stronger, more visible digital presence. Through innovation and personalized AI, we promise to keep your brand's voice authentic, your growth sustainable, and your results extraordinary.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-16 text-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center bg-violet-600 text-white px-8 py-3 rounded-full hover:bg-violet-700 transition-colors"
              >
                Start Your Journey with Mia
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}