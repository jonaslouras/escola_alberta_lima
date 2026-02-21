import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "A partir de que idade se pode começar a aprender?",
    answer: "Aceitamos alunos a partir dos 5 anos para as classes de iniciação. Para instrumentos específicos, fazemos avaliações individuais para garantir que a criança já possui a motricidade necessária."
  },
  {
    question: "É necessário ter instrumento próprio em casa?",
    answer: "Para a fase inicial, não é estritamente necessário, pois pode praticar nas nossas salas de estudo. No entanto, para uma evolução consistente, recomendamos a aquisição de um instrumento de estudo assim que possível. Os nossos professores podem aconselhar na compra."
  },
  {
    question: "Como funciona a Aula Experimental?",
    answer: "A aula experimental é 100% gratuita e sem compromisso. Serve para conhecer o professor, o método de ensino e experimentar o instrumento. Basta preencher o formulário de contacto ou enviar-nos uma mensagem para agendar."
  },
  {
    question: "Qual é o horário de funcionamento?",
    answer: "Estamos abertos de Segunda a Sábado, das 15:00 às 22:00. As aulas são marcadas dentro deste período de acordo com a disponibilidade do aluno e do professor."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-brand-cream p-3 rounded-full">
              <HelpCircle className="w-8 h-8 text-brand-burgundy" />
            </div>
          </div>
          <h2 className="text-brand-burgundy uppercase tracking-widest font-bold mb-3">Dúvidas Comuns</h2>
          <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark">Perguntas Frequentes</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-xl transition-all duration-300 ${openIndex === index
                  ? 'border-brand-gold bg-brand-cream/30 shadow-md'
                  : 'border-gray-200 hover:border-brand-gold/50'
                }`}
            >
              <button
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className={`font-serif text-lg font-bold ${openIndex === index ? 'text-brand-burgundy' : 'text-gray-700'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-brand-gold" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
              >
                <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;