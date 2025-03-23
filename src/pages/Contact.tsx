import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, MapPin, Phone, Send, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactOption = ({ icon: Icon, title, description, link, linkText }) => {
  return (
    <div className="glass-card p-6 rounded-lg hover:shadow-lg transition-all card-hover">
      <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-full bg-politician-teal/10 text-politician-teal">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-bold text-politician-blue mb-2">{title}</h3>
      <p className="text-politician-blue/70 mb-4">{description}</p>
      {link && (
        <a href={link} className="inline-flex items-center text-politician-teal hover:text-politician-blue font-medium transition duration-300 group">
          {linkText}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      )}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const validate = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
    }
    
    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
    }
    
    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);
    
    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        console.log('Form submitted successfully:', formData);
        setSubmitSuccess(true);
        setIsSubmitting(false);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      }, 1500);
    }
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
                backgroundImage: "url('https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-politician-blue/90 to-politician-blue/60"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animate-delay-100">Contact Us</h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-200">
                We're here to answer your questions and hear your concerns. Reach out to our campaign team today.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-20 bg-politician-lightGray">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 animate-fade-in">
              <ContactOption
                icon={Mail}
                title="Email Us"
                description="Send us an email for general inquiries and support."
                link="mailto:info@example.com"
                linkText="Send Email"
              />
              <ContactOption
                icon={MapPin}
                title="Visit Our Office"
                description="Visit our campaign headquarters during business hours."
                link="#"
                linkText="Get Directions"
              />
              <ContactOption
                icon={Phone}
                title="Call Us"
                description="Call our hotline for immediate assistance."
                link="tel:+15551234567"
                linkText="Call Now"
              />
              <ContactOption
                icon={Clock}
                title="Office Hours"
                description="Monday - Friday, 9:00 AM to 5:00 PM"
              />
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8 rounded-lg max-w-3xl mx-auto animate-fade-in">
              <h2 className="text-2xl font-bold text-politician-blue mb-6 text-center">Send us a Message</h2>
              {submitSuccess ? (
                <div className="text-green-500 text-center mb-4">
                  Thank you for your message! We'll get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-politician-blue font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className={`w-full px-4 py-2 rounded-md border ${formErrors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-politician-teal focus:border-transparent`}
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                    {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-politician-blue font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`w-full px-4 py-2 rounded-md border ${formErrors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-politician-teal focus:border-transparent`}
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-politician-blue font-medium mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className={`w-full px-4 py-2 rounded-md border ${formErrors.subject ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-politician-teal focus:border-transparent`}
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    {formErrors.subject && <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>}
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-politician-blue font-medium mb-2">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className={`w-full px-4 py-2 rounded-md border ${formErrors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-politician-teal focus:border-transparent`}
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                    {formErrors.message && <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin h-5 w-5 mx-auto" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
