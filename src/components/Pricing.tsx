import { Check, ArrowRight, TrendingUp } from 'lucide-react';

export default function Pricing() {
    const plans = [
        {
            name: 'ESENCIAL',
            subtitle: 'Invitación Web Básica',
            description: 'La tarjeta de presentación digital perfecta para tu evento',
            launchPrice: 690,
            regularPrice: 890,
            stripeLink: 'https://buy.stripe.com/test_00wfZjfwU3lEdCSfbM0gw00',
            features: [
                'Página web de vista única',
                'Diseño personalizado JoyLink',
                'Botón de Confirmar Asistencia',
                'RSVP con confirmación por grupo',
                'Hospedaje premium incluido',
                'Optimizado para móvil',
                'Pago único',
            ],
            highlighted: false,
        },
        {
            name: 'INTERACTIVO',
            subtitle: 'Landing Page del Evento',
            description: 'El centro de información completo para tu celebración',
            launchPrice: 1390,
            regularPrice: 1790,
            stripeLink: 'https://buy.stripe.com/test_28EcN784s09s8iy4x80gw01',
            features: [
                'Todo lo del paquete ESENCIAL',
                'Página con múltiples secciones',
                'Contador regresivo animado',
                'Itinerario interactivo',
                'Mapas de Google Maps',
                'Mesa de Regalos & Pases',
                'Personalización por invitado',
            ],
            highlighted: true,
            badge: 'Oferta de Lanzamiento',
        },
        {
            name: 'PREMIUM',
            subtitle: 'Mini Sitio Web Completo',
            description: 'La experiencia de lujo total para eventos especiales',
            launchPrice: 2990,
            regularPrice: 3990,
            stripeLink: 'https://buy.stripe.com/test_eVq8wR2K81dweGW6Fg0gw02',
            features: [
                'Todo lo del paquete INTERACTIVO',
                'Sitio web con navegación interna',
                'Galería de fotos masiva',
                'Sistema de seguridad VIP',
                'Dominio .com incluido',
                'Soporte Prioritario Concierge',
                'Diseño ultra premium',
            ],
            highlighted: false,
        },
    ];

    return (
        <section id="pricing" className="section-container bg-white">
            <div className="text-center mb-20 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-dark-900 font-display">
                    Planes para Cada Momento
                </h2>
                <p className="text-dark-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                    Precios de lanzamiento transparentes. Elige la automatización que necesitas.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative p-10 flex flex-col rounded-[2.5rem] border-2 transition-all duration-500 animate-slide-up group ${plan.highlighted
                            ? 'bg-dark-900 text-white border-dark-900 shadow-luxury scale-105 z-10'
                            : 'bg-white text-dark-900 border-dark-50 hover:border-primary-200'
                            }`}
                        style={{ animationDelay: `${index * 150}ms` }}
                    >
                        {/* Popular Badge */}
                        {plan.badge && (
                            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                                <span className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-2 rounded-full text-xs font-bold shadow-lg flex items-center gap-2">
                                    <TrendingUp className="w-3 h-3" />
                                    {plan.badge}
                                </span>
                            </div>
                        )}

                        <div className="mb-8">
                            <h3 className="text-2xl font-bold font-display mb-1">{plan.name}</h3>
                            <p className={`text-sm font-medium ${plan.highlighted ? 'text-primary-300' : 'text-primary-600'}`}>
                                {plan.subtitle}
                            </p>
                        </div>

                        <div className="mb-8">
                            <div className="flex flex-col gap-1">
                                <span className={`text-sm line-through ${plan.highlighted ? 'text-dark-500' : 'text-dark-400'}`}>
                                    ${plan.regularPrice.toLocaleString()}
                                </span>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl font-bold font-display tracking-tighter">
                                        ${plan.launchPrice.toLocaleString()}
                                    </span>
                                    <span className={`text-sm ${plan.highlighted ? 'text-dark-400' : 'text-dark-500'}`}>MXN</span>
                                </div>
                            </div>
                        </div>

                        <ul className="space-y-5 mb-10 flex-grow">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3">
                                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${plan.highlighted ? 'bg-green-500/20' : 'bg-green-100'}`}>
                                        <Check className={`w-3 h-3 ${plan.highlighted ? 'text-green-400' : 'text-green-600'}`} strokeWidth={3} />
                                    </div>
                                    <span className={`text-sm font-medium ${plan.highlighted ? 'text-dark-200' : 'text-dark-600'}`}>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href={plan.stripeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`w-full py-5 rounded-2xl font-bold text-base transition-all duration-300 flex items-center justify-center gap-2 shadow-sm ${plan.highlighted
                                ? 'bg-white text-dark-900 hover:bg-dark-50 animate-shimmer'
                                : 'bg-dark-900 text-white hover:bg-dark-800'
                                }`}
                        >
                            Empezar con {plan.name}
                            <ArrowRight className="w-5 h-5" />
                        </a>
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center text-dark-400 text-xs">
                Precios netos en MXN (IVA Incluido). Facturación inmediata disponible.
            </div>
        </section>
    );
}
