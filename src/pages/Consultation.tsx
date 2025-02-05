import { motion } from "framer-motion";
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
              Book Your Free Care Consultation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Take the first step towards exceptional care. Schedule a consultation
              with our experienced care advisors to discuss your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Consultation Types Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Consultation Type</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select the consultation format that best suits your preferences and schedule.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {consultationTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-block p-3 bg-primary/5 rounded-full mb-4">
                  {type.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{type.title}</h3>
                <p className="text-gray-600 mb-4">{type.description}</p>
                <div className="flex items-center gap-2 text-primary">
                  <Clock className="w-4 h-4" />
                  <span>{type.duration}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Schedule Your Consultation</h2>
              <p className="text-lg text-gray-600">
                Fill out the form below to book your preferred consultation time.
              </p>
            </div>
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Consultation Type *
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="">Select consultation type</option>
                  <option value="in-person">In-Person Consultation</option>
                  <option value="video">Video Consultation</option>
                  <option value="phone">Phone Consultation</option>
                </select>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select preferred time</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (4PM - 7PM)</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Please share any specific concerns or questions you'd like to discuss"
                />
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  required
                  className="mt-1"
                />
                <label className="text-sm text-gray-600">
                  I agree to the processing of my personal data for the purpose of scheduling
                  a consultation. *
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Book Consultation
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Consultation Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our consultation process is designed to understand your needs and create
              a personalized care plan.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {consultationSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Questions</h2>
              <p className="text-lg text-gray-600">
                Find answers to frequently asked questions about our consultation process.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Is the consultation really free?
                </h3>
                <p className="text-gray-600">
                  Yes, our initial consultation is completely free of charge. It's our way
                  of understanding your needs and demonstrating our commitment to your care.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does the consultation take?
                </h3>
                <p className="text-gray-600">
                  The duration varies by type: in-person (60 minutes), video (45 minutes),
                  or phone (30 minutes). We ensure enough time to address all your questions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  What should I prepare for the consultation?
                </h3>
                <p className="text-gray-600">
                  Have a list of your care needs, any medical conditions, current medications,
                  and specific questions you'd like to discuss. This helps us provide the most
                  relevant information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultation; 