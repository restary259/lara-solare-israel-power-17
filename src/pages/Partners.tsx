
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Handshake, TrendingUp, Shield, Award, Users, CheckCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Header, { LanguageProvider, useLanguage } from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const PartnersPage = () => {
  const { t } = useLanguage();

  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: "צמיחה עסקית מובטחת",
      description: "הצטרפו לרשת הספקים המובילה בישראל ותזכו לגידול מתמיד בהכנסות"
    },
    {
      icon: Shield,
      title: "תמיכה מקצועית מלאה",
      description: "נספק הכשרה, תמיכה טכנית וליווי שיווקי לכל השותפים שלנו"
    },
    {
      icon: Award,
      title: "מוצרים איכותיים מובילים",
      description: "גישה בלעדית למוצרים המתקדמים ביותר מהיצרנים המובילים בסין"
    },
    {
      icon: Users,
      title: "קהילת שותפים חזקה",
      description: "חלק מקהילה של מומחים המחלקים ידע, ניסיון והזדמנויות עסקיות"
    }
  ];

  const partnerLogos = [
    {
      name: "חברת אנרגיה ירוקה בע\"מ",
      location: "תל אביב",
      description: "מובילים בפתרונות אנרגיה מתחדשת למגזר הביתי"
    },
    {
      name: "סולאר טק ישראל",
      location: "חיפה", 
      description: "מתמחים בהתקנות מערכות סולאריות למגזר המסחרי"
    },
    {
      name: "מים חמים בע\"מ",
      location: "באר שבע",
      description: "ספקי דודי שמש מובילים בדרום הארץ"
    },
    {
      name: "אקו אנרגיה",
      location: "ירושלים",
      description: "פתרונות אנרגיה בת-קיימא למשפחות ועסקים"
    },
    {
      name: "סולאר פלוס",
      location: "נתניה",
      description: "מערכות סולאריות מתקדמות עם שירות VIP"
    },
    {
      name: "אנרגיית השמש",
      location: "אשדוד",
      description: "התקנה ותחזוקה של מערכות דוד שמש בכל הארץ"
    }
  ];

  const partnershipProcess = [
    {
      step: "1",
      title: "בדיקת התאמה",
      description: "נבחן את הניסיון שלכם, האזור הגיאוגרפי והיכולות הטכניות"
    },
    {
      step: "2", 
      title: "הסכם שותפות",
      description: "חתימה על הסכם שותפות המבטיח תנאים מועדפים ותמיכה מלאה"
    },
    {
      step: "3",
      title: "הכשרה והדרכה",
      description: "קורס הכשרה מקיף על המוצרים, ההתקנה ושירות הלקוחות"
    },
    {
      step: "4",
      title: "השקה והתחלה",
      description: "תחילת פעילות עם תמיכה שיווקית וטכנית מתמשכת"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6">
        <div className="container mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
              הפכו <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">לשותפים</span> שלנו
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              הצטרפו לרשת השותפים המובילה בתחום הדודי שמש בישראל וקבלו גישה למוצרים המתקדמים ביותר עם תמיכה מקצועית מלאה
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {partnerBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full bg-white hover:shadow-lg transition-all duration-300 border-2 border-slate-100 hover:border-orange-200">
                  <CardHeader>
                    <div className="flex items-center space-x-4 space-x-reverse mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                        <benefit.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold text-slate-800">{benefit.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Current Partners */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-8 text-center">השותפים שלנו</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerLogos.map((partner, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="text-center bg-white hover:shadow-lg transition-all duration-300 p-6">
                    <CardContent className="space-y-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                        <Handshake className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">{partner.name}</h3>
                        <Badge variant="outline" className="mb-3">{partner.location}</Badge>
                        <p className="text-sm text-slate-600">{partner.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Partnership Process */}
          <motion.div
            className="bg-white rounded-3xl p-8 shadow-xl mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-slate-800 mb-8 text-center">תהליך ההצטרפות</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnershipProcess.map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto text-2xl font-bold text-white shadow-lg">
                      {item.step}
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full opacity-20 animate-pulse"></div>
                  </div>
                  <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.description}</p>
                  {index < partnershipProcess.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full">
                      <div className="h-0.5 bg-gradient-to-l from-orange-300 to-yellow-300 transform -translate-x-8"></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="text-center bg-gradient-to-r from-orange-50 to-yellow-50 rounded-3xl p-8 border border-orange-100"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">מוכנים להצטרף אלינו?</h3>
            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
              מלאו את הפרטים ונציג שלנו יחזור אליכם תוך 24 שעות לקביעת פגישת היכרות
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Handshake className="ml-2 h-5 w-5" />
                הצטרפו כשותפים
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 shadow-md hover:shadow-lg transition-all duration-300">
                <ArrowLeft className="ml-2 h-5 w-5" />
                חזרה לאתר
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

const Partners = () => {
  return (
    <LanguageProvider>
      <PartnersPage />
    </LanguageProvider>
  );
};

export default Partners;
