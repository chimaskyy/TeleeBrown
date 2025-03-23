import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight, Filter, Search, Download, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const MediaGalleryItem = ({ item, index }) => {
  return (
    <div 
      className="glass-card rounded-lg overflow-hidden card-hover animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {item.type === 'image' ? (
        <div className="relative group">
          <img 
            src={item.src} 
            alt={item.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-politician-blue/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
            <button className="rounded-full bg-white p-2">
              <Download className="h-5 w-5 text-politician-blue" />
            </button>
            <button className="rounded-full bg-white p-2">
              <Share2 className="h-5 w-5 text-politician-blue" />
            </button>
          </div>
        </div>
      ) : (
        <div className="relative h-48">
          <div className="absolute inset-0 flex items-center justify-center bg-politician-blue/10">
            <button className="rounded-full bg-white/90 p-4 hover:bg-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-politician-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
          <img 
            src={item.thumbnail} 
            alt={item.title}
            className="w-full h-full object-cover opacity-90"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-politician-blue font-bold mb-2">{item.title}</h3>
        <div className="flex justify-between text-politician-blue/70 text-sm">
          <span>{item.date}</span>
          <span>{item.category}</span>
        </div>
      </div>
    </div>
  );
};

const Media = () => {
  const [activeFilter, setActiveFilter] = useState('All Media');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  
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

  const filters = ['All Media', 'Photos', 'Videos', 'Campaign', 'Events', 'Press'];

  const mediaItems = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title: 'Community Town Hall Meeting',
      date: 'June 15, 2023',
      category: 'Events'
    },
    {
      id: 2,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title: 'Campaign Announcement Speech',
      date: 'May 10, 2023',
      category: 'Campaign'
    },
    {
      id: 3,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2074&q=80',
      title: 'Press Conference on Education Policy',
      date: 'June 2, 2023',
      category: 'Press'
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1561489413-985b06da5bee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title: 'Neighborhood Cleanup Volunteer Day',
      date: 'May 28, 2023',
      category: 'Events'
    },
    {
      id: 5,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1582835633806-20609be51803?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1898&q=80',
      title: 'Interview on Local Economic Development',
      date: 'June 10, 2023',
      category: 'Press'
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80',
      title: 'Meet & Greet with Small Business Owners',
      date: 'May 15, 2023',
      category: 'Campaign'
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2032&q=80',
      title: 'Policy Team Strategic Planning',
      date: 'June 5, 2023',
      category: 'Campaign'
    },
    {
      id: 8,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80',
      title: 'Infrastructure Plan Announcement',
      date: 'May 22, 2023',
      category: 'Press'
    },
    {
      id: 9,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title: 'Community Park Groundbreaking',
      date: 'June 18, 2023',
      category: 'Events'
    },
    {
      id: 10,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1566848914736-6e389b4c8121?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title: 'Youth Sports Program Launch',
      date: 'May 25, 2023',
      category: 'Events'
    },
    {
      id: 11,
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1574717024453-e599fdf4deb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
      title: 'Campaign Rally Highlights',
      date: 'June 20, 2023',
      category: 'Campaign'
    }
  ];

  const filteredMediaItems = mediaItems
    .filter(item => {
      if (activeFilter === 'All Media') return true;
      if (activeFilter === 'Photos') return item.type === 'image';
      if (activeFilter === 'Videos') return item.type === 'video';
      return item.category === activeFilter;
    })
    .filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
  const pageCount = Math.ceil(filteredMediaItems.length / itemsPerPage);
  const currentItems = filteredMediaItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
                backgroundImage: "url('https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-politician-blue/90 to-politician-blue/60"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
                Media Gallery
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animate-delay-100">Photos & Videos</h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-200">
                Browse our collection of campaign moments, events, and press appearances.
              </p>
            </div>
          </div>
        </section>

        {/* Media Content */}
        <section className="py-20 bg-politician-lightGray">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center mb-12 animate-fade-in">
              <div className="w-full md:w-1/2 mb-6 md:mb-0">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-politician-blue/50" />
                  <input
                    type="text"
                    placeholder="Search media..."
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-politician-teal focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>

              <div className="w-full md:w-auto flex flex-wrap gap-3">
                {filters.map((filter) => (
                  <FilterButton 
                    key={filter}
                    name={filter}
                    isActive={activeFilter === filter}
                    onClick={setActiveFilter}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in animate-delay-100">
              {currentItems.map((item, index) => (
                <MediaGalleryItem key={item.id} item={item} index={index} />
              ))}
            </div>

            {filteredMediaItems.length === 0 && (
              <div className="text-center py-12 glass-card rounded-lg animate-fade-in">
                <p className="text-politician-blue/70 text-lg">No media found matching your criteria.</p>
              </div>
            )}

            {pageCount > 1 && (
              <div className="flex justify-center mt-12 animate-fade-in animate-delay-200">
                <button
                  className="px-4 py-2 bg-white text-politician-blue rounded-md shadow-md hover:bg-politician-lightGray disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  <ArrowRight className="h-5 w-5 transform rotate-180 inline-block" />
                  Previous
                </button>
                <span className="mx-4 text-politician-blue/70">
                  Page {currentPage} of {pageCount}
                </span>
                <button
                  className="px-4 py-2 bg-white text-politician-blue rounded-md shadow-md hover:bg-politician-lightGray disabled:opacity-50 disabled:cursor-not-allowed"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === pageCount}
                >
                  Next
                  <ArrowRight className="h-5 w-5 inline-block" />
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Media;
