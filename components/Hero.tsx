import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero.png"
          alt="Interior da Escola de Música Alberta Lima em Matosinhos"
          className="w-full h-full object-cover object-center md:object-right"
        />
        {/* Desktop: gradient stronger on left so text is readable, fades toward right to show image */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-brand-burgundy/80 via-transparent to-black/40"></div>
        {/* Mobile: full dark overlay for readability */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-b from-black/80 via-black/65 to-brand-burgundy/90"></div>
      </div>

      <div
        className="relative z-10 container mx-auto px-6 md:px-12 pt-24 md:pt-0 text-center md:text-left text-white"
        style={{ textShadow: '0 2px 12px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.5)' }}
      >
        <div className="md:max-w-2xl">
          <h2 className="text-brand-gold uppercase tracking-[0.2em] mb-4 text-sm md:text-base animate-fade-in-up">
            Desde 1980 em Matosinhos
          </h2>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
            A Arte de <br />
            <span className="italic text-brand-gold">Sentir</span> a Música
          </h1>
          <p className="max-w-xl text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed animate-fade-in-up delay-200 mx-auto md:mx-0">
            Uma instituição de referência com mais de 40 anos de história.
            Descubra o seu talento no Piano, Violino, Guitarra, Canto e muito mais, com a excelência de quem sabe ensinar.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start items-center animate-fade-in-up delay-300">
            <button
              onClick={() => scrollToSection('instruments')}
              className="bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              Conhecer Instrumentos <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="bg-brand-burgundy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
            >
              A Nossa História
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
