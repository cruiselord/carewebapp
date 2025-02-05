import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  GraduationCap,
  Clock,
  DollarSign,
  Briefcase,
  Shield,
  Award,
  Users,
  Leaf,
  Smile,
  Calendar,
  BadgeCheck,
  MapPin
} from "lucide-react";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Caregiver",
      type: "Full-time",
      location: "Multiple Locations",
      experience: "3+ years",
      description: "Provide comprehensive care for elderly clients, including personal care, medication management, and companionship.",
      requirements: [
        "Certified Nursing Assistant (CNA) certification",
        "Valid driver's license",
        "Experience with dementia care",
        "Strong communication skills",
        "Physical ability to assist clients"
      ]
    },
    {
      title: "Memory Care Specialist",
      type: "Full-time",
      location: "City-wide",
      experience: "4+ years",
      description: "Specialized care for clients with Alzheimer's and dementia, focusing on memory care techniques and safety.",
      requirements: [
        "Dementia care certification",
        "Experience with memory care",
        "Patient and compassionate demeanor",
        "Strong problem-solving skills",
        "Emergency response training"
      ]
    },
    {
      title: "Part-Time Caregiver",
      type: "Part-time",
      location: "Flexible",
      experience: "1+ year",
      description: "Provide essential care services on a flexible schedule, perfect for those seeking work-life balance.",
      requirements: [
        "Caregiving certification",
        "Flexible availability",
        "Reliable transportation",
        "Basic medical knowledge",
        "Good physical stamina"
      ]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 text-primary" />,
      title: "Competitive Pay",
      description: "Above-market wages with regular increases and performance bonuses."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Professional Development",
      description: "Ongoing training and certification opportunities for career growth."
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Flexible Scheduling",
      description: "Work-life balance with flexible shifts and time-off options."
    },
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Health Benefits",
      description: "Comprehensive health, dental, and vision insurance coverage."
    },
    {
      icon: <Leaf className="w-6 h-6 text-primary" />,
      title: "Paid Time Off",
      description: "Generous vacation, sick leave, and holiday pay package."
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Recognition Program",
      description: "Regular recognition and rewards for outstanding performance."
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
              Make a Difference in People's Lives
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Join our team of compassionate caregivers and build a rewarding career
              helping others live better lives.
            </p>
            <a href="#positions" className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              View Open Positions
              <Briefcase className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We value our caregivers and provide comprehensive benefits to support
              your professional growth and personal well-being.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="positions" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find the perfect role that matches your skills and schedule.
            </p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {position.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Application Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our streamlined application process makes it easy to join our team.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    1
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Submit Application
                    </h3>
                    <p className="text-gray-600">
                      Fill out our online application form and upload your resume.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    2
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Initial Interview
                    </h3>
                    <p className="text-gray-600">
                      Meet with our hiring team to discuss your experience and goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    3
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Background Check
                    </h3>
                    <p className="text-gray-600">
                      Complete required background checks and reference verification.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                    4
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Onboarding
                    </h3>
                    <p className="text-gray-600">
                      Complete orientation and start your journey with our team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Join Our Team?</h2>
            <p className="text-lg mb-8">
              Take the first step towards a rewarding career in caregiving.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Apply Now
              <BadgeCheck className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers; 