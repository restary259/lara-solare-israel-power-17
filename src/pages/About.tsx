
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Target, Heart, CheckCircle, Star, Globe, Zap } from "lucide-react";
import { motion } from "framer-motion";
import Header, { LanguageProvider, useLanguage } from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const About = () => {
  return (
    <LanguageProvider>
      <AboutContent />
    </LanguageProvider>
  );
};

const AboutContent = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'he' || language === 'ar';

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We deliver only the highest quality solar solutions with premium materials and expert craftsmanship.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We provide personalized service and ongoing support.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "We're committed to creating a greener future through renewable energy solutions.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We continuously adopt the latest solar technologies to provide cutting-edge solutions.",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const stats = [
    { number: "2000+", label: "Happy Customers" },
    { number: "15+", label: "Years Experience" },
    { number: "50+", label: "Cities Covered" },
    { number: "99%", label: "Customer Satisfaction" }
  ];

  const team = [
    {
      name: "David Cohen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
      bio: "15+ years in renewable energy industry"
    },
    {
      name: "Sarah Levi",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c7a5?auto=format&fit=crop&w=400&q=80",
      bio: "Expert in solar system design and installation"
    },
    {
      name: "Ahmed Hassan",
      role: "Operations Manager",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "Ensures smooth operations across all projects"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 md:pt-24 pb-12 md:pb-16 bg-gradient-to-r from-blue-900 to-slate-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
              About <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Lara Solare</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed">
              Leading provider of premium solar water heating solutions in Israel since 2008
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6">Our Story</h2>
              <div className="space-y-4 md:space-y-6 text-slate-600 leading-relaxed">
                <p className="text-base md:text-lg">
                  Founded in 2008, Lara Solare began with a simple mission: to bring the most advanced solar water heating technology to Israeli homes and businesses.
                </p>
                <p className="text-base md:text-lg">
                  We recognized that Israel's abundant sunshine and the rising costs of traditional water heating created a perfect opportunity for solar solutions. By partnering with leading Chinese manufacturers and combining their cutting-edge technology with local expertise, we've installed over 2,000 systems across the country.
                </p>
                <p className="text-base md:text-lg">
                  Today, we're proud to be Israel's trusted name in solar water heating, serving customers from Eilat to the Galilee with premium products and exceptional service.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=80" 
                alt="Solar installation team" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-orange-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-slate-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6">Our Values</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              These core principles guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-slate-100 hover:border-orange-200">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${value.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="h-6 w-6 md:h-8 md:w-8 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <CardTitle className="text-lg md:text-xl font-bold text-slate-800 mb-2">
                            {value.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-4 md:mb-6">Meet Our Team</h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
              Experienced professionals dedicated to your solar success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center bg-gradient-to-br from-white to-slate-50 border-2 border-slate-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-2">{member.name}</h3>
                    <p className="text-orange-600 font-medium mb-3 text-sm md:text-base">{member.role}</p>
                    <p className="text-slate-600 text-sm leading-relaxed">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6">
              Ready to Join Our Solar Family?
            </h2>
            <p className="text-lg md:text-xl text-orange-100 mb-6 md:mb-8">
              Experience the Lara Solare difference - premium products, expert installation, and exceptional service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-orange-600 hover:bg-slate-100 shadow-lg text-base md:text-lg px-6 md:px-8 py-3"
              >
                Get Free Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-orange-600 text-base md:text-lg px-6 md:px-8 py-3"
              >
                Contact Us
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

export default About;
