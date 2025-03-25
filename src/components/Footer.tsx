
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-politician-blue text-white">
      {/* Main Footer */}
      <div className="section-container pt-16 pb-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Column */}
            <div className="animate-fade-in">
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Telee Brown
                <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-politician-teal"></span>
              </h3>
              <p className="text-white/70 mb-6">
                Fighting for a brighter future with progressive policies, 
                sustainable development, and community-focused leadership.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in animate-delay-100">
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Quick Links
                <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-politician-teal"></span>
              </h3>
              <ul className="space-y-3">
                {['About', 'Policies', 'News', 'Events', 'Get Involved', 'Donate', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-white/70 hover:text-politician-teal transition-colors duration-300 flex items-center"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-politician-teal mr-2"></span>
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-fade-in animate-delay-200">
              <h3 className="text-xl font-bold mb-6 relative inline-block">
                Contact Us
                <span className="absolute left-0 bottom-0 w-1/2 h-0.5 bg-politician-teal"></span>
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-politician-teal mr-3 mt-1 flex-shrink-0" />
                  <span className="text-white/70">
                    123 Campaign HQ Street<br />
                    City, State 12345
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-5 w-5 text-politician-teal mr-3 flex-shrink-0" />
                  <span className="text-white/70">(123) 456-7890</span>
                </li>
                <li className="flex items-center">
                  <Mail className="h-5 w-5 text-politician-teal mr-3 flex-shrink-0" />
                  <span className="text-white/70">telebrown1@gmail.com</span>
                </li>
              </ul>
            </div>

           
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              © {currentYear} Telee Brown Campaign. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-white text-sm transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
