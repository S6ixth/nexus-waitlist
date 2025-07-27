import React, { useState } from 'react';
import { 
  X,
  Mail, 
  Instagram, 
  Twitter,
  FileText,
  Shield,
  Circle,
  CheckCircle,
  Book,
  Lock
} from 'lucide-react';

// Contract Security Diagram Component
const ContractSecurityDiagram = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col items-center justify-center h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <FileText 
          className="w-24 h-24 transition-all duration-500 ease-in-out"
          style={{ 
            color: '#4A4A4A',
            transform: isHovered ? 'rotate(0deg)' : 'rotate(-3deg)'
          }}
        />
        <Shield 
          className="w-12 h-12 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out"
          style={{ 
            color: '#3B82F6',
            opacity: isHovered ? 1 : 0
          }}
        />
      </div>
      <p className="text-lg mt-3" style={{ color: '#808080' }}>Contract Security</p>
    </div>
  );
};

// Career Opportunity Diagram Component
const CareerOpportunityDiagram = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col items-center justify-center h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-64 h-48">
        {/* Athlete Node - Center */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Circle className="w-12 h-12" style={{ color: '#3B82F6', fill: '#3B82F6' }} />
        </div>

        {/* Opportunity Nodes */}
        <div className="absolute top-[8%] left-1/2 transform -translate-x-1/2">
          <Circle className="w-8 h-8" style={{ color: '#10B981', fill: '#10B981' }} />
        </div>
        <div className="absolute top-1/2 right-[6%] transform -translate-y-1/2">
          <Circle className="w-8 h-8" style={{ color: '#10B981', fill: '#10B981' }} />
        </div>
        <div className="absolute bottom-[8%] left-1/2 transform -translate-x-1/2">
          <Circle className="w-8 h-8" style={{ color: '#10B981', fill: '#10B981' }} />
        </div>

        {/* Gatekeeper Node */}
        <div className="absolute top-1/2 left-[12.5%] transform -translate-y-1/2 transition-opacity duration-500" style={{ opacity: isHovered ? 0 : 1 }}>
          <Lock className="w-8 h-8" style={{ color: '#EF4444', fill: '#EF4444' }} />
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          {/* Line to top opportunity */}
          <line 
            x1="50%" y1="50%" 
            x2="50%" y2="20%" 
            stroke="#3B82F6" 
            strokeWidth="2"
            style={{ opacity: isHovered ? 1 : 0 }}
            className="transition-opacity duration-500"
          />
          {/* Line to right opportunity */}
          <line 
            x1="50%" y1="50%" 
            x2="85%" y2="50%" 
            stroke="#3B82F6" 
            strokeWidth="2"
            style={{ opacity: isHovered ? 1 : 0 }}
            className="transition-opacity duration-500"
          />
          {/* Line to bottom opportunity */}
          <line 
            x1="50%" y1="50%" 
            x2="50%" y2="80%" 
            stroke="#3B82F6" 
            strokeWidth="2"
            style={{ opacity: isHovered ? 1 : 0 }}
            className="transition-opacity duration-500"
          />
        </svg>
      </div>
      <p className="text-lg mt-3" style={{ color: '#808080' }}>Direct Access</p>
    </div>
  );
};

// Reputation Passport Diagram Component
const ReputationPassportDiagram = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="flex flex-col items-center justify-center h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative mx-auto">
        <Book 
          className="w-24 h-32 transition-all duration-500"
          style={{ 
            color: '#4A4A4A',
            transform: isHovered ? 'scale(1.1) rotateY(15deg)' : 'scale(1) rotateY(0deg)'
          }}
        />
        {/* Checkmarks */}
        <CheckCircle 
          className={`w-5 h-5 absolute top-4 left-1/2 transform -translate-x-1/2 ${isHovered ? 'pop-animation-1' : ''}`}
          style={{ 
            color: '#10B981',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1) translateX(-50%)' : 'scale(0.8) translateX(-50%)'
          }}
        />
        <CheckCircle 
          className={`w-5 h-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${isHovered ? 'pop-animation-2' : ''}`}
          style={{ 
            color: '#10B981',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1) translateX(-50%) translateY(-50%)' : 'scale(0.8) translateX(-50%) translateY(-50%)'
          }}
        />
        <CheckCircle 
          className={`w-5 h-5 absolute bottom-4 left-1/2 transform -translate-x-1/2 ${isHovered ? 'pop-animation-3' : ''}`}
          style={{ 
            color: '#10B981',
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'scale(1) translateX(-50%)' : 'scale(0.8) translateX(-50%)'
          }}
        />
      </div>
      <p className="text-lg mt-3" style={{ color: '#808080' }}>A Reputation Passport</p>
    </div>
  );
};

function ForAthletes() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
              color: '#8BB2F1',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '16px',
              fontWeight: '700',
              textDecoration: 'none'
            }}>For Athletes</a>
            <a href="/for-recruiters" style={{
              color: '#FFFFFF',
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
          className="text-xl font-bold py-2"
          style={{ color: '#8BB2F1' }}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          For Athletes
        </a>
        <a 
          href="/for-recruiters" 
          className="text-white text-xl font-bold py-2"
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
            Your Talent. Your Terms. Your Shield.
          </h1>
          <p className="text-lg lg:text-xl mb-8" style={{ color: '#FFFFFF' }}>
            Understand how the Nexus platform provides you with contractual security and a data-backed reputation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Custom Grid Layout matching Figma design */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
            {/* Top Row - Large block spanning 3 columns + smaller block */}
            <div className="lg:col-span-3 order-2 lg:order-none group cursor-pointer">
              <div className="relative transform transition-all duration-500 hover:scale-110">
                {/* Glowing background */}
                <div className="absolute -inset-1 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" 
                     style={{ backgroundColor: '#8BB2F1' }}></div>
                
                {/* Glass container */}
                <div className="relative rounded-3xl p-1 backdrop-blur-sm border border-white/20 shadow-2xl min-h-[300px]"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(139,178,241,0.1) 0%, rgba(139,178,241,0.05) 100%)',
                       boxShadow: '0 8px 32px rgba(139,178,241,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center'
                     }}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="p-8 flex flex-col h-full items-center justify-center">
                      <div className="p-10 text-center leading-relaxed text-xl font-bold" style={{ color: '#FFFFFF' }}>
                        A digital contract that has to be upheld. Flag any breaches. Violated terms have real consequence. Streamline your athletic experience. At Nexus, athletes come first.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl p-8 shadow-2xl order-1 lg:order-none min-h-[300px]" style={{ backgroundColor: '#8BB2F1' }}>
              <ContractSecurityDiagram />
            </div>

            {/* Middle Row - Small block + large block spanning 3 columns */}
            <div className="rounded-3xl p-8 shadow-2xl order-3 lg:order-none min-h-[300px]" style={{ backgroundColor: '#8BB2F1' }}>
              <CareerOpportunityDiagram />
            </div>
            
            <div className="lg:col-span-3 order-4 lg:order-none group cursor-pointer">
              <div className="relative transform transition-all duration-500 hover:scale-110">
                {/* Glowing background */}
                <div className="absolute -inset-1 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" 
                     style={{ backgroundColor: '#8BB2F1' }}></div>
                
                {/* Glass container */}
                <div className="relative rounded-3xl p-1 backdrop-blur-sm border border-white/20 shadow-2xl min-h-[300px]"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(139,178,241,0.1) 0%, rgba(139,178,241,0.05) 100%)',
                       boxShadow: '0 8px 32px rgba(139,178,241,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center'
                     }}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="p-8 flex flex-col h-full items-center justify-center">
                      <div className="p-10 text-center leading-relaxed text-xl font-bold" style={{ color: '#FFFFFF' }}>
                        Imagine opportunity at your fingertips. Direct access to your sport's market. Technology pitching your resume while you workout. Stats updated while you sleep. New contract waiting in your inbox overnight.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row - Large block with blue border spanning 3 columns + smaller block */}
            <div className="lg:col-span-3 order-6 lg:order-none group cursor-pointer">
              <div className="relative transform transition-all duration-500 hover:scale-110">
                {/* Glowing background */}
                <div className="absolute -inset-1 rounded-3xl blur-lg opacity-30 group-hover:opacity-60 transition-all duration-500" 
                     style={{ backgroundColor: '#8BB2F1' }}></div>
                
                {/* Glass container */}
                <div className="relative rounded-3xl p-1 backdrop-blur-sm border border-white/20 shadow-2xl min-h-[300px]"
                     style={{ 
                       background: 'linear-gradient(135deg, rgba(139,178,241,0.1) 0%, rgba(139,178,241,0.05) 100%)',
                       boxShadow: '0 8px 32px rgba(139,178,241,0.3), inset 0 1px 0 rgba(255,255,255,0.2)',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center'
                     }}>
                  <div className="relative overflow-hidden rounded-2xl">
                    <div className="p-8 flex flex-col h-full items-center justify-center">
                      <div className="p-10 text-center leading-relaxed text-xl font-bold" style={{ color: '#FFFFFF' }}>
                        Document your journey. Uphold your end. A data-backed reputation. That builds trust instantly. Gain leverage in future negotiations. A history of professionalism. A secure sports career.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-3xl p-8 shadow-2xl order-5 lg:order-none min-h-[300px]" style={{ backgroundColor: '#8BB2F1' }}>
              <ReputationPassportDiagram />
            </div>
          </div>

          {/* Bottom Tagline */}
          <div className="text-center mt-16">
            <h3 className="text-3xl md:text-4xl font-bold" style={{ color: '#6B6B6B' }}>
              Nexus. By the players, for the players.
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

export default ForAthletes;