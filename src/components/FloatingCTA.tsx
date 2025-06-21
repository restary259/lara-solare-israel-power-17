
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setShowButtons(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/972501234567?text=Hello! I\'m interested in learning more about your solar water heaters.', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+972501234567';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-6 right-6 z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-end space-y-3">
            {/* Individual Action Buttons */}
            <AnimatePresence>
              {showButtons && (
                <>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                  >
                    <Button
                      onClick={handleCall}
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg rounded-full px-6"
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </Button>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                  >
                    <Button
                      onClick={handleWhatsApp}
                      size="lg"
                      className="bg-green-600 hover:bg-green-700 text-white shadow-lg rounded-full px-6"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Button
                      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                      size="lg"
                      className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg rounded-full px-6"
                    >
                      Get Quote
                    </Button>
                  </motion.div>
                </>
              )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={() => setShowButtons(!showButtons)}
                size="lg"
                className={`rounded-full w-16 h-16 shadow-2xl transition-all duration-300 ${
                  showButtons 
                    ? 'bg-slate-600 hover:bg-slate-700' 
                    : 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600'
                }`}
              >
                {showButtons ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <div className="flex flex-col items-center">
                    <Phone className="h-5 w-5 text-white mb-1" />
                    <span className="text-xs text-white">Help</span>
                  </div>
                )}
              </Button>
              
              {/* Pulsing Ring Animation */}
              {!showButtons && (
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-orange-400 opacity-30"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
