
import { Heart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="py-20 bg-politician-blue relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-politician-teal/20 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-soft"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-politician-gold/10 rounded-full translate-x-1/3 translate-y-1/3 animate-float"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Donate Section */}
            <div className="glass-card bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white animate-fade-in">
              <div className="bg-white/20 rounded-full p-3 inline-block mb-6">
                <Heart className="h-8 w-8 text-politician-gold" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Support Our Campaign</h3>
              <p className="text-white/80 mb-6">
                Your contribution helps us continue our work to build a better future for our community.
                Every donation, no matter the size, makes a difference.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {[25, 50, 100].map((amount) => (
                  <button 
                    key={amount}
                    className="bg-white/20 hover:bg-white/30 transition-colors duration-300 py-2 rounded-md text-white font-medium"
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <Link to="/donate" className="btn-accent w-full flex justify-center">
                Donate Now
              </Link>
            </div>
            
            {/* Volunteer Section */}
            <div className="glass-card bg-white/10 backdrop-blur-sm rounded-xl p-8 text-white animate-fade-in animate-delay-100">
              <div className="bg-white/20 rounded-full p-3 inline-block mb-6">
                <Users className="h-8 w-8 text-politician-teal" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Join Our Team</h3>
              <p className="text-white/80 mb-6">
                We're building a movement of passionate volunteers dedicated to making a difference.
                Join us and help shape the future of our community.
              </p>
              <ul className="space-y-3 mb-6">
                {['Canvassing', 'Phone Banking', 'Event Support', 'Social Media'].map((role) => (
                  <li key={role} className="flex items-center text-white/90">
                    <div className="h-2 w-2 rounded-full bg-politician-teal mr-3"></div>
                    {role}
                  </li>
                ))}
              </ul>
              <Link to="/get-involved" className="btn-secondary w-full flex justify-center">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
