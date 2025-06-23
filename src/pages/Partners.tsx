import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Users, Handshake, TrendingUp, Award, CheckCircle, Star, Building, Wrench } from "lucide-react";
import { motion } from "framer-motion";
import Header, { LanguageProvider } from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Partners = () => {
  const partnershipTypes = [
    {
      icon: Building,
      title: "Dealer Partnership",
      description: "Become an authorized dealer and sell our premium solar solutions in your region",
      benefits: ["Exclusive territory rights", "Marketing support", "Training programs", "Competitive pricing"],
      requirements: ["Established business", "Local market knowledge", "Sales experience", "Technical capability"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Wrench,
      title: "Installation Partner",
      description: "Join our certified installer network and provide professional installation services",
      benefits: ["Steady project flow", "Technical certification", "Tools & equipment support", "Insurance coverage"],
      requirements: ["Licensed contractor", "Installation experience", "Professional team", "Quality commitment"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "Distributor Network",
      description: "Distribute our products across multiple regions with volume-based incentives",
      benefits: ["Volume discounts", "Logistics support", "Regional exclusivity", "Co-marketing funds"],
      requirements: ["Warehouse facility", "Distribution network", "Financial capacity", "Market presence"],
      color: "from-green-500 to-green-600"
    }
  ];

  const partnerBenefits = [
    { icon: TrendingUp, title: "Growing Market", description: "Solar industry growth of 25% annually in Israel" },
    { icon: Award, title: "Premium Brand", description: "Association with established quality brand" },
    { icon: Handshake, title: "Full Support", description: "Comprehensive training and ongoing assistance" },
    { icon: CheckCircle, title: "Proven Systems", description: "Time-tested products with excellent track record" }
  ];

  const existingPartners = [
    {
      name: "TechSolar Solutions",
      location: "Tel Aviv District",
      type: "Premium Dealer",
      rating: 4.9,
      projects: "150+ installations",
      specialty: "Residential & Commercial"
    },
    {
      name: "Green Energy Pro",
      location: "Northern Israel",
      type: "Certified Installer",
      rating: 4.8,
      projects: "200+ installations",
      specialty: "Large-scale Commercial"
    },
    {
      name: "Solar Systems Ltd",
      location: "Central Region",
      type: "Regional Distributor",
      rating: 4.9,
      projects: "500+ units distributed",
      specialty: "Multi-regional Coverage"
    }
  ];

  return (
    <LanguageProvider>
      <main className="content-with-bottom-nav">
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Header />
          
          {/* Hero Section */}
          <section className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-slate-800">
            <div className="container mx-auto px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Partner With <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Lara Solare</span>
                </h1>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                  Join Israel's leading solar water heater network and grow your business with premium products and comprehensive support
                </p>
                <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
                  Become a Partner
                </Button>
              </motion.div>
            </div>
          </section>

          {/* Partnership Types */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-slate-800 mb-6">Partnership Opportunities</h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Choose the partnership model that best fits your business goals and capabilities
                </p>
              </motion.div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {partnershipTypes.map((partnership, index) => {
                  const IconComponent = partnership.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full bg-white hover:shadow-xl transition-all duration-300 border-2 border-slate-200 hover:border-orange-200">
                        <CardHeader className="text-center">
                          <div className="flex justify-center mb-4">
                            <div className={`w-16 h-16 bg-gradient-to-br ${partnership.color} rounded-full flex items-center justify-center`}>
                              <IconComponent className="h-8 w-8 text-white" />
                            </div>
                          </div>
                          <CardTitle className="text-xl font-bold text-slate-800">{partnership.title}</CardTitle>
                          <CardDescription className="text-slate-600">{partnership.description}</CardDescription>
                        </CardHeader>
                        
                        <CardContent className="space-y-6">
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-3">Benefits</h4>
                            <div className="space-y-2">
                              {partnership.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-center space-x-2">
                                  <CheckCircle className="h-4 w-4 text-green-500" />
                                  <span className="text-sm text-slate-600">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-slate-800 mb-3">Requirements</h4>
                            <div className="space-y-2">
                              {partnership.requirements.map((requirement, reqIndex) => (
                                <div key={reqIndex} className="flex items-center space-x-2">
                                  <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                  <span className="text-sm text-slate-600">{requirement}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <Button className="w-full bg-slate-800 hover:bg-slate-700 text-white">
                            Apply Now
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why Partner With Us */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Why Partner With Lara Solare?</h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Join a proven network of successful partners across Israel
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                {partnerBenefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="text-center bg-gradient-to-br from-white to-slate-50 border-2 border-slate-100 hover:border-orange-200 transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="font-bold text-slate-800 mb-2">{benefit.title}</h3>
                          <p className="text-sm text-slate-600">{benefit.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Existing Partners */}
          <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="container mx-auto px-4">
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Successful Partners</h2>
                <p className="text-slate-600">Meet some of our top-performing partners across Israel</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {existingPartners.map((partner, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="bg-white hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg font-bold text-slate-800">{partner.name}</CardTitle>
                            <p className="text-slate-500">{partner.location}</p>
                          </div>
                          <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                            {partner.type}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-slate-600">Rating</span>
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{partner.rating}</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-600">Track Record</span>
                            <span className="font-medium text-green-600">{partner.projects}</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-slate-600">Specialty</span>
                            <span className="font-medium text-slate-800">{partner.specialty}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Partnership Application Form */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl mx-auto">
                <motion.div
                  className="text-center mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Ready to Partner?</h2>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200">
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-slate-800">Partnership Application</CardTitle>
                      <CardDescription>Tell us about your business and partnership interests</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Company Name *</label>
                            <Input placeholder="Your company name" className="border-slate-300" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Contact Person *</label>
                            <Input placeholder="Full name" className="border-slate-300" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
                            <Input type="email" placeholder="your@email.com" className="border-slate-300" />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-slate-700 mb-2">Phone *</label>
                            <Input type="tel" placeholder="+972-XX-XXX-XXXX" className="border-slate-300" />
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Partnership Interest *</label>
                          <select className="w-full p-3 border border-slate-300 rounded-md bg-white">
                            <option value="">Select partnership type</option>
                            <option value="dealer">Dealer Partnership</option>
                            <option value="installer">Installation Partner</option>
                            <option value="distributor">Distributor Network</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Business Description</label>
                          <Textarea 
                            placeholder="Tell us about your business, experience, and why you want to partner with us..."
                            className="border-slate-300 min-h-[120px]"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-2">Location/Service Area</label>
                          <Input placeholder="City, region, or area you serve" className="border-slate-300" />
                        </div>

                        <Button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-3 text-lg">
                          Submit Partnership Application
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          <Footer />
          <FloatingCTA />
        </div>
      </main>
    </LanguageProvider>
  );
};

export default Partners;
