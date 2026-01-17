import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function AboutPage() {
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
              <Link to="/about" className="text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">About Us</Link>
              <Link to="/services" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Services</Link>
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
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="text-[#D4AF37] transition-colors text-2xl font-medium whitespace-nowrap">About Us</Link>
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors text-2xl font-medium whitespace-nowrap">Services</Link>
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
              Building Trust Through<br />
              <span className="text-[#D4AF37]">Transparency & Presence</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Elbildad Services LTD is more than a procurement platform. We are a physical, verifiable partner committed to connecting Nigerian businesses with the global marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#0A1F44] text-white text-xs font-semibold rounded-full mb-6 whitespace-nowrap">OUR STORY</span>
              <h2 className="text-4xl font-bold text-[#0A1F44] mb-6 leading-tight">
                Founded on the Principle of Real Partnerships
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Elbildad Services LTD was established to address a critical gap in Nigeria's procurement landscape: the need for a trusted, physically present partner that can facilitate large-scale international sourcing with complete transparency.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Operating from our headquarters in Kano, we serve as the bridge between Nigerian businesses and verified global suppliers. Our physical presence means clients can visit our office, meet our team, and verify our credentials before engaging in high-value transactions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We understand that trust in procurement comes from accountability, and accountability requires presence. That's why we've built our business model around being accessible, verifiable, and committed to long-term partnerships.
              </p>
            </div>
            
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20Nigerian%20business%20team%20in%20modern%20corporate%20office%2C%20diverse%20group%20of%20procurement%20specialists%20and%20executives%20in%20business%20attire%2C%20collaborative%20work%20environment%20with%20laptops%20and%20documents%2C%20contemporary%20office%20setting%20with%20natural%20lighting%20and%20professional%20atmosphere&width=600&height=700&seq=team-office-001&orientation=portrait" 
                alt="Our Team" 
                className="w-full h-[600px] object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-[#D4AF37] text-[#0A1F44] p-8 rounded-2xl shadow-xl max-w-xs">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm font-medium">Years of Combined Experience in Global Trade</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Driving Nigeria's industrial growth through world-class sourcing and procurement excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl p-12 shadow-sm">
              <div className="w-16 h-16 bg-[#0A1F44] rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-compass-3-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower Nigerian businesses, industries, and institutions with access to reliable global suppliers, enabling them to procure quality products at competitive prices while maintaining the highest standards of transparency, compliance, and customer service.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl p-12 shadow-sm">
              <div className="w-16 h-16 bg-[#D4AF37] rounded-2xl flex items-center justify-center mb-6">
                <i className="ri-eye-line text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-[#0A1F44] mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become Nigeria's most trusted procurement partner, recognized for our physical presence, global network, and unwavering commitment to facilitating large-scale transactions that drive industrial growth and economic development across the nation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-[#D4AF37] text-white text-xs font-semibold rounded-full mb-4 whitespace-nowrap">OUR VALUES</span>
            <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">What We Stand For</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our values guide every decision we make and every partnership we build
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-[#0A1F44] to-[#1a3a5c] rounded-3xl p-8 text-white">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-shield-check-line text-[#D4AF37] text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Integrity</h3>
              <p className="text-white/80 leading-relaxed">
                We operate with complete transparency, honesty, and ethical standards in all our dealings with clients and suppliers.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#c49d2f] rounded-3xl p-8 text-white">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-hand-heart-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Reliability</h3>
              <p className="text-white/90 leading-relaxed">
                Our clients depend on us for critical procurement. We deliver on our promises, every time, without exception.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#0A1F44] to-[#1a3a5c] rounded-3xl p-8 text-white">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-award-line text-[#D4AF37] text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Professionalism</h3>
              <p className="text-white/80 leading-relaxed">
                From first contact to final delivery, we maintain the highest standards of professional conduct and service excellence.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#D4AF37] to-[#c49d2f] rounded-3xl p-8 text-white">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6">
                <i className="ri-user-heart-line text-white text-3xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Accountability</h3>
              <p className="text-white/90 leading-relaxed">
                We take full responsibility for our actions and outcomes, ensuring our clients always have recourse and support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Physical Presence */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20Nigerian%20corporate%20office%20building%20in%20Kano%20with%20professional%20exterior%20architecture%2C%20contemporary%20commercial%20building%20facade%20with%20company%20signage%2C%20welcoming%20business%20headquarters%20with%20landscaping%20and%20parking%20area%2C%20professional%20daytime%20photography&width=700&height=600&seq=kano-office-001&orientation=landscape" 
                alt="Kano Office" 
                className="w-full h-[500px] object-cover rounded-3xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-[#0A1F44] rounded-full flex items-center justify-center">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Headquarters</div>
                    <div className="font-bold text-[#0A1F44]">Kano, Nigeria</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <span className="inline-block px-4 py-1.5 border-2 border-[#D4AF37] text-[#D4AF37] text-xs font-semibold rounded-full mb-6 whitespace-nowrap">PHYSICAL PRESENCE</span>
              <h2 className="text-4xl font-bold text-[#0A1F44] mb-6 leading-tight">
                Visit Us. Verify Us. Trust Us.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Unlike purely digital platforms, we maintain a physical office in Kano where clients can meet our team, review documentation, and verify our operational legitimacy before engaging in high-value procurement transactions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our office serves as a testament to our commitment to transparency and accountability. We welcome banks, corporate clients, and institutional buyers to visit us for consultations, supplier verification meetings, and contract discussions.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0A1F44]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-checkbox-circle-line text-[#0A1F44] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A1F44] mb-1">Verifiable Operations</h4>
                    <p className="text-gray-600">Complete documentation and credentials available for inspection</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0A1F44]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-checkbox-circle-line text-[#0A1F44] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A1F44] mb-1">Face-to-Face Meetings</h4>
                    <p className="text-gray-600">Build trust through personal interactions with our team</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#0A1F44]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="ri-checkbox-circle-line text-[#0A1F44] text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#0A1F44] mb-1">Local Accountability</h4>
                    <p className="text-gray-600">A physical address means real accountability and recourse</p>
                  </div>
                </div>
              </div>
              
              <Link to="/contact" className="inline-flex items-center mt-8 px-8 py-4 bg-[#0A1F44] text-white rounded-xl hover:bg-[#0A1F44]/90 transition-all font-medium whitespace-nowrap">
                <span>Schedule a Visit</span>
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-[#0A1F44] to-[#1a3a5c]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Start Your Procurement Journey?
          </h2>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Connect with our team to discuss your sourcing needs and discover how we can help your business access global suppliers with confidence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="px-8 py-4 bg-[#D4AF37] text-[#0A1F44] rounded-xl hover:bg-[#D4AF37]/90 transition-all font-medium flex items-center space-x-2 whitespace-nowrap">
              <span>Request Procurement</span>
              <i className="ri-arrow-right-line"></i>
            </Link>
            <Link to="/services" className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white hover:text-[#0A1F44] transition-all font-medium whitespace-nowrap">
              View Our Services
            </Link>
          </div>
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
            <a href="https://yusufias-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors whitespace-nowrap">
              Developed by Yusufia Dev
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}