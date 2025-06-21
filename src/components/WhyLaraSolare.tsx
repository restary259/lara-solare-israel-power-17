
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sun, Shield, Award, Users, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

const WhyLaraSolare = () => {
  const features = [
    {
      icon: Sun,
      title: "Custom-Made in China",
      description: "Premium solar water heaters designed specifically for Israeli climate conditions with advanced Chinese manufacturing technology.",
      badge: "Premium Quality"
    },
    {
      icon: Users,
      title: "Local Expertise",
      description: "Founded by industry veterans with deep understanding of Israeli market needs and regulatory requirements.",
      badge: "15+ Years"
    },
    {
      icon: Shield,
      title: "Comprehensive Warranty",
      description: "Industry-leading warranty coverage with local support and maintenance services throughout Israel.",
      badge: "10 Year Warranty"
    },
    {
      icon: Zap,
      title: "High Efficiency",
      description: "Up to 95% thermal efficiency with advanced heat exchange technology and superior insulation materials.",
      badge: "95% Efficiency"
    },
    {
      icon: Globe,
      title: "Nationwide Service",
      description: "Professional installation and maintenance services available across Israel, from north to south.",
      badge: "Israel Wide"
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "All products meet Israeli standards (IS) and international certifications for safety and performance.",
      badge: "IS Certified"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Why Choose <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Lara Solare?</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We bridge the gap between cutting-edge Chinese solar technology and Israeli market expertise, 
            delivering custom solutions that perfectly match your needs.
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
                <Card className="group h-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="relative">
                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2">
                          <Badge variant="secondary" className="bg-gradient-to-r from-blue-600 to-blue-700 text-white text-xs px-2 py-1">
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
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Founder Story Section */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-800 mb-6">Our Founder's Story</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">
                With over 15 years in Israel's renewable energy sector, our founder recognized the gap between 
                high-quality Chinese solar technology and local market needs. After establishing partnerships 
                with leading Chinese manufacturers, Lara Solare was born.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our mission is simple: deliver custom-designed, premium solar water heating solutions that 
                combine Chinese manufacturing excellence with Israeli installation expertise and ongoing support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge className="bg-orange-100 text-orange-800 px-4 py-2">Industry Pioneer</Badge>
                <Badge className="bg-blue-100 text-blue-800 px-4 py-2">China-Israel Bridge</Badge>
                <Badge className="bg-green-100 text-green-800 px-4 py-2">Sustainability Expert</Badge>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-4 bg-white rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <Sun className="h-16 w-16 text-orange-500 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">Bridging Technology</p>
                    <p className="text-slate-600 font-medium">& Expertise</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyLaraSolare;
