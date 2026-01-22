import { Rocket, Sparkles, Plus } from 'lucide-react';

export default function CTA() {
    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="section-container pb-24 md:pb-32 bg-white">
            <div className="relative bg-dark-900 rounded-[3rem] overflow-hidden p-12 md:p-24 text-center">
                {/* Abstract Background Design */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-600/20 rounded-full blur-[120px] -z-10 animate-float"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-600/20 rounded-full blur-[120px] -z-10 animate-float" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-3xl mx-auto space-y-10 relative z-10 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 text-primary-300 text-sm font-bold border border-white/10">
                        <Rocket className="w-5 h-5" />
                        Únete a +100 eventos exitosos
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white font-display leading-[1.1]">
                        Tu Evento Merece una <br /> <span className="text-primary-400 italic">Gestión Premium</span>
                    </h2>

                    <p className="text-xl text-dark-300 leading-relaxed font-medium">
                        No pierdas más tiempo persiguiendo confirmaciones. JoyLink lo hace por ti mientras tus invitados se quedan asombrados.
                    </p>

                    <div className="pt-6">
                        <button
                            onClick={scrollToPricing}
                            className="btn-primary py-6 px-12 text-xl shadow-2xl bg-white text-dark-900 hover:bg-dark-50 animate-shimmer flex items-center justify-center gap-3 mx-auto"
                        >
                            <Plus className="w-6 h-6" />
                            Crear mi Invitación Ahora
                        </button>
                        <p className="mt-8 text-dark-500 text-sm flex items-center justify-center gap-4">
                            <span className="flex items-center gap-1"><Sparkles className="w-4 h-4" /> Configuración en 5 min</span>
                            <span className="w-1.5 h-1.5 bg-dark-700 rounded-full"></span>
                            <span className="flex items-center gap-1"><Sparkles className="w-4 h-4" /> Soporte Premium</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
