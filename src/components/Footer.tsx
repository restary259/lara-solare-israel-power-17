
import { Sun, Phone, Mail, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "./Header";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { name: t('aboutUs'), href: "#about", action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
      { name: t('ourStory'), href: "#story", action: () => console.log('Navigate to story') },
      { name: t('careers'), href: "#careers", action: () => console.log('Navigate to careers') },
      { name: t('news'), href: "#news", action: () => console.log('Navigate to news') }
    ],
    products: [
      { name: t('residentialSystems'), href: "#products", action: () => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }) },
      { name: t('commercialSolutions'), href: "#commercial", action: () => console.log('Navigate to commercial') },
      { name: t('warranties'), href: "#warranty", action: () => console.log('Navigate to warranty') },
      { name: t('maintenance'), href: "#maintenance", action: () => console.log('Navigate to maintenance') }
    ],
    support: [
      { name: t('customerSupport'), href: "#support", action: () => window.open('tel:+972545263226', '_self') },
      { name: t('installationGuide'), href: "#guide", action: () => console.log('Open installation guide') },
      { name: t('faq'), href: "#faq", action: () => console.log('Navigate to FAQ') },
      { name: t('contactUs'), href: "#contact", action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
    ]
  };

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/7706812b-46c5-418f-b20d-7c094260878e.png" 
                alt="Lara Solare Energy" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              {t('footerDescription')}
            </p>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <Sun className="h-5 w-5 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium">{t('certifiedExcellence')}</div>
                  <div className="text-xs text-slate-400">{t('yearsExperience')}: 7+</div>
                </div>
              </div>
              <div className="text-sm text-slate-300">
                <div className="font-semibold text-orange-400">3,000+ {t('successfulInstallations')}</div>
                <div className="text-xs text-slate-400">{t('acrossIsrael')}</div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">{t('company')}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="text-slate-300 hover:text-orange-400 transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Products & Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">{t('products')}</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={link.action}
                    className="text-slate-300 hover:text-orange-400 transition-colors text-sm text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact & Support */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold mb-6 text-white">{t('contact')}</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <div>
                  <a href="tel:+972545263226" className="text-sm font-medium hover:text-orange-400 transition-colors">
                    +972-54-526-3226
                  </a>
                  <div className="text-xs text-slate-400">{t('workingHours')}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <div>
                  <a href="mailto:info@larasolare.com" className="text-sm font-medium hover:text-orange-400 transition-colors">
                    info@larasolare.com
                  </a>
                  <div className="text-xs text-slate-400">{t('responseTime')}</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-400 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium">{t('nationwideService')}</div>
                  <div className="text-xs text-slate-400">{t('allOfIsrael')}</div>
                </div>
              </div>
              
              {/* Social Media Icons */}
              <div className="pt-4">
                <div className="text-sm font-medium mb-3">{t('followUs')}</div>
                <div className="flex space-x-3">
                  <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                    <Facebook className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="#" className="w-8 h-8 bg-slate-800 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors">
                    <Twitter className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="border-t border-slate-800 bg-slate-950"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} Lara Solare Energy. {t('allRightsReserved')}
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
              <button 
                onClick={() => console.log('Open privacy policy')}
                className="text-slate-400 hover:text-orange-400 transition-colors"
              >
                {t('privacyPolicy')}
              </button>
              <button 
                onClick={() => console.log('Open terms of service')}
                className="text-slate-400 hover:text-orange-400 transition-colors"
              >
                {t('termsOfService')}
              </button>
              <button 
                onClick={() => console.log('Open cookie policy')}
                className="text-slate-400 hover:text-orange-400 transition-colors"
              >
                {t('cookiePolicy')}
              </button>
              <button 
                onClick={() => window.open('/partners', '_self')}
                className="text-slate-400 hover:text-orange-400 transition-colors font-medium"
              >
                {t('partnerWithUs')}
              </button>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-xs">
              {t('companyCredentials')}
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
