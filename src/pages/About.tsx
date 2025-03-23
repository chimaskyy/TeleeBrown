import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Award, Briefcase, Calendar, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const TimelineItem = ({ year, title, description, icon: Icon, position = "left", delay = 0 }) => {
  return (
    <div className={`relative flex items-center justify-between mb-8 animate-fade-in`} style={{ animationDelay: `${delay}ms` }}>
      <div className={`absolute left-1/2 -translate-x-1/2 w-1 h-full bg-politician-blue/20 z-0 ${position === "last" ? "h-0" : ""}`}></div>
      
      <div className={`absolute left-1/2 -translate-x-1/2 z-10 w-12 h-12 rounded-full bg-politician-blue flex items-center justify-center text-white`}>
        <Icon className="w-6 h-6" />
      </div>
      
      <div className={`w-5/12 ${position === "left" ? "pr-16 text-right" : "order-2 pl-16 text-left"}`}>
        <span className="text-politician-gold font-bold text-lg">{year}</span>
        <h3 className="text-xl font-bold text-politician-blue mb-2">{title}</h3>
        <p className="text-politician-blue/70">{description}</p>
      </div>
      
      <div className={`w-5/12 ${position === "left" ? "order-2 pl-16" : "pr-16"}`}></div>
    </div>
  );
};

const About = () => {
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

  const timelineEvents = [
    {
      year: "2020",
      title: "Elected City Council Member",
      description: "Became the youngest elected official on the city council, focusing on urban development and community engagement.",
      icon: Award,
      position: "left",
      delay: 100
    },
    {
      year: "2018",
      title: "Community Development Director",
      description: "Led initiatives to revitalize neighborhoods and create affordable housing options for residents.",
      icon: Briefcase,
      position: "right",
      delay: 200
    },
    {
      year: "2015",
      title: "Urban Planning Commission",
      description: "Appointed to the city's Urban Planning Commission, where I helped shape sustainable development policies.",
      icon: Calendar,
      position: "left",
      delay: 300
    },
    {
      year: "2012",
      title: "Master's in Public Policy",
      description: "Graduated with distinction, specializing in urban development and community organizing.",
      icon: GraduationCap,
      position: "right",
      delay: 400
    },
    {
      year: "2010",
      title: "Community Organizer",
      description: "Began career as a grassroots community organizer, working on local initiatives to improve public spaces.",
      icon: Briefcase,
      position: "left",
      delay: 500,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        <section className="bg-politician-blue text-white py-24 relative">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-politician-blue/80"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
                About James Wilson
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animate-delay-100">A Leader With a Vision</h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-200">
                Dedicated to public service and committed to making our community thrive through thoughtful policy and inclusive leadership.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-right">
                <span className="inline-block bg-politician-lightBlue/20 text-politician-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Biography
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">The Journey to Public Service</h2>
                <p className="text-politician-blue/80 mb-6">
                  James Wilson has dedicated his life to improving the lives of citizens through thoughtful policy, community engagement, and forward-thinking leadership. Born and raised in our city, James understands firsthand the challenges and opportunities that shape our community.
                </p>
                <p className="text-politician-blue/80 mb-6">
                  With over 15 years of experience in urban planning and community development, James brings practical expertise and innovative thinking to address our city's most pressing challenges. His approach combines data-driven decision making with a deep commitment to listening to the voices of all community members.
                </p>
                <p className="text-politician-blue/80 mb-6">
                  Outside of his professional life, James is an avid runner, volunteers at the local food bank, and enjoys spending time with his family exploring the natural beauty of our region.
                </p>
                <div className="flex space-x-4 mt-8">
                  <Link to="/policies" className="btn-primary inline-flex items-center">
                    View Policy Platform
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link to="/contact" className="btn-secondary inline-flex items-center">
                    Contact James
                  </Link>
                </div>
              </div>
              
              <div className="relative animate-fade-in-left">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80" 
                    alt="James Wilson" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-politician-gold rounded-full -z-10 animate-pulse-soft"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-politician-teal rounded-full -z-10 animate-float"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-politician-lightGray">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block bg-politician-teal/20 text-politician-teal px-4 py-1 rounded-full text-sm font-medium mb-4">
                Career Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">Timeline of Achievements</h2>
              <p className="text-politician-blue/80">
                A look at the milestones and contributions that have shaped James Wilson's career in public service and community leadership.
              </p>
            </div>

            <div className="max-w-5xl mx-auto mt-16">
              {timelineEvents.map((event, index) => (
                <TimelineItem 
                  key={index}
                  year={event.year}
                  title={event.title}
                  description={event.description}
                  icon={event.icon}
                  position={event.position}
                  delay={event.delay}
                />
              ))}
              <div className="flex justify-center mt-12">
                <div className="w-16 h-16 rounded-full bg-politician-gold flex items-center justify-center shadow-lg animate-bounce-slow">
                  <span className="font-bold text-white">Now</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block bg-politician-gold/20 text-politician-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
                Visual Journey
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">Moments That Matter</h2>
              <p className="text-politician-blue/80">
                Explore key moments from James Wilson's career and community involvement through this visual gallery.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in animate-delay-200">
              <div className="glass-card p-4 rounded-lg overflow-hidden card-hover">
                <img 
                  src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Community meeting" 
                  className="w-full h-60 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-politician-blue">Community Forum</h3>
                <p className="text-politician-blue/70">Hosting a discussion on neighborhood development with local residents and business owners.</p>
              </div>
              
              <div className="glass-card p-4 rounded-lg overflow-hidden card-hover">
                <div className="relative h-60 mb-4 rounded overflow-hidden">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                    title="Campaign announcement" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
                <h3 className="text-xl font-bold mb-2 text-politician-blue">Campaign Announcement</h3>
                <p className="text-politician-blue/70">James Wilson announces his vision for the future of our community.</p>
              </div>
              
              <div className="glass-card p-4 rounded-lg overflow-hidden card-hover">
                <img 
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                  alt="Volunteer event" 
                  className="w-full h-60 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-bold mb-2 text-politician-blue">Volunteer Day</h3>
                <p className="text-politician-blue/70">Leading a team of volunteers for the annual park cleanup and beautification project.</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/media" className="btn-primary inline-flex items-center animate-fade-in animate-delay-300">
                View Full Gallery
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
