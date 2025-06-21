
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import { useLanguage } from "./Header";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  // Throttled scroll handler to prevent performance issues
  const handleScroll = useCallback(() => {
    const scrolled = window.scrollY;
    const shouldShow = scrolled > 300;
    
    if (shouldShow !== isVisible) {
      setIsVisible(shouldShow);
    }
  }, [isVisible]);

  useEffect(() => {
    // Throttle scroll events to improve performance
    let ticking = false;
    
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3"
          style={{ willChange: 'transform' }}
        >
          {/* WhatsApp Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg border-2 border-white/20"
              onClick={() => window.open('https://wa.me/972123456789', '_blank')}
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">{t('whatsappUs')}</span>
            </Button>
          </motion.div>

          {/* Call Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-full shadow-lg border-2 border-white/20"
              onClick={() => window.open('tel:+972123456789', '_self')}
            >
              <Phone className="h-5 w-5 mr-2" />
              <span className="hidden sm:inline">{t('callUs')}</span>
            </Button>
          </motion.div>

          {/* Request Quote Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.1 }}
          >
            <Button
              size="lg"
              className="bg-slate-800 hover:bg-slate-700 text-white rounded-full shadow-lg border-2 border-white/20"
            >
              <span className="hidden sm:inline">{t('requestQuote')}</span>
              <span className="sm:hidden">Quote</span>
            </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
