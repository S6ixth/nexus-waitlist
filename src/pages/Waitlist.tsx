import React, { useState } from 'react';
import { db } from '../lib/database';
import { 
  X,
  Mail, 
  Instagram, 
  Twitter,
  CheckCircle
} from 'lucide-react';

function Waitlist() {
  const [email, setEmail] = useState('');
  const [userType, setUserType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email && userType && !isLoading) {
      setIsLoading(true);
      
      try {
        await db.waitlist.add(email, userType);
        setIsSubmitted(true);
        setEmail('');
        setUserType('');
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Failed to join waitlist';
        alert(errorMessage);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden" style={{ backgroundColor: '#000000' }}>
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

      {/* Main Content - Centered */}
      <div className="flex-grow flex items-center justify-center px-6 py-8">
        <div className="max-w-2xl w-full text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-12" style={{ color: '#8BB2F1' }}>
            Building The Future Of Sports, Together.
          </h1>

          {/* Sign-up Form or Confirmation */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6">
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

              {/* Radio Buttons */}
              <div className="space-y-3">
                <div className="flex items-center justify-start">
                  <input
                    type="radio"
                    id="athlete"
                    name="user_type"
                    value="athlete"
                    checked={userType === 'athlete'}
                    onChange={(e) => setUserType(e.target.value)}
                    className="mr-3 w-4 h-4"
                    required
                    disabled={isLoading}
                  />
                  <label htmlFor="athlete" className="text-lg" style={{ color: '#FFFFFF' }}>
                    I am an Athlete
                  </label>
                </div>
                <div className="flex items-center justify-start">
                  <input
                    type="radio"
                    id="recruiter"
                    name="user_type"
                    value="recruiter"
                    checked={userType === 'recruiter'}
                    onChange={(e) => setUserType(e.target.value)}
                    className="mr-3 w-4 h-4"
                    required
                    disabled={isLoading}
                  />
                  <label htmlFor="recruiter" className="text-lg" style={{ color: '#FFFFFF' }}>
                    I am a Recruiter/Organizer
                  </label>
                </div>
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
            <div className="flex flex-col items-center justify-center gap-4">
              <CheckCircle className="w-16 h-16" style={{ color: '#8BB2F1' }} />
              <h3 className="text-2xl font-bold" style={{ color: '#8BB2F1' }}>
                Thank you. You're on the list.
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-8 text-center mt-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <div className="flex items-center gap-4">
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
  );
}

export default Waitlist;