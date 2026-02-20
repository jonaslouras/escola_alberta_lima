import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  course: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "A Escola Alberta Lima não ensina apenas música, ensina a amar a arte. A dedicação dos professores é inspiradora e o ambiente é verdadeiramente familiar.",
    name: "Maria Silva",
    course: "Piano Avançado"
  },
  {
    id: 2,
    text: "O progresso técnico e artístico no violino tem sido notável. Excelente acompanhamento pedagógico e um ambiente muito motivador.",
    name: "Ricardo Gomes",
    course: "Violino"
  },
  {
    id: 3,
    text: "As aulas de bateria superaram todas as minhas expectativas. Equipamento de topo e um método que realmente funciona para quem quer aprender a sério.",
    name: "Pedro Rodrigues",
    course: "Bateria"
  },
  {
    id: 4,
    text: "Sinto-me em casa. É um espaço onde podemos errar, aprender e crescer sem julgamentos. Recomendo a todos os que procuram excelência.",
    name: "Ana Costa",
    course: "Canto"
  }
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-brand-burgundy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
        <Quote className="w-96 h-96 -translate-x-20 -translate-y-20 transform rotate-12" />
        <Quote className="w-64 h-64 absolute bottom-0 right-0 translate-x-20 translate-y-20 transform -rotate-12" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold uppercase tracking-widest font-bold mb-4">Depoimentos</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold">O que dizem os nossos alunos</h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-brand-dark/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl border border-white/10">
            {/* Quote Icon Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-dark p-4 rounded-full shadow-lg border-4 border-brand-burgundy">
              <Quote className="w-6 h-6 fill-current" />
            </div>

            {/* Content */}
            <div className="text-center mt-6">
              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6 text-brand-gold">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Text */}
              <div className="min-h-[160px] md:min-h-[120px] flex items-center justify-center">
                <p className="font-serif text-xl md:text-3xl leading-relaxed italic opacity-90 transition-all duration-500">
                  "{testimonials[currentIndex].text}"
                </p>
              </div>

              {/* Author */}
              <div className="mt-8 animate-fade-in-up">
                <h4 className="font-bold text-lg text-brand-gold">{testimonials[currentIndex].name}</h4>
                <p className="text-sm uppercase tracking-wider text-gray-300 mt-1">{testimonials[currentIndex].course}</p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prev}
              className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 hover:bg-brand-gold hover:text-brand-dark rounded-full transition-all text-white backdrop-blur-md"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button 
              onClick={next}
              className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/10 hover:bg-brand-gold hover:text-brand-dark rounded-full transition-all text-white backdrop-blur-md"
              aria-label="Próximo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Dots Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-brand-gold w-8' : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                aria-label={`Ir para testemunho ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;