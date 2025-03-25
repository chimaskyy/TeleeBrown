
import { useState } from 'react';
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EventCard = ({ image, title, date, time, location, index }) => {
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
          Upcoming
        </div>
      </div>
      <div className="p-6 md:w-2/3 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-bold mb-3 text-politician-blue hover:text-politician-teal transition-colors duration-300">
            <Link to="/events">{title}</Link>
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
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-2">
          <button className="btn-primary text-sm py-2">RSVP Now</button>
          <Link to="/events" className="btn-secondary text-sm py-2">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  const events = [
    {
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      title: "Community Town Hall: Future Development Plans",
      date: "July 15, 2023",
      time: "6:00 PM - 8:00 PM",
      location: "City Community Center, 123 Main St"
    },
    {
      image: "https://images.unsplash.com/photo-1560439514-4e9645039924?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Neighborhood Meet & Greet with Telee Brown",
      date: "July 22, 2023",
      time: "10:00 AM - 12:00 PM",
      location: "Riverfront Park, 456 Park Ave"
    }
  ];

  return (
    <section id="events" className="section-container bg-politician-lightGray">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0 animate-fade-in">
            <span className="inline-block bg-politician-teal/20 text-politician-teal px-4 py-1 rounded-full text-sm font-medium mb-4">
              Join Us
            </span>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="text-politician-blue/80">
              Connect with Telee Brown and the campaign team at these upcoming community events.
            </p>
          </div>
          <Link to="/events" className="btn-primary inline-flex items-center animate-fade-in">
            View Calendar
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <EventCard 
              key={index}
              image={event.image}
              title={event.title}
              date={event.date}
              time={event.time}
              location={event.location}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
