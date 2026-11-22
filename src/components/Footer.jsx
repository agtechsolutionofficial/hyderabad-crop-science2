import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, Mail, MapPin, Clock, ShieldCheck, 
  ArrowUpRight, Award, ChevronRight, Facebook, Twitter, Youtube, Linkedin
} from 'lucide-react';
import Logo from './Logo';
import { navigation } from '../data/navigation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const info = navigation.companyInfo;

  return (
    <footer className="bg-white text-text-primary pt-16 pb-8 border-t border-border relative overflow-hidden">
      {/* Subtle background luxury pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#174D32_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Tier: Company Info, Badges & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-border">
          {/* Column 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-block">
              <Logo variant="light" />
            </div>

            <p className="text-sm text-text-muted font-sans leading-relaxed pt-2">
              Hyderabad Crop Science Pvt. Ltd. is an ISO 9001:2015 certified agrochemical manufacturer dedicated to the Indian farming community since 2014, delivering world-class crop protection, nutrition, and agricultural bio-solutions.
            </p>

            {/* Certifications Badge */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-bg-soft text-forest-dark border border-border text-xs font-display">
                <ShieldCheck className="w-4 h-4 text-gold flex-shrink-0" />
                <span className="font-semibold">{info.iso}</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-sm bg-bg-soft text-text-muted border border-border text-xs font-display">
                <Award className="w-4 h-4 text-forest flex-shrink-0" />
                <span>Govt. Reg. 2014</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-3">
              <a 
                href={info.socialLinks.facebook} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-sm bg-bg-soft hover:bg-forest hover:text-white text-forest border border-border flex items-center justify-center transition-all duration-200 shadow-soft-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href={info.socialLinks.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-sm bg-bg-soft hover:bg-forest hover:text-white text-forest border border-border flex items-center justify-center transition-all duration-200 shadow-soft-sm"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href={info.socialLinks.youtube} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-sm bg-bg-soft hover:bg-forest hover:text-white text-forest border border-border flex items-center justify-center transition-all duration-200 shadow-soft-sm"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href={info.socialLinks.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-9 h-9 rounded-sm bg-bg-soft hover:bg-forest hover:text-white text-forest border border-border flex items-center justify-center transition-all duration-200 shadow-soft-sm"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-display uppercase tracking-widest font-bold text-forest">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm text-text-muted font-sans">
              <li>
                <Link to="/" className="hover:text-forest transition-colors inline-flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-forest transition-colors inline-flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-forest transition-colors inline-flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>Products</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-forest transition-colors inline-flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-forest transition-colors inline-flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-gold" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Portfolio (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-display uppercase tracking-widest font-bold text-forest">
              Product Portfolio
            </h3>
            <ul className="space-y-2.5 text-sm text-text-muted font-sans">
              <li>
                <Link to="/products?category=insecticides" className="hover:text-forest transition-colors inline-flex items-center justify-between w-full">
                  <span>Insecticides Formulations</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted/60" />
                </Link>
              </li>
              <li>
                <Link to="/products?category=fungicides" className="hover:text-forest transition-colors inline-flex items-center justify-between w-full">
                  <span>Fungicides & Disease Cure</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted/60" />
                </Link>
              </li>
              <li>
                <Link to="/products?category=herbicides" className="hover:text-forest transition-colors inline-flex items-center justify-between w-full">
                  <span>Herbicides & Weedicides</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted/60" />
                </Link>
              </li>
              <li>
                <Link to="/products?category=pgr" className="hover:text-forest transition-colors inline-flex items-center justify-between w-full">
                  <span>Plant Growth Regulators</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted/60" />
                </Link>
              </li>
              <li>
                <Link to="/products?category=fertilizers" className="hover:text-forest transition-colors inline-flex items-center justify-between w-full">
                  <span>Fertilizers & Soil Health</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted/60" />
                </Link>
              </li>
              <li>
                <Link to="/products?category=organic" className="hover:text-forest transition-colors inline-flex items-center justify-between w-full">
                  <span>Certified Organic Solutions</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-text-muted/60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-display uppercase tracking-widest font-bold text-forest">
              Corporate Office
            </h3>
            <div className="space-y-3 text-sm text-text-muted font-sans">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-forest flex-shrink-0 mt-0.5" />
                <span className="leading-snug text-text-primary">
                  {info.address.line1}, {info.address.line2}, {info.address.city}, {info.address.state} - {info.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-forest flex-shrink-0" />
                <a href={`tel:${info.phone}`} className="hover:text-forest text-text-primary font-medium transition-colors">
                  {info.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-forest flex-shrink-0" />
                <a href={`mailto:${info.email}`} className="hover:text-forest text-text-primary transition-colors break-all">
                  {info.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-forest flex-shrink-0" />
                <span>{info.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal, CIN, & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted font-sans">
          <p>
            &copy; {currentYear} Hyderabad Crop Science Pvt. Ltd. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span>CIN: {info.cin}</span>
            <span>•</span>
            <span className="text-forest font-display font-semibold">Science That Protects. Innovation That Grows.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
