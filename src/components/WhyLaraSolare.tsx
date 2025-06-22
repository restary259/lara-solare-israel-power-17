
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Shield, Award, Users, Zap, Globe, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "./Header";

const WhyLaraSolare = () => {
  const { t, language } = useLanguage();

  const features = [
    {
      icon: Sun,
      title: t('customMade'),
      description: language === 'he' 
        ? "דודי שמש איכותיים המותאמים במיוחד לתנאי האקלים הישראלי עם טכנולוגיית ייצור סינית מתקדמת."
        : "Premium solar water heaters designed specifically for Israeli climate conditions with advanced Chinese manufacturing technology.",
      badge: language === 'he' ? "איכות פרימיום" : "Premium Quality",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Users,
      title: t('localExpertise'),
      description: language === 'he' 
        ? "נוסדה על ידי ותיקי התעשייה עם הבנה עמוקה של צרכי השוק הישראלי ודרישות רגולטוריות."
        : "Founded by industry veterans with deep understanding of Israeli market needs and regulatory requirements.",
      badge: language === 'he' ? "15+ שנים" : "15+ Years",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: t('warranty'),
      description: language === 'he' 
        ? "כיסוי אחריות מוביל בתעשייה עם תמיכה מקומית ושירותי תחזוקה ברחבי ישראל."
        : "Industry-leading warranty coverage with local support and maintenance services throughout Israel.",
      badge: language === 'he' ? "10 שנות אחריות" : "10 Year Warranty",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: t('highEfficiency'),
      description: language === 'he' 
        ? "יעילות תרמית של עד 95% עם טכנולוגיית חילופי חום מתקדמת וחומרי בידוד מעולים."
        : "Up to 95% thermal efficiency with advanced heat exchange technology and superior insulation materials.",
      badge: language === 'he' ? "95% יעילות" : "95% Efficiency",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Globe,
      title: t('nationwideService'),
      description: language === 'he' 
        ? "שירותי התקנה ותחזוקה מקצועיים זמינים ברחבי ישראל, מצפון ועד דרום."
        : "Professional installation and maintenance services available across Israel, from north to south.",
      badge: language === 'he' ? "ברחבי ישראל" : "Israel Wide",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: t('certifiedExcellence'),
      description: language === 'he' 
        ? "כל המוצרים עונים על התקן הישראלי (ת״י) והסמכות בינלאומיות לבטיחות וביצועים."
        : "All products meet Israeli standards (IS) and international certifications for safety and performance.",
      badge: language === 'he' ? "מוסמך ת״י" : "IS Certified",
      color: "from-indigo-500 to-blue-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {t('whyChoose')} <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">{t('laraSolare')}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'he' 
              ? "אנחנו מגשרים בין טכנולוגיית שמש סינית מתקדמת למומחיות שוק ישראלית, ומעניקים פתרונות מותאמים אישית שמתאימים בדיוק לצרכים שלכם."
              : "We bridge the gap between cutting-edge Chinese solar technology and Israeli market expertise, delivering custom solutions that perfectly match your needs."
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full bg-white border-2 border-slate-100 hover:border-orange-200 transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2">
                  <CardHeader className="text-center pb-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2">
                          <Badge variant="secondary" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-2 py-1 shadow-md">
                            {feature.badge}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                    <div className="flex items-center mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span className="text-sm text-green-600 font-medium">
                        {language === 'he' ? "איכות מאומתת" : "Verified Quality"}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Founder Story Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-slate-50 via-blue-50 to-slate-50 rounded-3xl p-8 md:p-12 border border-slate-200 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">
                {language === 'he' ? "הסיפור של המייסד שלנו" : "Our Founder's Story"}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mb-6 rounded-full"></div>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {language === 'he' 
                  ? "עם למעלה מ-15 שנים בתחום האנרגיה המתחדשת בישראל, המייסד שלנו זיהה את הפער בין טכנולוגיית שמש סינית איכותית לצרכי השוק המקומי. לאחר הקמת שותפויות עם יצרנים סיניים מובילים, נולדה לרה סולארה."
                  : "With over 15 years in Israel's renewable energy sector, our founder recognized the gap between high-quality Chinese solar technology and local market needs. After establishing partnerships with leading Chinese manufacturers, Lara Solare was born."
                }
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {language === 'he' 
                  ? "המשימה שלנו פשוטה: לספק פתרונות חימום מים סולאריים מותאמים אישית ופרמיום שמשלבים מצוינות ייצור סינית עם מומחיות התקנה ישראלית ותמיכה שוטפת."
                  : "Our mission is simple: deliver custom-designed, premium solar water heating solutions that combine Chinese manufacturing excellence with Israeli installation expertise and ongoing support."
                }
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-orange-100 text-orange-800 px-4 py-2 border border-orange-200">
                  {language === 'he' ? "חלוץ בתעשייה" : "Industry Pioneer"}
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2 border border-blue-200">
                  {language === 'he' ? "גשר סין-ישראל" : "China-Israel Bridge"}
                </Badge>
                <Badge className="bg-green-100 text-green-800 px-4 py-2 border border-green-200">
                  {language === 'he' ? "מומחה קיימות" : "Sustainability Expert"}
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-400 via-yellow-400 to-orange-500 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-4 bg-white rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    >
                      <Sun className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                    </motion.div>
                    <p className="text-slate-600 font-medium">
                      {language === 'he' ? "גישור טכנולוגיה" : "Bridging Technology"}
                    </p>
                    <p className="text-slate-600 font-medium">
                      {language === 'he' ? "ומומחיות" : "& Expertise"}
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20"></div>
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full opacity-20"></div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              {language === 'he' ? "החלנו ב-2018 בתמרה" : "We started in 2018 in Tamara"}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyLaraSolare;
