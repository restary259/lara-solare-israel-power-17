
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Sun, Droplets, Thermometer, Shield, Star, Award, CheckCircle, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "./Header";

const ProductsSection = () => {
  const { t } = useLanguage();

  const products = [
    {
      name: "מערכת ביתית פרו 200L",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=800&q=80",
      capacity: "200L",
      efficiency: "92%",
      warranty: "10 שנים",
      price: "₪2,890",
      features: ["עיצוב קומפקטי", "חימום מהיר", "חסכוני באנרגיה", "התקנה קלה"],
      rating: 4.8,
      popular: true,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "משפחתי פרמיום 300L",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800&q=80",
      capacity: "300L",
      efficiency: "95%",
      warranty: "12 שנים",
      price: "₪3,490",
      features: ["לכל המשפחה", "בידוד מעולה", "בקרה חכמה", "עמיד בפני מזג אוויר"],
      rating: 4.9,
      popular: false,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "מסחרי 500L",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80",
      capacity: "500L",
      efficiency: "94%",
      warranty: "15 שנים",
      price: "₪5,990",
      features: ["נפח גבוה", "איכות תעשייתית", "ניטור מתקדם", "תמיכה מקצועית"],
      rating: 4.7,
      popular: false,
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  const comparisonData = [
    { feature: t('capacity'), residential: "200L", family: "300L", commercial: "500L" },
    { feature: t('efficiency'), residential: "92%", family: "95%", commercial: "94%" },
    { feature: t('heatingTime'), residential: "2-3 שעות", family: "3-4 שעות", commercial: "4-5 שעות" },
    { feature: t('idealFor'), residential: "2-3 אנשים", family: "4-6 אנשים", commercial: "עסקים" }
  ];

  const ComparisonTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[600px]">
        <thead>
          <tr className="border-b-2 border-slate-200 bg-gradient-to-r from-slate-50 to-blue-50">
            <th className="text-right py-4 px-4 font-semibold text-slate-800">{t('feature')}</th>
            <th className="text-center py-4 px-4 font-semibold text-slate-800">{t('residentialPro')}</th>
            <th className="text-center py-4 px-4 font-semibold text-slate-800">{t('familyPremium')}</th>
            <th className="text-center py-4 px-4 font-semibold text-slate-800">{t('commercial')}</th>
          </tr>
        </thead>
        <tbody>
          {comparisonData.map((row, index) => (
            <tr key={index} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
              <td className="py-3 px-4 font-medium text-slate-700 text-right">{row.feature}</td>
              <td className="py-3 px-4 text-center">{row.residential}</td>
              <td className="py-3 px-4 text-center">
                {row.feature === t('efficiency') ? (
                  <span className="text-green-600 font-medium bg-green-100 px-2 py-1 rounded-full">{row.family}</span>
                ) : (
                  row.family
                )}
              </td>
              <td className="py-3 px-4 text-center">{row.commercial}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <section id="products" className="py-16 sm:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-800 mb-4 sm:mb-6 leading-tight">
            {t('ourProducts')} <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">סולאריים</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-4 sm:mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            דודי שמש איכותיים המיועדים לאקלים הישראלי, מיוצרים בטכנולוגיה סינית מתקדמת
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className={`group h-full bg-white hover:shadow-2xl transition-all duration-500 border-2 transform hover:-translate-y-2 ${product.popular ? 'border-orange-300 relative' : 'border-slate-200 hover:border-orange-200'}`}>
                {product.popular && (
                  <div className="absolute -top-3 right-1/2 transform translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-1 shadow-lg">
                      <Award className="h-3 w-3 ml-1" />
                      הכי פופולרי
                    </Badge>
                  </div>
                )}
                
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className={`absolute top-4 left-4 w-12 h-12 bg-gradient-to-br ${product.gradient} rounded-full flex items-center justify-center opacity-90`}>
                    <Sun className="h-6 w-6 text-white" />
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-bold text-slate-800 group-hover:text-orange-600 transition-colors text-right">
                      {product.name}
                    </CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium text-slate-600">{product.rating}</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-2 text-right">{product.price}</div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center bg-blue-50 rounded-lg p-3 border border-blue-100">
                      <Droplets className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                      <div className="text-sm font-medium text-slate-800">{product.capacity}</div>
                      <div className="text-xs text-slate-500">קיבולת</div>
                    </div>
                    <div className="text-center bg-orange-50 rounded-lg p-3 border border-orange-100">
                      <Thermometer className="h-6 w-6 text-orange-500 mx-auto mb-1" />
                      <div className="text-sm font-medium text-slate-800">{product.efficiency}</div>
                      <div className="text-xs text-slate-500">יעילות</div>
                    </div>
                    <div className="text-center bg-green-50 rounded-lg p-3 border border-green-100">
                      <Shield className="h-6 w-6 text-green-500 mx-auto mb-1" />
                      <div className="text-sm font-medium text-slate-800">{product.warranty}</div>
                      <div className="text-xs text-slate-500">אחריות</div>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 space-x-reverse">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span className="text-sm text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className={`w-full ${product.popular ? 'bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 shadow-lg' : 'bg-slate-800 hover:bg-slate-700'} text-white transition-all duration-300 transform hover:scale-105`}>
                    קבל הצעת מחיר
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Comparison Chart with Mobile Support */}
        <motion.div
          className="bg-white rounded-3xl p-4 sm:p-8 shadow-2xl border border-slate-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">{t('productComparison')}</h3>
          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          
          {/* Desktop Table */}
          <div className="hidden md:block">
            <ComparisonTable />
          </div>
          
          {/* Mobile Modal */}
          <div className="md:hidden">
            <div className="text-center mb-4">
              <p className="text-slate-600 mb-4">השוואה מפורטת של המוצרים שלנו</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50">
                    <Eye className="h-4 w-4 ml-2" />
                    הצג השוואה מלאה
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[95vw] max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-right text-xl font-bold">{t('productComparison')}</DialogTitle>
                  </DialogHeader>
                  <div className="pt-4">
                    <ComparisonTable />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
