import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramFeed: React.FC = () => {
    const instagramUrl = "https://www.instagram.com/escolaalbertalimamatosinhos";

    return (
        <section className="py-12 md:py-20 bg-white relative overflow-hidden">
            {/* Subtle gradient decorations */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-purple-400/10 via-pink-500/10 to-orange-400/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-purple-400/10 via-pink-500/10 to-orange-400/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <div className="flex justify-center mb-4">
                        <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-3 rounded-2xl shadow-lg">
                            <Instagram className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    <h2 className="text-brand-burgundy uppercase tracking-widest font-bold mb-3">Siga-nos</h2>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-brand-dark mb-4">
                        O Nosso Dia a Dia
                    </h3>
                    <p className="text-gray-600 max-w-xl mx-auto">
                        Acompanhe os bastidores, momentos especiais e o talento dos nossos alunos no Instagram.
                    </p>
                </div>

                {/* Instagram Embed */}
                <div className="max-w-lg mx-auto">
                    <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-100 bg-white">
                        <iframe
                            src="https://www.instagram.com/escolaalbertalimamatosinhos/embed"
                            width="100%"
                            height="600"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency
                            loading="lazy"
                            title="Instagram Escola Alberta Lima"
                            className="block"
                        ></iframe>
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center mt-10">
                    <a
                        href={instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-xl hover:shadow-pink-500/20 transition-all duration-300"
                    >
                        <Instagram className="w-6 h-6" />
                        Seguir @escolaalbertalimamatosinhos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
