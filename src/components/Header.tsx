
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');

  const menuItems = [
    { href: '#home', label: 'Home', labelHe: 'בית', labelAr: 'الرئيسية' },
    { href: '#products', label: 'Products', labelHe: 'מוצרים', labelAr: 'المنتجات' },
    { href: '#services', label: 'Services', labelHe: 'שירותים', labelAr: 'الخدمات' },
    { href: '#about', label: 'About', labelHe: 'אודות', labelAr: 'حولنا' },
    { href: '#contact', label: 'Contact', labelHe: 'צור קשר', labelAr: 'اتصل بنا' },
  ];

  const getLabel = (item: any) => {
    if (language === 'he') return item.labelHe;
    if (language === 'ar') return item.labelAr;
    return item.label;
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/lovable-uploads/7706812b-46c5-418f-b20d-7c094260878e.png" 
              alt="Lara Solare Energy" 
              className="h-12 w-auto"
            />
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="text-slate-700 hover:text-orange-600 transition-colors font-medium"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {getLabel(item)}
              </motion.a>
            ))}
          </nav>

          {/* Language Selector & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2">
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
            <Button className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
              {language === 'he' ? 'קבל הצעת מחיר' : language === 'ar' ? 'احصل على عرض سعر' : 'Get Quote'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
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
              className="md:hidden mt-4 pb-4 border-t"
            >
              <nav className="flex flex-col space-y-4 pt-4">
                {menuItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-slate-700 hover:text-orange-600 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {getLabel(item)}
                  </a>
                ))}
                <div className="flex items-center justify-between pt-4 border-t">
                  <select 
                    value={language} 
                    onChange={(e) => setLanguage(e.target.value)}
                    className="bg-transparent border border-slate-300 rounded px-2 py-1 text-sm"
                  >
                    <option value="en">English</option>
                    <option value="he">עברית</option>
                    <option value="ar">العربية</option>
                  </select>
                  <Button size="sm" className="bg-gradient-to-r from-orange-500 to-yellow-500">
                    {language === 'he' ? 'קבל הצעת מחיר' : language === 'ar' ? 'احصل على عرض سعر' : 'Get Quote'}
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
