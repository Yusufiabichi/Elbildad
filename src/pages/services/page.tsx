import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ServicesPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A1F44] shadow-lg' : 'bg-[#0A1F44]'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center space-x-3">
              <img src="https://static.readdy.ai/image/6f2b631dac997628c51208e81abd8495/014f08d3139724a7d22d45f42c49e43a.jpeg" alt="Elbildad Services LTD" className="h-10 md:h-12 w-auto" />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Home</Link>
              <Link to="/about" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">About Us</Link>
              <Link to="/services" className="text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Services</Link>
              <Link to="/contact" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Contact</Link>
              <Link to="/contact" className="px-6 py-2.5 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-all text-sm font-medium whitespace-nowrap">Request Procurement</Link>
            </div>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-white hover:text-[#D4AF37] transition-colors cursor-pointer"
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
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-[#D4AF37] transition-colors text-2xl font-medium whitespace-nowrap">Services</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors text-2xl font-medium whitespace-nowrap">Contact</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-all text-lg font-medium whitespace-nowrap">Request Procurement</Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A1F44] to-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Comprehensive Procurement<br />
              <span className="text-[#D4AF37]">Solutions for Every Need</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              From global sourcing to local delivery, we provide end-to-end procurement services designed for Nigerian businesses operating at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="space-y-20">
            {/* Service 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 bg-[#0A1F44] rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-global-line text-white text-3xl"></i>
                </div>
                <h2 className="text-4xl font-bold text-[#0A1F44] mb-6">Global Procurement & Sourcing</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Access our extensive network of verified suppliers across Asia, Europe, and the Americas. We source quality products at competitive prices, handling everything from initial supplier identification to final delivery.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Pre-vetted supplier database across multiple continents</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Competitive pricing through established relationships</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Quality assurance and product verification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Multi-currency transaction support</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#0A1F44] text-white rounded-xl hover:bg-[#0A1F44]/90 transition-all font-medium whitespace-nowrap">
                  <span>Request Quote</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Global%20shipping%20and%20international%20trade%20operations%2C%20world%20map%20with%20connected%20trade%20routes%2C%20cargo%20ships%20and%20containers%20at%20international%20port%2C%20professional%20logistics%20photography%20showing%20global%20commerce%20network%2C%20modern%20supply%20chain%20visualization&width=700&height=600&seq=global-sourcing-001&orientation=landscape" 
                  alt="Global Sourcing" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>

            {/* Service 2 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://readdy.ai/api/search-image?query=Industrial%20manufacturing%20equipment%20and%20commercial%20machinery%20in%20modern%20factory%20setting%2C%20heavy%20industrial%20supplies%20and%20production%20equipment%2C%20professional%20industrial%20photography%20showing%20manufacturing%20infrastructure%2C%20quality%20industrial%20products%20and%20machinery&width=700&height=600&seq=industrial-supplies-001&orientation=landscape" 
                  alt="Industrial Supplies" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-building-line text-white text-3xl"></i>
                </div>
                <h2 className="text-4xl font-bold text-[#0A1F44] mb-6">Industrial & Commercial Supplies</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Comprehensive supply solutions for manufacturing, construction, and commercial operations. We procure equipment, machinery, raw materials, and consumables for businesses across Nigeria.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Manufacturing equipment and machinery</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Construction materials and tools</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Commercial office and retail supplies</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Technical specifications matching</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-[#0A1F44] rounded-xl hover:bg-[#D4AF37]/90 transition-all font-medium whitespace-nowrap">
                  <span>Get Started</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 bg-[#0A1F44] rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-search-line text-white text-3xl"></i>
                </div>
                <h2 className="text-4xl font-bold text-[#0A1F44] mb-6">Vendor Identification & Due Diligence</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Thorough vetting and verification of potential suppliers to ensure reliability, quality standards, and compliance. We conduct comprehensive due diligence to protect your interests in high-value transactions.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Supplier background verification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Financial stability assessment</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Quality certification verification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Compliance and regulatory checks</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#0A1F44] text-white rounded-xl hover:bg-[#0A1F44]/90 transition-all font-medium whitespace-nowrap">
                  <span>Learn More</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20business%20due%20diligence%20and%20vendor%20verification%20process%2C%20corporate%20executives%20reviewing%20supplier%20documents%20and%20contracts%2C%20detailed%20inspection%20and%20quality%20assessment%2C%20professional%20business%20meeting%20with%20documentation%20review&width=700&height=600&seq=due-diligence-001&orientation=landscape" 
                  alt="Due Diligence" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>

            {/* Service 4 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://readdy.ai/api/search-image?query=International%20logistics%20and%20import%20coordination%20operations%2C%20customs%20clearance%20and%20cargo%20handling%20at%20port%20facility%2C%20professional%20freight%20forwarding%20and%20shipping%20coordination%2C%20organized%20warehouse%20with%20imported%20goods%20and%20documentation&width=700&height=600&seq=logistics-coordination-001&orientation=landscape" 
                  alt="Logistics Coordination" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-truck-line text-white text-3xl"></i>
                </div>
                <h2 className="text-4xl font-bold text-[#0A1F44] mb-6">Import Coordination & Logistics Support</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  End-to-end logistics management from supplier to your doorstep. We handle shipping, customs clearance, documentation, and final delivery, ensuring smooth import operations.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">International shipping coordination</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Customs clearance and documentation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Port handling and warehousing</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Final delivery to your location</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-[#0A1F44] rounded-xl hover:bg-[#D4AF37]/90 transition-all font-medium whitespace-nowrap">
                  <span>Contact Us</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="w-16 h-16 bg-[#0A1F44] rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-file-list-3-line text-white text-3xl"></i>
                </div>
                <h2 className="text-4xl font-bold text-[#0A1F44] mb-6">Contract & Bulk Procurement</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Specialized solutions for large-scale procurement needs. We handle government contracts, institutional purchases, and major industrial projects with the professionalism and capacity they require.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Government tender support</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Institutional bulk orders</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Long-term supply agreements</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Project-based procurement</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#0A1F44] text-white rounded-xl hover:bg-[#0A1F44]/90 transition-all font-medium whitespace-nowrap">
                  <span>Discuss Your Project</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
              <div>
                <img 
                  src="https://readdy.ai/api/search-image?query=Large%20scale%20bulk%20procurement%20and%20contract%20signing%2C%20professional%20business%20executives%20reviewing%20major%20procurement%20contracts%2C%20corporate%20boardroom%20with%20contract%20documents%20and%20handshake%2C%20high%20value%20business%20transaction%20documentation&width=700&height=600&seq=bulk-procurement-001&orientation=landscape" 
                  alt="Bulk Procurement" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
                />
              </div>
            </div>

            {/* Service 6 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <img 
                  src="https://readdy.ai/api/search-image?query=Quality%20assurance%20and%20compliance%20inspection%20process%2C%20professional%20quality%20control%20inspector%20examining%20products%20with%20checklist%2C%20industrial%20quality%20testing%20and%20certification%20verification%2C%20detailed%20product%20inspection%20and%20standards%20compliance&width=700&height=600&seq=quality-assurance-001&orientation=landscape" 
                  alt="Quality Assurance" 
                  className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="w-16 h-16 bg-[#D4AF37] rounded-2xl flex items-center justify-center mb-6">
                  <i className="ri-shield-check-line text-white text-3xl"></i>
                </div>
                <h2 className="text-4xl font-bold text-[#0A1F44] mb-6">Quality Assurance & Compliance</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Rigorous quality checks and compliance verification to ensure products meet Nigerian and international standards. We protect your investment through comprehensive quality assurance protocols.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Pre-shipment inspection services</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Standards compliance verification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Product testing and certification</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Documentation and reporting</span>
                  </li>
                </ul>
                <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-[#0A1F44] rounded-xl hover:bg-[#D4AF37]/90 transition-all font-medium whitespace-nowrap">
                  <span>Ensure Quality</span>
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A1F44] to-[#1a3a5c]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Streamline Your Procurement?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Let's discuss how our services can support your business growth and operational efficiency.
          </p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-[#D4AF37] text-[#0A1F44] rounded-xl hover:bg-[#D4AF37]/90 transition-all font-medium whitespace-nowrap">
            <span>Start Your Procurement Journey</span>
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </section>

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
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors whitespace-nowrap">
              Powered by Readdy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}