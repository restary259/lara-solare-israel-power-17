
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sun, Droplets, Thermometer, Shield, Award, Star } from "lucide-react";
import Header, { LanguageProvider } from "@/components/Header";
import Footer from "@/components/Footer";
import PageLayout from "@/components/PageLayout";

const Products = () => {
  return (
    <LanguageProvider>
      <PageLayout>
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
          <Header />
          
          {/* Hero Section */}
          <section className="pt-24 pb-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                מוצרי דוד שמש מתקדמים
              </h1>
              <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
                פתרונות חימום מים סולאריים איכותיים עם טכנולוגיה מתקדמת ואחריות מלאה
              </p>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Product cards would go here */}
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <Sun className="w-8 h-8 text-orange-500" />
                      <Badge variant="secondary">פופולרי</Badge>
                    </div>
                    <CardTitle>דוד שמש 200 ליטר</CardTitle>
                    <CardDescription>מתאים למשפחה של 4-5 נפשות</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">
                      דוד שמש איכותי עם לוחות סולאריים יעילים וטכנולוגיה מתקדמת
                    </p>
                    <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                      קבל הצעת מחיר
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </PageLayout>
    </LanguageProvider>
  );
};

export default Products;
