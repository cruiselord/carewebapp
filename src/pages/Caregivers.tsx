import { motion } from "framer-motion";
import { 
  Heart, 
  Clock, 
  Brain, 
  Stethoscope, 
  UtensilsCrossed, 
  Car,
  ClipboardCheck,
  GraduationCap,
  ShieldCheck,
  HeartPulse,
  Users,
  BadgeCheck,
  Star,
  MapPin,
  Languages
} from "lucide-react";
import { Link } from "react-router-dom";

const Caregivers = () => {
  const services = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Personal Care",
      description: "Assistance with daily activities like bathing, dressing, and grooming."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Medication Reminders",
      description: "Timely medication management and adherence to prescribed schedules."
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Memory Care",
      description: "Specialized care for seniors with Alzheimer's and dementia."
    },
    {
      icon: <Stethoscope className="w-8 h-8 text-primary" />,
      title: "Health Monitoring",
      description: "Regular vital checks and health status monitoring."
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-primary" />,
      title: "Meal Preparation",
      description: "Nutritious meal planning and preparation according to dietary needs."
    },
    {
      icon: <Car className="w-8 h-8 text-primary" />,
      title: "Transportation",
      description: "Safe transportation to appointments and social activities."
    }
  ];

  const qualifications = [
    {
      icon: <ClipboardCheck className="w-6 h-6 text-primary" />,
      title: "Certified",
      description: "All caregivers are certified nursing assistants (CNAs) or have equivalent qualifications."
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Trained",
      description: "Ongoing professional development and specialized training programs."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: "Background Checked",
      description: "Thorough background screening and reference checks for all caregivers."
    },
    {
      icon: <HeartPulse className="w-6 h-6 text-primary" />,
      title: "First Aid Certified",
      description: "CPR and first aid certified, prepared for any emergency."
    }
  ];

  const hiringSteps = [
    {
      number: "01",
      title: "Initial Screening",
      description: "Thorough review of qualifications, experience, and certifications."
    },
    {
      number: "02",
      title: "Background Check",
      description: "Comprehensive criminal background and reference checks."
    },
    {
      number: "03",
      title: "Skills Assessment",
      description: "Hands-on evaluation of caregiving skills and knowledge."
    },
    {
      number: "04",
      title: "Training Program",
      description: "Intensive training on our care standards and procedures."
    }
  ];

  const featuredCaregivers = [
    {
      name: "Maria Rodriguez",
      image: "/team/maria.jpg",
      role: "Senior Care Specialist",
      experience: "8+ years",
      languages: ["English", "Spanish"],
      location: "Downtown & Surrounding Areas",
      specialties: ["Alzheimer's Care", "Physical Therapy"],
      bio: "Maria brings warmth and expertise to every client interaction, specializing in memory care and rehabilitation support."
    },
    {
      name: "David Chen",
      image: "/team/david.jpg",
      role: "Rehabilitation Expert",
      experience: "6+ years",
      languages: ["English", "Mandarin", "Cantonese"],
      location: "East Side & Suburbs",
      specialties: ["Post-Surgery Care", "Stroke Recovery"],
      bio: "David's background in physical therapy and dedication to rehabilitation has helped numerous clients regain their independence."
    },
    {
      name: "Aisha Williams",
      image: "/team/aisha.jpg",
      role: "Dementia Care Specialist",
      experience: "10+ years",
      languages: ["English", "French"],
      location: "West Side & Metropolitan Area",
      specialties: ["Memory Care", "Companion Care"],
      bio: "Aisha's gentle approach and expertise in memory care have made her a trusted caregiver for clients with dementia."
    },
    {
      name: "James Kim",
      image: "/team/james.jpg",
      role: "Certified Nursing Assistant",
      experience: "5+ years",
      languages: ["English", "Korean"],
      location: "North Side & Suburbs",
      specialties: ["Medical Care", "Elder Care"],
      bio: "James combines his medical knowledge with a compassionate approach to provide comprehensive care for seniors."
    },
    {
      name: "Sarah Patel",
      image: "/team/sarah.jpg",
      role: "Palliative Care Specialist",
      experience: "12+ years",
      languages: ["English", "Hindi", "Gujarati"],
      location: "Central District & Surroundings",
      specialties: ["Palliative Care", "Family Support"],
      bio: "Sarah's extensive experience in palliative care helps families navigate challenging times with dignity and support."
    },
    {
      name: "Michael Thompson",
      image: "/team/michael.jpg",
      role: "Senior Wellness Coach",
      experience: "7+ years",
      languages: ["English"],
      location: "South Side & Adjacent Areas",
      specialties: ["Wellness Programs", "Physical Activity"],
      bio: "Michael focuses on keeping seniors active and engaged, promoting both physical and mental well-being."
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
              Expert Caregivers You Can Trust
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Our carefully selected and highly trained caregivers provide compassionate,
              professional care tailored to your loved one's needs.
            </p>
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                Find a Caregiver
                <Users className="w-5 h-5" />
              </button>
              <Link 
                to="/careers" 
                className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors"
              >
                Join Our Team
                <BadgeCheck className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Caregivers Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Caregivers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our diverse team of experienced caregivers brings expertise, compassion, and
              cultural understanding to provide the best care for your loved ones.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCaregivers.map((caregiver, index) => (
              <motion.div
                key={caregiver.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="aspect-w-4 aspect-h-3">
                  <img
                    src={caregiver.image}
                    alt={caregiver.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        caregiver.name
                      )}&background=random`;
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {caregiver.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{caregiver.role}</p>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>{caregiver.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{caregiver.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 mb-4">
                    <Languages className="w-4 h-4" />
                    <span>{caregiver.languages.join(", ")}</span>
                  </div>
                  <div className="mb-4">
                    {caregiver.specialties.map((specialty) => (
                      <span
                        key={specialty}
                        className="inline-block bg-primary/5 text-primary text-sm px-3 py-1 rounded-full mr-2 mb-2"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">{caregiver.bio}</p>
                  <button className="w-full bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                    Schedule Consultation
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Care Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a comprehensive range of care services to support your loved ones
              in maintaining their independence and quality of life.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Caregiver Qualifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our caregivers meet the highest standards of professional care and undergo
              rigorous screening and training.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {qualifications.map((qual, index) => (
              <motion.div
                key={qual.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg text-center"
              >
                <div className="inline-block p-3 bg-primary/5 rounded-full mb-4">
                  {qual.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{qual.title}</h3>
                <p className="text-gray-600">{qual.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Hiring Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain strict standards in our hiring process to ensure only the most
              qualified and compassionate caregivers join our team.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiringSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-4xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Whether you're looking for care services or interested in joining our team,
              we're here to help you take the next step.
            </p>
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                Request Care Services
                <Users className="w-5 h-5" />
              </button>
              <Link
                to="/careers"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                Apply as Caregiver
                <BadgeCheck className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Caregivers; 
