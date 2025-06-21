
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    projectType: 'residential'
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: '', email: '', phone: '', message: '', projectType: 'residential' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+972-50-123-4567", "+972-3-567-8901"],
      subtitle: "Call us anytime"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@larasolare.co.il", "support@larasolare.co.il"],
      subtitle: "We reply within 24h"
    },
    {
      icon: MapPin,
      title: "Service Areas",
      details: ["Tel Aviv", "Jerusalem", "Haifa", "Be'er Sheva"],
      subtitle: "Nationwide coverage"
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Sun-Thu: 8:00-18:00", "Fri: 8:00-14:00"],
      subtitle: "Emergency support 24/7"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Get In <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Ready to start your solar journey? Contact us for a free consultation and personalized quote
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-200">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-slate-800">Send Us a Message</CardTitle>
                <CardDescription className="text-slate-600">
                  Fill out the form below and we'll get back to you with a personalized quote
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Full Name *</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Email Address *</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com"
                        required
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+972-50-123-4567"
                        className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Project Type</label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:border-orange-500 focus:ring-orange-500 bg-white"
                      >
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                        <option value="industrial">Industrial</option>
                        <option value="partnership">Partnership Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements, property details, and any specific questions..."
                      rows={6}
                      required
                      className="border-slate-300 focus:border-orange-500 focus:ring-orange-500"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message & Get Quote
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gradient-to-br from-white to-slate-50 border-2 border-slate-100 hover:border-orange-200 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-slate-800 mb-1">{info.title}</h3>
                          <p className="text-sm text-slate-500 mb-3">{info.subtitle}</p>
                          <div className="space-y-1">
                            {info.details.map((detail, detailIndex) => (
                              <div key={detailIndex} className="text-slate-700 font-medium">
                                {detail}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-100 to-slate-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-slate-600 font-medium">Service Coverage Map</p>
                    <p className="text-sm text-slate-500">Serving all of Israel</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-orange-200">
                <CardContent className="p-6 text-center">
                  <Badge className="bg-red-500 text-white mb-3">Emergency Support</Badge>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">Need Urgent Assistance?</h3>
                  <p className="text-slate-600 mb-4">24/7 emergency support for existing customers</p>
                  <Button variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                    <Phone className="mr-2 h-4 w-4" />
                    Emergency Hotline
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
