import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ShieldCheck } from 'lucide-react';
import Logo from './Logo';
import { navigation } from '../data/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = navigation.mainNav;

  return (
    <>
      {/* Top Utility Bar (Subtle, international corporate touch) */}
      <header className="w-full bg-forest-dark text-white/80 text-xs py-2 px-4 sm:px-8 border-b border-forest/40 z-50 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5 text-gold-soft font-display">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              ISO 9001:2015 Certified Agrochemical Entity
            </span>
            <span className="hidden md:inline-block text-white/50">|</span>
            <span className="hidden md:inline-block text-white/70">
              Serving Indian Agriculture Since 2014
            </span>
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <a 
              href={`tel:${navigation.companyInfo.phone}`} 
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span>Customer Care: {navigation.companyInfo.phone}</span>
            </a>
            <span className="hidden sm:inline-block text-white/50">|</span>
            <a 
              href={`mailto:${navigation.companyInfo.email}`} 
              className="hidden sm:inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-gold" />
              <span>{navigation.companyInfo.email}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Sticky Navbar */}
      <nav 
        className={`sticky top-0 left-0 right-0 z-40 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-soft py-3' : 'shadow-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo completely to the left */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Links aligned towards right - Clean direct links with NO hover dropdown */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `
                  relative px-4 py-2 rounded-sm font-display text-sm font-medium transition-all duration-200
                  ${isActive ? 'text-forest font-semibold' : 'text-text-primary hover:text-forest'}
                `}
              >
                {({ isActive }) => (
                  <>
                    <span>{item.name}</span>
                    {/* Active indicator underline */}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold rounded-full" />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* Premium Contact Button */}
            <div className="ml-4 pl-4 border-l border-border/80">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center font-display text-xs uppercase tracking-wider font-semibold px-5 py-2.5 bg-forest text-white hover:bg-forest-light active:bg-forest-dark transition-all duration-200 shadow-soft hover:shadow-soft-lg hover:-translate-y-0.5 rounded-sm"
              >
                Inquire Now
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              to="/contact"
              className="font-display text-xs font-semibold px-3 py-1.5 bg-forest text-white rounded-sm"
            >
              Contact
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-forest hover:bg-bg-soft rounded-sm transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer - Direct links without dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-border px-4 pt-3 pb-6 shadow-soft-lg animate-in slide-in-from-top duration-200">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.path === '/'}
                  className={({ isActive }) => `
                    px-3 py-2.5 rounded-sm font-display text-base font-medium transition-colors
                    ${isActive ? 'bg-bg-soft text-forest font-semibold border-l-4 border-gold' : 'text-text-primary hover:bg-bg-soft'}
                  `}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-border flex flex-col gap-2.5 text-xs text-text-muted">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-forest" />
                <span>Customer Care: {navigation.companyInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-forest" />
                <span>{navigation.companyInfo.email}</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
