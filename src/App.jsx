import React, { useState } from 'react';
import { 
  ChefHat, 
  Truck, 
  ShieldCheck, 
  Zap, 
  Layout, 
  Users, 
  Menu, 
  X,
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import { Routes, Route, Link } from 'react-router-dom';
import Clientdash from './clientdash';
import AdminDashboard from './AdminDashboard';
import OrderPage from './Order';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-cdBlue text-white fixed w-full z-50 shadow-lg border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold tracking-wider text-white">
              Culinary<span className="text-cdGold">Dreams</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="hover:text-cdGold transition-colors px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#solutions" className="hover:text-cdGold transition-colors px-3 py-2 rounded-md text-sm font-medium">Solutions</a>
              <a href="#comparison" className="hover:text-cdGold transition-colors px-3 py-2 rounded-md text-sm font-medium">Difference</a>
              <a href="#contact" className="bg-cdGold hover:bg-cdGoldHover text-white px-5 py-2 rounded-full font-bold transition-all">
                Partner With Us
              </a>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-cdBlue pb-4">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 hover:bg-gray-800 rounded">About</a>
            <a href="#solutions" className="block px-3 py-2 hover:bg-gray-800 rounded">Solutions</a>
            <a href="#contact" className="block px-3 py-2 text-cdGold font-bold">Partner With Us</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <div className="relative bg-cdBlue pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
            <span className="block">We Are Not A Kitchen.</span>
            <span className="block text-cdGold mt-2">We Are Infrastructure.</span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300">
            India’s premier shared food production platform. We enable food entrepreneurs to cook, package, and scale legally without the high setup costs.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <button className="bg-cdGold text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-cdGoldHover transition-all flex items-center gap-2">
              Book A Tour <ArrowRight size={20} />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-cdBlue transition-all">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-cdGold filter blur-3xl"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-white filter blur-3xl"></div>
      </div>
    </div>
  );
};

const ProblemCard = ({ icon: Icon, title, description, target }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-gray-50 p-8 rounded-xl shadow-lg border-t-4 border-cdGold"
  >
    <div className="bg-cdBlue w-12 h-12 rounded-full flex items-center justify-center mb-6">
      <Icon className="text-cdGold" size={24} />
    </div>
    <h3 className="text-sm font-bold text-cdGold uppercase tracking-wide mb-2">{target}</h3>
    <h4 className="text-2xl font-bold text-cdBlue mb-4">{title}</h4>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const Problems = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-cdBlue sm:text-4xl">
            The Core Problems We Solve
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Scaling a food business in India is hard. We remove the blockers.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ProblemCard 
            icon={ChefHat}
            target="Packaged Food Entrepreneurs"
            title="Moving Beyond Home"
            description="Home kitchens aren't scalable or FSSAI compliant. We solve the lack of compliant space and high setup costs for cookie, pickle, and snack makers."
          />
          <ProblemCard 
            icon={Truck}
            target="Tiffin Operators"
            title="Operational Chaos"
            description="Tiffin services face capacity limits and hygiene issues. We provide affordable, early-morning access with high operational efficiency."
          />
          <ProblemCard 
            icon={Layout}
            target="Large Brands"
            title="Logistics & Scaling"
            description="Centralized factories lead to high logistics costs. We offer distributed micro-manufacturing units closer to your regional demand."
          />
        </div>
      </div>
    </section>
  );
};

const SolutionFeature = ({ title, items }) => (
  <div className="bg-cdBlue bg-opacity-95 p-6 rounded-lg border border-gray-700">
    <h3 className="text-xl font-bold text-cdGold mb-4">{title}</h3>
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start text-gray-300">
          <ShieldCheck className="flex-shrink-0 h-5 w-5 text-cdGold mr-2" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Solutions = () => {
  return (
    <section id="solutions" className="py-20 bg-cdBlue text-white relative">
        {/*  */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Shared Food Production Hubs
          </h2>
          <p className="mt-4 text-xl text-gray-400">
            Clients walk in with ingredients and recipes, not infrastructure headaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SolutionFeature 
            title="Infrastructure" 
            items={[
              "Individual Production Stations",
              "Commercial-grade Exhaust/Ventilation",
              "Gas Lines & Electric Setup",
              "Food-grade Flooring",
              "Water Purification & Power Backup"
            ]} 
          />
          <SolutionFeature 
            title="Operational Services" 
            items={[
              "FSSAI-Compliant Address",
              "Hygiene SOPs & Pest Control",
              "Cleaning Schedules",
              "24/7 Security",
              "Common Utilities Management"
            ]} 
          />
          <SolutionFeature 
            title="Value-Added Services" 
            items={[
              "Designated Packaging Space",
              "Dry & Cold Storage (Optional)",
              "Dispatch Coordination",
              "Basic Compliance Guidance",
              "Logistics Partner Access"
            ]} 
          />
        </div>
      </div>
    </section>
  );
};

const Comparison = () => {
  return (
    <section id="comparison" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-cdBlue">
            How We Are Different
          </h2>
          <p className="mt-2 text-gray-600">We are not a Cloud Kitchen. We are B2B Production Infrastructure.</p>
        </div>

        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
          <table className="min-w-full divide-y divide-gray-300">
            <thead className="bg-cdBlue text-white">
              <tr>
                <th scope="col" className="py-4 pl-4 pr-3 text-left text-sm font-bold sm:pl-6">Aspect</th>
                <th scope="col" className="px-3 py-4 text-left text-sm font-bold text-gray-400">Cloud Kitchens</th>
                <th scope="col" className="px-3 py-4 text-left text-sm font-bold text-cdGold">CulinaryDreams</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {[
                { aspect: 'Focus', cloud: 'Delivery (B2C)', us: 'Production (B2B)' },
                { aspect: 'Customers', cloud: 'Restaurants', us: 'Packaged Food Brands / Tiffins' },
                { aspect: 'Revenue Model', cloud: 'High Commission / Rev Share', us: 'Fixed Rent + Services' },
                { aspect: 'Risk', cloud: 'Platform Dependent (Swiggy/Zomato)', us: 'Independent Business' },
                { aspect: 'Stability', cloud: 'High Churn', us: 'Long-term Infrastructure' },
              ].map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-cdBlue sm:pl-6">{row.aspect}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{row.cloud}</td>
                  <td className="whitespace-nowrap px-3 py-4 text-sm font-bold text-cdBlue bg-yellow-50">{row.us}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-cdBlue text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold tracking-wider">
              Culinary<span className="text-cdGold">Dreams</span>
            </span>
            <p className="mt-4 text-gray-400 text-sm">
              Building India’s shared food production infrastructure.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-cdGold tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Pune, Maharashtra, India</li>
              <li>connect@culinarydreams.in</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-cdGold tracking-wider uppercase">Compliance</h3>
            <p className="mt-4 text-gray-400 text-sm">
              We operate FSSAI compliant facilities. Individual brands are responsible for their specific product registration using our address.
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
          <p className="text-base text-gray-400">
            &copy; 2025 CulinaryDreams Infrastructure. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};



function Landing() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-cdGold selection:text-white">
      <Navbar />
      <div className="fixed bottom-4 left-4 z-50">
          <Link to="/admin" className="bg-cdGold text-white px-4 py-2 rounded shadow-lg">
             View Admin Dashboard Demo
          </Link>
       </div>
      <div className="fixed bottom-4 right-4 z-50">
          <Link to="/dashboard" className="bg-cdGold text-white px-4 py-2 rounded shadow-lg">
             View Client Dashboard Demo
          </Link>
       </div>
      <Hero />
      <Problems />
      <Solutions />
      <Comparison />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/dashboard" element={<Clientdash/>} />
      <Route path="/admin" element={<AdminDashboard />} />
      <Route path="/order/:itemName" element={<OrderPage />} />
    </Routes>
  );
}



export default App;