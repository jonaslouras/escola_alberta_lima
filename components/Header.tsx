import React, { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';

interface HeaderProps {
  scrollToSection: (id: string) => void;
}

const Header: React.FC<HeaderProps> = ({ scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', id: 'home' },
    { name: 'A Escola', id: 'about' },
    { name: 'Instrumentos', id: 'instruments' },
    { name: 'Preços', id: 'pricing' },
    { name: 'Contactos', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-burgundy text-white shadow-lg py-2' : 'bg-transparent text-white py-6'
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
          <img src="https://image2url.com/r2/default/images/1771644509475-df40bfe6-7191-4efe-ab6f-ce505819205c.blob" alt="Logotipo Escola Alberta Lima" className="w-10 h-10 object-contain" />
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold leading-none">Alberta Lima</span>
            <span className="text-xs tracking-widest uppercase opacity-80">Escola de Música e Bailado</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-sm uppercase tracking-wider font-medium hover:text-brand-gold transition-colors"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('contact')}
            className="bg-brand-gold text-brand-dark px-5 py-2 rounded-full font-bold text-sm hover:bg-white transition-colors"
          >
            Marcar Visita
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-burgundy shadow-xl py-4 flex flex-col items-center gap-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.id)}
              className="text-white text-lg font-serif hover:text-brand-gold"
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;