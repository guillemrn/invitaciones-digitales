import { MousePointer2, Settings2, Rocket } from 'lucide-react';

export default function HowItWorks() {
    const steps = [
        {
            icon: MousePointer2,
            title: 'Eliges',
            description: 'Selecciona tu diseño favorito de nuestra colección premium de plantillas interactivas.',
            color: 'bg-primary-50 text-primary-600',
        },
        {
            icon: Settings2,
            title: 'Completas',
            description: 'Llenas un formulario rápido con los detalles de tu evento.',
            color: 'bg-accent-50 text-accent-600',
        },
        {
            icon: Rocket,
            title: 'Recibes y Disfrutas',
            description: 'Te entregamos tu invitación lista para enviar. Nosotros gestionamos las confirmaciones.',
            color: 'bg-dark-50 text-dark-900',
        },
    ];

    return (
        <section id="how-it-works" className="section-container bg-white">
            <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-dark-900 font-display">
                    Tu Evento en 3 Pasos
                </h2>
                <p className="text-dark-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Diseñado para ser intuitivo, rápido y sobre todo, profesional.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {steps.map((step, index) => {
                    const Icon = step.icon;
                    return (
                        <div
                            key={index}
                            className="relative text-center group animate-slide-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Connector Line (Desktop) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-dark-100 -z-10 group-hover:bg-primary-200 transition-colors duration-500"></div>
                            )}

                            <div className={`mx-auto w-20 h-20 rounded-2xl ${step.color} flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                                <Icon className="w-10 h-10" />
                            </div>

                            <h3 className="text-2xl font-bold text-dark-900 mb-4 font-display">
                                {step.title}
                            </h3>

                            <p className="text-dark-600 leading-relaxed max-w-[280px] mx-auto">
                                {step.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
