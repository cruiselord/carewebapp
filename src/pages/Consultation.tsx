import { motion } from "framer-motion";
import { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Users,
  MessageSquare,
  CheckCircle,
  PhoneCall,
  Video,
  MapPin,
  Info
} from "lucide-react";

const Consultation = () => {
  const consultationTypes = [
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "In-Person Consultation",
      description: "Meet with our care team at one of our offices for a detailed discussion about your care needs.",
      duration: "60 minutes"
    },
    {
      icon: <Video className="w-6 h-6 text-primary" />,
      title: "Video Consultation",
      description: "Connect with us virtually from the comfort of your home via secure video call.",
      duration: "45 minutes"
    },
    {
      icon: <PhoneCall className="w-6 h-6 text-primary" />,
      title: "Phone Consultation",
      description: "Discuss your care needs over the phone with our experienced care advisors.",
      duration: "30 minutes"
    }
  ];

  const consultationSteps = [
    {
      number: "01",
      title: "Book Your Preferred Time",
      description: "Choose a consultation type and select a time that works best for you."
    },
    {
      number: "02",
      title: "Initial Assessment",
      description: "We'll discuss your care needs, preferences, and answer any questions."
    },
    {
      number: "03",
      title: "Care Plan Proposal",
      description: "Receive a personalized care plan tailored to your specific needs."
    },
    {
      number: "04",
      title: "Begin Your Care Journey",
      description: "Once approved, we'll match you with the perfect caregiver."
    }
  ];

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Consultation</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Schedule a free consultation with our care experts to discuss your needs and how we can help.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Why Choose a Consultation?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Personalized Care Plan</h3>
                    <p className="text-gray-600">Discuss your specific needs and receive a customized care solution.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Flexible Scheduling</h3>
                    <p className="text-gray-600">Choose a time that works best for you and your family.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Expert Guidance</h3>
                    <p className="text-gray-600">Get answers to all your questions from our experienced care coordinators.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">No Obligation</h3>
                    <p className="text-gray-600">Free consultation with no commitment required.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="min-h-[600px]"
        >
          <div 
            className="calendly-inline-widget" 
            data-url="https://calendly.com/omolayo007/30min"
            style={{ 
              minWidth: '320px',
              height: '700px',
            }} 
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Consultation; 