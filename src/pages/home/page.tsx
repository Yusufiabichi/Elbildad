import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BackToTop from '../../../components/BackToTop';
import { motion } from 'framer-motion';

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceType: '',
    procurementDetails: '',
    estimatedValue: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (showModal || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal, mobileMenuOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formBody = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formBody.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d5l09nqdeasqilubg1dg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        // body: formBody.toString()
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          serviceType: '',
          procurementDetails: '',
          estimatedValue: '',
          timeline: ''
        });
        setTimeout(() => {
          setShowModal(false);
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true, amount: 0.2 },
};

const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.8 },
  viewport: { once: true },
};

const slideLeft = {
  initial: { opacity: 0, x: -80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true },
};

const slideRight = {
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
  viewport: { once: true },
};


  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#ffffff] shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img src="./header-logo.png" alt="Elbildad Services LTD" className="h-10 md:h-12 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-[#0A1F44] hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Home</Link>
              <Link to="/about" className="text-[#0A1F44] hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">About Us</Link>
              <Link to="/services" className="text-[#0A1F44] hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Services</Link>
              <Link to="/contact" className="text-[#0A1F44] hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Contact</Link>
              <Link to="/contact" className="px-6 py-2.5 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-all text-sm font-medium whitespace-nowrap">Request Procurement</Link>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[#0A1F44] hover:text-[#D4AF37] transition-colors cursor-pointer"
            >
              <i className={`${mobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A1F44] pt-20">
          <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors text-2xl font-medium whitespace-nowrap">Home</Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors text-2xl font-medium whitespace-nowrap">About Us</Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors text-2xl font-medium whitespace-nowrap">Services</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors text-2xl font-medium whitespace-nowrap">Contact</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-all text-lg font-medium whitespace-nowrap">Request Procurement</Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.ai/api/search-image?query=Modern%20Nigerian%20port%20with%20shipping%20containers%20and%20logistics%20operations%20at%20golden%20hour%2C%20professional%20industrial%20photography%2C%20warm%20lighting%2C%20cranes%20and%20cargo%20vessels%2C%20bustling%20commercial%20harbor%20activity%2C%20aerial%20perspective%20showing%20organized%20container%20yards%20and%20maritime%20infrastructure&width=1920&height=1080&seq=hero-port-001&orientation=landscape" 
            alt="Global Logistics" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full py-32">
          <div className="max-w-2xl">
              <motion.h1 {...fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                We Procure:<br />
                <span className="text-white">Globally Connected,</span><br />
                <span className="text-[#D4AF37]">Locally Delivered..</span>
              </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }} className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-xl font-light">
              Connecting Nigerian businesses to verified global suppliers. Physical presence. Real partnerships. Large-scale procurement you can trust.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }} className="flex flex-col sm:flex-row flex-wrap gap-5">
              <Link to="/contact" className="px-8 py-4 bg-[#0A1F44] text-white rounded-xl hover:bg-[#0A1F44]/90 transition-all text-base font-medium flex items-center justify-center space-x-2 whitespace-nowrap">
                <span>Request Procurement</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
              <Link to="/contact" className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-[#0A1F44] transition-all text-base font-medium flex items-center justify-center space-x-2 whitespace-nowrap">
                <i className="ri-map-pin-line"></i>
                <span>Visit Our Office</span>
              </Link>
            </motion.div>
          </div>
          
          
          <div className="mt-8 md:mt-0 md:absolute md:bottom-24 md:right-6 lg:right-12 grid grid-cols-2 gap-6 md:block md:text-right">
            <motion.div {...fadeUp} className="mb-0 md:mb-6">
              <div className="text-4xl md:text-5xl font-bold text-white">500+</div>
              <div className="text-sm text-white/80 mt-1">Global Suppliers</div>
            </motion.div>
            <motion.div {...fadeUp} className="mb-0 md:mb-6">
              <div className="text-4xl md:text-5xl font-bold text-white">₦2B+</div>
              <div className="text-sm text-white/80 mt-1">Procurement Value</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div {...fadeUp} className="mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#0A1F44] text-white text-xs font-semibold rounded-full mb-4 whitespace-nowrap">WHAT WE DO</span>
            <h2 className="text-5xl font-bold text-[#0A1F44] leading-tight">
              Procurement Services<br />
              <span className="text-[#6B7280]">Built for Scale</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1 * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: true }} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0A1F44] rounded-full flex items-center justify-center mb-6">
                <i className="ri-global-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Global Procurement & Sourcing</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Access to verified suppliers across continents. We source quality products at competitive prices for your business needs.</p>
              <Link to="/services" className="text-[#D4AF37] text-sm font-medium flex items-center space-x-1 hover:underline whitespace-nowrap">
                <span>Learn More</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 2 * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: true }} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0A1F44] rounded-full flex items-center justify-center mb-6">
                <i className="ri-building-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Industrial & Commercial Supplies</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Equipment, machinery, and materials for manufacturing, construction, and commercial operations across Nigeria.</p>
              <Link to="/services" className="text-[#D4AF37] text-sm font-medium flex items-center space-x-1 hover:underline whitespace-nowrap">
                <span>Learn More</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 3 * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: true }} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0A1F44] rounded-full flex items-center justify-center mb-6">
                <i className="ri-search-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Vendor Identification & Due Diligence</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Thorough vetting of suppliers to ensure reliability, quality standards, and compliance with international trade regulations.</p>
              <Link to="/services" className="text-[#D4AF37] text-sm font-medium flex items-center space-x-1 hover:underline whitespace-nowrap">
                <span>Learn More</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 4 * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: true }} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0A1F44] rounded-full flex items-center justify-center mb-6">
                <i className="ri-truck-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Import Coordination & Logistics</h3>
              <p className="text-gray-600 leading-relaxed mb-4">End-to-end logistics management from supplier to your doorstep, including customs clearance and delivery coordination.</p>
              <Link to="/services" className="text-[#D4AF37] text-sm font-medium flex items-center space-x-1 hover:underline whitespace-nowrap">
                <span>Learn More</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 4 * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: true }} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0A1F44] rounded-full flex items-center justify-center mb-6">
                <i className="ri-file-list-3-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Contract & Bulk Procurement</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Large-scale procurement solutions for government contracts, institutional buyers, and major industrial projects.</p>
              <Link to="/services" className="text-[#D4AF37] text-sm font-medium flex items-center space-x-1 hover:underline whitespace-nowrap">
                <span>Learn More</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 4 * 0.12,
                ease: "easeOut",
              }}
              viewport={{ once: true }} className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-[#0A1F44] rounded-full flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Quality Assurance & Compliance</h3>
              <p className="text-gray-600 leading-relaxed mb-4">Rigorous quality checks and compliance verification to ensure products meet Nigerian and international standards.</p>
              <Link to="/services" className="text-[#D4AF37] text-sm font-medium flex items-center space-x-1 hover:underline whitespace-nowrap">
                <span>Learn More</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust & Credibility Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 border-2 border-[#D4AF37] text-[#D4AF37] text-xs font-semibold rounded-full mb-6 whitespace-nowrap">WHY ELBILDAD</span>
              <motion.h2 {...slideLeft} className="text-5xl lg:text-6xl font-bold leading-tight mb-8">
                <span className="text-[#0A1F44]">Physical Presence.</span><br />
                <span className="text-[#0A1F44]/70">Global Reach.</span><br />
                <span className="text-[#D4AF37]">Real Trust.</span>
              </motion.h2>
              <motion.p {...fadeUp} className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                Unlike purely digital platforms, we operate from a physical office in Kano, Nigeria. Visit us, meet our team, and verify our operations. We believe trust in large-scale procurement comes from transparency, accountability, and face-to-face relationships.
              </motion.p>
              <Link to="/contact" className="text-[#0A1F44] text-base font-medium underline hover:text-[#D4AF37] transition-colors flex items-center space-x-2 whitespace-nowrap">
                <span>Visit Our Kano Office</span>
                <i className="ri-arrow-right-line"></i>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute top-0 right-0 text-right z-10">
                <motion.div {...fadeUp} className="mb-8">
                  <div className="text-6xl font-bold text-[#0A1F44]">15+</div>
                  <div className="text-sm text-gray-600 mt-2">Years Combined Experience</div>
                </motion.div>
                <motion.div {...fadeUp} className="mb-8">
                  {/* <div className="text-6xl font-bold text-[#0A1F44]">3</div>
                  <div className="text-sm text-gray-600 mt-2">Continents Covered</div> */}
                </motion.div>
              </div>
              
              <div className="relative mt-32">
                <motion.div {...slideRight} className="relative z-0">
                  <img 
                    src="./business.png" 
                    alt="Office Interior" 
                    className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
                  />
                </motion.div>
                <motion.div {...slideRight} className="absolute -top-16 -left-16 z-10">
                  <img 
                    src="./yatch.jpg" 
                    alt="Office Exterior" 
                    className="w-80 h-80 object-cover rounded-3xl shadow-2xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Presence Highlight */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="./img2.jpeg" 
            alt="Kano Cityscape" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end h-full">
            <motion.div {...slideLeft} className="mb-auto lg:mb-0">
              <h2 className="text-6xl lg:text-7xl font-bold text-white tracking-wide">Visit our Kano office in Kano</h2>
            </motion.div>
            
            <motion.div {...fadeUp} className="text-right max-w-md mt-auto">
              <p className="text-xl text-white font-light leading-relaxed mb-8">
                Visit our physical office for procurement consultations<br />
                and supplier verification meetings.
              </p>
              <Link to="/contact" className="inline-flex items-center bg-white rounded-full pr-2 pl-8 py-2 hover:shadow-lg transition-all whitespace-nowrap">
                <span className="text-[#0A1F44] font-medium mr-4">Get Directions</span>
                <div className="w-12 h-12 bg-[#0A1F44] rounded-full flex items-center justify-center">
                  <i className="ri-arrow-right-line text-white text-xl"></i>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0A1F44]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A1F44]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div {...fadeUp} className="text-center mb-20">
            <span className="inline-block px-4 py-1.5 bg-[#D4AF37] text-white text-xs font-semibold rounded-full mb-4 whitespace-nowrap">OUR ADVANTAGE</span>
            <h2 className="text-5xl font-bold text-[#0A1F44] leading-tight">
              Why Nigerian Businesses<br />
              <span className="text-[#0A1F44]/70">Trust Elbildad Services</span>
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }} className="w-18 h-18 flex items-center justify-center mx-auto mb-6">
                <i className="ri-shield-check-line text-[#0A1F44] text-7xl"></i>
              </motion.div>
              <motion.h3 {...fadeUp} className="text-xl font-bold text-[#0A1F44] mb-4">Verified Global Network</motion.h3>
              <motion.p {...fadeUp} className="text-gray-600 leading-relaxed">Access to pre-vetted suppliers across Asia, Europe, and the Americas with proven track records.</motion.p>
              <div className="mt-6 w-3/5 h-px bg-gray-200 mx-auto"></div>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }} className="w-18 h-18 flex items-center justify-center mx-auto mb-6">
                <i className="ri-map-pin-line text-[#0A1F44] text-7xl"></i>
              </motion.div>
              <motion.h3 {...fadeUp} className="text-xl font-bold text-[#0A1F44] mb-4">Local Execution</motion.h3>
              <motion.p {...fadeUp} className="text-gray-600 leading-relaxed">Physical presence in Nigeria ensures smooth coordination, customs clearance, and delivery to your location.</motion.p>
              <div className="mt-6 w-3/5 h-px bg-gray-200 mx-auto"></div>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }} className="w-18 h-18 flex items-center justify-center mx-auto mb-6">
                <i className="ri-hand-heart-line text-[#0A1F44] text-7xl"></i>
              </motion.div>
              <motion.h3 {...fadeUp} className="text-xl font-bold text-[#0A1F44] mb-4">High-Value Transactions</motion.h3>
              <motion.p {...fadeUp} className="text-gray-600 leading-relaxed">Experience handling large-scale procurement for banks, industries, and government institutions.</motion.p>
              <div className="mt-6 w-3/5 h-px bg-gray-200 mx-auto"></div>
            </div>
            
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true }} className="w-18 h-18 flex items-center justify-center mx-auto mb-6">
                <i className="ri-file-shield-2-line text-[#0A1F44] text-7xl"></i>
              </motion.div>
              <motion.h3 {...fadeUp} className="text-xl font-bold text-[#0A1F44] mb-4">Compliance Driven</motion.h3>
              <motion.p {...fadeUp} className="text-gray-600 leading-relaxed">Full transparency in operations with adherence to Nigerian and international trade regulations.</motion.p>
              <div className="mt-6 w-3/5 h-px bg-gray-200 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-[#0A1F44] to-[#0A1F44]/90 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full blur-3xl"></div>
        </div>

        <motion.div {...fadeUp} className="max-w-5xl mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your<br />
            <span className="text-[#D4AF37]">Procurement Journey?</span>
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Connect with our procurement specialists today. Share your requirements and let us find the perfect global suppliers for your business needs.
          </p>
          <button 
            onClick={() => setShowModal(true)}
            className="px-10 py-5 bg-[#D4AF37] text-[#0A1F44] rounded-xl hover:bg-[#D4AF37]/90 transition-all text-lg font-semibold flex items-center space-x-3 mx-auto whitespace-nowrap shadow-xl hover:shadow-2xl"
          >
            <i className="ri-file-list-3-line text-2xl"></i>
            <span>Submit Service Enquiry</span>
            <i className="ri-arrow-right-line text-xl"></i>
          </button>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/70 text-sm">
            <div className="flex items-center space-x-2">
              <i className="ri-check-line text-[#D4AF37]"></i>
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-check-line text-[#D4AF37]"></i>
              <span>24-48 Hour Response</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-check-line text-[#D4AF37]"></i>
              <span>No Obligation Quote</span>
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Service Enquiry Modal */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-[#0A1F44] text-white px-8 py-6 flex items-center justify-between rounded-t-2xl">
              <div>
                <h3 className="text-2xl font-bold">Service Enquiry Form</h3>
                <p className="text-white/70 text-sm mt-1">Tell us about your procurement needs</p>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors cursor-pointer"
              >
                <i className="ri-close-line text-2xl"></i>
              </button>
            </div>
            
            <form id="service-enquiry-form" data-readdy-form onSubmit={handleSubmit} className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm"
                    placeholder="Your company name"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="serviceType" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                  Service Type <span className="text-red-500">*</span>
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm cursor-pointer"
                >
                  <option value="">Select a service</option>
                  <option value="Global Procurement & Sourcing">Global Procurement & Sourcing</option>
                  <option value="Industrial & Commercial Supplies">Industrial & Commercial Supplies</option>
                  <option value="Vendor Identification & Due Diligence">Vendor Identification & Due Diligence</option>
                  <option value="Import Coordination & Logistics">Import Coordination & Logistics</option>
                  <option value="Contract & Bulk Procurement">Contract & Bulk Procurement</option>
                  <option value="Quality Assurance & Compliance">Quality Assurance & Compliance</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="procurementDetails" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                  Procurement Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="procurementDetails"
                  name="procurementDetails"
                  value={formData.procurementDetails}
                  onChange={handleInputChange}
                  required
                  maxLength={500}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm resize-none"
                  placeholder="Please describe what you need to procure, quantities, specifications, etc."
                ></textarea>
                <div className="text-xs text-gray-500 mt-1 text-right">
                  {formData.procurementDetails.length}/500 characters
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="estimatedValue" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                    Estimated Value
                  </label>
                  <select
                    id="estimatedValue"
                    name="estimatedValue"
                    value={formData.estimatedValue}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm cursor-pointer"
                  >
                    <option value="">Select range</option>
                    <option value="Under ₦5M">Under ₦5M</option>
                    <option value="₦5M - ₦20M">₦5M - ₦20M</option>
                    <option value="₦20M - ₦50M">₦20M - ₦50M</option>
                    <option value="₦50M - ₦100M">₦50M - ₦100M</option>
                    <option value="Over ₦100M">Over ₦100M</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="timeline" className="block text-sm font-semibold text-[#0A1F44] mb-2">
                    Required Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-sm cursor-pointer"
                  >
                    <option value="">Select timeline</option>
                    <option value="Urgent (Within 2 weeks)">Urgent (Within 2 weeks)</option>
                    <option value="1-2 Months">1-2 Months</option>
                    <option value="3-6 Months">3-6 Months</option>
                    <option value="6+ Months">6+ Months</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>
              </div>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center space-x-3">
                  <i className="ri-check-line text-green-600 text-xl"></i>
                  <p className="text-green-700 text-sm font-medium">Thank you! Your enquiry has been submitted successfully. We'll contact you within 24-48 hours.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center space-x-3">
                  <i className="ri-error-warning-line text-red-600 text-xl"></i>
                  <p className="text-red-700 text-sm font-medium">Something went wrong. Please try again or contact us directly.</p>
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 px-8 py-4 bg-[#0A1F44] text-white rounded-lg hover:bg-[#0A1F44]/90 transition-all font-semibold flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-4-line animate-spin"></i>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line"></i>
                      <span>Submit Enquiry</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all font-semibold whitespace-nowrap"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <BackToTop />

      {/* Footer */}
      <footer className="bg-[#0A1F44] text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-16">
            <div>
              <img src="https://static.readdy.ai/image/6f2b631dac997628c51208e81abd8495/014f08d3139724a7d22d45f42c49e43a.jpeg" alt="Elbildad Services LTD" className="h-12 mb-4" />
              <p className="text-gray-400 text-sm">Globally Connected, Locally Delivered</p>
            </div>
            <div className="mt-8 lg:mt-0">
              <p className="text-gray-400 text-sm">Trusted procurement partner for Nigerian industries</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">Global Procurement</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">Industrial Supplies</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">Vendor Due Diligence</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">Logistics Support</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                <li><Link to="/about" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">Contact</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">Our Services</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">Visit Office</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6">Resources</h4>
              <ul className="space-y-3">
                <li><Link to="/services" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">Supplier Network</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">Compliance</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">Request Quote</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-[#D4AF37] transition-colors text-sm whitespace-nowrap">Our Values</Link></li>
              </ul>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-serif mb-2">© 2025 Elbildad Services</div>
              <div className="text-gray-400 text-sm mb-6">All rights reserved</div>
              <div className="flex justify-end space-x-4">
                <a href="mailto:info@elbildad.com" className="text-gray-400 hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                  <i className="ri-mail-line text-xl"></i>
                </a>
                <a href="tel:+234" className="text-gray-400 hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                  <i className="ri-phone-line text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                  <i className="ri-linkedin-box-line text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#D4AF37] transition-colors whitespace-nowrap">
                  <i className="ri-whatsapp-line text-xl"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <a href="https://yusufias-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors whitespace-nowrap">
              Developed by Yusufia Dev
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}