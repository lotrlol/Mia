import React from 'react';
import { Header } from '../components/Header';
import { Features } from '../components/Features';
import { HowItWorks } from '../components/HowItWorks';
import { VideoSection } from '../components/VideoSection';
import { ClientShowcase } from '../components/ClientShowcase';
import { Comparison } from '../components/Comparison';
import { PricingTable } from '../components/PricingTable';
import { PricingBenefits } from '../components/PricingBenefits';
import { OptionalServices } from '../components/OptionalServices';
import { Testimonials } from '../components/Testimonials';
import { ContactForm } from '../components/ContactForm';
import { Footer } from '../components/Footer';
import { AnimatedSection } from '../components/AnimatedSection';

export function HomePage() {
  return (
    <>
      {/* Attention */}
      <Header />
      
      {/* Interest */}
      <AnimatedSection>
        <Features />
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <VideoSection />
      </AnimatedSection>
      <AnimatedSection delay={0.3}>
        <HowItWorks />
      </AnimatedSection>
      
      {/* Desire */}
      <AnimatedSection delay={0.4}>
        <ClientShowcase />
      </AnimatedSection>
      <AnimatedSection delay={0.5}>
        <Testimonials />
      </AnimatedSection>
      <AnimatedSection delay={0.6}>
        <Comparison />
      </AnimatedSection>
      
      {/* Action */}
      <AnimatedSection delay={0.7}>
        <PricingTable />
      </AnimatedSection>
      <AnimatedSection delay={0.8}>
        <PricingBenefits />
      </AnimatedSection>
      <AnimatedSection delay={0.9}>
        <OptionalServices />
      </AnimatedSection>
      <AnimatedSection delay={1.0}>
        <ContactForm />
      </AnimatedSection>
      
      <Footer />
    </>
  );
}