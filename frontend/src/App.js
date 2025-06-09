import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { 
  Shield, 
  Phone, 
  CheckCircle, 
  Star, 
  Users, 
  Lock, 
  Zap, 
  Download,
  Mail,
  PhoneOff,
  Database,
  Clock,
  UserCheck,
  ArrowRight
} from 'lucide-react';
import './App.css';

const DataWipeLanding = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration with your credentials
      const serviceID = 'service_a3wtsjo';
      const templateID = 'template_cwbg69y';
      const publicKey = 'qAvuUzURVt4x5g47y';

      const templateParams = {
        user_email: email,
        to_email: 'dataguardpro@proton.me',
        subject: 'New DataWipe Beta Signup',
        message: `New beta tester signup:\n\nEmail: ${email}\nTimestamp: ${new Date().toLocaleString()}\n\nPlease send them the beta access details.`
      };

      // Send email notification
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setIsSubmitted(true);
      setEmail('');
      
      // Force form reset by clearing the input field
      const emailInput = document.getElementById('email');
      if (emailInput) {
        emailInput.value = '';
      }
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to submit. Please try again or email us directly at dataguardpro@proton.me');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: <PhoneOff className="w-8 h-8" />,
      title: "Stop Spam Calls",
      description: "Eliminate unwanted solicitation calls by removing your data from the source"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "8 Data Brokers Covered",
      description: "Comprehensive coverage across major data broker networks"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "6 Fully Automated",
      description: "Most removals happen automatically with zero effort from you"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "100% Local Processing",
      description: "Your personal data never leaves your device - complete privacy guaranteed"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Real-Time Updates",
      description: "Track removal progress with live status updates"
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: "2-Week License",
      description: "Full beta access to test all features risk-free"
    }
  ];

  const stats = [
    { number: "8", label: "Data Brokers" },
    { number: "6", label: "Automated" },
    { number: "100%", label: "Local Processing" },
    { number: "2", label: "Week License" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Privacy Advocate",
      content: "Finally, a solution that actually works. My spam calls dropped by 90% after using DataWipe.",
      rating: 5
    },
    {
      name: "Mike Chen",
      role: "Business Owner", 
      content: "The automation is incredible. Set it and forget it - DataWipe handles everything locally and securely.",
      rating: 5
    },
    {
      name: "Lisa Rodriguez",
      role: "Remote Worker",
      content: "I love that my data stays on my device. True privacy while eliminating those annoying calls.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-950 via-secondary-900 to-primary-950">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 z-50 glass-morphism-dark"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-bold gradient-text">DataWipe</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-secondary-300 hover:text-primary-400 transition-colors">Features</a>
              <a href="#how-it-works" className="text-secondary-300 hover:text-primary-400 transition-colors">How It Works</a>
              <a href="#beta" className="btn-primary">Join Beta</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
            alt="Digital Security"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary-950/90 to-primary-950/90"></div>
        </div>
        
        <div className="container-custom relative z-10 section-padding">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg"
            >
              Stop <span className="gradient-text">Spam Calls</span>
            </motion.h1>
            
            <motion.p 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-secondary-300 mb-8 max-w-3xl mx-auto"
            >
              DataWipe automatically removes your personal information from 8 major data brokers, 
              eliminating the source of unwanted solicitation calls. Your data stays 100% local.
            </motion.p>
            
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-center"
            >
              <button className="btn-primary text-lg">
                Join Beta Testing <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="glass-morphism rounded-2xl p-6 card-hover">
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-secondary-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/8728559/pexels-photo-8728559.jpeg" 
            alt="Phone Protection"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container-custom section-padding relative z-10">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Powerful Features
            </h2>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
              Advanced automation meets complete privacy protection
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism rounded-2xl p-8 card-hover"
              >
                <div className="text-primary-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {feature.title}
                </h3>
                <p className="text-secondary-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1639815188546-c43c240ff4df" 
            alt="Data Security"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container-custom section-padding relative z-10">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              How It Works
            </h2>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
              Simple, secure, and completely automated
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Download & Install",
                description: "Download DataWipe to your device. Everything runs locally for complete privacy."
              },
              {
                step: "02", 
                title: "Automated Removal",
                description: "DataWipe automatically contacts 6 major data brokers and removes your information."
              },
              {
                step: "03",
                title: "Manual Guidance",
                description: "For 2 brokers requiring manual removal, get step-by-step guidance through the process."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  {step.title}
                </h3>
                <p className="text-secondary-400">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/8728290/pexels-photo-8728290.jpeg" 
            alt="User Testimonial"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container-custom section-padding relative z-10">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              What Users Say
            </h2>
            <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
              Real feedback from beta testers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-morphism rounded-2xl p-8 card-hover"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-secondary-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-secondary-400">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beta Signup CTA */}
      <section id="beta" className="relative">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1510849911856-cdc9335e5597" 
            alt="Security Protection"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="container-custom section-padding relative z-10">
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
              Join the Beta
            </h2>
            <p className="text-xl text-secondary-300 mb-8 max-w-3xl mx-auto">
              Get early access to DataWipe and help shape the future of privacy protection. 
              Beta testers receive a free 2-week license and priority support.
            </p>

            <div className="glass-morphism rounded-2xl p-8 max-w-md mx-auto">
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">Thank You!</h3>
                  <p className="text-secondary-300">We'll send you beta access details soon.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleEmailSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 bg-secondary-800/50 border border-secondary-600 rounded-xl text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent disabled:opacity-50"
                      placeholder="Enter your email for beta access"
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Mail className="w-5 h-5 mr-2" />
                        Join Beta Testing
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="mt-8 text-sm text-secondary-400">
              <p>Beta includes:</p>
              <div className="flex flex-wrap justify-center gap-6 mt-4">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  2-Week Free License
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Priority Support
                </span>
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  Early Feature Access
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-secondary-800">
        <div className="container-custom py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Shield className="w-8 h-8 text-primary-400" />
                <span className="text-2xl font-bold gradient-text">DataWipe</span>
              </div>
              <p className="text-secondary-400 max-w-md">
                Stop spam calls by removing your data from brokers. 
                100% local processing for complete privacy.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-secondary-400">
                <li><a href="#features" className="hover:text-primary-400 transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-primary-400 transition-colors">How It Works</a></li>
                <li><a href="#beta" className="hover:text-primary-400 transition-colors">Beta Testing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <ul className="space-y-2 text-secondary-400">
                <li>
                  <a href="mailto:dataguardpro@proton.me" className="hover:text-primary-400 transition-colors">
                    dataguardpro@proton.me
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-secondary-800 mt-8 pt-8 text-center text-secondary-400">
            <p>&copy; 2025 DataWipe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/datawipe">
        <Routes>
          <Route path="/" element={<DataWipeLanding />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;