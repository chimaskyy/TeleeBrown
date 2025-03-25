import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const PolicyCategory = ({ category, isActive, onClick }) => {
  return (
    <button
      className={`px-6 py-3 rounded-full font-medium transition-all ${
        isActive 
          ? 'bg-politician-blue text-white shadow-md' 
          : 'bg-white text-politician-blue hover:bg-politician-lightGray'
      }`}
      onClick={() => onClick(category.id)}
    >
      {category.name}
    </button>
  );
};

const PolicyAccordion = ({ title, description, keyPoints, icon: Icon, isOpen, toggleAccordion, index }) => {
  return (
    <div 
      className="glass-card rounded-lg overflow-hidden mb-4 animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <button 
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
        onClick={toggleAccordion}
      >
        <div className="flex items-center">
          <div className="bg-politician-blue/10 rounded-full p-3 mr-4">
            <Icon className="h-6 w-6 text-politician-teal" />
          </div>
          <h3 className="text-xl font-bold text-politician-blue">{title}</h3>
        </div>
        {isOpen ? <ChevronUp className="h-5 w-5 text-politician-blue" /> : <ChevronDown className="h-5 w-5 text-politician-blue" />}
      </button>
      
      {isOpen && (
        <div className="p-6 pt-0 border-t border-gray-100">
          <p className="text-politician-blue/70 mb-4">{description}</p>
          
          <h4 className="font-bold text-politician-teal mb-3">Key Points:</h4>
          <ul className="space-y-2 mb-4">
            {keyPoints.map((point, idx) => (
              <li key={idx} className="flex items-start">
                <Check className="h-5 w-5 text-politician-teal mr-2 mt-1 flex-shrink-0" />
                <span className="text-politician-blue/80">{point}</span>
              </li>
            ))}
          </ul>
          
          <Link to={`/policies/${title.toLowerCase().replace(/\s+/g, '-')}`} className="inline-flex items-center text-politician-teal hover:text-politician-blue font-medium transition duration-300 group">
            Read detailed plan
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      )}
    </div>
  );
};

const Policies = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openAccordion, setOpenAccordion] = useState(null);
  
  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  
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

  const categories = [
    { id: 'all', name: 'All Policies' },
    { id: 'economy', name: 'Economy' },
    { id: 'environment', name: 'Environment' },
    { id: 'education', name: 'Education' },
    { id: 'healthcare', name: 'Healthcare' },
    { id: 'infrastructure', name: 'Infrastructure' }
  ];

  const policies = [
    {
      id: 1,
      title: "Economic Growth & Development",
      description: "A comprehensive approach to stimulate local businesses, create jobs, and ensure sustainable economic growth.",
      category: "economy",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-politician-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      keyPoints: [
        "Tax incentives for small businesses and startups",
        "Investment in workforce development and vocational training",
        "Public-private partnerships to revitalize commercial districts",
        "Support for local entrepreneurs and innovation"
      ]
    },
    {
      id: 2,
      title: "Environmental Conservation",
      description: "Protecting our natural resources while promoting sustainable practices for a greener future.",
      category: "environment",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-politician-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      keyPoints: [
        "Expansion of renewable energy infrastructure",
        "Conservation of local parks and natural areas",
        "Incentives for green building practices",
        "Community recycling and waste reduction programs"
      ]
    },
    {
      id: 3,
      title: "Education Reform",
      description: "Improving our education system to provide quality learning opportunities for all students.",
      category: "education",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-politician-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      keyPoints: [
        "Increased funding for public schools and teacher salaries",
        "Expansion of early childhood education programs",
        "Modern curriculum development with emphasis on STEM and arts",
        "After-school programs and resources for at-risk students"
      ]
    },
    {
      id: 4,
      title: "Healthcare Access",
      description: "Ensuring affordable and accessible healthcare services for all community members.",
      category: "healthcare",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-politician-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      keyPoints: [
        "Support for community health centers",
        "Mental health services expansion",
        "Preventive care initiatives",
        "Programs addressing health disparities"
      ]
    },
    {
      id: 5,
      title: "Infrastructure Improvement",
      description: "Modernizing our infrastructure to enhance quality of life and support economic growth.",
      category: "infrastructure",
      icon: (props) => (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-politician-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      keyPoints: [
        "Road and bridge repair and maintenance",
        "Public transportation expansion",
        "Broadband internet access for all areas",
        "Sustainable water and sewage systems"
      ]
    }
  ];

  const filteredPolicies = activeCategory === 'all' 
    ? policies 
    : policies.filter(policy => policy.category === activeCategory);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="bg-politician-blue text-white py-24 relative">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1494172892981-ce47ca891fe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-politician-blue via-politician-blue/80 to-politician-blue/70"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
                Our Vision
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animate-delay-100">Policy Platform</h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-200">
                A comprehensive approach to addressing our community's challenges with practical solutions and forward-thinking leadership.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-right">
                <span className="inline-block bg-politician-lightBlue/20 text-politician-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">A Vision for Progress</h2>
                <p className="text-politician-blue/80 mb-6">
                  Telee Brown's policy platform is built on the principles of inclusivity, sustainability, and practical innovation. Every policy is developed with input from community members and experts to ensure they address real needs and create meaningful impact.
                </p>
                <p className="text-politician-blue/80 mb-6">
                  We believe in transparent governance and data-driven decision making. Our policies aim to create immediate improvements while laying the groundwork for long-term prosperity and well-being for all residents.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="glass-card p-5 rounded-lg card-hover animate-fade-in animate-delay-100">
                    <h3 className="text-xl font-bold mb-2 text-politician-teal">Community First</h3>
                    <p className="text-politician-blue/80">Policies developed with direct community input and engagement</p>
                  </div>
                  <div className="glass-card p-5 rounded-lg card-hover animate-fade-in animate-delay-200">
                    <h3 className="text-xl font-bold mb-2 text-politician-teal">Results Oriented</h3>
                    <p className="text-politician-blue/80">Focused on achieving measurable outcomes and real progress</p>
                  </div>
                </div>
              </div>
              
              <div className="relative animate-fade-in-left">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Policy discussion" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-politician-teal rounded-full -z-10 animate-pulse-soft"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-politician-gold rounded-full -z-10 animate-float"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-politician-lightGray">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block bg-politician-teal/20 text-politician-teal px-4 py-1 rounded-full text-sm font-medium mb-4">
                Detailed Platform
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">Key Policy Areas</h2>
              <p className="text-politician-blue/80">
                Explore our comprehensive policy platform focusing on the issues that matter most to our community.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in animate-delay-100">
              {categories.map((category) => (
                <PolicyCategory 
                  key={category.id}
                  category={category}
                  isActive={activeCategory === category.id}
                  onClick={setActiveCategory}
                />
              ))}
            </div>

            <div className="max-w-4xl mx-auto">
              {filteredPolicies.map((policy, index) => (
                <PolicyAccordion 
                  key={policy.id}
                  title={policy.title}
                  description={policy.description}
                  keyPoints={policy.keyPoints}
                  icon={policy.icon}
                  isOpen={openAccordion === policy.id}
                  toggleAccordion={() => toggleAccordion(policy.id)}
                  index={index}
                />
              ))}
              
              {filteredPolicies.length === 0 && (
                <div className="text-center py-12 text-politician-blue/70 animate-fade-in">
                  No policies found in this category. Please check back later for updates.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block bg-politician-gold/20 text-politician-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
                Visual Overview
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">Our Vision in Numbers</h2>
              <p className="text-politician-blue/80">
                Key statistics and goals that drive our policy platform and vision for the future.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in animate-delay-200">
              <div className="glass-card p-6 rounded-lg text-center card-hover">
                <div className="text-4xl font-bold text-politician-teal mb-3">30%</div>
                <h3 className="text-xl font-bold text-politician-blue mb-2">Green Energy</h3>
                <p className="text-politician-blue/70">Increase in renewable energy usage within the next four years</p>
              </div>
              
              <div className="glass-card p-6 rounded-lg text-center card-hover">
                <div className="text-4xl font-bold text-politician-teal mb-3">1,000+</div>
                <h3 className="text-xl font-bold text-politician-blue mb-2">New Jobs</h3>
                <p className="text-politician-blue/70">Created through economic development initiatives</p>
              </div>
              
              <div className="glass-card p-6 rounded-lg text-center card-hover">
                <div className="text-4xl font-bold text-politician-teal mb-3">15%</div>
                <h3 className="text-xl font-bold text-politician-blue mb-2">Education Budget</h3>
                <p className="text-politician-blue/70">Increase in funding for public schools and teacher salaries</p>
              </div>
              
              <div className="glass-card p-6 rounded-lg text-center card-hover">
                <div className="text-4xl font-bold text-politician-teal mb-3">50 Miles</div>
                <h3 className="text-xl font-bold text-politician-blue mb-2">Infrastructure</h3>
                <p className="text-politician-blue/70">Of roads and bridges to be repaired and upgraded</p>
              </div>
            </div>

            <div className="mt-16 glass-card p-6 rounded-lg overflow-hidden max-w-5xl mx-auto animate-fade-in animate-delay-300">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Policy overview video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold text-politician-blue mb-2">Policy Overview Video</h3>
                <p className="text-politician-blue/70">Watch Telee Brown explain the key elements of his policy platform and vision for the future.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Policies;
