import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, User, Calendar, Phone, Mail, MapPin, Share, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const GetInvolved = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75 && sectionTop > -window.innerHeight * 0.5) {
          section.classList.add('opacity-100');
          section.classList.remove('opacity-0');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section with added background image */}
        <section className="bg-politician-blue text-white py-24 relative">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2068&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-politician-blue/90 via-politician-blue/80 to-politician-blue/60"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
                Join the Movement
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animate-delay-100">Get Involved</h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-200">
                There are many ways to support our campaign and help create the change our community needs.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-300">
                <a href="#volunteer" className="btn-secondary inline-flex items-center justify-center">
                  <User className="mr-2 h-5 w-5" />
                  Become a Volunteer
                </a>
                <Link to="/events" className="btn-white inline-flex items-center justify-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Join an Event
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Volunteer Section */}
        <section id="volunteer" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-right">
                <span className="inline-block bg-politician-teal/20 text-politician-teal px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Make a Difference
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">Become a Volunteer</h2>
                <p className="text-politician-blue/80 mb-6">
                  Volunteering is a rewarding way to contribute your time and skills to our campaign. Whether you're passionate about data entry, event planning, or community outreach, we have a place for you.
                </p>
                <p className="text-politician-blue/80 mb-8">
                  Join our team of dedicated volunteers and help us spread our message, connect with voters, and build a brighter future for our community.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#" className="btn-primary inline-flex items-center">
                    Sign Up to Volunteer
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Link to="/contact" className="btn-secondary inline-flex items-center">
                    Contact Us
                  </Link>
                </div>
              </div>
              
              <div className="relative animate-fade-in-left">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1587049247095-d39298484985?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Volunteers" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-politician-gold rounded-full -z-10 animate-pulse-soft"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-politician-teal rounded-full -z-10 animate-float"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Donate Section */}
        <section className="py-20 bg-politician-lightGray">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block bg-politician-gold/20 text-politician-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
                Support Our Campaign
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">Make a Donation</h2>
              <p className="text-politician-blue/80">
                Your financial contributions help us reach more voters, organize community events, and spread our message of positive change.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in animate-delay-200">
              <div className="glass-card p-6 rounded-lg text-center card-hover">
                <div className="text-4xl font-bold text-politician-teal mb-3">$25</div>
                <h3 className="text-xl font-bold text-politician-blue mb-2">Grassroots Supporter</h3>
                <p className="text-politician-blue/70">Helps us purchase essential campaign materials</p>
                <Link to="/donate" className="btn-primary inline-flex items-center mt-4">
                  Donate Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="glass-card p-6 rounded-lg text-center card-hover">
                <div className="text-4xl font-bold text-politician-teal mb-3">$50</div>
                <h3 className="text-xl font-bold text-politician-blue mb-2">Community Builder</h3>
                <p className="text-politician-blue/70">Supports our community outreach programs</p>
                <Link to="/donate" className="btn-primary inline-flex items-center mt-4">
                  Donate Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="glass-card p-6 rounded-lg text-center card-hover">
                <div className="text-4xl font-bold text-politician-teal mb-3">$100</div>
                <h3 className="text-xl font-bold text-politician-blue mb-2">Change Maker</h3>
                <p className="text-politician-blue/70">Fuels our campaign's digital advertising efforts</p>
                <Link to="/donate" className="btn-primary inline-flex items-center mt-4">
                  Donate Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="text-center mt-12 animate-fade-in animate-delay-300">
              <p className="text-politician-blue/80 mb-6 max-w-2xl mx-auto">
                Every contribution, no matter the size, makes a significant impact on our ability to run a successful campaign and bring positive change to our community.
              </p>
              <Link to="/donate" className="btn-primary inline-flex items-center">
                Make a Custom Donation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Spread the Word Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-right">
                <span className="inline-block bg-politician-lightBlue/20 text-politician-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Amplify Our Message
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">Spread the Word</h2>
                <p className="text-politician-blue/80 mb-6">
                  Help us reach more people by sharing our message with your friends, family, and social networks. Every share, like, and comment makes a difference.
                </p>
                <p className="text-politician-blue/80 mb-8">
                  Together, we can amplify our voice and create a movement for positive change in our community.
                </p>
                
                <div className="flex space-x-4">
                  <a href="#" className="inline-flex items-center justify-center p-3 rounded-full bg-politician-blue hover:bg-politician-teal text-white transition-colors">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="inline-flex items-center justify-center p-3 rounded-full bg-politician-blue hover:bg-politician-teal text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="inline-flex items-center justify-center p-3 rounded-full bg-politician-blue hover:bg-politician-teal text-white transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="inline-flex items-center justify-center p-3 rounded-full bg-politician-blue hover:bg-politician-teal text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
              
              <div className="relative animate-fade-in-left">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47a04ca0ecc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Social media sharing" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-politician-teal rounded-full -z-10 animate-pulse-soft"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-politician-gold rounded-full -z-10 animate-float"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Connected Section */}
        <section className="py-20 bg-politician-teal/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block bg-politician-teal/20 text-politician-teal px-4 py-1 rounded-full text-sm font-medium mb-4">
                Stay Informed
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">Stay Connected</h2>
              <p className="text-politician-blue/80">
                Stay up-to-date with the latest news, events, and volunteer opportunities by following us on social media and subscribing to our newsletter.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in animate-delay-200">
              <ContactOption
                icon={Phone}
                title="Call Us"
                description="Have a question or want to learn more? Give us a call."
                link="tel:+15551234567"
                linkText="Call Now"
              />
              
              <ContactOption
                icon={Mail}
                title="Email Us"
                description="Send us an email with your questions or comments."
                link="mailto:info@example.com"
                linkText="Send Email"
              />
              
              <ContactOption
                icon={MapPin}
                title="Visit Our Office"
                description="Stop by our campaign office to meet the team and learn more."
                link="#"
                linkText="Get Directions"
              />
            </div>

            <div className="mt-12 text-center animate-fade-in animate-delay-300">
              <p className="text-politician-blue/80 mb-6 max-w-2xl mx-auto">
                Join our mailing list to receive regular updates and exclusive content directly in your inbox.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="px-6 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-politician-teal focus:border-transparent"
                />
                <button className="btn-primary inline-flex items-center">
                  Subscribe to Newsletter
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GetInvolved;
