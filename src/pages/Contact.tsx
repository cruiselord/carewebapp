import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  PhoneCall,
  Calendar,
  AlertCircle
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Call Us",
      description: "Speak directly with our care team",
      info: "(555) 123-4567",
      action: "Call Now"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Us",
      description: "Get in touch via email",
      info: "care@example.com",
      action: "Send Email"
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Book Consultation",
      description: "Schedule a free consultation",
      info: "Available 24/7",
      action: "Book Now"
    }
  ];

  const officeLocations = [
    {
      city: "Downtown Office",
      address: "123 Care Street",
      area: "Downtown Medical District",
      phone: "(555) 123-4567",
      hours: "Mon-Fri: 8am-6pm",
      email: "downtown@example.com"
    },
    {
      city: "Westside Branch",
      address: "456 Wellness Ave",
      area: "Westside Shopping Center",
      phone: "(555) 234-5678",
      hours: "Mon-Sat: 9am-5pm",
      email: "westside@example.com"
    },
    {
      city: "Eastside Location",
      address: "789 Health Blvd",
      area: "Eastside Professional Plaza",
      phone: "(555) 345-6789",
      hours: "Mon-Fri: 8am-7pm",
      email: "eastside@example.com"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We're here to help you find the perfect care solution for your loved ones.
              Reach out to us through any of our contact channels.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="inline-block p-3 bg-primary/5 rounded-full mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <p className="text-primary font-medium mb-4">{method.info}</p>
                <button className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                  {method.action}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Send Us a Message</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Enter your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="How can we help you?"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Offices</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit one of our office locations to meet our team and learn more about our services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {officeLocations.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{office.city}</h3>
                <div className="space-y-3 text-gray-600">
                  <p className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0" />
                    <span>{office.address}<br />{office.area}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <span>{office.phone}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <span>{office.hours}</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary shrink-0" />
                    <span>{office.email}</span>
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block p-3 bg-white/10 rounded-full mb-6">
              <AlertCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold mb-6">24/7 Emergency Support</h2>
            <p className="text-lg mb-8">
              For urgent care needs or emergency situations, our support team is
              available 24 hours a day, 7 days a week.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Call Emergency Line
              <PhoneCall className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 