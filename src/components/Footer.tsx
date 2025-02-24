import { Facebook, Instagram, Twitter, Linkedin, User, Home, MapPin, Briefcase, Calendar, PhoneCall, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const navigationLinks = [
    { name: "About Us", icon: <Home className="w-4 h-4" />, path: "/about" },
    { name: "Our Services", icon: <Heart className="w-4 h-4" />, path: "/services" },
    { name: "Locations", icon: <MapPin className="w-4 h-4" />, path: "/locations" },
    { name: "Caregivers", icon: <User className="w-4 h-4" />, path: "/caregivers" },
    { name: "Careers", icon: <Briefcase className="w-4 h-4" />, path: "/careers" },
    { name: "Book a Consultation", icon: <Calendar className="w-4 h-4" />, path: "/book" },
    { name: "Contact", icon: <PhoneCall className="w-4 h-4" />, path: "/contact" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="w-5 h-5" />, url: "https://facebook.com" },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" />, url: "https://instagram.com" },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" />, url: "https://twitter.com" },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" />, url: "https://linkedin.com" },
  ];

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Glorious Care Inc.</h3>
            <p className="text-gray-600">
              Providing compassionate care services to help seniors live their best lives with dignity and comfort.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  {link.icon}
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Contact</h3>
            <div className="text-gray-600">
              <p>1234 Care Street</p>
              <p>Anytown, ST 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@gloriouscare.com</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Home Care Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;