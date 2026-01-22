import { Sparkles, Eye } from 'lucide-react';

export default function Gallery() {
    const examples = [
        {
            category: 'Bodas',
            title: 'Invitación de Boda Elegante',
            gradient: 'from-pink-400 to-purple-500',
        },
        {
            category: 'XV Años',
            title: 'Quinceañera Moderna',
            gradient: 'from-purple-400 to-pink-500',
        },
        {
            category: 'Cumpleaños',
            title: 'Fiesta de Cumpleaños',
            gradient: 'from-orange-400 to-red-500',
        },
        {
            category: 'Baby Shower',
            title: 'Celebración de Bebé',
            gradient: 'from-blue-400 to-cyan-500',
        },
        {
            category: 'Bodas',
            title: 'Boda en Jardín',
            gradient: 'from-green-400 to-emerald-500',
        },
        {
            category: 'Eventos',
            title: 'Evento Corporativo',
            gradient: 'from-indigo-400 to-blue-500',
        },
    ];

    return (
        <section className="section-container bg-white">
            <div className="text-center mb-16 animate-fade-in">
                <p className="font-script text-2xl md:text-3xl text-primary-600 mb-4">
                    Nuestro trabajo
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
                    Galería de Inspiración
                </h2>
                <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
                    Cada invitación es única y diseñada especialmente para tu evento. Aquí algunos ejemplos de nuestro trabajo.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {examples.map((example, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Gradient Background as Placeholder */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${example.gradient} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500`}></div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <span className="text-sm font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 flex items-center gap-2">
                                <Sparkles className="w-4 h-4" />
                                {example.category}
                            </span>
                            <h3 className="text-xl md:text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                {example.title}
                            </h3>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-90 transition-all duration-500">
                            <Eye className="w-6 h-6 text-white" />
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
                <p className="text-dark-600 mb-6">
                    ¿Listo para crear algo único para tu evento?
                </p>
                <button
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="btn-primary group"
                >
                    Ver Paquetes
                    <Sparkles className="inline-block ml-2 w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />
                </button>
            </div>
        </section>
    );
}
