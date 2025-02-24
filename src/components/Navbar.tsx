import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full border-b bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">Glorious Care Inc.</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/about" 
              className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
            >
              About Us
            </Link>
            <Link 
              to="/services" 
              className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
            >
              Our Services
            </Link>
            <Link 
              to="/locations" 
              className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
            >
              Locations
            </Link>
            <Link 
              to="/caregivers" 
              className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
            >
              Caregivers
            </Link>
            <Link 
              to="/careers" 
              className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-gray-500 hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <Button asChild variant="outline" className="hidden md:flex">
            <Link to="/book">Book a Consultation</Link>
          </Button>
            
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <nav className="flex flex-col space-y-4 py-4">
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Link 
                    to="/about" 
                    className="block text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About Us
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <Link 
                    to="/services" 
                    className="block text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Our Services
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link 
                    to="/locations" 
                    className="block text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Locations
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link 
                    to="/caregivers" 
                    className="block text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Caregivers
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Link 
                    to="/careers" 
                    className="block text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Careers
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                >
                  <Link 
                    to="/contact" 
                    className="block text-sm font-medium text-gray-500 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/book" onClick={() => setIsMenuOpen(false)}>Book a Consultation</Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar; 