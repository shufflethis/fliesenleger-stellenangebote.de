import React, { useState, useEffect } from 'react';
import { Menu, X, Hammer, UserCircle } from 'lucide-react';

interface NavbarProps {
  onNavClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div 
          className={`flex items-center gap-2 font-bold text-2xl cursor-pointer ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => onNavClick('home')}
        >
          <Hammer className={isScrolled ? 'text-brand-600' : 'text-brand-400'} />
          <span>FliesenJobs.de</span>
        </div>

        {/* Desktop Nav */}
        <div className={`hidden md:flex items-center gap-8 font-medium ${isScrolled ? 'text-slate-700' : 'text-slate-100'}`}>
          <button onClick={() => onNavClick('jobs')} className="hover:text-brand-500 transition-colors">Stellenangebote</button>
          <button onClick={() => onNavClick('employers')} className="hover:text-brand-500 transition-colors">Für Arbeitgeber</button>
          <button onClick={() => onNavClick('advice')} className="hover:text-brand-500 transition-colors">Ratgeber</button>
          <button className={`px-5 py-2 rounded-full transition-colors ${
            isScrolled 
              ? 'bg-brand-600 text-white hover:bg-brand-700' 
              : 'bg-white text-brand-900 hover:bg-brand-50'
          }`}>
            Login
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl py-6 px-4 flex flex-col gap-4 border-t border-slate-100 md:hidden">
           <button onClick={() => { onNavClick('jobs'); setMobileMenuOpen(false); }} className="text-left text-slate-800 font-medium py-2">Stellenangebote</button>
           <button onClick={() => { onNavClick('employers'); setMobileMenuOpen(false); }} className="text-left text-slate-800 font-medium py-2">Für Arbeitgeber</button>
           <button onClick={() => { onNavClick('advice'); setMobileMenuOpen(false); }} className="text-left text-slate-800 font-medium py-2">Ratgeber</button>
           <button className="bg-brand-600 text-white py-3 rounded-lg font-bold">Login / Registrieren</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;