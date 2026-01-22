import { ChevronRight, Play, CheckCircle2, Bell } from 'lucide-react';

export default function Hero() {
    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToDemos = () => {
        document.getElementById('demos')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-white">
            {/* Minimalist Background Blobs */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-primary-50 rounded-full blur-3xl opacity-50 -z-10"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-accent-50 rounded-full blur-3xl opacity-50 -z-10"></div>

            <div className="section-container">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Left Content */}
                    <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary-600 text-sm font-semibold">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                            Nuevo: Gestión de RSVP en Tiempo Real
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-dark-900 leading-[1.1] tracking-tight font-display">
                            La Invitación que <span className="gradient-text">Gestiona tu Evento</span> por Ti
                        </h1>

                        <p className="text-xl md:text-2xl text-dark-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Diseños que enamoran a tus invitados y automatización que te ahorra horas de estrés.
                            Confirmaciones, mapas y pases en piloto automático.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                            <button
                                onClick={scrollToDemos}
                                className="btn-primary group flex items-center justify-center gap-2 shadow-2xl"
                            >
                                <Play className="w-5 h-5 fill-current" />
                                Ver Demos en Vivo
                            </button>
                            <button
                                onClick={scrollToPricing}
                                className="btn-outline border-dark-200 text-dark-700 hover:bg-dark-50 flex items-center justify-center gap-2"
                            >
                                Ver Precios
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 pt-6 text-sm text-dark-500 font-medium">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                RSVP Automático
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                Mapas Inteligentes
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                                Pases Digitales
                            </div>
                        </div>
                    </div>

                    {/* Right Visual (Mockup) */}
                    <div className="flex-1 relative animate-slide-up">
                        <div className="relative mx-auto w-[280px] md:w-[320px] aspect-[9/19] bg-dark-900 rounded-[3rem] border-[12px] border-dark-800 shadow-2xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 opacity-20"></div>

                            {/* Mock Invitation Content */}
                            <div className="relative p-6 space-y-6 flex flex-col items-center justify-center h-full text-white text-center">
                                <div className="font-script text-3xl">J & M</div>
                                <div className="text-sm tracking-widest uppercase">Nuestra Boda</div>
                                <div className="text-4xl font-display font-bold">¡Nos Casamos!</div>
                                <div className="w-full h-px bg-white/20"></div>
                                <button className="bg-white text-primary-600 px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                                    Confirmar Asistencia
                                </button>
                            </div>

                            {/* Status Bar */}
                            <div className="absolute top-0 w-full h-6 flex justify-between px-6 pt-2">
                                <div className="text-[10px] text-white">9:41</div>
                                <div className="flex gap-1">
                                    <div className="w-3 h-3 border border-white rounded-full"></div>
                                    <div className="w-3 h-3 border border-white rounded-full"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Notification */}
                        <div className="absolute top-1/2 -right-4 md:-right-12 translate-y-[-50%] bg-white p-4 rounded-2xl shadow-luxury border border-dark-50 flex items-center gap-4 animate-float max-w-[240px]">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                <Bell className="w-6 h-6 text-green-600" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-dark-900">Confirmación recibida</p>
                                <p className="text-[10px] text-dark-500 leading-tight">Familia Pérez asistirá con 4 personas • Hace 2 min</p>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-accent-100 rounded-full blur-2xl opacity-60"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
