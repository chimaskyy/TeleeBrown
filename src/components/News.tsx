
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsCard = ({ image, title, date, excerpt, index }) => {
  return (
    <div className={`glass-card rounded-lg overflow-hidden card-hover animate-fade-in`} style={{ animationDelay: `${index * 100}ms` }}>
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center text-politician-blue/60 text-sm mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-politician-blue hover:text-politician-teal transition-colors duration-300">
          <Link to="/news">{title}</Link>
        </h3>
        <p className="text-politician-blue/70 mb-4">{excerpt}</p>
        <Link to="/news" className="inline-flex items-center text-politician-teal hover:text-politician-blue font-medium transition duration-300 group">
          Read more
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const News = () => {
  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      title: "Community Town Hall Discusses Urban Development Plans",
      date: "June 15, 2023",
      excerpt: "James Wilson hosted a productive town hall meeting with residents to discuss upcoming urban development initiatives and address community concerns."
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "New Education Initiative Launches Next Month",
      date: "June 8, 2023",
      excerpt: "The campaign announced an innovative education initiative aimed at improving access to quality education and resources for all students in the district."
    },
    {
      image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
      title: "Wilson Secures Endorsement from Environmental Groups",
      date: "May 30, 2023",
      excerpt: "Leading environmental organizations have endorsed James Wilson's campaign, citing his strong commitment to sustainable policies and conservation efforts."
    }
  ];

  return (
    <section id="news" className="section-container bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl mb-6 md:mb-0 animate-fade-in">
            <span className="inline-block bg-politician-gold/20 text-politician-blue px-4 py-1 rounded-full text-sm font-medium mb-4">
              Latest Updates
            </span>
            <h2 className="section-title">News & Press Releases</h2>
            <p className="text-politician-blue/80">
              Stay informed about the latest campaign activities, policy announcements, and community events.
            </p>
          </div>
          <Link to="/news" className="btn-secondary inline-flex items-center animate-fade-in">
            View All News
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard 
              key={index}
              image={item.image}
              title={item.title}
              date={item.date}
              excerpt={item.excerpt}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
