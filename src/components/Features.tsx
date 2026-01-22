import { Palette, Smartphone, Zap, Gift, Sparkles, Heart } from 'lucide-react';

export default function Features() {
    const features = [
        {
            icon: Palette,
            title: 'Diseño Personalizado',
            description: 'Cada invitación es única y refleja la esencia de tu evento. Trabajamos contigo para crear algo especial.',
            color: 'text-primary-500',
        },
        {
            icon: Smartphone,
            title: '100% Digital y Móvil',
            description: 'Optimizado para todos los dispositivos. Tus invitados pueden acceder desde cualquier lugar, en cualquier momento.',
            color: 'text-accent-500',
        },
        {
            icon: Zap,
            title: 'Confirmación Instantánea',
            description: 'Sistema de RSVP integrado. Recibe confirmaciones en tiempo real y gestiona tu lista de invitados fácilmente.',
            color: 'text-primary-600',
        },
        {
            icon: Gift,
            title: 'Experiencias Memorables',
            description: 'Más que una invitación, es una experiencia. Incluye mapas, itinerarios, galerías y mucho más.',
            color: 'text-accent-600',
        },
        {
            icon: Sparkles,
            title: 'Tecnología Inteligente',
            description: 'Funciones avanzadas como contador regresivo, mesa de regalos, confirmación por grupos y personalización dinámica.',
            color: 'text-primary-500',
        },
        {
            icon: Heart,
            title: 'Servicio Premium',
            description: 'Acompañamiento personalizado en cada paso. Desde el diseño hasta el día de tu evento.',
            color: 'text-accent-500',
        },
    ];

    return (
        <section className="section-container bg-white">
            <div className="text-center mb-16 animate-fade-in">
                <p className="font-script text-2xl md:text-3xl text-primary-600 mb-4">
                    ¿Por qué elegirnos?
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
                    La Mejor Experiencia Digital
                </h2>
                <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
                    Combinamos diseño de alta gama con tecnología inteligente para crear invitaciones que tus invitados amarán.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div
                            key={index}
                            className="card card-hover p-8 text-center group animate-slide-up"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                <Icon className={`w-8 h-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} strokeWidth={2} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-dark-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                                {feature.title}
                            </h3>
                            <p className="text-dark-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
