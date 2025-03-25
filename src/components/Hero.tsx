
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/b/b6/Executive_Mansion_Apr_09.JPG')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-politician-blue/80 via-politician-blue/70 to-politician-blue/20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10 mt-16">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block bg-politician-gold text-politician-blue px-4 py-1 rounded-full text-sm font-medium mb-5 animate-pulse-soft">
            For Our City Council
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Leadership that <span className="text-politician-teal">Works</span> for Everyone
          </h1>
          <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl">
            Building a brighter future with innovative solutions, sustainable development, and
            community-focused policies that put people first.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/get-involved" className="btn-secondary flex items-center justify-center gap-2 animate-fade-in animate-delay-100">
              Get Involved
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/about" className="btn-accent flex items-center justify-center gap-2 animate-fade-in animate-delay-200">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-politician-offWhite to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
