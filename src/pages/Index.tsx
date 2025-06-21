
import Header, { LanguageProvider } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyLaraSolare from "@/components/WhyLaraSolare";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SolarCalculator from "@/components/SolarCalculator";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <HeroSection />
          <WhyLaraSolare />
          <ProductsSection />
          <ServicesSection />
          <SolarCalculator />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    </LanguageProvider>
  );
};

export default Index;
