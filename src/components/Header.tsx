
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sun, Globe } from "lucide-react";
import { motion } from "framer-motion";

// Language context
interface LanguageContextType {
  language: 'he' | 'en';
  setLanguage: (lang: 'he' | 'en') => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  he: {
    // Hero Section
    harnessSun: 'רתם את השמש',
    powerHome: 'הפעל את הבית שלך',
    heroSubtitle: 'פתרונות דוד שמש מתקדמים עם טכנולוגיה סינית מובילה ומומחיות ישראלית מקומית',
    getFreeQuote: 'קבל הצעת מחיר חינם',
    viewProducts: 'צפה במוצרים',
    installations: 'התקנות',
    yearsExperience: 'שנות ניסיון',
    support: 'תמיכה',
    
    // Navigation
    home: 'בית',
    products: 'מוצרים',
    services: 'שירותים',
    about: 'אודות',
    contact: 'צור קשר',
    partners: 'שותפים',
    
    // About Section
    whyChoose: 'למה לבחור',
    laraSolare: 'לרה סולארה',
    customMade: 'מותאם אישית',
    localExpertise: 'מומחיות מקומית',
    warranty: 'אחריות מלאה',
    highEfficiency: 'יעילות גבוהה',
    nationwideService: 'שירות ארצי',
    certifiedExcellence: 'מצוינות מוסמכת',
    
    // Services
    completeSolutions: 'פתרונות מלאים',
    ourProcess: 'התהליך שלנו',
    readyToStart: 'מוכן להתחיל?',
    scheduleConsultation: 'קבע יעוץ',
    
    // Products
    residentialSystems: 'מערכות ביתיות',
    commercialSolutions: 'פתרונות מסחריים',
    warranties: 'אחריות',
    maintenance: 'תחזוקה',
    
    // Contact
    callUs: 'התקשר אלינו',
    whatsappUs: 'שלח לנו וואטסאפ',
    requestQuote: 'בקש הצעת מחיר',
    
    // Footer
    company: 'החברה',
    aboutUs: 'אודותינו',
    ourStory: 'הסיפור שלנו',
    careers: 'קריירה',
    news: 'חדשות',
    customerSupport: 'תמיכת לקוחות',
    installationGuide: 'מדריך התקנה',
    faq: 'שאלות ותשובות',
    contactUs: 'צור קשר',
    followUs: 'עקבו אחרינו',
    allRightsReserved: 'כל הזכויות שמורות',
    privacyPolicy: 'מדיניות פרטיות',
    termsOfService: 'תנאי שירות',
    cookiePolicy: 'מדיניות עוגיות',
    partnerWithUs: 'הצטרף כשותף',
    companyCredentials: 'חברה רשומה בישראל • רישיון עסק מס׳ 580123456',
    footerDescription: 'ספק מוביל של פתרונות דוד שמש איכותיים בישראל. מערכות מותאמות אישית עם טכנולוגיה סינית ומומחיות מקומית.',
    successfulInstallations: 'התקנות מוצלחות',
    acrossIsrael: 'ברחבי ישראל',
    workingHours: 'א׳-ה׳ 8:00-18:00',
    responseTime: 'מענה תוך 24 שעות',
    allOfIsrael: 'כל רחבי ישראל'
  },
  en: {
    // Hero Section  
    harnessSun: 'Harness the Sun',
    powerHome: 'Power Your Home',
    heroSubtitle: 'Advanced solar water heating solutions with leading Chinese technology and local Israeli expertise',
    getFreeQuote: 'Get Free Quote',
    viewProducts: 'View Products',
    installations: 'Installations',
    yearsExperience: 'Years Experience',
    support: 'Support',
    
    // Navigation
    home: 'Home',
    products: 'Products',
    services: 'Services',
    about: 'About',
    contact: 'Contact',
    partners: 'Partners',
    
    // About Section
    whyChoose: 'Why Choose',
    laraSolare: 'Lara Solare',
    customMade: 'Custom Made',
    localExpertise: 'Local Expertise',
    warranty: 'Full Warranty',
    highEfficiency: 'High Efficiency',
    nationwideService: 'Nationwide Service',
    certifiedExcellence: 'Certified Excellence',
    
    // Services
    completeSolutions: 'Complete Solutions',
    ourProcess: 'Our Process',
    readyToStart: 'Ready to Start?',
    scheduleConsultation: 'Schedule Consultation',
    
    // Products
    residentialSystems: 'Residential Systems',
    commercialSolutions: 'Commercial Solutions',
    warranties: 'Warranties',
    maintenance: 'Maintenance',
    
    // Contact
    callUs: 'Call Us',
    whatsappUs: 'WhatsApp Us',
    requestQuote: 'Request Quote',
    
    // Footer
    company: 'Company',
    aboutUs: 'About Us',
    ourStory: 'Our Story',
    careers: 'Careers',
    news: 'News',
    customerSupport: 'Customer Support',
    installationGuide: 'Installation Guide',
    faq: 'FAQ',
    contactUs: 'Contact Us',
    followUs: 'Follow Us',
    allRightsReserved: 'All Rights Reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
    partnerWithUs: 'Partner With Us',
    companyCredentials: 'Registered Company in Israel • Business License No. 580123456',
    footerDescription: 'Leading provider of quality solar water heating solutions in Israel. Custom systems with Chinese technology and local expertise.',
    successfulInstallations: 'Successful Installations',
    acrossIsrael: 'Across Israel',
    workingHours: 'Sun-Thu 8:00-18:00',
    responseTime: '24h Response Time',
    allOfIsrael: 'All of Israel'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'he' | 'en'>('he');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as 'he' | 'en';
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang: 'he' | 'en') => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['he']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t }}>
      <div className={language === 'he' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

const Header = () => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('home'), href: "#home", action: () => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: t('products'), href: "#products", action: () => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: t('services'), href: "#services", action: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: t('about'), href: "#about", action: () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }) },
    { name: t('contact'), href: "#contact", action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }
  ];

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img 
              src="/lovable-uploads/7706812b-46c5-418f-b20d-7c094260878e.png" 
              alt="Lara Solare Energy" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-slate-700 hover:text-orange-500 transition-colors font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === 'he' ? 'en' : 'he')}
              className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'he' ? 'EN' : 'עב'}</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="md:hidden bg-white/95 backdrop-blur-sm shadow-md hover:shadow-lg p-3"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side={language === 'he' ? 'right' : 'left'} className="w-72">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="flex items-center space-x-3 pb-4 border-b">
                    <img 
                      src="/lovable-uploads/7706812b-46c5-418f-b20d-7c094260878e.png" 
                      alt="Lara Solare Energy" 
                      className="h-8 w-auto"
                    />
                  </div>
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={item.action}
                      className="text-left text-lg font-medium text-slate-700 hover:text-orange-500 transition-colors p-2 hover:bg-orange-50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {item.name}
                    </motion.button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
