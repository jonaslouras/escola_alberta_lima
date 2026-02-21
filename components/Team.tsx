import React from 'react';

const teachers = [
  {
    name: "Filipa Coelho",
    role: "Canto",
    image: "https://image2url.com/r2/default/images/1771640834137-45ddde5e-75b6-4597-b91c-9d4084816685.jpg"
  },
  {
    name: "Sérgio Ramos",
    role: "Canto",
    image: "https://image2url.com/r2/default/images/1770327553004-94c006ac-53a7-461e-8551-962dd495c1da.blob"
  },
  {
    name: "Diogo Ferreira",
    role: "Piano",
    image: "/professores/diogo-ferreira.jpg"
  },
  {
    name: "Vitor José",
    role: "Piano",
    image: "https://image2url.com/r2/default/images/1770327559714-02cc4c7e-339a-46d9-8486-7d29c49ee6a3.blob"
  },
  {
    name: "Pedro Guitas",
    role: "Guitarra Clássica / Elétrica",
    image: "https://image2url.com/r2/default/images/1770327470001-be84f962-2f33-450d-bb11-e6d215455b06.png"
  },
  {
    name: "Rogério Monteiro",
    role: "Violino",
    image: "https://image2url.com/r2/default/images/1770327537815-5875b755-f271-4183-95e7-a765073c3add.blob"
  },
  {
    name: "Gil Costa",
    role: "Bateria",
    image: "https://image2url.com/r2/default/images/1770327539329-0ff66e7f-bb18-43cb-942e-d211af3789d0.blob"
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-burgundy uppercase tracking-widest font-bold mb-4">O Nosso Corpo Docente</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">Mestres da Arte</h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Conheça os professores que aliam a excelência técnica a uma paixão contagiante pelo ensino.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl shadow-lg aspect-[3/4] cursor-pointer">
              <img 
                src={teacher.image} 
                alt={teacher.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy/90 via-brand-burgundy/20 to-transparent opacity-80 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="w-12 h-1 bg-brand-gold mb-3 transition-all duration-300 group-hover:w-20"></div>
                <h4 className="font-serif text-2xl font-bold mb-1 leading-tight">{teacher.name}</h4>
                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">{teacher.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;