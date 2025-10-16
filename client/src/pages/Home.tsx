import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import BookingSection from "@/components/BookingSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import TrustBadgesSection from "@/components/TrustBadgesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustBadgesSection />
        <ServicesSection />
        <HowItWorksSection />
        <PricingSection />
        <TestimonialsSection />
        <ServiceAreasSection />
        <BookingSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
