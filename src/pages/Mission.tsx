import React, { useState } from 'react';
import { 
  X,
  Mail, 
  Instagram, 
  Twitter
} from 'lucide-react';

function Mission() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(139,178,241,0.1),_transparent_50%)]" style={{ zIndex: -1 }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(139,178,241,0.1),_transparent_50%)]" style={{ zIndex: -1 }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(139,178,241,0.05),_transparent_50%)]" style={{ zIndex: -1 }}></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full blur-xl animate-pulse" style={{ backgroundColor: 'rgba(139,178,241,0.1)', zIndex: -1 }}></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full blur-xl animate-pulse delay-1000" style={{ backgroundColor: 'rgba(139,178,241,0.1)', zIndex: -1 }}></div>
      <div className="absolute top-1/2 left-10 w-20 h-20 rounded-full blur-xl animate-pulse delay-500" style={{ backgroundColor: 'rgba(139,178,241,0.08)', zIndex: -1 }}></div>
      <div className="absolute bottom-20 right-32 w-28 h-28 rounded-full blur-xl animate-pulse delay-2000" style={{ backgroundColor: 'rgba(139,178,241,0.08)', zIndex: -1 }}></div>

      {/* Header */}
      <header style={{
        width: '100vw',
        height: '90px',
        backgroundColor: '#000000',
        padding: '0 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
        zIndex: 20
      }}>
        {/* Left Navigation Group */}
        <div className="hidden md:flex">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '25px'
          }}>
            <a href="/for-athletes" style={{
              color: '#FFFFFF',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }} className="hover:opacity-80">For Athletes</a>
            <a href="/for-recruiters" style={{
              color: '#FFFFFF',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'color 0.3s ease'
            }} className="hover:opacity-80">For Recruiters</a>
          </div>
        </div>

        {/* Centered Logo */}
        <a href="/" className="transform hover:scale-105 transition-transform duration-300">
          <img 
            src="/tinywow_AI.GENT-2-removebg-preview_82402777.png" 
            alt="NEXUS Logo"
            style={{
              maxHeight: '80px',
              width: 'auto'
            }}
          />
        </a>

        {/* Right Navigation Group */}
        <div className="hidden md:flex">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '25px'
          }}>
            <a href="/mission" style={{
              color: '#8BB2F1',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none'
            }}>Our Mission</a>
            <a href="/waitlist" style={{
              backgroundColor: '#FFBF00',
              color: '#000000',
              padding: '10px 22px',
              borderRadius: '5px',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }} className="hover:scale-105 hover:shadow-lg">Join Waitlist</a>
          </div>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button 
          className="md:hidden p-2 hover:opacity-80 transition-opacity duration-300"
          style={{
            position: 'relative',
            zIndex: 10
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="block w-6 h-1 bg-white my-1 transition-all duration-300"></span>
          <span className="block w-6 h-1 bg-white my-1 transition-all duration-300"></span>
          <span className="block w-6 h-1 bg-white my-1 transition-all duration-300"></span>
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed top-0 right-0 h-screen w-64 bg-black z-50 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-white hover:opacity-80 transition-opacity duration-300"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Mobile Navigation Links */}
        <a 
          href="/for-athletes" 
          className="text-white text-xl font-bold py-2 hover:opacity-80 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          For Athletes
        </a>
        <a 
          href="/for-recruiters" 
          className="text-white text-xl font-bold py-2 hover:opacity-80 transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          For Recruiters
        </a>
        <a 
          href="/mission" 
          className="text-xl font-bold py-2"
          style={{ color: '#8BB2F1' }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Our Mission
        </a>
        <a
          href="/waitlist"
          onClick={() => setIsMobileMenuOpen(false)}
          style={{
            backgroundColor: '#FFBF00',
            color: '#000000',
            padding: '10px 22px',
            borderRadius: '5px',
            fontFamily: 'Roboto, sans-serif',
            fontSize: '16px',
            fontWeight: '700',
            textDecoration: 'none'
          }}
          className="hover:scale-105 transition-transform duration-300"
        >
          Join Waitlist
        </a>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" style={{ 
              color: '#8BB2F1',
              fontFamily: 'Roboto, sans-serif'
            }}>
              Our Mission
            </h1>
          </div>

          {/* Mission Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
            {/* Card 1 */}
            <div className="group cursor-pointer">
              <div className="relative transform transition-all duration-500 hover:scale-110">
                {/* Glowing background */}
                <div className="absolute -inset-1 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" 
                     style={{ backgroundColor: '#8BB2F1' }}></div>
                
                {/* Glass container */}
                <div className="relative rounded-3xl p-1 backdrop-blur-sm border border-white/20 shadow-2xl"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(139,178,241,0.1) 0%, rgba(139,178,241,0.05) 100%)',
                       boxShadow: '0 8px 32px rgba(139,178,241,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                     }}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="p-6 flex flex-col h-full justify-between min-h-[500px]">
                      <h3 className="text-white text-xl font-bold mb-6 text-center underline">A Broken System</h3>
                      <div className="flex-grow space-y-4">
                        <p className="text-white text-base leading-relaxed text-left">Teams and recruiters change contracts or withhold pay without consequence, leaving athletes stuck.</p>
                        <p className="text-white text-base leading-relaxed text-left">Verbal agreements and ineffective agents cause major issues, leaving athletes stuck.</p>
                        <p className="text-white text-base leading-relaxed text-left">Talented, underrepresented players are invisible in other markets. Athletes are reliant on a limited personal network or an agent who may not have the necessary connections, capping their career potential.</p>
                      </div>
                      <p className="text-white text-lg font-bold text-center mt-6">Solution?</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group cursor-pointer">
              <div className="relative transform transition-all duration-500 hover:scale-110">
                {/* Glowing background */}
                <div className="absolute -inset-1 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" 
                     style={{ backgroundColor: '#8BB2F1' }}></div>
                
                {/* Glass container */}
                <div className="relative rounded-3xl p-1 backdrop-blur-sm border border-white/20 shadow-2xl"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(139,178,241,0.1) 0%, rgba(139,178,241,0.05) 100%)',
                       boxShadow: '0 8px 32px rgba(139,178,241,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                     }}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="p-6 flex flex-col h-full justify-between min-h-[500px]">
                      <h3 className="text-white text-xl font-bold mb-6 text-center underline">The Nexus Way</h3>
                      <div className="flex-grow space-y-4">
                        <p className="text-white text-base leading-relaxed text-left"><strong>Security:</strong></p>
                        <p className="text-white text-base leading-relaxed text-left">Nexus stores your agreement with a timestamped, unchangeable digital contract.</p>
                        <p className="text-white text-base leading-relaxed text-left"><strong>Opportunity Engine:</strong></p>
                        <p className="text-white text-base leading-relaxed text-left">AI-Driven matchmaking to pair verified teams with verified athletes.</p>
                        <p className="text-white text-base leading-relaxed text-left"><strong>Transparency:</strong></p>
                        <p className="text-white text-base leading-relaxed text-left">Publicly flag any contract breach, tying it directly to an organisations reputation.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group cursor-pointer">
              <div className="relative transform transition-all duration-500 hover:scale-110">
                {/* Glowing background */}
                <div className="absolute -inset-1 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" 
                     style={{ backgroundColor: '#8BB2F1' }}></div>
                
                {/* Glass container */}
                <div className="relative rounded-3xl p-1 backdrop-blur-sm border border-white/20 shadow-2xl"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(139,178,241,0.1) 0%, rgba(139,178,241,0.05) 100%)',
                       boxShadow: '0 8px 32px rgba(139,178,241,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                     }}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="p-6 flex flex-col h-full justify-between min-h-[500px]">
                      <h3 className="text-white text-xl font-bold mb-6 text-center underline">Phase I: Beta</h3>
                      <div className="flex-grow space-y-4">
                        <p className="text-white text-base leading-relaxed text-left"><em>Asia. Wild Ball. High Volume.</em></p>
                        <p className="text-white text-base leading-relaxed text-left">We are testing our core security and transparency features in Asia's high-volume professional basketball circuits.</p>
                        <div className="space-y-2">
                          <div className="flex items-start">
                            <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0 mt-2" style={{ backgroundColor: '#FFFFFF' }}></div>
                            <p className="text-white text-base leading-relaxed">Join and verify profile.</p>
                          </div>
                          <div className="flex items-start">
                            <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0 mt-2" style={{ backgroundColor: '#FFFFFF' }}></div>
                            <p className="text-white text-base leading-relaxed">Direct and simple game agreements.</p>
                          </div>
                          <div className="flex items-start">
                            <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0 mt-2" style={{ backgroundColor: '#FFFFFF' }}></div>
                            <p className="text-white text-base leading-relaxed">Accept or decline mechanism.</p>
                          </div>
                          <div className="flex items-start">
                            <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0 mt-2" style={{ backgroundColor: '#FFFFFF' }}></div>
                            <p className="text-white text-base leading-relaxed">Post game confirmation of upheld agreement.</p>
                          </div>
                          <div className="flex items-start">
                            <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0 mt-2" style={{ backgroundColor: '#FFFFFF' }}></div>
                            <p className="text-white text-base leading-relaxed">User reputation score adjusted accordingly.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group cursor-pointer">
              <div className="relative transform transition-all duration-500 hover:scale-110">
                {/* Glowing background */}
                <div className="absolute -inset-1 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" 
                     style={{ backgroundColor: '#8BB2F1' }}></div>
                
                {/* Glass container */}
                <div className="relative rounded-3xl p-1 backdrop-blur-sm border border-white/20 shadow-2xl"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(139,178,241,0.1) 0%, rgba(139,178,241,0.05) 100%)',
                       boxShadow: '0 8px 32px rgba(139,178,241,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                     }}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="p-6 flex flex-col h-full justify-between min-h-[500px]">
                      <h3 className="text-white text-xl font-bold mb-6 text-center underline">Phase II & III: The Future Of Sports</h3>
                      <div className="flex-grow space-y-4">
                        <p className="text-white text-base leading-relaxed text-left"><em>We aim to build a global, transparent marketplace for athletic talent, as athletes should have the tools to build a secure and successful career.</em></p>
                        <p className="text-white text-base leading-relaxed text-left"><strong>PII</strong></p>
                        <p className="text-white text-base leading-relaxed text-left">To launch full platform with AI-powered matchmaking system, smart contracts, and transparent marketplace for athletic talent.</p>
                        <p className="text-white text-base leading-relaxed text-left"><strong>PIII</strong></p>
                        <p className="text-white text-base leading-relaxed text-left">Ecosystem expansion to new sports and leagues. College, high school etc.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-lg md:text-xl leading-relaxed" style={{ 
              color: '#FFFFFF',
              fontFamily: 'Roboto, sans-serif'
            }}>
              At NEXUS, we're revolutionizing sports recruitment through technology-driven transparency. 
              Our platform creates direct connections between verified athletes and recruiters, ensuring 
              fair, accountable, and secure recruitment processes that benefit everyone in the sports ecosystem.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mx-auto">
              <a href="https://www.instagram.com/nexusaihq/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-300 transform hover:scale-110" 
                 style={{ backgroundColor: 'rgba(139,178,241,0.2)' }}>
                <Instagram className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              </a>
              <a href="https://x.com/nexusaihq" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-300 transform hover:scale-110" 
                 style={{ backgroundColor: 'rgba(139,178,241,0.2)' }}>
                <Twitter className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              </a>
              <a href="mailto:team@athletesnexus.site" 
                 className="w-12 h-12 rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-300 transform hover:scale-110" 
                 style={{ backgroundColor: 'rgba(139,178,241,0.2)' }}>
                <Mail className="w-6 h-6" style={{ color: '#FFFFFF' }} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Mission;