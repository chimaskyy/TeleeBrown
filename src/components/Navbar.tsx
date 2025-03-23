
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    'About', 
    'Policies', 
    'News', 
    'Events', 
    'Get Involved', 
    'Donate', 
    'Contact'
  ];

  // Desktop version of the navbar
  if (!isMobile) {
    return (
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className={`text-2xl font-bold ${isScrolled ? 'text-politician-blue' : 'text-white'}`}>
                James Wilson
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link 
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`font-medium transition duration-300 hover:text-politician-teal relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-politician-teal ${
                    isScrolled ? 'text-politician-blue' : 'text-white'
                  }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    );
  }

  // Mobile version using Sheet component for a slide-in animation
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <span className={`text-2xl font-bold ${isScrolled ? 'text-politician-blue' : 'text-white'}`}>
              James Wilson
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                <Menu className={`h-6 w-6 ${isScrolled ? 'text-politician-blue' : 'text-white'}`} />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="left" 
              className="bg-politician-blue p-0 w-[75vw] max-w-sm border-r-0"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-end p-4">
                  <SheetClose asChild>
                    <button className="text-white focus:outline-none">
                      <X className="h-6 w-6" />
                    </button>
                  </SheetClose>
                </div>
                <div className="flex flex-col space-y-1 p-4">
                  {navItems.map((item, index) => (
                    <SheetClose asChild key={item}>
                      <Link 
                        to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                        className="text-white hover:text-politician-teal font-medium py-3 px-4 rounded-md transition-colors duration-200 animate-fade-in"
                        style={{ animationDelay: `${index * 75}ms` }}
                      >
                        {item}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
