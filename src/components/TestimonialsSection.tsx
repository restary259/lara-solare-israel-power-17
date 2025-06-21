
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "David Cohen",
      location: "Tel Aviv",
      rating: 5,
      text: "Excellent service from consultation to installation. The solar water heater has been working perfectly for 2 years now. Significant savings on electricity bills!",
      project: "300L Family System",
      savings: "60% reduction in water heating costs"
    },
    {
      name: "Sarah Levi",
      location: "Haifa",
      rating: 5,
      text: "Professional team, quality products, and amazing support. The system efficiency exceeded our expectations. Highly recommend Lara Solare!",
      project: "200L Residential System",
      savings: "45% monthly savings"
    },
    {
      name: "Hotel Galilee",
      location: "Tiberias",
      rating: 5,
      text: "Outstanding commercial installation for our hotel. The 500L system handles our high demand perfectly. Great ROI and reliable performance.",
      project: "Commercial 500L System",
      savings: "₪15,000 annual savings"
    },
    {
      name: "Mohammad Abu-Khaled",
      location: "Nazareth",
      rating: 5,
      text: "شركة ممتازة وخدمة احترافية. النظام يعمل بكفاءة عالية ووفر لنا الكثير من فواتير الكهرباء. أنصح بها بشدة!",
      project: "Family Premium 300L",
      savings: "55% cost reduction"
    },
    {
      name: "Rachel Goldstein",
      location: "Jerusalem",
      rating: 5,
      text: "המערכת עובדת מצוין כבר שנה וחצי. השירות מקצועי והחיסכון משמעותי. ממליצה בחום על לארה סולארה!",
      project: "200L Residential Pro",
      savings: "₪2,400 yearly savings"
    },
    {
      name: "Ahmed Hassan",
      location: "Be'er Sheva",
      rating: 5,
      text: "Exceptional quality and service. The installation was smooth and the system performance is outstanding. Great investment for our family!",
      project: "300L Family System",
      savings: "50% energy reduction"
    }
  ];

  const caseStudies = [
    {
      title: "Residential Villa - Tel Aviv",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
      system: "Family Premium 300L",
      savings: "₪3,200 annual savings",
      efficiency: "94% thermal efficiency",
      details: "Modern villa installation with optimal roof positioning and smart monitoring system."
    },
    {
      title: "Boutique Hotel - Eilat",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
      system: "Multiple Commercial 500L",
      savings: "₪25,000 annual savings",
      efficiency: "92% system efficiency",
      details: "Large-scale commercial installation serving 50+ rooms with redundant backup systems."
    },
    {
      title: "Apartment Building - Haifa",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
      system: "Centralized Solar System",
      savings: "40% cost reduction per unit",
      efficiency: "91% average efficiency",
      details: "Centralized system serving 12 residential units with individual metering."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Customer <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how our solar solutions have transformed homes and businesses across Israel
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full bg-white hover:shadow-lg transition-all duration-300 border-2 border-slate-100 hover:border-orange-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-6 w-6 text-orange-300" />
                  </div>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">"{testimonial.text}"</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-slate-800">{testimonial.name}</div>
                        <div className="text-sm text-slate-500">{testimonial.location}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700 border-blue-200">
                        {testimonial.project}
                      </Badge>
                      <div className="text-sm font-medium text-green-600">
                        💰 {testimonial.savings}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-slate-800 mb-12 text-center">Featured Case Studies</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="group overflow-hidden bg-white hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 text-white">
                      <h4 className="text-lg font-bold">{study.title}</h4>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white">
                          {study.system}
                        </Badge>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-medium text-slate-800">Annual Savings</div>
                          <div className="text-green-600 font-semibold">{study.savings}</div>
                        </div>
                        <div>
                          <div className="font-medium text-slate-800">Efficiency</div>
                          <div className="text-blue-600 font-semibold">{study.efficiency}</div>
                        </div>
                      </div>
                      
                      <p className="text-slate-600 text-sm leading-relaxed">{study.details}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className="bg-white rounded-2xl p-8 mt-16 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
              <div className="text-slate-600">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-slate-600">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-slate-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-slate-600">Support Available</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
