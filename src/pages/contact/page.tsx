import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ContactPage() {
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
              <Link to="/services" className="text-white hover:text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Services</Link>
              <Link to="/contact" className="text-[#D4AF37] transition-colors text-sm font-medium whitespace-nowrap">Contact</Link>
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
            <Link to="/services" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#D4AF37] transition-colors text-2xl font-medium whitespace-nowrap">Services</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-[#D4AF37] transition-colors text-2xl font-medium whitespace-nowrap">Contact</Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3 border-2 border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#0A1F44] transition-all text-lg font-medium whitespace-nowrap">Request Procurement</Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-[#0A1F44] to-[#1a3a5c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let's Discuss Your<br />
              <span className="text-[#D4AF37]">Procurement Needs</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Visit our office in Kano or reach out to our team. We're here to help you access global suppliers with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#0A1F44] mb-8">Get in Touch</h2>
              
              <div className="space-y-8 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0A1F44] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-map-pin-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1F44] mb-2">Office Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Elbildad Services LTD<br />
                      Kano, Nigeria
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-phone-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1F44] mb-2">Phone</h3>
                    <p className="text-gray-600">+234 XXX XXX XXXX</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#0A1F44] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-mail-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1F44] mb-2">Email</h3>
                    <p className="text-gray-600">info@elbildad.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className="ri-time-line text-white text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0A1F44] mb-2">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F8F9FA] rounded-2xl p-8">
                <h3 className="text-xl font-bold text-[#0A1F44] mb-4">Why Visit Our Office?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Verify our physical presence and credentials</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Meet our team face-to-face</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Discuss large-scale procurement in person</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <i className="ri-checkbox-circle-fill text-[#D4AF37] text-xl flex-shrink-0 mt-1"></i>
                    <span className="text-gray-600">Review supplier portfolios and case studies</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Contact Form Placeholder */}
            <div>
              <div className="bg-[#F8F9FA] rounded-3xl p-8 lg:p-12">
                <h2 className="text-2xl font-bold text-[#0A1F44] mb-6">Send Us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">Email Address *</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-sm"
                      placeholder="your.email@company.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-sm"
                      placeholder="+234 XXX XXX XXXX"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">Company Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-sm"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">Service Interest</label>
                    <select className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-sm">
                      <option>Select a service</option>
                      <option>Global Procurement & Sourcing</option>
                      <option>Industrial & Commercial Supplies</option>
                      <option>Vendor Due Diligence</option>
                      <option>Import Coordination & Logistics</option>
                      <option>Contract & Bulk Procurement</option>
                      <option>Quality Assurance</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-[#0A1F44] mb-2">Message *</label>
                    <textarea 
                      rows={5}
                      className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#D4AF37] text-sm resize-none"
                      placeholder="Tell us about your procurement needs..."
                    ></textarea>
                  </div>
                  
                  <button className="w-full px-8 py-4 bg-[#0A1F44] text-white rounded-xl hover:bg-[#0A1F44]/90 transition-all font-medium flex items-center justify-center space-x-2 whitespace-nowrap">
                    <span>Send Message</span>
                    <i className="ri-send-plane-line"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#0A1F44] mb-4">Find Us in Kano</h2>
            <p className="text-lg text-gray-600">Visit our physical office for consultations and verification</p>
          </div>
          
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125423.89634653!2d8.4920!3d12.0022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae81a3dddc5b8d%3A0x3e5d7d7e3e5d7d7e!2sKano%2C%20Nigeria!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
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
            <a href="https://readdy.ai/?ref=logo" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#D4AF37] text-sm transition-colors whitespace-nowrap">
              Powered by Readdy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}