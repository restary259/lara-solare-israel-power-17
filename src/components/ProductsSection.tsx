
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sun, Droplets, Thermometer, Shield, Star } from "lucide-react";
import { motion } from "framer-motion";

const ProductsSection = () => {
  const products = [
    {
      name: "Residential Pro 200L",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      capacity: "200L",
      efficiency: "92%",
      warranty: "10 Years",
      price: "₪2,890",
      features: ["Compact Design", "Quick Heating", "Energy Efficient", "Easy Installation"],
      rating: 4.8,
      popular: true
    },
    {
      name: "Family Premium 300L",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      capacity: "300L",
      efficiency: "95%",
      warranty: "12 Years",
      price: "₪3,490",
      features: ["Large Family Size", "Superior Insulation", "Smart Controls", "Weather Resistant"],
      rating: 4.9,
      popular: false
    },
    {
      name: "Commercial 500L",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      capacity: "500L",
      efficiency: "94%",
      warranty: "15 Years",
      price: "₪5,990",
      features: ["High Volume", "Industrial Grade", "Advanced Monitoring", "Professional Support"],
      rating: 4.7,
      popular: false
    }
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Solar Products</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Premium solar water heaters designed for Israeli climate, manufactured with cutting-edge Chinese technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`group h-full bg-white hover:shadow-2xl transition-all duration-300 border-2 ${product.popular ? 'border-orange-300 relative' : 'border-slate-200 hover:border-orange-200'}`}>
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-slate-600">{product.rating}</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-orange-600 mb-2">{product.price}</div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Droplets className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                      <div className="text-sm font-medium text-slate-800">{product.capacity}</div>
                      <div className="text-xs text-slate-500">Capacity</div>
                    </div>
                    <div className="text-center">
                      <Thermometer className="h-6 w-6 text-orange-500 mx-auto mb-1" />
                      <div className="text-sm font-medium text-slate-800">{product.efficiency}</div>
                      <div className="text-xs text-slate-500">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <Shield className="h-6 w-6 text-green-500 mx-auto mb-1" />
                      <div className="text-sm font-medium text-slate-800">{product.warranty}</div>
                      <div className="text-xs text-slate-500">Warranty</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`w-full ${product.popular ? 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600' : 'bg-slate-800 hover:bg-slate-700'} text-white`}>
                    Get Quote
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Comparison Chart */}
        <motion.div
          className="bg-white rounded-2xl p-8 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Product Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left py-4 px-4 font-semibold text-slate-800">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-800">Residential Pro</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-800">Family Premium</th>
                  <th className="text-center py-4 px-4 font-semibold text-slate-800">Commercial</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-700">Capacity</td>
                  <td className="py-3 px-4 text-center">200L</td>
                  <td className="py-3 px-4 text-center">300L</td>
                  <td className="py-3 px-4 text-center">500L</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-700">Efficiency</td>
                  <td className="py-3 px-4 text-center">92%</td>
                  <td className="py-3 px-4 text-center text-green-600 font-medium">95%</td>
                  <td className="py-3 px-4 text-center">94%</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-700">Heating Time</td>
                  <td className="py-3 px-4 text-center">2-3 hours</td>
                  <td className="py-3 px-4 text-center">3-4 hours</td>
                  <td className="py-3 px-4 text-center">4-5 hours</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 px-4 font-medium text-slate-700">Ideal For</td>
                  <td className="py-3 px-4 text-center">2-3 People</td>
                  <td className="py-3 px-4 text-center">4-6 People</td>
                  <td className="py-3 px-4 text-center">Businesses</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
