
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Calculator, Home, Zap, DollarSign, Leaf, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "./Header";

const SolarCalculator = () => {
  const { t } = useLanguage();
  const [homeSize, setHomeSize] = useState([120]);
  const [monthlyBill, setMonthlyBill] = useState([400]);
  const [familySize, setFamilySize] = useState([4]);
  const [showResults, setShowResults] = useState(false);

  const calculateSavings = () => {
    const size = homeSize[0];
    const bill = monthlyBill[0];
    const family = familySize[0];
    
    // Solar savings calculation based on Israeli conditions
    const solarPotential = size * 15; // kWh per month per sqm
    const currentUsage = bill * 4; // Approximate kWh from ILS bill
    const coverage = Math.min((solarPotential / currentUsage) * 100, 95);
    const monthlySavings = (bill * coverage) / 100;
    const yearlySavings = monthlySavings * 12;
    const systemCost = size * 150 + family * 500; // Estimated system cost
    const paybackPeriod = systemCost / yearlySavings;
    const co2Savings = (solarPotential * 12 * 0.5) / 1000; // Tons per year
    
    return {
      coverage: Math.round(coverage),
      monthlySavings: Math.round(monthlySavings),
      yearlySavings: Math.round(yearlySavings),
      systemCost: Math.round(systemCost),
      paybackPeriod: Math.round(paybackPeriod * 10) / 10,
      co2Savings: Math.round(co2Savings * 10) / 10,
      solarPotential: Math.round(solarPotential)
    };
  };

  const results = showResults ? calculateSavings() : null;

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
              <Calculator className="h-8 w-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Solar Savings Calculator</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover how much you can save with our solar water heating systems
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Calculator Input */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white shadow-xl border-2 border-slate-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <Home className="mr-2 h-6 w-6 text-orange-500" />
                    Your Home Details
                  </CardTitle>
                  <CardDescription>
                    Tell us about your home to calculate potential savings
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Home Size: {homeSize[0]} m²
                    </label>
                    <Slider
                      value={homeSize}
                      onValueChange={setHomeSize}
                      max={300}
                      min={50}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                      <span>50 m²</span>
                      <span>300 m²</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Monthly Hot Water Bill: ₪{monthlyBill[0]}
                    </label>
                    <Slider
                      value={monthlyBill}
                      onValueChange={setMonthlyBill}
                      max={1000}
                      min={100}
                      step={50}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                      <span>₪100</span>
                      <span>₪1,000</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-3">
                      Family Size: {familySize[0]} people
                    </label>
                    <Slider
                      value={familySize}
                      onValueChange={setFamilySize}
                      max={8}
                      min={1}
                      step={1}
                      className="w-full"
                    />
                    <div className="flex justify-between text-xs text-slate-500 mt-2">
                      <span>1 person</span>
                      <span>8+ people</span>
                    </div>
                  </div>

                  <Button 
                    onClick={() => setShowResults(true)}
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white text-lg py-6"
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Calculate My Savings
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-br from-green-50 to-blue-50 shadow-xl border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-slate-800 flex items-center">
                    <TrendingUp className="mr-2 h-6 w-6 text-green-500" />
                    Your Savings Potential
                  </CardTitle>
                  <CardDescription>
                    {showResults ? "Based on your home details" : "Calculate above to see your potential"}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {showResults && results ? (
                    <div className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-4 text-center border border-green-200">
                          <div className="text-2xl font-bold text-green-600">₪{results.monthlySavings}</div>
                          <div className="text-sm text-slate-600">Monthly Savings</div>
                        </div>
                        <div className="bg-white rounded-lg p-4 text-center border border-blue-200">
                          <div className="text-2xl font-bold text-blue-600">₪{results.yearlySavings}</div>
                          <div className="text-sm text-slate-600">Yearly Savings</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                          <span className="text-slate-700">Energy Coverage</span>
                          <Badge className="bg-green-100 text-green-800">
                            {results.coverage}%
                          </Badge>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                          <span className="text-slate-700">System Investment</span>
                          <span className="font-semibold text-slate-800">₪{results.systemCost.toLocaleString()}</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                          <span className="text-slate-700">Payback Period</span>
                          <span className="font-semibold text-orange-600">{results.paybackPeriod} years</span>
                        </div>
                        
                        <div className="flex justify-between items-center p-3 bg-white rounded-lg border border-slate-200">
                          <div className="flex items-center">
                            <Leaf className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-slate-700">CO₂ Saved Yearly</span>
                          </div>
                          <span className="font-semibold text-green-600">{results.co2Savings} tons</span>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white p-4 rounded-lg text-center">
                        <div className="text-lg font-semibold mb-2">Ready to Start Saving?</div>
                        <Button className="bg-white text-orange-600 hover:bg-slate-100">
                          Get Free Quote
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <DollarSign className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                      <p className="text-slate-500">Fill in your details to see potential savings</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;
