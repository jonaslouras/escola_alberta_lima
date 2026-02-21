import React from 'react';

const instruments = [
  { name: 'Piano', emoji: '🎹' },
  { name: 'Bateria', emoji: '🥁' },
  { name: 'Violino', emoji: '🎻' },
  { name: 'Guitarra Clássica', emoji: '🎸' },
  { name: 'Guitarra Elétrica', emoji: '🎸' },
  { name: 'Ukulele', emoji: '🎸' },
  { name: 'Canto', emoji: '🎤' },
  { name: 'Saxofone', emoji: '🎷' },
  { name: 'Flauta Transversal', emoji: '🪈' },
  { name: 'Flauta de Bisel', emoji: '🎼' },
  { name: 'Acordeão', emoji: '🪗' },
];

const InstrumentsGrid: React.FC = () => {
  return (
    <section id="instruments" className="py-12 md:py-20 bg-brand-cream border-t border-brand-gold/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-brand-burgundy uppercase tracking-widest font-bold mb-3">Oferta Musical</h2>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark">Os Nossos Instrumentos</h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Descubra a diversidade de instrumentos que pode aprender na nossa escola, lecionados por professores especializados.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
          {instruments.map((item, index) => (
            <div
              key={index}
              className="w-full bg-white p-6 md:p-8 rounded-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group flex flex-col items-center justify-center text-center border border-gray-100"
            >
              <div className="w-24 h-24 mb-6 flex items-center justify-center p-5 bg-brand-cream rounded-full group-hover:bg-brand-burgundy/10 transition-colors duration-300">
                <span className="text-5xl md:text-6xl group-hover:scale-110 transition-transform duration-300 block">
                  {item.emoji}
                </span>
              </div>
              <h4 className="font-serif text-lg font-bold text-brand-dark group-hover:text-brand-burgundy transition-colors">
                {item.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstrumentsGrid;