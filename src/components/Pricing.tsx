export default function Pricing() {
    const plans = [
        {
            name: 'ESENCIAL',
            subtitle: 'Invitación Web Básica',
            description: 'La tarjeta de presentación digital perfecta para tu evento',
            launchPrice: 590,
            regularPrice: 750,
            features: [
                'Página web de vista única (sin scroll)',
                'Diseño de la invitación personalizado',
                'Botón de "Confirmar Asistencia"',
                'Formulario con confirmación por grupo',
                'Sistema de confirmación integrado',
                'Responsive (móvil y desktop)',
            ],
            highlighted: false,
            color: 'primary',
        },
        {
            name: 'INTERACTIVO',
            subtitle: 'Landing Page del Evento',
            description: 'El centro de información completo para tu celebración',
            launchPrice: 1190,
            regularPrice: 1490,
            features: [
                'Todo lo del paquete ESENCIAL',
                'Página con scroll y múltiples secciones',
                'Contador regresivo animado',
                'Itinerario del evento',
                'Mapa de Google Maps incrustado',
                'Botones RSVP, Mesa de Regalos, etc.',
                'Personalización dinámica por familia',
            ],
            highlighted: true,
            color: 'accent',
            badge: 'MÁS POPULAR',
        },
        {
            name: 'PREMIUM',
            subtitle: 'Mini Sitio Web Completo',
            description: 'La experiencia de lujo total para eventos especiales',
            launchPrice: 2690,
            regularPrice: 3290,
            features: [
                'Todo lo del paquete INTERACTIVO',
                'Sitio web completo con menú de navegación',
                'Múltiples páginas internas (Inicio, Galería, etc.)',
                'Formulario de confirmación integrado',
                'Dominio personalizado (.com) incluido',
                'Galería de fotos avanzada',
                'Diseño ultra premium',
            ],
            highlighted: false,
            color: 'primary',
        },
    ];

    return (
        <section id="pricing" className="section-container bg-gradient-to-br from-dark-50 via-primary-50 to-accent-50">
            <div className="text-center mb-16 animate-fade-in">
                <p className="font-script text-2xl md:text-3xl text-primary-600 mb-4">
                    Elige tu paquete
                </p>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 mb-6">
                    Precios de Lanzamiento
                </h2>
                <p className="text-lg md:text-xl text-dark-600 max-w-3xl mx-auto">
                    Aprovecha nuestros precios especiales de introducción. Todos los paquetes son 100% web y están diseñados para escalar en funcionalidad.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative card p-8 flex flex-col animate-slide-up ${plan.highlighted ? 'card-hover shadow-2xl ring-4 ring-accent-400 scale-105' : ''
                            }`}
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        {/* Badge */}
                        {plan.badge && (
                            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                <span className="bg-gradient-to-r from-accent-500 to-accent-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                    {plan.badge}
                                </span>
                            </div>
                        )}

                        {/* Plan Header */}
                        <div className="text-center mb-6">
                            <h3 className="text-2xl md:text-3xl font-bold text-dark-900 mb-2">
                                {plan.name}
                            </h3>
                            <p className="text-sm md:text-base font-semibold text-primary-600 mb-3">
                                {plan.subtitle}
                            </p>
                            <p className="text-dark-600 text-sm leading-relaxed">
                                {plan.description}
                            </p>
                        </div>

                        {/* Pricing */}
                        <div className="text-center mb-8">
                            <div className="flex items-baseline justify-center gap-2 mb-2">
                                <span className="text-5xl md:text-6xl font-bold gradient-text">
                                    ${plan.launchPrice.toLocaleString()}
                                </span>
                                <span className="text-dark-600 text-lg">MXN</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <span className="text-sm text-dark-500 line-through">
                                    Precio regular: ${plan.regularPrice.toLocaleString()} MXN
                                </span>
                            </div>
                            <div className="mt-2">
                                <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-semibold">
                                    Ahorra ${(plan.regularPrice - plan.launchPrice).toLocaleString()} MXN
                                </span>
                            </div>
                        </div>

                        {/* Features */}
                        <ul className="space-y-4 mb-8 flex-grow">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <span className="text-primary-500 text-xl flex-shrink-0">✓</span>
                                    <span className="text-dark-700 text-sm md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* CTA Button */}
                        <button
                            onClick={() => window.open('https://wa.me/5215512345678?text=Hola! Me interesa el paquete ' + plan.name, '_blank')}
                            className={`w-full ${plan.highlighted ? 'btn-accent' : 'btn-primary'
                                } text-center`}
                        >
                            Comenzar Ahora
                        </button>

                        {/* Note */}
                        {index === plans.length - 1 && (
                            <p className="text-xs text-dark-500 text-center mt-4">
                                * Precios no incluyen IVA (16%)
                            </p>
                        )}
                    </div>
                ))}
            </div>

            {/* Additional Info */}
            <div className="mt-16 text-center max-w-3xl mx-auto">
                <div className="card p-8 glass">
                    <h3 className="text-xl md:text-2xl font-bold text-dark-900 mb-4">
                        ¿Necesitas factura?
                    </h3>
                    <p className="text-dark-600 leading-relaxed">
                        Para operar formalmente, es necesario el registro fiscal ante el SAT.
                        Al cotizar, te preguntaremos: <strong>"¿Requerirás factura?"</strong> Si la respuesta es afirmativa,
                        el precio final será el costo del paquete más el 16% de IVA correspondiente.
                    </p>
                </div>
            </div>
        </section>
    );
}
