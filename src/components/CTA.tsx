import { MessageCircle, ArrowRight, TrendingUp, Users, Clock } from 'lucide-react';

export default function CTA() {
    return (
        <section className="section-container bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-400 rounded-full filter blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <div className="animate-fade-in">
                    <p className="font-script text-2xl md:text-3xl text-primary-100 mb-4">
                        ¿Listo para comenzar?
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                        Comienza a Crear Tu Invitación Hoy
                    </h2>
                    <p className="text-lg md:text-xl text-primary-100 mb-12 leading-relaxed max-w-2xl mx-auto">
                        Déjanos ayudarte a crear una invitación digital que tus invitados recordarán.
                        Contáctanos por WhatsApp y cuéntanos sobre tu evento.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => window.open('https://wa.me/5215512345678?text=Hola! Me gustaría crear una invitación digital', '_blank')}
                            className="bg-white text-primary-700 px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2 group"
                        >
                            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                            Contactar por WhatsApp
                        </button>
                        <button
                            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-primary-700 transition-all duration-300 flex items-center gap-2 group"
                        >
                            Ver Precios
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
                        <div className="animate-slide-up group cursor-default">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                                <TrendingUp className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-300" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">100+</div>
                            <div className="text-primary-100">Eventos Realizados</div>
                        </div>
                        <div className="animate-slide-up animation-delay-200 group cursor-default">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                                <Users className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">98%</div>
                            <div className="text-primary-100">Satisfacción del Cliente</div>
                        </div>
                        <div className="animate-slide-up animation-delay-400 group cursor-default">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 mb-4 group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                                <Clock className="w-8 h-8 text-white group-hover:rotate-180 transition-transform duration-500" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
                            <div className="text-primary-100">Soporte Disponible</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
