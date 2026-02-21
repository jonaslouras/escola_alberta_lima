import React from 'react';
import { Mic2, Music, Video, MonitorSpeaker, Disc, Camera, Coffee, Sliders, Speaker, Aperture } from 'lucide-react';

const services = [
  { icon: <Music className="w-6 h-6" />, name: "Produção Musical" },
  { icon: <Mic2 className="w-6 h-6" />, name: "Gravação de Voz, Produção e Masterização" },
  { icon: <Sliders className="w-6 h-6" />, name: "Produção de Instrumentais" },
  { icon: <Video className="w-6 h-6" />, name: "Produção e Realização de Vídeo / Videoclipes" },
  { icon: <MonitorSpeaker className="w-6 h-6" />, name: "Estúdios de Produção" },
  { icon: <Disc className="w-6 h-6" />, name: "Estúdio de DJ" },
  { icon: <Aperture className="w-6 h-6" />, name: "Estúdios de Edição de Imagem" },
  { icon: <Camera className="w-6 h-6" />, name: "Sala Chroma Key (Foto/Vídeo/Podcast)" },
  { icon: <Coffee className="w-6 h-6" />, name: "Pavilhão para Eventos com Bar" },
  { icon: <Speaker className="w-6 h-6" />, name: "Sala para Ensaios (Individual/Bandas)" }
];

const Partnerships: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-gray-900 text-white overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-burgundy/10 rounded-full filter blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-gold/5 rounded-full filter blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-brand-gold uppercase tracking-widest font-bold mb-4">Parcerias & Instalações</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">The Future Academy</h3>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            A Escola de Música Alberta Lima tem o privilégio de estar sediada nas instalações da <span className="text-white font-bold">The Future Academy</span>,
            um hub criativo que oferece serviços profissionais complementares à formação artística.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/10 hover:border-brand-gold/30 transition-all duration-300 group flex flex-col items-center text-center hover:-translate-y-1 w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
            >
              <div className="w-14 h-14 bg-brand-burgundy/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-brand-gold group-hover:text-brand-dark transition-colors duration-300 text-brand-gold">
                {service.icon}
              </div>
              <h4 className="font-medium text-gray-200 group-hover:text-white">{service.name}</h4>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center border-t border-white/10 pt-8">
          <p className="text-sm text-gray-500 italic">
            * Nota: A The Future Academy é uma entidade independente. A Escola Alberta Lima partilha o espaço e recomenda os seus serviços de excelência.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;