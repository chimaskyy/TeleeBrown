import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Check, CreditCard, DollarSign, Heart, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DonationAmount = ({ amount, isSelected, onSelect }) => {
  return (
    <button
      className={`py-3 px-6 rounded-lg text-center transition-all ${
        isSelected 
          ? 'bg-politician-teal text-white shadow-md scale-105' 
          : 'bg-white hover:bg-politician-lightGray text-politician-blue border border-gray-200'
      }`}
      onClick={() => onSelect(amount)}
    >
      <span className="text-xl font-bold">${amount}</span>
    </button>
  );
};

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [activeTab, setActiveTab] = useState('once');
  
  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(0);
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
                backgroundImage: "url('https://images.unsplash.com/photo-1579621970795-87facc2f976d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-politician-blue/90 to-politician-blue/60"></div>
            </div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mb-4 animate-fade-in">
                Support Our Campaign
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in animate-delay-100">Make a Donation</h1>
              <p className="text-xl text-white/80 mb-8 animate-fade-in animate-delay-200">
                Your financial support helps us create meaningful change in our community. Every contribution matters.
              </p>
            </div>
          </div>
        </section>

        {/* Donation Section */}
        <section className="py-20 bg-politician-lightGray">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-lg shadow-md p-8 mb-8 animate-fade-in">
                <h2 className="text-2xl font-bold text-politician-blue mb-6">Choose Your Donation Amount</h2>

                {/* Donation Frequency Tabs */}
                <div className="flex bg-politician-lightGray rounded-full p-1 mb-6">
                  <button
                    className={`w-1/2 py-3 rounded-full font-medium transition-all ${
                      activeTab === 'once'
                        ? 'bg-politician-blue text-white shadow-md'
                        : 'text-politician-blue hover:bg-politician-offWhite'
                    }`}
                    onClick={() => setActiveTab('once')}
                  >
                    One-Time
                  </button>
                  <button
                    className={`w-1/2 py-3 rounded-full font-medium transition-all ${
                      activeTab === 'monthly'
                        ? 'bg-politician-blue text-white shadow-md'
                        : 'text-politician-blue hover:bg-politician-offWhite'
                    }`}
                    onClick={() => setActiveTab('monthly')}
                  >
                    Monthly
                  </button>
                </div>

                {/* Suggested Amounts */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {[25, 50, 100, 250, 500, 1000].map((amount) => (
                    <DonationAmount
                      key={amount}
                      amount={amount}
                      isSelected={selectedAmount === amount}
                      onSelect={(amount) => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                    />
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-6">
                  <label htmlFor="customAmount" className="block text-politician-blue font-medium mb-2">
                    Enter Custom Amount:
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-politician-blue pointer-events-none">
                      $
                    </span>
                    <input
                      type="number"
                      id="customAmount"
                      placeholder="Enter amount"
                      className="w-full pl-8 pr-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-politician-teal focus:border-transparent"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                    />
                  </div>
                </div>

                {/* Donation Total */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-politician-blue font-bold text-lg">Donation Total:</span>
                  <span className="text-2xl font-bold text-politician-teal">
                    ${selectedAmount > 0 ? selectedAmount : customAmount || 0}
                  </span>
                </div>

                {/* Payment Information */}
                <h3 className="text-xl font-bold text-politician-blue mb-4">Payment Information</h3>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="cardNumber" className="block text-politician-blue font-medium mb-2">
                      Card Number:
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      placeholder="Enter card number"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-politician-teal focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="expiryDate" className="block text-politician-blue font-medium mb-2">
                      Expiry Date:
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      placeholder="MM/YY"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-politician-teal focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-politician-blue font-medium mb-2">
                      CVV:
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      placeholder="Enter CVV"
                      className="w-full px-4 py-3 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-politician-teal focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button className="btn-primary w-full mt-8">
                  Donate Now
                </button>
              </div>

              {/* Why Donate Section */}
              <div className="glass-card p-8 rounded-lg animate-fade-in">
                <h2 className="text-2xl font-bold text-politician-blue mb-6">Why Donate?</h2>
                <p className="text-politician-blue/80 mb-6">
                  Your contribution directly supports our campaign's efforts to create positive change in our community. Here's how your donation helps:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-politician-teal mr-2" />
                    <p className="text-politician-blue/80">Funding community programs and initiatives</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-politician-teal mr-2" />
                    <p className="text-politician-blue/80">Supporting campaign outreach and advertising</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-politician-teal mr-2" />
                    <p className="text-politician-blue/80">Enabling us to reach more voters with our message</p>
                  </div>
                  <div className="flex items-start">
                    <Check className="h-6 w-6 text-politician-teal mr-2" />
                    <p className="text-politician-blue/80">Investing in a better future for our city</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Secure Payment Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
              <span className="inline-block bg-politician-teal/20 text-politician-teal px-4 py-1 rounded-full text-sm font-medium mb-4">
                Secure Payment
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">Your Donation is Protected</h2>
              <p className="text-politician-blue/80">
                We use industry-leading security measures to ensure your financial information is safe and secure.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in animate-delay-100">
              <div className="glass-card p-6 rounded-lg text-center card-hover">
                <Shield className="h-10 w-10 text-politician-teal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-politician-blue mb-2">Secure Encryption</h3>
                <p className="text-politician-blue/70">All transactions are encrypted with SSL technology.</p>
              </div>
              
              <div className="glass-card p-6 rounded-lg text-center card-hover">
                <CreditCard className="h-10 w-10 text-politician-teal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-politician-blue mb-2">PCI Compliant</h3>
                <p className="text-politician-blue/70">Our payment system is PCI DSS compliant for maximum security.</p>
              </div>
              
              <div className="glass-card p-6 rounded-lg text-center card-hover">
                <Heart className="h-10 w-10 text-politician-teal mx-auto mb-4" />
                <h3 className="text-xl font-bold text-politician-blue mb-2">Transparent Process</h3>
                <p className="text-politician-blue/70">We are committed to transparency and accountability in all our financial operations.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 bg-politician-teal/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in-right">
                <span className="inline-block bg-politician-teal/20 text-politician-teal px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Make a Difference
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-politician-blue">Your Impact on Our Community</h2>
                <p className="text-politician-blue/80 mb-6">
                  Every dollar you donate goes directly towards supporting our campaign's key initiatives and making a positive impact on the lives of our community members.
                </p>
                <p className="text-politician-blue/80 mb-8">
                  Here are some of the ways your donation can help:
                </p>
                
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <DollarSign className="h-5 w-5 text-politician-teal mr-2" />
                    <span className="text-politician-blue/80">Provides resources for local schools and educational programs</span>
                  </li>
                  <li className="flex items-center">
                    <Users className="h-5 w-5 text-politician-teal mr-2" />
                    <span className="text-politician-blue/80">Supports community outreach and engagement efforts</span>
                  </li>
                  <li className="flex items-center">
                    <CreditCard className="h-5 w-5 text-politician-teal mr-2" />
                    <span className="text-politician-blue/80">Helps fund critical campaign operations and advertising</span>
                  </li>
                </ul>

                <div className="mt-8">
                  <Link to="/get-involved" className="btn-primary inline-flex items-center">
                    Explore Other Ways to Help
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              </div>
              
              <div className="relative animate-fade-in-left">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80" 
                    alt="Community impact" 
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

export default Donate;
