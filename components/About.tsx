import React, { useState } from 'react';
import { Play } from 'lucide-react';

const About: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section id="about" className="py-20 md:py-32 bg-brand-cream text-brand-dark">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-gold rounded-lg z-0 hidden md:block"></div>
            <img 
              src="/images/escola alberta lima.png" 
              alt="Estudante de música clássica" 
              className="relative z-10 rounded-lg shadow-2xl w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <div className="absolute -bottom-10 -right-10 bg-brand-burgundy text-white p-8 rounded-lg shadow-xl z-20 hidden md:block max-w-xs">
              <p className="font-serif italic text-2xl mb-2">"A música é a linguagem da alma."</p>
              <p className="text-brand-gold text-sm font-bold uppercase tracking-wider">- Alberta Lima</p>
            </div>
          </div>

          <div>
            <h3 className="text-brand-burgundy uppercase tracking-widest font-bold mb-4">A Nossa História</h3>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 leading-tight">
              40 Anos de <span className="text-brand-gold italic">Excelência</span> no Ensino Musical
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Fundada pela visionária <strong className="text-brand-burgundy">Alberta Lima</strong>, a nossa escola nasceu de um sonho: trazer o ensino de alta qualidade da música para o coração de Matosinhos.
              </p>
              <p>
                Ao longo de quatro décadas, formámos gerações de artistas, desde os primeiros passos na iniciação musical até aos palcos profissionais. Acreditamos que a disciplina técnica deve caminhar sempre de mãos dadas com a sensibilidade artística.
              </p>
              <p>
                Hoje, continuamos a ser uma referência, mantendo a tradição e o rigor, mas abraçando novas metodologias e instrumentos diversos como a bateria e o acordeão, sem nunca esquecer a elegância intemporal do piano e do violino.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 text-center border-t border-brand-dark/10 pt-8">
              <div>
                <span className="block font-serif text-4xl font-bold text-brand-burgundy mb-2">40+</span>
                <span className="text-xs uppercase tracking-wider text-gray-500">Anos de História</span>
              </div>
              <div>
                <span className="block font-serif text-4xl font-bold text-brand-burgundy mb-2">1000+</span>
                <span className="text-xs uppercase tracking-wider text-gray-500">Alunos Formados</span>
              </div>
              <div>
                <span className="block font-serif text-4xl font-bold text-brand-burgundy mb-2">15+</span>
                <span className="text-xs uppercase tracking-wider text-gray-500">Professores</span>
              </div>
            </div>
          </div>
        </div>

        {/* Institutional Video Section */}
        <div className="w-full max-w-5xl mx-auto mt-16 animate-fade-in-up">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-brand-dark mb-2">Conheça o nosso ambiente</h3>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </div>

          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black group border-4 border-white">
            {!isPlaying ? (
              <button 
                onClick={() => setIsPlaying(true)} 
                className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer group"
                aria-label="Reproduzir vídeo institucional"
              >
                {/* Poster Image */}
                <img 
                  src="https://picsum.photos/id/452/1280/720" 
                  alt="Capa do vídeo institucional" 
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-brand-burgundy/20 group-hover:bg-brand-burgundy/40 transition-colors duration-500"></div>
                
                {/* Play Button */}
                <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-md border-2 border-white/50 rounded-full flex items-center justify-center pl-2 group-hover:scale-110 group-hover:bg-brand-gold group-hover:border-brand-gold group-hover:text-brand-dark text-white transition-all duration-300 shadow-xl">
                  <Play className="w-8 h-8 md:w-10 md:h-10 fill-current" />
                </div>
              </button>
            ) : (
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/YZzo60wqpNg?start=157&autoplay=1&rel=0" 
                title="Vídeo Institucional Escola Alberta Lima"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;