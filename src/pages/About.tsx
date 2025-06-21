
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Zap, Shield, Award, Users, Phone, Mail, Calendar, UserCheck } from "lucide-react";
import { motion } from "framer-motion";
import Header, { LanguageProvider, useLanguage } from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const AboutPage = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              {t('aboutUs')} <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Lara Solare</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('footerDescription')}
            </p>
          </motion.div>

          {/* Company Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="text-center bg-white hover:shadow-lg transition-all duration-300 p-6">
                <CardContent className="space-y-4">
                  <Calendar className="h-12 w-12 text-orange-500 mx-auto" />
                  <div>
                    <div className="text-2xl font-bold text-slate-800">{t('foundedYear')}</div>
                    <div className="text-slate-600">{t('founded')}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="text-center bg-white hover:shadow-lg transition-all duration-300 p-6">
                <CardContent className="space-y-4">
                  <UserCheck className="h-12 w-12 text-blue-500 mx-auto" />
                  <div>
                    <div className="text-lg font-bold text-slate-800">{t('ceoName')}</div>
                    <div className="text-slate-600">{t('ceo')}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="text-center bg-white hover:shadow-lg transition-all duration-300 p-6">
                <CardContent className="space-y-4">
                  <Users className="h-12 w-12 text-green-500 mx-auto" />
                  <div>
                    <div className="text-lg font-bold text-slate-800">{t('coFounderName')}</div>
                    <div className="text-slate-600">{t('coFounder')}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="text-center bg-white hover:shadow-lg transition-all duration-300 p-6">
                <CardContent className="space-y-4">
                  <Award className="h-12 w-12 text-purple-500 mx-auto" />
                  <div>
                    <div className="text-2xl font-bold text-slate-800">3000+</div>
                    <div className="text-slate-600">{t('installations')}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Why Choose Us Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-12">
              {t('whyChoose')} <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Lara Solare</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { icon: Sun, title: t('customMade'), color: 'text-yellow-500' },
                { icon: Users, title: t('localExpertise'), color: 'text-blue-500' },
                { icon: Shield, title: t('warranty'), color: 'text-green-500' },
                { icon: Zap, title: t('highEfficiency'), color: 'text-orange-500' },
                { icon: Phone, title: t('nationwideService'), color: 'text-purple-500' },
                { icon: Award, title: t('certifiedExcellence'), color: 'text-red-500' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="text-center bg-white hover:shadow-lg transition-all duration-300 p-6 h-full">
                    <CardContent className="space-y-4">
                      <item.icon className={`h-12 w-12 ${item.color} mx-auto`} />
                      <h3 className="text-xl font-semibold text-slate-800">{item.title}</h3>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{t('readyToStart')}</h3>
              <p className="text-slate-600 mb-6">
                {t('scheduleConsultation')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
                  {t('getFreeQuote')}
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50">
                  {t('contactUs')}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

const About = () => {
  return (
    <LanguageProvider>
      <AboutPage />
    </LanguageProvider>
  );
};

export default About;
