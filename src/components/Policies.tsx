
import { Check, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PolicyCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <div className={`glass-card p-6 rounded-lg card-hover animate-fade-in animate-delay-${delay}`}>
      <div className="bg-politician-blue/10 rounded-full p-3 inline-block mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3 text-politician-blue">{title}</h3>
      <p className="text-politician-blue/70 mb-4">{description}</p>
      <ul className="space-y-2 mb-4">
        {[1, 2].map((item, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-politician-teal mr-2 mt-1 flex-shrink-0" />
            <span className="text-politician-blue/80">Key initiative {item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Policies = () => {
  const policies = [
    {
      title: "Sustainable Development",
      description: "Creating eco-friendly infrastructure and promoting renewable energy initiatives.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-politician-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
      delay: 100
    },
    {
      title: "Education Reform",
      description: "Improving schools and expanding educational opportunities for all students.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-politician-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      delay: 200
    },
    {
      title: "Economic Growth",
      description: "Supporting local businesses and attracting new investments to create jobs.",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-politician-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      delay: 300
    }
  ];

  return (
    <section id="policies" className="section-container bg-politician-lightGray">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <span className="inline-block bg-politician-teal/20 text-politician-teal px-4 py-1 rounded-full text-sm font-medium mb-4">
            Our Vision
          </span>
          <h2 className="section-title mx-auto after:left-1/2 after:-translate-x-1/2">Key Policy Priorities</h2>
          <p className="text-politician-blue/80">
            Our comprehensive platform addresses the most important issues facing our community,
            with practical solutions and a clear vision for the future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {policies.map((policy, index) => (
            <PolicyCard 
              key={index}
              title={policy.title}
              description={policy.description}
              icon={policy.icon}
              delay={policy.delay}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/policies" className="btn-primary inline-flex items-center animate-fade-in animate-delay-400">
            View All Policies
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Policies;
