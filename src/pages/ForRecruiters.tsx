import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  X,
  Mail, 
  Instagram, 
  Twitter
} from 'lucide-react';

function ForRecruiters() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(169,204,227,0.1),_transparent_50%)]" style={{ zIndex: -1 }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(169,204,227,0.1),_transparent_50%)]" style={{ zIndex: -1 }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(169,204,227,0.05),_transparent_50%)]" style={{ zIndex: -1 }}></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full blur-xl animate-pulse" style={{ backgroundColor: 'rgba(169,204,227,0.1)', zIndex: -1 }}></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full blur-xl animate-pulse delay-1000" style={{ backgroundColor: 'rgba(169,204,227,0.1)', zIndex: -1 }}></div>

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
              textDecoration: 'none'
            }}>For Athletes</a>
            <a href="/for-recruiters" style={{
              color: '#8BB2F1',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none'
            }}>For Recruiters</a>
          </div>
        </div>

        {/* Centered Logo */}
        <a href="/">
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
              color: '#FFFFFF',
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
              textDecoration: 'none'
            }}>Join Waitlist</a>
          </div>
        </div>

        {/* Hamburger Menu Button - Mobile Only */}
        <button 
          className="md:hidden p-2"
          style={{
            position: 'relative',
            zIndex: 10
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span className="block w-6 h-1 bg-white my-1"></span>
          <span className="block w-6 h-1 bg-white my-1"></span>
          <span className="block w-6 h-1 bg-white my-1"></span>
        </button>
      </header>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed top-0 right-0 h-screen w-64 bg-black z-50 transition-transform duration-300 ease-in-out flex flex-col items-center justify-center gap-8 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Close Button */}
        <button 
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute top-4 right-4 text-white"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Mobile Navigation Links */}
        <a 
          href="/for-athletes" 
          className="text-white text-xl font-bold py-2"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          For Athletes
        </a>
        <a 
          href="/for-recruiters" 
          className="text-xl font-bold py-2"
          style={{ color: '#8BB2F1' }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          For Recruiters
        </a>
        <a 
          href="/mission" 
          className="text-white text-xl font-bold py-2"
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
        >
          Join Waitlist
        </a>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center py-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#8BB2F1' }}>
            Verified Talent. Secured Agreements. Zero Friction.
          </h1>
          <p className="text-lg lg:text-xl mb-8" style={{ color: '#FFFFFF' }}>
            Discover how Nexus delivers reliable talent and eliminates payment disputes, saving you time and resources.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 items-stretch" style={{ gridAutoRows: '1fr' }}>
            {/* Top Left - Recruit With Certainty */}
            <div className="group cursor-pointer">
              <div className="relative transform transition-all duration-500 hover:scale-110 h-full">
                {/* Glowing background */}
                <div className="absolute -inset-1 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" 
                     style={{ backgroundColor: '#8BB2F1' }}></div>
                
                {/* Glass container */}
                <div className="relative rounded-3xl p-1 backdrop-blur-sm border border-white/20 shadow-2xl h-full"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(139,178,241,0.1) 0%, rgba(139,178,241,0.05) 100%)',
                       boxShadow: '0 8px 32px rgba(139,178,241,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                     }}>
                  <div className="relative overflow-hidden rounded-2xl h-full">
                    <div className="p-10 flex flex-col justify-start h-full">
                      <h2 className="text-2xl font-bold mb-5 underline" style={{ color: '#FFFFFF' }}>
                        Recruit With Certainty.
                      </h2>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}></div>
                          <p className="text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                            Access a market of talent you can trust.
                          </p>
                        </div>
                        <div className="flex items-center ml-6">
                          <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}></div>
                          <p className="text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                            Reduce the risk of signing unreliable athletes.
                          </p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}></div>
                          <p className="text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                            All athletes have a data-backed reputation score, revealing their professionalism.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Right - Find The Right Athlete, Faster */}
            <div className="group cursor-pointer">
              <div className="relative transform transition-all duration-500 hover:scale-110 h-full">
                {/* Glowing background */}
                <div className="absolute -inset-1 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" 
                     style={{ backgroundColor: '#8BB2F1' }}></div>
                
                {/* Glass container */}
                <div className="relative rounded-3xl p-1 backdrop-blur-sm border border-white/20 shadow-2xl h-full"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(139,178,241,0.1) 0%, rgba(139,178,241,0.05) 100%)',
                       boxShadow: '0 8px 32px rgba(139,178,241,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                     }}>
                  <div className="relative overflow-hidden rounded-2xl h-full">
                    <div className="p-10 flex flex-col justify-start h-full">
                      <h2 className="text-2xl font-bold mb-5 underline" style={{ color: '#FFFFFF' }}>
                        Find The Right Athlete, Faster.
                      </h2>
                      <div className="space-y-4">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}></div>
                          <p className="text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                            Our tech analyses your needs, and reveals the right fit for you.
                          </p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}></div>
                          <p className="text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                            Advanced filters to search by position, stats, contract history, reputation.
                          </p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}></div>
                          <p className="text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                            Message athletes directly, streamlining the process.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Left - Make Operations Simple */}
            <div className="group cursor-pointer">
              <div className="relative transform transition-all duration-500 hover:scale-110 h-full">
                {/* Glowing background */}
                <div className="absolute -inset-1 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" 
                     style={{ backgroundColor: '#8BB2F1' }}></div>
                
                {/* Glass container */}
                <div className="relative rounded-3xl p-1 backdrop-blur-sm border border-white/20 shadow-2xl h-full"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(139,178,241,0.1) 0%, rgba(139,178,241,0.05) 100%)',
                       boxShadow: '0 8px 32px rgba(139,178,241,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                     }}>
                  <div className="relative overflow-hidden rounded-2xl h-full">
                    <div className="p-10 flex flex-col justify-start h-full">
                      <h2 className="text-2xl font-bold mb-5 underline" style={{ color: '#FFFFFF' }}>
                        Make Operations Simple.
                      </h2>
                      <div className="space-y-4 flex-grow">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}></div>
                          <p className="text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                            Transparent contracts to ensure all terms are clear and honoured.
                          </p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}></div>
                          <p className="text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                            Reduce operational stress, contract disputes and payment disagreements.
                          </p>
                        </div>
                      </div>
                      
                      {/* Invisible placeholder to match button space */}
                      <div className="mt-8 flex justify-center invisible">
                        <button className="px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto min-w-[200px]" 
                                style={{ backgroundColor: '#FFBF00', color: '#000000' }}>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Right - Transparent Pricing, Easy Access */}
            <div className="group cursor-pointer">
              <div className="relative transform transition-all duration-500 hover:scale-110 h-full">
                {/* Glowing background */}
                <div className="absolute -inset-1 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" 
                     style={{ backgroundColor: '#8BB2F1' }}></div>
                
                {/* Glass container */}
                <div className="relative rounded-3xl p-1 backdrop-blur-sm border border-white/20 shadow-2xl h-full"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(139,178,241,0.1) 0%, rgba(139,178,241,0.05) 100%)',
                       boxShadow: '0 8px 32px rgba(139,178,241,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                     }}>
                  <div className="relative overflow-hidden rounded-2xl h-full">
                    <div className="p-10 flex flex-col justify-start h-full">
                      <h2 className="text-2xl font-bold mb-5 underline" style={{ color: '#FFFFFF' }}>
                        Transparent Pricing, Easy Access.
                      </h2>
                      <div className="space-y-4 flex-grow">
                        <div className="flex items-center">
                          <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}></div>
                          <p className="text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                            Everything, right at your fingertips.
                          </p>
                        </div>
                        <div className="flex items-center">
                          <div className="w-2 h-2 rotate-45 mr-4 flex-shrink-0" style={{ backgroundColor: '#FFFFFF' }}></div>
                          <p className="text-base leading-relaxed" style={{ color: '#FFFFFF' }}>
                            No hidden fees. Just a straightforward subscription. Unlimited access.
                          </p>
                        </div>
                      </div>
                      
                      {/* Start Now Button - Responsive */}
                      <div className="mt-8 flex justify-center">
                        <button className="px-8 py-4 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl w-full sm:w-auto min-w-[200px]" 
                                style={{ backgroundColor: '#FFBF00', color: '#000000' }}
                                onClick={() => navigate('/waitlist')}>
                          Start Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="text-center mt-16">
            <h3 className="text-3xl md:text-4xl font-bold" style={{ color: '#6B6B6B' }}>
              Nexus. The Trusted Marketplace for Athletic Talent.
            </h3>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mx-auto">
              <a href="https://www.instagram.com/nexusaihq/" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-300 transform hover:scale-110" 
                 style={{ backgroundColor: 'rgba(139,178,241,0.2)' }}>
                <Instagram className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              </a>
              <a href="https://x.com/nexusaihq" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-300 transform hover:scale-110" 
                 style={{ backgroundColor: 'rgba(139,178,241,0.2)' }}>
                <Twitter className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              </a>
              <a href="mailto:team@athletesnexus.site" className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-all duration-300 transform hover:scale-110" 
                 style={{ backgroundColor: 'rgba(139,178,241,0.2)' }}>
                <Mail className="w-5 h-5" style={{ color: '#FFFFFF' }} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default ForRecruiters;