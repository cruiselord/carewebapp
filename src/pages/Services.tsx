import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Brain, Heart, Clock, Stethoscope } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Assisted Living",
      description: "Personalized care and support while maintaining independence. Our assisted living services include medication management, daily living assistance, and 24/7 care staff.",
      icon: <Building2 className="w-8 h-8 text-primary" />,
    },
    {
      title: "Independent Living",
      description: "Active lifestyle communities for seniors who want to live independently with access to amenities, social activities, and optional support services.",
      icon: <Heart className="w-8 h-8 text-primary" />,
    },
    {
      title: "Memory Care",
      description: "Specialized care for seniors with Alzheimer's, dementia, and other memory-related conditions in a secure and nurturing environment.",
      icon: <Brain className="w-8 h-8 text-primary" />,
    },
    {
      title: "Respite Care",
      description: "Short-term care services providing temporary relief for primary caregivers, ensuring your loved one receives professional care during your break.",
      icon: <Clock className="w-8 h-8 text-primary" />,
    },
    {
      title: "Skilled Nursing",
      description: "Professional nursing care and rehabilitation services for seniors requiring complex medical care and monitoring.",
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Comprehensive care solutions tailored to meet the unique needs of every senior, ensuring comfort, dignity, and quality of life.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services; 