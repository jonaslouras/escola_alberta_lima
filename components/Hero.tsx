import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/avo.jpg"
          alt="Interior da Escola de Música Alberta Lima em Matosinhos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-burgundy/90"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <h2 className="text-brand-gold uppercase tracking-[0.2em] mb-4 text-sm md:text-base animate-fade-in-up">
          Desde 1980 em Matosinhos
        </h2>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight animate-fade-in-up delay-100">
          A Arte de <br />
          <span className="italic text-brand-gold">Sentir</span> a Música
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 mb-10 font-light leading-relaxed animate-fade-in-up delay-200">
          Uma instituição de referência com mais de 40 anos de história.
          Descubra o seu talento no Piano, Violino, Guitarra, Canto e muito mais, com a excelência de quem sabe ensinar.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up delay-300">
          <button
            onClick={() => scrollToSection('instruments')}
            className="bg-brand-gold text-brand-dark px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Conhecer Instrumentos <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollToSection('about')}
            className="border border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300"
          >
            A Nossa História
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;