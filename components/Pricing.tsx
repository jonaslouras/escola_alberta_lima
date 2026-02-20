import React from 'react';
import { Check, MessageCircle, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const whatsappLink = "https://wa.me/351937822768?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20aula%20experimental%20gratuita.";

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-burgundy uppercase tracking-widest font-bold mb-4">Mensalidades</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">Investimento Musical</h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Acreditamos na transparência. Um valor simples para um ensino de excelência.
          </p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative rounded-2xl p-8 md:p-12 shadow-2xl bg-white text-brand-dark border-2 border-brand-gold/20 overflow-hidden group hover:border-brand-gold transition-colors duration-300">
            
            {/* Badge for Free Trial */}
            <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark px-6 py-2 rounded-bl-2xl font-bold text-sm uppercase tracking-wider shadow-md">
              1ª Aula Grátis
            </div>

            <div className="text-center mb-8 pt-4">
              <h4 className="font-bold text-xl uppercase tracking-wider mb-4 text-brand-burgundy">
                Curso de Instrumento
              </h4>
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-6xl font-serif font-bold text-brand-dark">60€</span>
                <span className="text-xl text-gray-500 ml-2">/mês</span>
              </div>
              <p className="text-gray-600">
                Ensino personalizado adaptado aos seus objetivos.
              </p>
            </div>

            <ul className="space-y-4 mb-10 max-w-sm mx-auto">
              <li className="flex items-center gap-3 text-lg">
                <div className="bg-brand-burgundy/10 p-1 rounded-full flex-shrink-0">
                  <Check className="w-5 h-5 text-brand-burgundy" />
                </div>
                <span className="text-gray-700">1 Hora de aula semanal</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                 <div className="bg-brand-gold/20 p-1 rounded-full flex-shrink-0">
                  <Star className="w-5 h-5 text-brand-burgundy" />
                </div>
                <span className="text-gray-800 font-bold">1ª Aula Experimental Gratuita</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <div className="bg-brand-burgundy/10 p-1 rounded-full flex-shrink-0">
                  <Check className="w-5 h-5 text-brand-burgundy" />
                </div>
                <span className="text-gray-700">Horários Flexíveis</span>
              </li>
              <li className="flex items-center gap-3 text-lg">
                <div className="bg-brand-burgundy/10 p-1 rounded-full flex-shrink-0">
                  <Check className="w-5 h-5 text-brand-burgundy" />
                </div>
                <span className="text-gray-700">Acesso a Salas de Estudo</span>
              </li>
            </ul>

            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 rounded-xl font-bold flex justify-center items-center gap-3 transition-all duration-300 bg-brand-burgundy text-white hover:bg-brand-gold hover:text-brand-dark hover:scale-105 shadow-lg group-hover:shadow-brand-gold/20"
            >
              <MessageCircle className="w-6 h-6" />
              Agendar Aula Experimental
            </a>
            
            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-500 italic mb-2">
                "Para outros formatos ou ajustes personalizados, fale connosco."
              </p>
              <p className="text-xs text-gray-400 uppercase tracking-wide">
                Personalização via WhatsApp
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Pricing;