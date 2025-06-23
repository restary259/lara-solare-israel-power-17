
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wrench, Shield, Phone, Clock, CheckCircle, Star, Settings, Users } from "lucide-react";
import { motion } from "framer-motion";
import Header, { LanguageProvider, useLanguage } from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageLayout from "@/components/PageLayout";

const Services = () => {
  return (
    <LanguageProvider>
      <PageLayout>
        <ServicesContent />
      </PageLayout>
    </LanguageProvider>
  );
};

const ServicesContent = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'he';

  const services = [
    {
      icon: Settings,
      title: t('systemDesign') || "System Design & Consultation",
      description: t('systemDesignDesc') || "Custom solar water heating system design tailored to your specific needs and roof configuration.",
      features: [
        t('freeSiteAssessment') || "Free site assessment", 
        t('3dModeling') || "3D system modeling", 
        t('energySavings') || "Energy savings calculation", 
        t('roiAnalysis') || "ROI analysis"
      ],
      price: t('freeConsultation') || "Free Consultation",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Wrench,
      title: t('professionalInstallation') || "Professional Installation",
      description: t('professionalInstallationDesc') || "Expert installation by certified technicians with full compliance to Israeli standards.",
      features: [
        t('licensedInstallers') || "Licensed installers", 
        t('safetyCompliance') || "Safety compliance", 
        t('qualityMaterials') || "Quality materials", 
        t('cleanInstallation') || "Clean installation"
      ],
      price: "From ₪500",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: t('maintenanceRepair') || "Maintenance & Repair",
      description: t('maintenanceRepairDesc') || "Comprehensive maintenance services to keep your system running at peak efficiency.",
      features: [
        t('annualInspection') || "Annual inspection", 
        t('componentReplacement') || "Component replacement", 
        t('performanceOptimization') || "Performance optimization", 
        t('emergencyRepairs') || "Emergency repairs"
      ],
      price: "From ₪200",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Phone,
      title: t('support24_7') || "24/7 Support",
      description: t('support24_7Desc') || "Round-the-clock customer support for any questions or emergencies.",
      features: [
        t('phoneSupport') || "Phone support", 
        t('onlineDiagnostics') || "Online diagnostics", 
        t('remoteMonitoring') || "Remote monitoring", 
        t('priorityService') || "Priority service"
      ],
      price: t('included') || "Included",
      color: "from-purple-500 to-purple-600"
    }
  ];

  const process = [
    {
      step: "1",
      title: t('initialConsultation') || "Initial Consultation",
      description: t('initialConsultationDesc') || "We assess your needs, site conditions, and provide a detailed proposal."
    },
    {
      step: "2", 
      title: t('systemDesign') || "System Design",
      description: t('systemDesignDesc2') || "Our engineers design a custom system optimized for your specific requirements."
    },
    {
      step: "3",
      title: t('installation') || "Installation",
      description: t('installationDesc') || "Professional installation by certified technicians following safety protocols."
    },
    {
      step: "4",
      title: t('testingHandover') || "Testing & Handover", 
      description: t('testingHandoverDesc') || "Complete system testing, user training, and warranty documentation."
    },
    {
      step: "5",
      title: t('ongoingSupport') || "Ongoing Support",
      description: t('ongoingSupportDesc') || "Continuous support, maintenance, and monitoring for optimal performance."
    }
  ];

  const warranties = [
    {
      component: t('solarCollectors') || "Solar Collectors",
      period: t('15Years') || "15 Years",
      coverage: t('manufacturingDefects') || "Manufacturing defects and performance"
    },
    {
      component: t('storageTank') || "Storage Tank",
      period: t('10Years') || "10 Years", 
      coverage: t('tankIntegrity') || "Tank integrity and insulation"
    },
    {
      component: t('installationWork') || "Installation Work",
      period: t('5Years') || "5 Years",
      coverage: t('workmanship') || "Workmanship and materials"
    },
    {
      component: t('systemPerformance') || "System Performance",
      period: t('2Years') || "2 Years",
      coverage: t('efficiencyGuarantee') || "Efficiency and operation guarantee"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50" dir={isRTL ? 'rtl' : 'ltr'}>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 bg-gradient-to-r from-blue-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              {t('ourServices') || 'Our'} <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{t('services') || 'Services'}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed">
              {t('completeServicesDesc') || 'Complete solar water heating solutions from consultation to ongoing support'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6">{t('whatWeOffer') || 'What We Offer'}</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              {t('comprehensiveServices') || 'Comprehensive services to meet all your solar water heating needs'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-orange-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg md:text-xl font-bold text-slate-800 mb-2">
                            {service.title}
                          </CardTitle>
                          <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs">
                            {service.price}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white mt-4">
                        {t('learnMore') || 'Learn More'}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6">{t('ourProcess') || 'Our Process'}</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              {t('simpleTransparentSteps') || 'Simple, transparent steps from initial consultation to system handover'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="relative mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg md:text-xl">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-6 md:top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 transform translate-x-4"></div>
                  )}
                </div>
                <h3 className="font-bold text-slate-800 mb-2 text-sm md:text-base">{step.title}</h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warranties */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6">{t('comprehensiveWarranties') || 'Comprehensive Warranties'}</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              {t('peaceOfMind') || 'Peace of mind with industry-leading warranty coverage'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {warranties.map((warranty, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-white border-2 border-slate-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-4 md:p-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="h-6 w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-2 text-sm md:text-base">{warranty.component}</h3>
                    <div className="text-xl md:text-2xl font-bold text-orange-600 mb-2">{warranty.period}</div>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{warranty.coverage}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              {t('readyToGetStarted') || 'Ready to Get Started?'}
            </h2>
            <p className="text-lg md:text-xl text-orange-100 mb-6 md:mb-8">
              {t('contactUsToday') || 'Contact us today for a free consultation and custom system design.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-slate-100 shadow-lg text-base md:text-lg px-6 md:px-8 py-3"
              >
                {t('scheduleConsultation') || 'Schedule Consultation'}
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-orange-600 text-base md:text-lg px-6 md:px-8 py-3"
              >
                {t('callNow') || 'Call Now'}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Services;
