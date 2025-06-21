
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Wrench, Shield, Globe, CheckCircle, Clock } from "lucide-react";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Import & Supply",
      description: "Direct import from leading Chinese manufacturers with quality assurance and customs handling.",
      features: ["Quality Control", "Customs Clearance", "Bulk Pricing", "Fast Shipping"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Wrench,
      title: "Professional Installation",
      description: "Expert installation by certified technicians across Israel with complete setup and testing.",
      features: ["Certified Technicians", "Complete Setup", "System Testing", "Site Assessment"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Shield,
      title: "Maintenance & Repair",
      description: "Comprehensive maintenance packages and rapid repair services to keep your system running.",
      features: ["Preventive Maintenance", "24/7 Support", "Genuine Parts", "Emergency Repairs"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Truck,
      title: "Distribution Network",
      description: "Nationwide distribution network serving dealers, contractors, and end customers efficiently.",
      features: ["Nationwide Coverage", "Dealer Support", "Logistics Management", "Inventory Solutions"],
      color: "from-purple-500 to-purple-600"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Consultation",
      description: "Free site assessment and system recommendation based on your specific needs."
    },
    {
      step: "2",
      title: "Custom Design",
      description: "Tailored system design optimized for your property and hot water requirements."
    },
    {
      step: "3",
      title: "Professional Installation",
      description: "Expert installation by certified technicians with complete system commissioning."
    },
    {
      step: "4",
      title: "Ongoing Support",
      description: "Comprehensive warranty coverage and maintenance support throughout system lifetime."
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Complete <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Solar Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From import to installation, maintenance to support - we handle every aspect of your solar water heating journey
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full bg-gradient-to-br from-white to-slate-50 border-2 border-slate-100 hover:border-orange-200 transition-all duration-300 hover:shadow-lg">
                  <CardHeader className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Process Section */}
        <motion.div
          className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Our Process</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-slate-800 mb-3">{item.title}</h4>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="h-0.5 bg-gradient-to-r from-orange-300 to-yellow-300 transform -translate-x-8"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Ready to Get Started?</h3>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our solar solutions can benefit your property.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white">
              <Clock className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50">
              Get Free Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
