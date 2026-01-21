export default function Features() {
    const features = [
        {
            icon: '🎨',
            title: 'Diseño Personalizado',
            description: 'Cada invitación es única y refleja la esencia de tu evento. Trabajamos contigo para crear algo especial.',
        },
        {
            icon: '📱',
            title: '100% Digital y Móvil',
            description: 'Optimizado para todos los dispositivos. Tus invitados pueden acceder desde cualquier lugar, en cualquier momento.',
        },
        {
            icon: '⚡',
            title: 'Confirmación Instantánea',
            description: 'Sistema de RSVP integrado. Recibe confirmaciones en tiempo real y gestiona tu lista de invitados fácilmente.',
        },
        {
            icon: '🎁',
            title: 'Experiencias Memorables',
            description: 'Más que una invitación, es una experiencia. Incluye mapas, itinerarios, galerías y mucho más.',
        },
        {
            icon: '🌟',
            title: 'Tecnología Inteligente',
            description: 'Funciones avanzadas como contador regresivo, mesa de regalos, confirmación por grupos y personalización dinámica.',
        },
        {
            icon: '💝',
            title: 'Servicio Premium',
            description: 'Acompañamiento personalizado en cada paso. Desde el diseño hasta el día de tu evento.',
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
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="card card-hover p-8 text-center group animate-slide-up"
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-dark-900 mb-3">
                            {feature.title}
                        </h3>
                        <p className="text-dark-600 leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
