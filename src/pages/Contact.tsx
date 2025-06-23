
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { motion } from "framer-motion";
import Header, { LanguageProvider, useLanguage } from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import PageLayout from "@/components/PageLayout";

const Contact = () => {
  return (
    <LanguageProvider>
      <PageLayout>
        <ContactContent />
      </PageLayout>
    </LanguageProvider>
  );
};

const ContactContent = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'he';

  const contactInfo = [
    {
      icon: Phone,
      title: t('phone') || "Phone",
      details: ["+972-3-123-4567", "+972-52-987-6543"],
      action: t('callNow') || "Call Now",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Mail,
      title: t('email') || "Email",
      details: ["info@larasolare.co.il", "support@larasolare.co.il"],
      action: t('sendEmail') || "Send Email", 
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: t('address') || "Address",
      details: ["123 Solar Street", "Tel Aviv, Israel 12345"],
      action: t('getDirections') || "Get Directions",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Clock,
      title: t('workingHours') || "Working Hours",
      details: ["Sun-Thu: 8:00-18:00", "Fri: 8:00-14:00"],
      action: t('scheduleVisit') || "Schedule Visit",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const serviceAreas = [
    t('telAvivDistrict') || "Tel Aviv District", 
    t('jerusalemDistrict') || "Jerusalem District", 
    t('centralDistrict') || "Central District", 
    t('northernDistrict') || "Northern District", 
    t('southernDistrict') || "Southern District", 
    t('haifaDistrict') || "Haifa District"
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
              {t('contact') || 'Contact'} <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">{t('us') || 'Us'}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed">
              {t('getInTouchDesc') || 'Get in touch for a free consultation and custom solar solution'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6">{t('getInTouch') || 'Get In Touch'}</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              {t('multipleWaysToReach') || 'Multiple ways to reach us - choose what works best for you'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center bg-white border-2 border-slate-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg h-full">
                    <CardContent className="p-4 md:p-6">
                      <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${info.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                        <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-800 mb-3 text-base md:text-lg">{info.title}</h3>
                      <div className="space-y-1 mb-4">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-slate-600 text-sm md:text-base">
                            {detail}
                          </p>
                        ))}
                      </div>
                      <Button size="sm" className="bg-slate-800 hover:bg-slate-700 text-white text-xs md:text-sm">
                        {info.action}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-3">
                    <Send className="h-6 w-6 text-orange-600" />
                    {t('sendUsMessage') || 'Send us a Message'}
                  </CardTitle>
                  <CardDescription className="text-slate-600">
                    {t('fillFormDesc') || "Fill out the form below and we'll get back to you within 24 hours"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">{t('name') || 'Name'} *</label>
                        <Input placeholder={t('yourFullName') || "Your full name"} className="border-slate-300" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">{t('phone') || 'Phone'} *</label>
                        <Input type="tel" placeholder="+972-XX-XXX-XXXX" className="border-slate-300" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t('email') || 'Email'} *</label>
                      <Input type="email" placeholder="your@email.com" className="border-slate-300" />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t('serviceInterest') || 'Service Interest'}</label>
                      <select className="w-full p-3 border border-slate-300 rounded-md bg-white">
                        <option value="">{t('selectServiceType') || 'Select service type'}</option>
                        <option value="consultation">{t('freeConsultation') || 'Free Consultation'}</option>
                        <option value="installation">{t('systemInstallation') || 'System Installation'}</option>
                        <option value="maintenance">{t('maintenanceRepair') || 'Maintenance & Repair'}</option>
                        <option value="other">{t('other') || 'Other'}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t('message') || 'Message'}</label>
                      <Textarea 
                        placeholder={t('tellUsAboutProject') || "Tell us about your project or questions..."}
                        className="border-slate-300 min-h-[120px]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">{t('location') || 'Location'}</label>
                      <Input placeholder={t('cityOrAddress') || "City or address for site visit"} className="border-slate-300" />
                    </div>

                    <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-3 text-base md:text-lg">
                      {t('sendMessage') || 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map & Service Areas */}
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="overflow-hidden">
                <div className="h-64 md:h-80 bg-slate-200 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                      <p className="text-slate-600 font-medium">{t('interactiveMap') || 'Interactive Map'}</p>
                      <p className="text-sm text-slate-500">{t('viewLocationAndServiceAreas') || 'View our location and service areas'}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Service Areas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-bold text-slate-800">{t('serviceAreas') || 'Service Areas'}</CardTitle>
                  <CardDescription>{t('weServeCustomers') || 'We serve customers throughout Israel'}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {serviceAreas.map((area, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"></div>
                        <span className="text-slate-600 text-sm">{area}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>{t('specialCoverage') || 'Special Coverage'}:</strong> {t('weProvideService') || 'We provide service throughout Israel with same-day emergency support in major cities.'}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gradient-to-br from-orange-500 to-yellow-500 text-white">
                <CardContent className="p-4 md:p-6 text-center">
                  <MessageCircle className="h-8 w-8 md:h-12 md:w-12 mx-auto mb-4" />
                  <h3 className="font-bold text-lg md:text-xl mb-2">{t('needImmediateHelp') || 'Need Immediate Help?'}</h3>
                  <p className="text-orange-100 mb-4 text-sm md:text-base">
                    {t('callUsNowOrMessage') || 'Call us now or message us on WhatsApp for instant support'}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-white text-orange-600 hover:bg-slate-100 flex-1">
                      {t('callNow') || 'Call Now'}
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 flex-1">
                      WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Contact;
