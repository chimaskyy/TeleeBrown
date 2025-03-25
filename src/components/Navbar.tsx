import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const isActive = (path: string) => {
    return location.pathname === path;
  };

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

  // Handle body scroll lock when side menu is open
  useEffect(() => {
    if (sideMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [sideMenuOpen]);

  const toggleSideMenu = () => {
    setSideMenuOpen(!sideMenuOpen);
  };

  const closeSideMenu = () => {
    setSideMenuOpen(false);
  };

  // Navigation items excluding Donate which will be a separate CTA
  const navItems = [
    'About',
    'Policies',
    'News',
    'Events',
    'Contact',
    'Get Involved'
  ];

  // Logic for text color based on different conditions for improved readability
  const getTextColor = () => {
    // For homepage and scrolled - should be blue for visibility against white background
    if (isHomePage && isScrolled) {
      return 'text-politician-blue';
    }

    // For homepage and not scrolled - can be white (assuming dark background)
    if (isHomePage && !isScrolled) {
      return 'text-white';
    }

    // For non-homepage - always blue for consistency and readability
    return 'text-politician-blue';
  };

  // Desktop version of the navbar
  if (!isMobile) {
    return (
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* Logo text - always readable based on conditions */}
              <span className={`text-2xl font-bold ${getTextColor()}`}>
                Telee Brown
              </span>
            </Link>

            {/* Desktop Menu with Donate CTA button */}
            <div className="hidden md:flex items-center gap-8">
              {/* Navigation links */}
              <div className="flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item}
                    to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className={`font-medium transition duration-300 hover:text-politician-teal relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300 after:bg-politician-teal ${isHomePage && !isScrolled ? 'text-white' : 'text-politician-blue'
                      }`}
                  >
                    {item}
                  </Link>
                ))}
              </div>

              {/* Donate CTA Button */}
              <Link
                to="/donate"
                className={`px-4 py-2 rounded-lg font-medium transition duration-300 ${isScrolled
                  ? 'bg-politician-blue text-white hover:bg-white hover:text-politician-blue '
                  : 'bg-politician-blue text-white hover:bg-white/90 hover:bg-white hover:text-politician-blue'
                  }`}
              >
                Donate
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Custom mobile side menu without shadcn components
  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* Mobile logo text - always readable */}
              <span className={`text-2xl font-bold ${isHomePage && !isScrolled ? 'text-white' : 'text-politician-blue'
                }`}>
                Telee Brown
              </span>
            </Link>

            {/* Mobile donate button and menu button */}
            <div className="flex items-center space-x-3">
              {/* Mobile Menu Button */}
              <button
                className="focus:outline-none"
                aria-label="Toggle navigation menu"
                onClick={toggleSideMenu}
              >
                <Menu className={`h-6 w-6 ${isHomePage && !isScrolled ? 'text-white' : 'text-politician-blue'
                  }`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Custom Side Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-50 transition-opacity duration-300 ${sideMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeSideMenu}
      />

      {/* Custom Side Menu Panel */}
      <div
  className={`fixed top-0 left-0 bottom-0 w-[75vw] max-w-sm bg-politician-blue z-50 transform transition-transform duration-300 ease-in-out ${
    sideMenuOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <div className="flex flex-col h-full">
    {/* Close Button */}
    <div className="flex justify-end p-4">
      <button
        className="text-white focus:outline-none"
        onClick={closeSideMenu}
      >
        <X className="h-6 w-6" />
      </button>
    </div>

    {/* Navigation Links and Donate CTA */}
    <div className="flex flex-col space-y-1 p-4 flex-grow overflow-y-auto">
      {/* Navigation Links */}
      {navItems.map((item, index) => (
        <Link
          key={item}
          to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
          className="text-white hover:text-politician-teal font-medium py-3 px-4 rounded-md transition-colors duration-200 animate-fade-in"
          style={{ animationDelay: `${index * 75}ms` }}
          onClick={closeSideMenu}
        >
          {item}
        </Link>
      ))}

      {/* Donate CTA Button */}
      <div className='py-4'></div>
      <Link
        to="/donate"
        className="mt-4 px-4 py-3 rounded-lg bg-white text-politician-blue font-medium text-center hover:bg-politician-blue hover:text-white transition duration-300 animate-fade-in"
        style={{ animationDelay: `${navItems.length * 75}ms` }}
        onClick={closeSideMenu}
      >
        Donate
      </Link>
    </div>
  </div>
</div>
    </>
  );
};

export default Navbar;