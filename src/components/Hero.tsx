import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "The care provided was exceptional. Our caregiver became like family.",
    author: "Sarah M.",
    role: "Daughter of Client"
  },
  {
    text: "Professional, compassionate, and reliable. Exactly what we needed.",
    author: "Michael R.",
    role: "Son of Client"
  },
  {
    text: "They gave us peace of mind knowing our mother was in good hands.",
    author: "Jennifer L.",
    role: "Family Member"
  }
];

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-secondary/20 to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-primary leading-tight">
              Trusted Home Care
              <br />
              <span className="text-secondary">For Your Loved Ones</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl">
              We understand that home is where the heart is. Our professional caregivers provide 
              compassionate in-home care services tailored to your family's unique needs, ensuring 
              your loved ones receive the attention and support they deserve.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary-dark text-white text-lg px-8">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-secondary text-secondary hover:bg-secondary/10 text-lg px-8">
                Learn More
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80"
              alt="Senior woman with caregiver"
              className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
          </motion.div>
        </div>

        {/* Testimonials Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24"
        >
          <h2 className="text-3xl font-bold text-primary text-center mb-12">
            What Families Say About Us
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="min-w-[300px] max-w-[400px] bg-white p-6 rounded-xl shadow-lg snap-center border border-primary/10"
              >
                <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
                <div>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                  <p className="text-sm text-secondary">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;