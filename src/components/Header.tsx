
import { useState, createContext, useContext, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

// Language Context
const LanguageContext = createContext({
  language: 'he',
  setLanguage: (lang: string) => {},
  t: (key: string) => key
});

export const useLanguage = () => useContext(LanguageContext);

// Enhanced translations with all necessary keys and company info
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
    callUs: 'Call Us',
    company: 'Company',
    aboutUs: 'About Us',
    ourStory: 'Our Story',
    careers: 'Careers',
    news: 'News',
    residentialSystems: 'Residential Systems',
    commercialSolutions: 'Commercial Solutions',
    warranties: 'Warranties',
    maintenance: 'Maintenance',
    customerSupport: 'Customer Support',
    installationGuide: 'Installation Guide',
    faq: 'FAQ',
    contactUs: 'Contact Us',
    workingHours: 'Sun-Thu 8:00-18:00',
    responseTime: '24h response time',
    allOfIsrael: 'All of Israel',
    followUs: 'Follow Us',
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy',
    partnerWithUs: 'Partner With Us',
    companyCredentials: 'Licensed Solar Installation Company | Israeli Standards Institute Certified | Import License #IL-SOLAR-2024 | VAT: IL123456789',
    footerDescription: 'Leading provider of premium solar water heating solutions in Israel. Custom-designed systems with Chinese technology and local expertise.',
    successfulInstallations: 'Successful Installations',
    acrossIsrael: 'Across Israel',
    founded: 'Founded: 2018',
    ceo: 'CEO: Emil Dawahde',
    coFounder: 'Co-Founder: Bader Dawahde'
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
    laraSolare: 'Lara Solare?',
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
    founded: 'נוסדה: 2018',
    ceo: 'מנכ״ל: אמיל דוואהדה',
    coFounder: 'שותף מייסד: בדר דוואהדה'
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
    laraSolare: 'Lara Solare؟',
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
    callUs: 'اتصل بنا',
    company: 'الشركة',
    aboutUs: 'حولنا',
    ourStory: 'قصتنا',
    careers: 'وظائف',
    news: 'أخبار',
    residentialSystems: 'أنظمة سكنية',
    commercialSolutions: 'حلول تجارية',
    warranties: 'ضمانات',
    maintenance: 'صيانة',
    customerSupport: 'دعم العملاء',
    installationGuide: 'دليل التركيب',
    faq: 'أسئلة شائعة',
    contactUs: 'اتصل بنا',
    workingHours: 'الأحد-الخميس 8:00-18:00',
    responseTime: 'وقت الاستجابة 24 ساعة',
    allOfIsrael: 'جميع أنحاء إسرائيل',
    followUs: 'تابعونا',
    allRightsReserved: 'جميع الحقوق محفوظة.',
    privacyPolicy: 'سياسة الخصوصية',
    termsOfService: 'شروط الخدمة',
    cookiePolicy: 'سياسة الكوكيز',
    partnerWithUs: 'كن شريكاً معنا',
    companyCredentials: 'شركة تركيب دوود شمسية مرخصة | معتمدة من معهد المعايير الإسرائيلي | رخصة استيراد #IL-SOLAR-2024 | ضريبة القيمة المضافة: IL123456789',
    footerDescription: 'مزود رائد لحلول سخانات المياه الشمسية المتميزة في إسرائيل. أنظمة مصممة خصيصاً بتقنية صينية وخبرة محلية.',
    successfulInstallations: 'تركيبات ناجحة',
    acrossIsrael: 'في جميع أنحاء إسرائيل',
    founded: 'تأسست: 2018',
    ceo: 'الرئيس التنفيذي: ايميل دواهدة',
    coFounder: 'المؤسس المشارك: بدر دواهدة'
  }
};

// Auto-detect language function
const detectLanguage = (): string => {
  // Check if language is stored in localStorage
  const savedLanguage = localStorage.getItem('preferred-language');
  if (savedLanguage && ['en', 'he', 'ar'].includes(savedLanguage)) {
    return savedLanguage;
  }

  // Auto-detect from browser language
  const browserLang = navigator.language || navigator.languages?.[0] || 'he';
  
  if (browserLang.startsWith('he')) return 'he';
  if (browserLang.startsWith('ar')) return 'ar';
  if (browserLang.startsWith('en')) return 'en';
  
  // Default fallback to Hebrew
  return 'he';
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState(() => detectLanguage());
  
  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
  };
  
  const t = (key: string) => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  // Set document attributes for RTL support and persist across route changes
  useEffect(() => {
    const isRTL = language === 'he' || language === 'ar';
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
    
    // Force re-render of all components to apply translations
    const event = new CustomEvent('languageChange', { detail: { language } });
    window.dispatchEvent(event);
  }, [language]);

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
  const location = useLocation();
  const navigate = useNavigate();
  const isRTL = language === 'he' || language === 'ar';

  // Re-apply language on route change
  useEffect(() => {
    const handleLanguageChange = () => {
      // Force component re-render when language changes
      setIsMenuOpen(false);
    };
    
    window.addEventListener('languageChange', handleLanguageChange);
    return () => window.removeEventListener('languageChange', handleLanguageChange);
  }, []);

  const handleNavigation = (href: string, label: string) => {
    if (href.startsWith('#')) {
      // Hash navigation - only works on homepage
      if (location.pathname !== '/') {
        // If not on homepage, go to homepage first then scroll to section
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(href.slice(1));
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Already on homepage, just scroll to section
        const element = document.getElementById(href.slice(1));
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Regular page navigation
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
      <div className="container mx-auto px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3 cursor-pointer min-w-0 shrink-0"
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
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
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.href}
                className="text-slate-700 hover:text-orange-600 transition-all duration-300 font-medium relative group whitespace-nowrap text-sm lg:text-base"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => handleNavigation(item.href, item.label)}
              >
                {item.label}
                <span className={`absolute -bottom-1 ${isRTL ? 'right-0' : 'left-0'} w-0 h-0.5 bg-gradient-to-r from-orange-500 to-yellow-500 group-hover:w-full transition-all duration-300`}></span>
              </motion.button>
            ))}
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
            <div className="flex items-center gap-2 bg-slate-50 rounded-full px-3 py-2 border border-slate-200 min-w-fit">
              <Globe className="h-4 w-4 text-slate-600 flex-shrink-0" />
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-transparent border-none text-sm font-medium text-slate-700 focus:outline-none cursor-pointer min-w-0"
                style={{ direction: 'ltr' }}
              >
                <option value="he">עברית</option>
                <option value="en">English</option>
                <option value="ar">العربية</option>
              </select>
            </div>
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
              <nav className="flex flex-col space-y-3 pt-4">
                {menuItems.map((item) => (
                  <button
                    key={item.href}
                    className={`text-slate-700 hover:text-orange-600 transition-colors font-medium py-2 px-4 rounded-lg hover:bg-slate-50 ${isRTL ? 'text-right' : 'text-left'}`}
                    onClick={() => handleNavigation(item.href, item.label)}
                  >
                    {item.label}
                  </button>
                ))}
                <div className={`flex items-center ${isRTL ? 'justify-start' : 'justify-between'} pt-4 border-t border-slate-100 gap-3`}>
                  <div className="flex items-center gap-2 bg-slate-50 rounded-full px-3 py-2 border border-slate-200 flex-1 max-w-[140px]">
                    <Globe className="h-4 w-4 text-slate-600 flex-shrink-0" />
                    <select 
                      value={language} 
                      onChange={(e) => setLanguage(e.target.value)}
                      className="bg-transparent border-none text-sm font-medium text-slate-700 focus:outline-none flex-1 min-w-0"
                      style={{ direction: 'ltr' }}
                    >
                      <option value="he">עברית</option>
                      <option value="en">English</option>
                      <option value="ar">العربية</option>
                    </select>
                  </div>
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
