
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-right">
            <span className="inline-block bg-politician-lightBlue/20 text-politician-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
              About Telee Brown
            </span>
            <h2 className="section-title">A Leader With a Vision for Our Community</h2>
            <p className="text-politician-blue/80 mb-6">
              Telee Brown has dedicated his life to public service, working tirelessly to improve the lives 
              of citizens through thoughtful policy, community engagement, and forward-thinking leadership.
            </p>
            <p className="text-politician-blue/80 mb-8">
              With over 15 years of experience in urban planning and community development, Brown brings 
              practical expertise and innovative thinking to address our city's most pressing challenges.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="glass-card p-5 rounded-lg card-hover animate-fade-in animate-delay-100">
                <h3 className="text-xl font-bold mb-2 text-politician-teal">Experience</h3>
                <p className="text-politician-blue/80">15+ years in public service and community leadership</p>
              </div>
              <div className="glass-card p-5 rounded-lg card-hover animate-fade-in animate-delay-200">
                <h3 className="text-xl font-bold mb-2 text-politician-teal">Education</h3>
                <p className="text-politician-blue/80">Master's in Public Policy, Urban Development</p>
              </div>
            </div>
            
            <Link to="/about" className="inline-flex items-center text-politician-teal hover:text-politician-blue font-medium transition duration-300 group">
              Read full biography
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="order-1 lg:order-2 relative animate-fade-in-left">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform rotate-2 transition-transform duration-500 hover:rotate-0">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                alt="Telee Brown" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-politician-gold rounded-full -z-10 animate-pulse-soft"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-politician-teal rounded-full -z-10 animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
