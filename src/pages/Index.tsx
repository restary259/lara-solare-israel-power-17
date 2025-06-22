
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Zap, Shield, Award, Users, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Header, { LanguageProvider } from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhyLaraSolare from "@/components/WhyLaraSolare";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import SolarCalculator from "@/components/SolarCalculator";
import FloatingCTA from "@/components/FloatingCTA";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";

const Index = () => {
  return (
    <LanguageProvider>
      <PageLayout>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Header />
          <HeroSection />
          <WhyLaraSolare />
          <ProductsSection />
          <SolarCalculator />
          <ServicesSection />
          <TestimonialsSection />
          <ContactSection />
          <Footer />
          <FloatingCTA />
        </div>
      </PageLayout>
    </LanguageProvider>
  );
};

export default Index;
