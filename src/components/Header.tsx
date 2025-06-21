import { useState, createContext, useContext, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

// Language Context - Hebrew only
const LanguageContext = createContext({
  language: 'he',
  setLanguage: (lang: string) => {},
  t: (key: string) => key
});

export const useLanguage = () => useContext(LanguageContext);

// Hebrew translations only
const translations = {
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
    callUs: 'התקשר אלינו',
    // Company info
    founded: 'נוסדה',
    foundedYear: '2018',
    ceo: 'מנכ״ל',
    ceoName: 'אימיל דואהדה',
    coFounder: 'מייסד שותף',
    coFounderName: 'בדר דואהדה',
    // Footer translations
    company: 'החברה',
    aboutUs: 'אודותינו',
    ourStory: 'הסיפור שלנו',
    careers: 'קריירה',
    news: 'חדשות',
    residentialSystems: 'מערכות ביתיות',
    commercialSolutions: 'פתרונות מסחריים',
    warranties: 'אחריות',
    maintenance: 'תחזוקה',
    customerSupport: 'תמיכת לקוחות',
    installationGuide: 'מדריך התקנה',
    faq: 'שאלות נפוצות',
    contactUs: 'צור קשר',
    workingHours: 'א׳-ה׳ 8:00-18:00',
    responseTime: 'תגובה תוך 24 שעות',
    allOfIsrael: 'כל ישראל',
    followUs: 'עקבו אחרינו',
    allRightsReserved: 'כל הזכויות שמורות.',
    privacyPolicy: 'מדיניות פרטיות',
    termsOfService: 'תנאי שירות',
    cookiePolicy: 'מדיניות עוגיות',
    partnerWithUs: 'הצטרפו כשותפים',
    companyCredentials: 'חברת התקנת דודי שמש מורשית | מאושרת על ידי מכון התקנים הישראלי | רישיון יבוא #IL-SOLAR-2024 | מע״ם: IL123456789',
    footerDescription: 'ספק מוביל של פתרונות דוד שמש איכותיים בישראל. מערכות מותאמות אישית עם טכנולוגיה סינית ומומחיות מקומית.',
    successfulInstallations: 'התקנות מוצלחות',
    acrossIsrael: 'ברחבי ישראל',
    productComparison: 'השוואת מוצרים',
    feature: 'תכונה',
    capacity: 'קיבולת',
    efficiency: 'יעילות',
    heatingTime: 'זמן חימום',
    idealFor: 'מתאים עבור',
    people: 'אנשים',
    businesses: 'עסקים',
    residentialPro: 'מערכת ביתית פרו',
    familyPremium: 'משפחתי פרמיום',
    commercial: 'מסחרי',
    hours: 'שעות'
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // Hebrew only - no language switching
  const [language] = useState('he');
  
  const setLanguage = () => {
    // No-op since we only support Hebrew
  };
  
  const t = (key: string) => {
    return translations.he[key as keyof typeof translations.he] || key;
  };

  // Set RTL attributes
  useEffect(() => {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'he');
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      <div className="rtl" dir="rtl">
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string, label: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(href.slice(1));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(href.slice(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(href);
    }
    setIsMenuOpen(false);
  };

  const menuItems = [
    { href: '/', label: t('home') },
    { href: '/products', label: t('products') },
    { href: '/services', label: t('services') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
    { href: '/partners', label: t('partners') },
  ];

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Keep English */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer min-w-0 shrink-0"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => navigate('/')}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/7706812b-46c5-418f-b20d-7c094260878e.png" 
                alt="Lara Solare Energy" 
                className="h-10 md:h-12 w-auto"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.href}
                className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium relative group whitespace-nowrap text-sm lg:text-base px-2"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleNavigation(item.href, item.label)}
              >
                {item.label}
                <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </motion.button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3 xl:gap-4 shrink-0">
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 whitespace-nowrap text-sm px-4 py-2">
              {t('getQuote')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors shrink-0"
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
              <nav className="flex flex-col space-y-2 pt-4">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    className="text-slate-700 hover:text-orange-600 transition-colors font-medium py-3 px-4 rounded-lg hover:bg-slate-50 text-right"
                    onClick={() => handleNavigation(item.href, item.label)}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex items-center justify-start pt-4 border-t border-slate-100 gap-3">
                  <Button size="sm" className="bg-gradient-to-r from-orange-500 to-yellow-500 shadow-lg whitespace-nowrap text-sm px-4 py-2">
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
