
import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, TrendingUp, Users, Menu, X, Check } from 'lucide-react';

const MetroLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Secure Banking",
      description: "Bank-grade security with multi-factor authentication and encrypted transactions to protect your assets."
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Investment Advisory",
      description: "Expert guidance and portfolio management to help you reach your financial goals faster."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Personal Support",
      description: "24/7 dedicated support team ready to assist you with all your financial needs."
    }
  ];

  const features = [
    "Zero monthly fees for basic accounts",
    "Real-time transaction notifications",
    "Global money transfers in seconds",
    "Mobile-first banking experience",
    "AI-powered financial insights",
    "Instant loan approvals"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Metro
              </h1>
            </div>
            
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>

            <div className="hidden md:flex space-x-4">
              <button className="px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
                Sign In
              </button>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md">
            <div className="px-4 pt-2 pb-4 space-y-3">
              <a href="#services" className="block py-2 hover:text-blue-400">Services</a>
              <a href="#features" className="block py-2 hover:text-blue-400">Features</a>
              <a href="#about" className="block py-2 hover:text-blue-400">About</a>
              <a href="#contact" className="block py-2 hover:text-blue-400">Contact</a>
              <button className="w-full px-4 py-2 rounded-lg hover:bg-white/10 transition-colors">
                Sign In
              </button>
              <button className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Banking for the Future
          </h2>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
            Experience financial freedom with Metro's cutting-edge digital banking platform
          </p>
          <button className="group px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 text-lg font-semibold flex items-center mx-auto">
            Start Your Journey
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center mb-16">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="text-blue-400 mb-4">{service.icon}</div>
                <h4 className="text-2xl font-semibold mb-3">{service.title}</h4>
                <p className="text-slate-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">Why Choose Metro?</h3>
              <p className="text-slate-300 text-lg mb-8">
                We combine innovative technology with personalized service to deliver a banking experience that adapts to your lifestyle.
              </p>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                    <span className="text-slate-200">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Total Balance</span>
                    <span className="text-sm text-cyan-400">+12.5%</span>
                  </div>
                  <div className="text-4xl font-bold">$124,582.00</div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div>
                      <div className="text-slate-400 text-sm mb-1">Income</div>
                      <div className="text-xl font-semibold text-green-400">+$8,420</div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm mb-1">Expenses</div>
                      <div className="text-xl font-semibold text-red-400">-$3,210</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Ready to Transform Your Finances?</h3>
          <p className="text-xl mb-8 text-blue-100">
            Join over 1 million users who trust Metro for their financial needs
          </p>
          <button className="px-8 py-4 rounded-lg bg-white text-blue-600 hover:bg-slate-100 transition-all transform hover:scale-105 text-lg font-semibold">
            Open Your Account Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Metro</h4>
              <p className="text-slate-400">Modern banking for modern life</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Products</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400">Checking</a></li>
                <li><a href="#" className="hover:text-blue-400">Savings</a></li>
                <li><a href="#" className="hover:text-blue-400">Investments</a></li>
                <li><a href="#" className="hover:text-blue-400">Loans</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400">About Us</a></li>
                <li><a href="#" className="hover:text-blue-400">Careers</a></li>
                <li><a href="#" className="hover:text-blue-400">Press</a></li>
                <li><a href="#" className="hover:text-blue-400">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
                <li><a href="#" className="hover:text-blue-400">Contact</a></li>
                <li><a href="#" className="hover:text-blue-400">Security</a></li>
                <li><a href="#" className="hover:text-blue-400">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
            <p>&copy; 2026 Metro Financial Services. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MetroLanding;