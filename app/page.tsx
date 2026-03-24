"use client";

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { BeamHero } from "@/sections/BeamHero";
import { ComparisonFlow } from "@/sections/ComparisonFlow";
import { ProblemSection } from "@/sections/ProblemSection";
import { SolutionSection } from "@/sections/SolutionSection";
import { PlatformPillars } from "@/sections/PlatformPillars";
import { AIGateway } from "@/sections/AIGateway";
import { FederationSection } from "@/sections/FederationSection";
import { IndustrySolutions } from "@/sections/IndustrySolutions";
import { EnterpriseTrust } from "@/sections/EnterpriseTrust";
import { FooterCTA } from "@/sections/FooterCTA";
import { InteractiveGlobe } from "@/components/interactive-globe";
import { MarqueeLogoScroller } from "@/components/marquee-logo-scroller";
import { TestimonialsSection } from "@/components/testimonials-with-marquee";
import { NewsletterSignupBlock } from "@/components/uitripled/newsletter-signup-block-shadcnui";
import { FAQAccordionBlock } from "@/components/uitripled/faq-accordion-block-shadcnui";
import { OurServicesSection } from "@/components/uitripled/our-services-section-shadcnui";
import { ServicesGridBlock } from "@/components/uitripled/services-grid-block-shadcnui";
import { HOMEPAGE_CONTENT } from "@/constants/homepage";

export default function Home() {
  return (
    <>
      <Hero />
      

      <ComparisonFlow />
      <ProblemSection />
      <SolutionSection />
      <PlatformPillars />
      <AIGateway />
      {/* <FederationSection /> */}
      
    
      <IndustrySolutions />
      <EnterpriseTrust />
      
      <section className="relative w-full py-20 bg-black overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0  " />
     
        <div className="mt-12 w-full max-w-7xl px-4">
          <MarqueeLogoScroller 
            title="Trusted by Modern Enterprises"
            description="Powering the next generation of API and AI infrastructure for global leaders."
            logos={HOMEPAGE_CONTENT.logos || []}
            speed="normal"
         
          />
        </div>
      </section>
      {/* <OurServicesSection /> */}
      <ServicesGridBlock />
        <TestimonialsSection 
        title="What our users say"
        description="Discover how global teams streamline their API operations with Mosura."
        testimonials={HOMEPAGE_CONTENT.testimonials || []}
      />

      <FAQAccordionBlock />
      <NewsletterSignupBlock />
      <FooterCTA />
      {/* <BeamHero /> */}
    </>
  );
}
