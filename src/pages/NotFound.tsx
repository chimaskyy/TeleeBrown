
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex items-center justify-center bg-politician-lightGray py-24">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block bg-politician-teal/20 text-politician-teal px-4 py-1 rounded-full text-sm font-medium mb-4 animate-pulse-soft">
            Error 404
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-politician-blue animate-fade-in">Page Not Found</h1>
          <p className="text-xl text-politician-blue/70 mb-10 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="btn-primary inline-flex items-center animate-fade-in animate-delay-200"
          >
            Return to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
