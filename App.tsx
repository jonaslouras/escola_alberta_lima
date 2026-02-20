import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import InstrumentsGrid from './components/InstrumentsGrid';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Partnerships from './components/Partnerships';

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="font-sans antialiased text-brand-dark selection:bg-brand-gold selection:text-white">
      <Header scrollToSection={scrollToSection} />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Team />
        <InstrumentsGrid />
        <Pricing />
        <Partnerships />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>

      <footer className="bg-black text-white py-8 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
            <div className="text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} Escola de Música e Bailado Alberta Lima.</p>
              <p className="text-xs mt-1 text-gray-600">Parceria Institucional: <span className="text-gray-400">The Future Academy</span></p>
            </div>
            
            <div className="mt-4 md:mt-0 flex gap-4">
              <a href="https://www.facebook.com/escola.albertalima/?locale=pt_PT" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Facebook</a>
              <a href="https://www.instagram.com/escolaalbertalimamatosinhos?igsh=ZHZ4cmU1YjVscnht" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-brand-gold transition-colors">Privacidade</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Elements */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;