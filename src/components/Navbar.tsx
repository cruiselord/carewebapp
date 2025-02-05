import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="w-full border-b bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary">CareGiving</span>
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

          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex">
              <Link to="/book">Book a Consultation</Link>
            </Button>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar; 