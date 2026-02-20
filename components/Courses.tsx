import React from 'react';
import { Course } from '../types';

const courses: Course[] = [
  {
    id: 'piano',
    title: 'Piano',
    description: 'Do clássico ao jazz, domine as teclas com técnica e expressividade.',
    image: 'https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=800',
    category: 'music'
  },
  {
    id: 'violin',
    title: 'Violino',
    description: 'A elegância das cordas e a precisão técnica num instrumento intemporal.',
    image: 'https://images.unsplash.com/photo-1460039230329-eb070fc6c77c?auto=format&fit=crop&q=80&w=800',
    category: 'music'
  },
  {
    id: 'guitar',
    title: 'Guitarra',
    description: 'Clássica ou Elétrica. Aprenda a dedilhar as cordas da sua preferência.',
    image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?auto=format&fit=crop&q=80&w=800',
    category: 'music'
  },
  {
    id: 'drums',
    title: 'Bateria',
    description: 'Ritmo, coordenação e energia. A batida perfeita começa aqui.',
    image: 'https://images.unsplash.com/photo-1524230659092-07f99a75c013?auto=format&fit=crop&q=80&w=800',
    category: 'music'
  },
  {
    id: 'singing',
    title: 'Canto',
    description: 'Descubra a sua voz e aprenda a controlar o seu instrumento natural.',
    image: 'https://images.unsplash.com/photo-1523905491727-d82018a34d75?auto=format&fit=crop&q=80&w=800',
    category: 'music'
  },
  {
    id: 'flute',
    title: 'Flauta',
    description: 'Transversal ou de Bisel. O sopro que se transforma em melodia.',
    image: 'https://images.unsplash.com/photo-1573871666457-7c7329118cf9?auto=format&fit=crop&q=80&w=800',
    category: 'music'
  },
  {
    id: 'accordion',
    title: 'Acordeão',
    description: 'A versatilidade e a riqueza harmónica de um instrumento único.',
    image: 'https://images.unsplash.com/photo-1621812852136-11f848831616?auto=format&fit=crop&q=80&w=800',
    category: 'music'
  }
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-brand-burgundy uppercase tracking-widest font-bold mb-4">Oferta Formativa</h2>
          <h3 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">Os Nossos Cursos</h3>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Oferecemos um leque diversificado de instrumentos para todas as idades e níveis de experiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer h-80">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy via-brand-burgundy/80 to-transparent opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-brand-gold text-xs font-bold uppercase tracking-wider mb-2 block">
                  Música
                </span>
                <h4 className="font-serif text-2xl font-bold mb-2">{course.title}</h4>
                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-3">
                  {course.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;