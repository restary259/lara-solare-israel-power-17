
import { useState, createContext, useContext } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Language Context
const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: string) => {},
  t: (key: string) => key
});

export const useLanguage = () => useContext(LanguageContext);

// Translations
const translations = {
  en: {
    home: 'Home',
    products: 'Products',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    partners: 'Partners',
    getQuote: 'Get Quote',
    harnessSun: 'Harness the Sun.',
    powerHome: 'Power Your Home.',
    heroSubtitle: 'Premium custom-designed solar water heaters from China. Locally installed by experts throughout Israel.',
    getFreeQuote: 'Get Free Quote',
    viewProducts: 'View Products',
    installations: 'Installations',
    yearsExperience: 'Years Experience',
    support: 'Support',
    whyChoose: 'Why Choose',
    laraSolare: 'Lara Solare?',
    customMade: 'Custom-Made in China',
    localExpertise: 'Local Expertise',
    warranty: 'Comprehensive Warranty',
    highEfficiency: 'High Efficiency',
    nationwideService: 'Nationwide Service',
    certifiedExcellence: 'Certified Excellence',
    ourProducts: 'Our Solar Products',
    completeSolutions: 'Complete Solar Solutions',
    ourProcess: 'Our Process',
    readyToStart: 'Ready to Get Started?',
    scheduleConsultation: 'Schedule Consultation',
    becomePartner: 'Become a Partner',
    requestQuote: 'Request Quote',
    whatsappUs: 'WhatsApp Us',
    callUs: 'Call Us'
  },
  he: {
    home: 'בית',
    products: 'מוצרים',
    services: 'שירותים',
    about: 'אודות',
    contact: 'צור קשר',
    partners: 'שותפים',
    getQuote: 'קבל הצעת מחיר',
    harnessSun: 'רתם את השמש.',
    powerHome: 'הפעל את הבית שלך.',
    heroSubtitle: 'דודי שמש מותאמים אישית ומתקדמים מסין. הותקנו מקומית על ידי מומחים ברחבי ישראל.',
    getFreeQuote: 'קבל הצעת מחיר חינם',
    viewProducts: 'צפה במוצרים',
    installations: 'התקנות',
    yearsExperience: 'שנות ניסיון',
    support: 'תמיכה',
    whyChoose: 'למה לבחור ב',
    laraSolare: 'לרה סולארי?',
    customMade: 'מיוצר במיוחד בסין',
    localExpertise: 'מומחיות מקומית',
    warranty: 'אחריות מקיפה',
    highEfficiency: 'יעילות גבוהה',
    nationwideService: 'שירות ארצי',
    certifiedExcellence: 'מצוינות מאושרת',
    ourProducts: 'המוצרים הסולאריים שלנו',
    completeSolutions: 'פתרונות סולאריים מלאים',
    ourProcess: 'התהליך שלנו',
    readyToStart: 'מוכן להתחיל?',
    scheduleConsultation: 'קבע ייעוץ',
    becomePartner: 'הפוך לשותף',
    requestQuote: 'בקש הצעת מחיר',
    whatsappUs: 'צור קשר בוואטסאפ',
    callUs: 'התקשר אלינו'
  },
  ar: {
    home: 'الرئيسية',
    products: 'المنتجات',
    services: 'الخدمات',
    about: 'حولنا',
    contact: 'اتصل بنا',
    partners: 'الشركاء',
    getQuote: 'احصل على عرض سعر',
    harnessSun: 'استغل الشمس.',
    powerHome: 'قم بتشغيل منزلك.',
    heroSubtitle: 'سخانات المياه الشمسية المصممة خصيصاً من الصين. يتم تركيبها محلياً من قِبل خبراء في جميع أنحاء إسرائيل.',
    getFreeQuote: 'احصل على عرض سعر مجاني',
    viewProducts: 'عرض المنتجات',
    installations: 'التركيبات',
    yearsExperience: 'سنوات من الخبرة',
    support: 'الدعم',
    whyChoose: 'لماذا تختار',
    laraSolare: 'لارا سولاري؟',
    customMade: 'مصنوع خصيصاً في الصين',
    localExpertise: 'الخبرة المحلية',
    warranty: 'ضمان شامل',
    highEfficiency: 'كفاءة عالية',
    nationwideService: 'خدمة على مستوى البلاد',
    certifiedExcellence: 'التميز المعتمد',
    ourProducts: 'منتجاتنا الشمسية',
    completeSolutions: 'حلول شمسية متكاملة',
    ourProcess: 'عمليتنا',
    readyToStart: 'مستعد للبدء؟',
    scheduleConsultation: 'حدد موعد استشارة',
    becomePartner: 'كن شريكاً',
    requestQuote: 'اطلب عرض سعر',
    whatsappUs: 'راسلنا عبر واتساب',
    callUs: 'اتصل بنا'
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('en');
  
  const t = (key: string) => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className={language === 'he' || language === 'ar' ? 'rtl' : 'ltr'} dir={language === 'he' || language === 'ar' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const menuItems = [
    { href: '#home', label: t('home') },
    { href: '#products', label: t('products') },
    { href: '#services', label: t('services') },
    { href: '#about', label: t('about') },
    { href: '#contact', label: t('contact') },
    { href: '/partners', label: t('partners') },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/7706812b-46c5-418f-b20d-7c094260878e.png" 
                alt="Lara Solare Energy" 
                className="h-12 w-auto"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-slate-50 rounded-full px-3 py-2 border border-slate-200">
              <Globe className="h-4 w-4 text-slate-600" />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border-none text-sm font-medium text-slate-700 focus:outline-none cursor-pointer"
              >
                <option value="en">English</option>
                <option value="he">עברית</option>
                <option value="ar">العربية</option>
              </select>
            </div>
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              {t('getQuote')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 border-t border-slate-100"
            >
              <nav className="flex flex-col space-y-4 pt-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-slate-700 hover:text-orange-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-slate-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-2 bg-slate-50 rounded-full px-3 py-2 border border-slate-200">
                    <Globe className="h-4 w-4 text-slate-600" />
                    <select 
                      value={language} 
                      onChange={(e) => setLanguage(e.target.value)}
                      className="bg-transparent border-none text-sm font-medium text-slate-700 focus:outline-none"
                    >
                      <option value="en">English</option>
                      <option value="he">עברית</option>
                      <option value="ar">العربية</option>
                    </select>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg">
                    {t('getQuote')}
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
