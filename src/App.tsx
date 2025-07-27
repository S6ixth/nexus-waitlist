import React, { useState } from 'react';
import { db } from './lib/database';
import { 
  Zap, 
  Search, 
  User, 
  Database, 
  Briefcase, 
  Lock, 
  FileText, 
  Mail, 
  Instagram, 
  Twitter, 
  CheckCircle,
  Activity,
  X
} from 'lucide-react';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && !isLoading) {
      setIsLoading(true);
      
      try {
        await db.waitlist.add(email, 'unspecified');
        setIsSubmitted(true);
        setEmail('');
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to join waitlist';
        alert(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_rgba(169,204,227,0.1),_transparent_50%)]" style={{ zIndex: -1 }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(169,204,227,0.1),_transparent_50%)]" style={{ zIndex: -1 }}></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,_rgba(169,204,227,0.05),_transparent_50%)]" style={{ zIndex: -1 }}></div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full blur-xl animate-pulse" style={{ backgroundColor: 'rgba(169,204,227,0.1)', zIndex: -1 }}></div>
      <div className="absolute bottom-32 left-16 w-24 h-24 rounded-full blur-xl animate-pulse delay-1000" style={{ backgroundColor: 'rgba(169,204,227,0.1)', zIndex: -1 }}></div>

      {/* New Header */}
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
          className="text-white text-xl font-bold py-2"
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
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-center">
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: '#8BB2F1' }}>
                <span className="block">Direct Connections.</span>
                <span className="block">Verified Talent.</span>
                <span className="block">A New Era in Recruitment.</span>
              </h2>

              <p className="text-base sm:text-lg lg:text-xl mb-8 leading-relaxed max-w-2xl mx-auto" style={{ color: '#FFFFFF' }}>
                Tech-driven transparency for sports: verified profiles, secure communication, and 
                documented agreements for fair, accountable recruitment.
              </p>

              {/* Sign-up Form or Confirmation */}
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 mb-12">
                  {/* Email Input */}
                  <div className="relative">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 rounded-lg border-2 focus:outline-none transition-all duration-300"
                      style={{ 
                        backgroundColor: '#333333',
                        color: '#FFFFFF',
                        borderColor: '#A9CCE3'
                      }}
                      required
                      disabled={isLoading}
                    />
                    <Mail className="absolute right-3 top-3 w-5 h-5" style={{ color: 'rgba(255,255,255,0.6)' }} />
                  </div>


                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full px-8 py-4 font-bold text-lg rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    style={{ 
                      backgroundColor: '#8BB2F1',
                      color: '#203657'
                    }}
                  >
                    {isLoading ? 'Joining...' : 'Join Waitlist'}
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center gap-4 mb-12">
                  <CheckCircle className="w-16 h-16" style={{ color: '#8BB2F1' }} />
                  <h3 className="text-2xl font-bold" style={{ color: '#8BB2F1' }}>
                    Thank you. You're on the list.
                  </h3>
                </div>
              )}
            </div>

            {/* Right Column - Enhanced Interactive Workflow Diagram */}
            <div className="relative flex justify-center hidden lg:block">
              <div className="relative w-full max-w-lg">
                {/* Search Bar at Top */}
                <div className="flex justify-center mb-12">
                  <div className="relative group cursor-pointer">
                    <div className="rounded-3xl px-8 py-4 flex items-center gap-4 shadow-2xl transform hover:scale-105 transition-all duration-300" 
                         style={{ backgroundColor: '#8BB2F1' }}>
                      <span className="text-xl font-semibold" style={{ color: '#203657' }}>Opportunities...</span>
                      <Search className="w-6 h-6" style={{ color: '#203657' }} />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute -inset-1 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-300" 
                         style={{ backgroundColor: '#8BB2F1' }}></div>
                  </div>
                </div>

                {/* Main Row - Athlete, Database, Recruiter */}
                <div className="flex justify-between items-center mb-12 relative px-4">
                  {/* Athlete Card */}
                  <div className="relative group cursor-pointer">
                    <div className="rounded-3xl p-8 shadow-2xl transform hover:scale-110 transition-all duration-300 hover:rotate-3" 
                         style={{ backgroundColor: '#8BB2F1' }}>
                      <div className="w-16 h-16 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full" style={{ backgroundColor: 'rgba(32,54,87,0.1)' }}></div>
                        <User className="w-10 h-10 relative z-10" style={{ color: '#203657' }} />
                        <Activity className="w-4 h-4 absolute -top-1 -right-1" style={{ color: '#203657' }} />
                      </div>
                    </div>
                    <div className="absolute -inset-2 rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300" 
                         style={{ backgroundColor: '#8BB2F1' }}></div>
                    {/* Label */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="text-sm font-medium px-3 py-1 rounded-full" 
                            style={{ backgroundColor: 'rgba(139,178,241,0.2)', color: '#8BB2F1' }}>
                        Athlete
                      </span>
                    </div>
                  </div>

                  {/* Database Card */}
                  <div className="relative group cursor-pointer">
                    <div className="rounded-3xl p-8 shadow-2xl transform hover:scale-110 transition-all duration-300" 
                         style={{ backgroundColor: '#8BB2F1' }}>
                      <div className="w-16 h-16 flex items-center justify-center relative">
                        <Database className="w-10 h-10" style={{ color: '#203657' }} />
                        {/* Data flow animation dots */}
                        <div className="absolute top-2 right-2 w-2 h-2 rounded-full animate-ping" 
                             style={{ backgroundColor: '#203657' }}></div>
                        <div className="absolute bottom-2 left-2 w-2 h-2 rounded-full animate-ping" 
                             style={{ backgroundColor: '#203657', animationDelay: '0.5s' }}></div>
                      </div>
                    </div>
                    <div className="absolute -inset-2 rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300" 
                         style={{ backgroundColor: '#8BB2F1' }}></div>
                    {/* Label */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="text-sm font-medium px-3 py-1 rounded-full" 
                            style={{ backgroundColor: 'rgba(139,178,241,0.2)', color: '#8BB2F1' }}>
                        Database
                      </span>
                    </div>
                  </div>

                  {/* Recruiter Card */}
                  <div className="relative group cursor-pointer">
                    <div className="rounded-3xl p-8 shadow-2xl transform hover:scale-110 transition-all duration-300 hover:-rotate-3" 
                         style={{ backgroundColor: '#8BB2F1' }}>
                      <div className="w-16 h-16 flex items-center justify-center relative">
                        <div className="absolute inset-0 rounded-full" style={{ backgroundColor: 'rgba(32,54,87,0.1)' }}></div>
                        <User className="w-10 h-10 relative z-10" style={{ color: '#203657' }} />
                        <Briefcase className="w-4 h-4 absolute -bottom-1 -right-1" style={{ color: '#203657' }} />
                      </div>
                    </div>
                    <div className="absolute -inset-2 rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300" 
                         style={{ backgroundColor: '#8BB2F1' }}></div>
                    {/* Label */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="text-sm font-medium px-3 py-1 rounded-full" 
                            style={{ backgroundColor: 'rgba(139,178,241,0.2)', color: '#8BB2F1' }}>
                        Recruiter
                      </span>
                    </div>
                  </div>
                </div>

                {/* Secure Contracts at Bottom */}
                <div className="flex justify-center mt-20">
                  <div className="relative group cursor-pointer">
                    <div className="rounded-3xl p-8 shadow-2xl transform hover:scale-110 transition-all duration-300" 
                         style={{ backgroundColor: '#8BB2F1' }}>
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <Lock className="w-8 h-8" style={{ color: '#203657' }} />
                          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full animate-pulse" 
                               style={{ backgroundColor: '#203657' }}></div>
                        </div>
                        <FileText className="w-8 h-8" style={{ color: '#203657' }} />
                      </div>
                    </div>
                    <div className="absolute -inset-2 rounded-3xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300" 
                         style={{ backgroundColor: '#8BB2F1' }}></div>
                    {/* Label */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="text-sm font-medium px-3 py-1 rounded-full" 
                            style={{ backgroundColor: 'rgba(139,178,241,0.2)', color: '#8BB2F1' }}>
                        Secure Contracts
                      </span>
                    </div>
                  </div>
                </div>

                {/* Enhanced Interactive Connecting Lines with Security Indicators */}
                <div className="absolute inset-0 pointer-events-none">
                </div>
              </div>
            </div>
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

export default App;