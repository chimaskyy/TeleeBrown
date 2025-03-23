
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, MapPin, ArrowRight, Filter, CalendarClock, User, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventCard = ({ image, title, date, time, location, category, description, index }) => {
  return (
    <div 
      className={`glass-card rounded-lg overflow-hidden flex flex-col md:flex-row card-hover animate-fade-in`} 
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative md:w-1/3 h-48 md:h-auto">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-politician-gold text-politician-blue px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3 text-politician-blue hover:text-politician-teal transition-colors duration-300">
            <Link to="/events/details">{title}</Link>
          </h3>
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-politician-blue/70">
              <Calendar className="h-4 w-4 mr-2 text-politician-teal" />
              <span>{date}</span>
            </div>
            <div className="flex items-center text-politician-blue/70">
              <Clock className="h-4 w-4 mr-2 text-politician-teal" />
              <span>{time}</span>
            </div>
            <div className="flex items-center text-politician-blue/70">
              <MapPin className="h-4 w-4 mr-2 text-politician-teal" />
              <span>{location}</span>
            </div>
          </div>
          <p className="text-politician-blue/70 mb-4">{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <button className="btn-primary text-sm py-2 w-full sm:w-auto">RSVP Now</button>
          <Link to="/events/details" className="btn-secondary text-sm py-2 w-full sm:w-auto">Learn More</Link>
          <button className="btn-secondary text-sm py-2 w-full sm:w-auto flex items-center justify-center">
            <Bell className="h-4 w-4 mr-2" />
            Remind Me
          </button>
        </div>
      </div>
    </div>
  );
};

const FilterButton = ({ name, isActive, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
        isActive 
          ? 'bg-politician-blue text-white shadow-md' 
          : 'bg-white text-politician-blue hover:bg-politician-lightGray'
      }`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

const Events = () => {
  const [activeFilter, setActiveFilter] = useState('All Events');
  const [showFilters, setShowFilters] = useState(false);

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

  const filters = ['All Events', 'Town Halls', 'Rallies', 'Fundraisers', 'Community Service'];

  const events = [
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      title: "Community Town Hall: Future Development Plans",
      date: "July 15, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "City Community Center, 123 Main St",
      category: "Town Hall",
      description: "Join James Wilson for an open discussion about future development plans in our community. Have your questions answered and voice heard!"
    },
    {
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Neighborhood Meet & Greet with James Wilson",
      date: "July 22, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Riverfront Park, 456 Park Ave",
      category: "Rally",
      description: "A casual outdoor gathering to meet James Wilson and discuss issues that matter to you. Light refreshments will be provided."
    },
    {
      image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Education Policy Roundtable Discussion",
      date: "July 30, 2023",
      time: "7:00 PM - 9:00 PM",
      location: "Public Library Conference Room, 789 Library Ln",
      category: "Town Hall",
      description: "An in-depth discussion about education policy proposals with educators, parents, and community members."
    },
    {
      image: "https://images.unsplash.com/photo-1655526465043-b173d211c785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Community Park Cleanup & Beautification",
      date: "August 5, 2023",
      time: "9:00 AM - 1:00 PM",
      location: "City Central Park, 101 Park Circle",
      category: "Community Service",
      description: "Join us for a day of community service as we clean up and beautify our central park. Tools and refreshments provided."
    },
    {
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Evening Fundraiser Dinner with James Wilson",
      date: "August 12, 2023",
      time: "6:30 PM - 9:30 PM",
      location: "Grand Hotel Ballroom, 555 Luxury Ave",
      category: "Fundraiser",
      description: "An elegant evening fundraiser dinner with special guest speakers and a chance to support the campaign."
    }
  ];

  const filteredEvents = activeFilter === 'All Events' 
    ? events 
    : events.filter(event => event.category === activeFilter.slice(0, -1).trim());

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section with updated background image */}
        <section className="bg-politician-blue text-white py-24 relative">
          <div className="absolute inset-0 z-0">
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{ 
                backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-politician-blue/90 to-politician-blue/60"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
                Join Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animate-delay-100">Events Calendar</h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-200">
                Connect with James Wilson and our campaign team at these upcoming community events.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in animate-delay-300">
                <Link to="#calendar" className="btn-white inline-flex items-center justify-center">
                  <CalendarClock className="mr-2 h-5 w-5" />
                  View Full Calendar
                </Link>
                <button className="btn-gold inline-flex items-center justify-center">
                  <User className="mr-2 h-5 w-5" />
                  Host an Event
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Events Listing */}
        <section className="py-20 bg-politician-lightGray">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 animate-fade-in">
              <div>
                <span className="inline-block bg-politician-teal/20 text-politician-teal px-4 py-1 rounded-full text-sm font-medium mb-2">
                  Upcoming Events
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-politician-blue">Join Us in Person</h2>
              </div>
              
              <button 
                className="mt-4 md:mt-0 btn-secondary inline-flex items-center"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="mr-2 h-5 w-5" />
                Filter Events
              </button>
            </div>
            
            {showFilters && (
              <div className="flex flex-wrap gap-3 mb-8 animate-fade-in">
                {filters.map((filter) => (
                  <FilterButton 
                    key={filter}
                    name={filter}
                    isActive={activeFilter === filter}
                    onClick={setActiveFilter}
                  />
                ))}
              </div>
            )}

            <div className="space-y-8">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <EventCard 
                    key={index}
                    image={event.image}
                    title={event.title}
                    date={event.date}
                    time={event.time}
                    location={event.location}
                    category={event.category}
                    description={event.description}
                    index={index}
                  />
                ))
              ) : (
                <div className="text-center py-12 glass-card rounded-lg animate-fade-in">
                  <p className="text-politician-blue/70 text-lg">No events found in this category.</p>
                  <button 
                    className="mt-4 text-politician-teal hover:text-politician-blue"
                    onClick={() => setActiveFilter('All Events')}
                  >
                    View all events
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section id="calendar" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
              <span className="inline-block bg-politician-gold/20 text-politician-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
                Plan Ahead
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">Full Events Calendar</h2>
              <p className="text-politician-blue/80">
                Browse our complete calendar of upcoming events and add them to your personal calendar.
              </p>
            </div>

            <div className="glass-card p-6 rounded-lg overflow-hidden animate-fade-in animate-delay-200">
              <div className="aspect-w-16 aspect-h-9">
                <iframe 
                  src="https://calendar.google.com/calendar/embed?src=example%40gmail.com&ctz=America%2FNew_York" 
                  style={{ border: 0 }}
                  width="100%" 
                  height="600" 
                  frameBorder="0" 
                  scrolling="no"
                  title="Events Calendar"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            <div className="mt-12 text-center animate-fade-in animate-delay-300">
              <h3 className="text-2xl font-bold text-politician-blue mb-4">Add to Your Calendar</h3>
              <p className="text-politician-blue/80 mb-6 max-w-2xl mx-auto">
                Subscribe to our events calendar to stay up-to-date with all campaign activities and never miss an opportunity to get involved.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#" className="btn-primary inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Google Calendar
                </a>
                <a href="#" className="btn-secondary inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Apple Calendar
                </a>
                <a href="#" className="btn-secondary inline-flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Outlook Calendar
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Host an Event */}
        <section className="py-20 bg-politician-teal/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-right">
                <span className="inline-block bg-politician-teal/20 text-politician-teal px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Get Involved
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">Host a Campaign Event</h2>
                <p className="text-politician-blue/80 mb-6">
                  Interested in hosting a meet-and-greet, fundraiser, or community discussion? We provide the resources and support to make your event a success.
                </p>
                <p className="text-politician-blue/80 mb-8">
                  Hosting an event is a powerful way to help spread our message and build momentum for the campaign in your neighborhood.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="btn-primary inline-flex items-center">
                    Host an Event
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <Link to="/get-involved" className="btn-secondary inline-flex items-center">
                    Other Ways to Help
                  </Link>
                </div>
              </div>
              
              <div className="relative animate-fade-in-left">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" 
                    alt="Host an event" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-politician-blue rounded-full -z-10 animate-pulse-soft"></div>
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-politician-gold rounded-full -z-10 animate-float"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
