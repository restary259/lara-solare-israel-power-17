
import { Sun, Phone, Mail, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Us", href: "#about", nameHe: "אודותינו", nameAr: "حولنا" },
      { name: "Our Story", href: "#story", nameHe: "הסיפור שלנו", nameAr: "قصتنا" },
      { name: "Careers", href: "#careers", nameHe: "קריירה", nameAr: "وظائف" },
      { name: "News", href: "#news", nameHe: "חדשות", nameAr: "أخبار" }
    ],
    products: [
      { name: "Residential Systems", href: "#products", nameHe: "מערכות ביתיות", nameAr: "أنظمة سكنية" },
      { name: "Commercial Solutions", href: "#commercial", nameHe: "פתרונות מסחריים", nameAr: "حلول تجارية" },
      { name: "Warranties", href: "#warranty", nameHe: "אחריות", nameAr: "ضمانات" },
      { name: "Maintenance", href: "#maintenance", nameHe: "תחזוקה", nameAr: "صيانة" }
    ],
    support: [
      { name: "Customer Support", href: "#support", nameHe: "תמיכת לקוחות", nameAr: "دعم العملاء" },
      { name: "Installation Guide", href: "#guide", nameHe: "מדריך התקנה", nameAr: "دليل التركيب" },
      { name: "FAQ", href: "#faq", nameHe: "שאלות נפוצות", nameAr: "أسئلة شائعة" },
      { name: "Contact Us", href: "#contact", nameHe: "צור קשר", nameAr: "اتصل بنا" }
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
              Leading provider of premium solar water heating solutions in Israel. 
              Custom-designed systems with Chinese technology and local expertise.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                <Sun className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">Certified Excellence</div>
                <div className="text-xs text-slate-400">IS Standards Compliant</div>
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
            <h3 className="text-lg font-bold mb-6 text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
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
            <h3 className="text-lg font-bold mb-6 text-white">Products</h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-slate-300 hover:text-orange-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
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
            <h3 className="text-lg font-bold mb-6 text-white">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-400" />
                <div>
                  <div className="text-sm font-medium">+972-50-123-4567</div>
                  <div className="text-xs text-slate-400">Sun-Thu 8:00-18:00</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-400" />
                <div>
                  <div className="text-sm font-medium">info@larasolare.co.il</div>
                  <div className="text-xs text-slate-400">24h response time</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-400" />
                <div>
                  <div className="text-sm font-medium">Nationwide Service</div>
                  <div className="text-xs text-slate-400">All of Israel</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="h-4 w-4 text-orange-400" />
                <div className="flex space-x-2 text-sm">
                  <span className="text-white cursor-pointer hover:text-orange-400">English</span>
                  <span className="text-slate-400">|</span>
                  <span className="text-slate-300 cursor-pointer hover:text-orange-400">עברית</span>
                  <span className="text-slate-400">|</span>
                  <span className="text-slate-300 cursor-pointer hover:text-orange-400">العربية</span>
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
              © {currentYear} Lara Solare Energy. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-slate-400 hover:text-orange-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-slate-400 hover:text-orange-400 transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-slate-400 hover:text-orange-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-800 text-center">
            <p className="text-slate-500 text-xs">
              Licensed Solar Installation Company | Israeli Standards Institute Certified | 
              Import License #IL-SOLAR-2024 | VAT: IL123456789
            </p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
