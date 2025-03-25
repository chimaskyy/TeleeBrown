
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Calendar, Search, Twitter, Facebook, Instagram, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsCard = ({ image, title, date, category, excerpt, delay = 0 }) => {
  return (
    <div className={`glass-card rounded-lg overflow-hidden card-hover animate-fade-in`} style={{ animationDelay: `${delay}ms` }}>
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-white text-politician-blue px-3 py-1 rounded-full text-sm font-medium">
          {category}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-politician-blue/60 text-sm mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          <span>{date}</span>
        </div>
        <h3 className="text-xl font-bold mb-3 text-politician-blue hover:text-politician-teal transition-colors duration-300">
          <Link to="/news/article">{title}</Link>
        </h3>
        <p className="text-politician-blue/70 mb-4">{excerpt}</p>
        <Link to="/news/article" className="inline-flex items-center text-politician-teal hover:text-politician-blue font-medium transition duration-300 group">
          Read more
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

const CategoryBadge = ({ name, isActive, onClick }) => {
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

const SocialFeed = ({ platform, posts }) => {
  const renderIcon = () => {
    switch (platform) {
      case 'Twitter':
        return <Twitter className="h-5 w-5 text-[#1DA1F2]" />;
      case 'Facebook':
        return <Facebook className="h-5 w-5 text-[#4267B2]" />;
      case 'Instagram':
        return <Instagram className="h-5 w-5 text-[#E1306C]" />;
      default:
        return null;
    }
  };

  return (
    <div className="glass-card rounded-lg overflow-hidden animate-fade-in">
      <div className="p-4 border-b border-gray-100 flex items-center">
        {renderIcon()}
        <h3 className="text-lg font-bold text-politician-blue ml-2">Latest from {platform}</h3>
      </div>
      <div className="p-4">
        {posts.map((post, index) => (
          <div key={index} className={`pb-4 mb-4 ${index !== posts.length - 1 ? 'border-b border-gray-100' : ''}`}>
            <p className="text-politician-blue/80 mb-2">{post.content}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-politician-blue/60">{post.date}</span>
              <div className="flex items-center text-politician-teal">
                <Share2 className="h-4 w-4 mr-1" />
                <span>{post.shares}</span>
              </div>
            </div>
          </div>
        ))}
        <a href="#" className="inline-flex items-center text-politician-teal hover:text-politician-blue font-medium transition duration-300 group">
          Follow us on {platform}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  );
};

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

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

  const categories = ['All', 'Press Release', 'Campaign Update', 'Policy', 'Community'];

  const newsItems = [
    {
      image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
      title: "Community Town Hall Discusses Urban Development Plans",
      date: "June 15, 2023",
      category: "Community",
      excerpt: "Telee Brown hosted a productive town hall meeting with residents to discuss upcoming urban development initiatives and address community concerns."
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "New Education Initiative Launches Next Month",
      date: "June 8, 2023",
      category: "Policy",
      excerpt: "The campaign announced an innovative education initiative aimed at improving access to quality education and resources for all students in the district."
    },
    {
      image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
      title: "Wilson Secures Endorsement from Environmental Groups",
      date: "May 30, 2023",
      category: "Press Release",
      excerpt: "Leading environmental organizations have endorsed Telee Brown's campaign, citing his strong commitment to sustainable policies and conservation efforts."
    },
    {
      image: "https://images.unsplash.com/photo-1530266226757-92b091caf989?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Campaign Volunteer Day Draws Record Turnout",
      date: "May 22, 2023",
      category: "Campaign Update",
      excerpt: "Over 200 volunteers participated in the campaign's community service day, helping clean local parks and plant trees throughout the district."
    },
    {
      image: "https://images.unsplash.com/photo-1578901396795-29fb06e1bb7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      title: "Wilson Proposes Comprehensive Infrastructure Plan",
      date: "May 15, 2023",
      category: "Policy",
      excerpt: "Telee Brown unveiled a detailed infrastructure improvement plan focusing on road repairs, public transportation expansion, and broadband access."
    },
    {
      image: "https://images.unsplash.com/photo-1525684863300-cdac0ea74a98?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      title: "Quarterly Campaign Finance Report Released",
      date: "May 10, 2023",
      category: "Press Release",
      excerpt: "The Wilson campaign released its quarterly finance report, highlighting strong grassroots support with over 70% of donations coming from small-dollar contributors."
    }
  ];

  const filteredNews = newsItems
    .filter(item => activeCategory === 'All' || item.category === activeCategory)
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const twitterPosts = [
    {
      content: "Just wrapped up an amazing town hall meeting with residents discussing our urban development plans. Thanks to everyone who participated! #WilsonForProgress",
      date: "2 hours ago",
      shares: "42"
    },
    {
      content: "Excited to announce our new education initiative launching next month. Quality education for all students is a top priority! #EducationMatters",
      date: "1 day ago",
      shares: "87"
    },
    {
      content: "Honored to receive endorsements from leading environmental organizations. Our commitment to sustainable policies remains stronger than ever.",
      date: "2 days ago",
      shares: "63"
    }
  ];

  const facebookPosts = [
    {
      content: "What an incredible volunteer day! Over 200 community members came together to clean our parks and plant trees. Together, we're making a difference!",
      date: "5 hours ago",
      shares: "56"
    },
    {
      content: "Today we unveiled our comprehensive infrastructure improvement plan. Check out the details on our website and share your thoughts!",
      date: "3 days ago",
      shares: "34"
    }
  ];

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
                backgroundImage: "url('https://images.unsplash.com/photo-1504711331083-9c895941bf81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-politician-blue/90 via-politician-blue/80 to-politician-blue/60"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
                Stay Informed
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animate-delay-100">News & Updates</h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-200">
                The latest information about our campaign, policy announcements, and community events.
              </p>
            </div>
          </div>
        </section>

        {/* News Content */}
        <section className="py-20 bg-politician-lightGray">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-10">
              {/* Main Content */}
              <div className="md:w-2/3">
                <div className="mb-8 animate-fade-in">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-politician-blue/50" />
                    <input
                      type="text"
                      placeholder="Search news..."
                      className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-politician-teal focus:border-transparent"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-8 animate-fade-in animate-delay-100">
                  {categories.map((category) => (
                    <CategoryBadge 
                      key={category}
                      name={category}
                      isActive={activeCategory === category}
                      onClick={setActiveCategory}
                    />
                  ))}
                </div>

                {filteredNews.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredNews.map((item, index) => (
                      <NewsCard 
                        key={index}
                        image={item.image}
                        title={item.title}
                        date={item.date}
                        category={item.category}
                        excerpt={item.excerpt}
                        delay={index * 100}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12 glass-card rounded-lg animate-fade-in">
                    <p className="text-politician-blue/70 text-lg">No news articles match your search criteria.</p>
                    <button 
                      className="mt-4 text-politician-teal hover:text-politician-blue"
                      onClick={() => {
                        setSearchTerm('');
                        setActiveCategory('All');
                      }}
                    >
                      Clear filters
                    </button>
                  </div>
                )}

                <div className="mt-12 text-center animate-fade-in">
                  <button className="btn-primary inline-flex items-center">
                    Load More Articles
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:w-1/3 space-y-8">
                <div className="glass-card p-6 rounded-lg animate-fade-in">
                  <h3 className="text-xl font-bold text-politician-blue mb-4">Newsletter Signup</h3>
                  <p className="text-politician-blue/70 mb-4">Stay up to date with the latest news and updates from the campaign.</p>
                  <div className="space-y-4">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-politician-teal focus:border-transparent"
                    />
                    <button className="w-full btn-primary">
                      Subscribe
                    </button>
                  </div>
                </div>

                <SocialFeed platform="Twitter" posts={twitterPosts} />
                <SocialFeed platform="Facebook" posts={facebookPosts} />

                <div className="glass-card p-6 rounded-lg animate-fade-in">
                  <h3 className="text-xl font-bold text-politician-blue mb-4">Latest Media</h3>
                  <div className="space-y-3">
                    <div className="relative rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1494172892981-ce47ca891fe1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" 
                        alt="Latest media" 
                        className="w-full h-32 object-cover"
                      />
                      <div className="absolute inset-0 bg-politician-blue/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <button className="text-white">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <Link to="/media" className="inline-flex items-center text-politician-teal hover:text-politician-blue font-medium transition duration-300 group">
                      View Media Gallery
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default News;
