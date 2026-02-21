import React, { useState } from 'react';
import { Check, MessageCircle, Star, Gift } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isWeekly, setIsWeekly] = useState(true);
  const whatsappLink = "https://wa.me/351937822768?text=Ol%C3%A1!%20Gostaria%20de%20marcar%20uma%20aula%20experimental%20gratuita.";

  return (
    <section id="pricing" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-brand-burgundy uppercase tracking-widest font-bold mb-4">Mensalidades</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">Investimento Musical</h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Acreditamos na transparência. Um valor acessível para um ensino de excelência que o fará brilhar.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-gray-200 p-1 rounded-xl inline-flex relative shadow-inner">
            <div
              className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-brand-burgundy rounded-lg transition-transform duration-300 ease-out ${isWeekly ? "translate-x-0" : "translate-x-[calc(100%+4px)]"
                }`}
            ></div>
            <button
              onClick={() => setIsWeekly(true)}
              className={`relative z-10 px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors duration-300 w-32 ${isWeekly ? "text-white" : "text-gray-500 hover:text-brand-dark"
                }`}
            >
              Semanal
            </button>
            <button
              onClick={() => setIsWeekly(false)}
              className={`relative z-10 px-8 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-colors duration-300 w-32 ${!isWeekly ? "text-white" : "text-gray-500 hover:text-brand-dark"
                }`}
            >
              Mensal
            </button>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="relative rounded-2xl p-8 md:p-12 shadow-xl bg-white text-brand-dark border-2 border-brand-gold/30 hover:shadow-2xl hover:border-brand-gold/60 transition-all duration-300">

            {/* Badge for Free Trial */}
            <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark px-6 py-2 rounded-bl-2xl font-bold text-sm uppercase tracking-wider shadow-md">
              1ª Aula Grátis
            </div>

            <div className="text-center mb-10 pt-4">
              <h4 className="font-bold text-xl uppercase tracking-wider mb-4 text-brand-burgundy drop-shadow-sm">
                Curso de Instrumento
              </h4>
              <div className="flex justify-center items-baseline mb-4">
                <span className="text-7xl font-serif font-bold text-brand-dark">
                  {isWeekly ? '15€' : '60€'}
                </span>
                <span className="text-xl text-gray-500 ml-2 font-medium">
                  {isWeekly ? '/semana' : '/mês'}
                </span>
              </div>
              <p className="text-gray-500 h-6">
                {isWeekly ? '(Faturado mensalmente 60€)' : 'Ensino adaptado aos seus objetivos'}
              </p>
            </div>

            <ul className="space-y-4 mb-10 max-w-sm mx-auto">
              {/* Highlighted Free Class */}
              <li className="flex items-center gap-3 text-lg bg-brand-gold/10 p-3 rounded-lg border border-brand-gold/30 shadow-sm relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/0 via-brand-gold/20 to-brand-gold/0 translate-x-[-100%] group-hover:animate-[shimmer_2s_infinite]"></div>
                <div className="bg-brand-gold p-1.5 rounded-full flex-shrink-0 shadow-sm z-10">
                  <Star className="w-5 h-5 text-brand-dark fill-brand-dark" />
                </div>
                <span className="text-brand-dark font-bold z-10">1ª Aula Exp. Gratuita</span>
              </li>

              <li className="flex items-center gap-3 text-lg">
                <div className="bg-brand-burgundy/10 p-1.5 rounded-full flex-shrink-0">
                  <Check className="w-5 h-5 text-brand-burgundy" />
                </div>
                <span className="text-gray-700 font-medium">4 Horas de aulas mensais</span>
              </li>

              <li className="flex items-center gap-3 text-lg">
                <div className="bg-brand-burgundy/10 p-1.5 rounded-full flex-shrink-0">
                  <Check className="w-5 h-5 text-brand-burgundy" />
                </div>
                <span className="text-gray-700 font-medium">Horários flexíveis</span>
              </li>

              <li className="flex items-center gap-3 text-lg">
                <div className="bg-brand-burgundy/10 p-1.5 rounded-full flex-shrink-0">
                  <Check className="w-5 h-5 text-brand-burgundy" />
                </div>
                <span className="text-gray-700 font-medium">Acesso a Salas de Estudo</span>
              </li>

              {/* Discount / Referral */}
              <li className="flex items-start gap-3 mt-6 pt-6 border-t border-gray-100">
                <div className="bg-brand-burgundy p-2 rounded-full flex-shrink-0 mt-0.5 shadow-md">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-brand-burgundy font-bold block mb-1">Oferta Especial!</span>
                  <span className="text-gray-600 text-sm leading-tight block">
                    Desconto de <strong className="text-brand-dark">10€</strong> por cada pessoa indicada ou familiares diretos.
                  </span>
                </div>
              </li>
            </ul>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 rounded-xl font-bold flex justify-center items-center gap-3 transition-all duration-300 bg-brand-burgundy text-white hover:bg-brand-gold hover:text-brand-dark hover:scale-105 shadow-xl hover:shadow-brand-gold/40"
            >
              <MessageCircle className="w-6 h-6" />
              Garantir a Minha Vaga
            </a>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-sm text-gray-400 mb-1">
                Aulas individuais baseadas nos seus interesses. Sem fidelização exigida.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;