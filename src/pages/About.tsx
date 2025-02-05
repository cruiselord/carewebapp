import { ArrowRight, Heart, Shield, Users, Clock, Award, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import PlaceholderImage from "@/components/PlaceholderImage";

const About = () => {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Compassionate Care",
      description: "We provide care with empathy, understanding, and genuine concern for our clients' well-being."
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Trust & Safety",
      description: "Our rigorous screening process ensures your loved ones are in safe, reliable hands."
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Family-Centered",
      description: "We involve families in care decisions, maintaining open communication and transparency."
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock availability to ensure peace of mind for families and clients."
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Professional Excellence",
      description: "Our caregivers are certified, trained, and committed to ongoing professional development."
    },
    {
      icon: <Sparkles className="w-6 h-6 text-primary" />,
      title: "Personalized Approach",
      description: "Tailored care plans that adapt to each client's unique needs and preferences."
    }
  ];

  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "/team/sarah.jpg",
      bio: "With over 20 years in healthcare, Sarah founded CareGiving with a vision to transform home care services."
    },
    {
      name: "Dr. Michael Chen",
      role: "Medical Director",
      image: "/team/michael.jpg",
      bio: "Board-certified geriatrician ensuring our care practices meet the highest medical standards."
    },
    {
      name: "Lisa Rodriguez",
      role: "Head of Caregiver Training",
      image: "/team/lisa.jpg",
      bio: "Dedicated to developing our caregivers through comprehensive training programs."
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
              Compassionate Care for Your Loved Ones
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Since 2010, we've been dedicated to providing exceptional home care services
              that enhance the quality of life for seniors and their families.
            </p>
            <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Book a Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600">
              To provide exceptional, personalized care that enables seniors to live independently
              and dignified lives in the comfort of their own homes. We believe in creating meaningful
              connections between caregivers and clients, fostering an environment of trust, respect,
              and companionship.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.querySelector('.placeholder')!.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div className={`placeholder ${member.image ? 'hidden' : ''}`}>
                    <PlaceholderImage 
                      name={member.name} 
                      className="w-full h-full rounded-full"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Journey</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">2010</h3>
                <p className="text-gray-600">Founded with a mission to transform home care services.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">2015</h3>
                <p className="text-gray-600">Expanded services to multiple locations, helping more families.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">2018</h3>
                <p className="text-gray-600">Launched our comprehensive caregiver training program.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">2020</h3>
                <p className="text-gray-600">Introduced innovative care technologies and remote monitoring solutions.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Today</h3>
                <p className="text-gray-600">
                  Continuing to grow and innovate while maintaining our commitment to exceptional,
                  personalized care for every client.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Learn More?</h2>
            <p className="text-lg mb-8">
              Schedule a consultation with our team to discuss how we can help your loved ones.
            </p>
            <button className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 