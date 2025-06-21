
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sun, Droplets, Thermometer, Shield, Star, Zap, Award, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('residential');

  const productCategories = {
    residential: [
      {
        name: "Compact Pro 150L",
        price: "₪2,490",
        capacity: "150L",
        efficiency: "90%",
        warranty: "8 Years",
        image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=600&q=80",
        features: ["Perfect for 1-2 people", "Quick heating technology", "Compact roof design", "Easy maintenance"],
        specs: {
          dimensions: "150cm x 120cm x 180cm",
          weight: "65kg",
          material: "Stainless Steel 304",
          insulation: "Polyurethane foam 50mm"
        },
        rating: 4.7
      },
      {
        name: "Residential Pro 200L",
        price: "₪2,890",
        capacity: "200L", 
        efficiency: "92%",
        warranty: "10 Years",
        image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=600&q=80",
        features: ["Ideal for 2-3 people", "Advanced heat retention", "Weather resistant", "Smart temperature control"],
        specs: {
          dimensions: "180cm x 140cm x 200cm",
          weight: "85kg",
          material: "Stainless Steel 316L",
          insulation: "Polyurethane foam 60mm"
        },
        rating: 4.8,
        popular: true
      },
      {
        name: "Family Premium 300L",
        price: "₪3,490",
        capacity: "300L",
        efficiency: "95%",
        warranty: "12 Years",
        image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=600&q=80",
        features: ["Perfect for 4-6 people", "Premium insulation", "Digital monitoring", "Anti-freeze protection"],
        specs: {
          dimensions: "220cm x 160cm x 220cm",
          weight: "125kg",
          material: "Stainless Steel 316L",
          insulation: "Polyurethane foam 70mm"
        },
        rating: 4.9
      }
    ],
    commercial: [
      {
        name: "Business 500L",
        price: "₪5,990",
        capacity: "500L",
        efficiency: "94%",
        warranty: "15 Years",
        image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=600&q=80",
        features: ["High volume output", "Industrial grade components", "Remote monitoring", "24/7 support"],
        specs: {
          dimensions: "300cm x 200cm x 250cm",
          weight: "185kg",
          material: "Stainless Steel 316L",
          insulation: "Rock wool 80mm"
        },
        rating: 4.7
      },
      {
        name: "Industrial 1000L",
        price: "₪9,990",
        capacity: "1000L",
        efficiency: "93%",
        warranty: "20 Years",
        image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=600&q=80",
        features: ["Maximum capacity", "Modular design", "Advanced controls", "Professional installation"],
        specs: {
          dimensions: "400cm x 250cm x 300cm",
          weight: "320kg",
          material: "Stainless Steel 316L",
          insulation: "Rock wool 100mm"
        },
        rating: 4.6
      }
    ]
  };

  const certifications = [
    { name: "Israeli Standards", icon: Award, description: "IS 1150 Certified" },
    { name: "European CE", icon: Shield, description: "CE Marking Compliant" },
    { name: "Quality Assurance", icon: CheckCircle, description: "ISO 9001:2015" },
    { name: "Environmental", icon: Sun, description: "Green Building Approved" }
  ];

  return (
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
              Solar Water <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Heaters</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
              Premium solar water heating systems designed for Israeli climate conditions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-12">
              <TabsTrigger value="residential">Residential</TabsTrigger>
              <TabsTrigger value="commercial">Commercial</TabsTrigger>
            </TabsList>

            <TabsContent value="residential">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {productCategories.residential.map((product, index) => (
                  <ProductCard key={index} product={product} index={index} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="commercial">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {productCategories.commercial.map((product, index) => (
                  <ProductCard key={index} product={product} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Certifications & Standards</h2>
            <p className="text-slate-600">All our products meet the highest quality and safety standards</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
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
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-800 mb-2">{cert.name}</h3>
                      <p className="text-sm text-slate-600">{cert.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

const ProductCard = ({ product, index }: { product: any, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className={`group h-full bg-white hover:shadow-2xl transition-all duration-300 border-2 ${product.popular ? 'border-orange-300 relative' : 'border-slate-200 hover:border-orange-200'}`}>
        {product.popular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
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
            {product.features.map((feature: string, featureIndex: number) => (
              <div key={featureIndex} className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
                <span className="text-sm text-slate-600">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mb-6 p-4 bg-slate-50 rounded-lg">
            <h4 className="font-semibold text-slate-800 mb-2">Technical Specifications</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
              <div>Dimensions: {product.specs.dimensions}</div>
              <div>Weight: {product.specs.weight}</div>
              <div>Material: {product.specs.material}</div>
              <div>Insulation: {product.specs.insulation}</div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button className={`flex-1 ${product.popular ? 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600' : 'bg-slate-800 hover:bg-slate-700'} text-white`}>
              Get Quote
            </Button>
            <Button variant="outline" size="sm" className="px-3">
              <Zap className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Products;
