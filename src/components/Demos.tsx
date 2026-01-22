import { Play, ExternalLink } from 'lucide-react';

export default function Demos() {
    const demos = [
        {
            category: 'Bodas',
            title: 'Elegancia Minimalista',
            image: '/assets/demo-wedding.png',
        },
        {
            category: 'XV Años',
            title: 'Energía Neón',
            image: '/assets/demo-quince.png',
        },
        {
            category: 'Infantil',
            title: 'Ternura y Magia',
            image: '/assets/demo-baptism.png',
        },
        {
            category: 'Corporativo',
            title: 'Lanzamiento Premium',
            image: '/assets/demo-corporate.png',
        },
    ];

    return (
        <section id="demos" className="section-container bg-dark-50">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold text-dark-900 font-display">
                        Demos en Vivo
                    </h2>
                    <p className="text-dark-600 text-lg md:text-xl max-w-2xl leading-relaxed">
                        Explora la calidad de nuestro servicio de diseño. Creamos experiencias únicas listas para impresionar a tus invitados.
                    </p>
                </div>
                <button className="text-primary-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                    Ver catálogo de diseños <ExternalLink className="w-5 h-5" />
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {demos.map((demo, index) => (
                    <div
                        key={index}
                        className="group relative bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow- luxury transition-all duration-500 animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        {/* Visual Preview */}
                        <div className="aspect-[3/4] overflow-hidden relative">
                            <img
                                src={demo.image}
                                alt={demo.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />

                            {/* Content Overlay */}
                            <div className="absolute inset-0 bg-dark-900/20 group-hover:bg-dark-900/40 transition-colors duration-300 flex flex-col justify-end p-8 text-white">
                                <div className="space-y-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-[10px] uppercase tracking-widest font-bold opacity-80">{demo.category}</p>
                                    <h3 className="text-xl font-bold font-display leading-tight">{demo.title}</h3>
                                </div>

                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl transform scale-50 group-hover:scale-100 transition-transform duration-500">
                                        <Play className="w-8 h-8 text-primary-600 fill-current ml-1" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Bottom */}
                        <div className="p-6">
                            <button className="w-full btn-outline py-3 text-sm border-dark-100 hover:border-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all">
                                Probar Demo Interactiva
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
