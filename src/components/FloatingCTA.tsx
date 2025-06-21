
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLanguage } from "./Header";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3"
        >
          {/* WhatsApp Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm"
              onClick={() => window.open('https://wa.me/972123456789', '_blank')}
            >
              <MessageCircle className="h-6 w-6 mr-2" />
              <span className="hidden sm:inline">{t('whatsappUs')}</span>
            </Button>
          </motion.div>

          {/* Call Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm"
              onClick={() => window.open('tel:+972123456789', '_self')}
            >
              <Phone className="h-6 w-6 mr-2" />
              <span className="hidden sm:inline">{t('callUs')}</span>
            </Button>
          </motion.div>

          {/* Request Quote Button */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="bg-slate-800 hover:bg-slate-700 text-white rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm"
            >
              <span className="hidden sm:inline">{t('requestQuote')}</span>
              <span className="sm:hidden">Quote</span>
            </Button>
          </motion.div>

          {/* Floating animation indicator */}
          <motion.div
            className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
