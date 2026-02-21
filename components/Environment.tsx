import React, { useState } from 'react';
import { Play } from 'lucide-react';

const Environment: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <section id="environment" className="py-12 md:py-20 bg-brand-cream border-t border-brand-gold/10">
            <div className="container mx-auto px-6">
                <div className="w-full max-w-5xl mx-auto animate-fade-in-up">
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

export default Environment;
