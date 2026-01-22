import { Sparkles, Zap, Heart, ChevronDown } from 'lucide-react';

export default function Hero() {
    const scrollToPricing = () => {
        document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 via-primary-100 to-accent-50">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
                <div className="absolute top-40 right-20 w-96 h-96 bg-accent-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-400"></div>
                <div className="absolute -bottom-20 left-1/2 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float animation-delay-600"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 section-container text-center">
                <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
                    {/* Decorative Script Text */}
                    <p className="font-script text-3xl md:text-4xl text-primary-600 animate-slide-up">
                        Momentos Inolvidables
                    </p>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-dark-900 leading-tight animate-slide-up animation-delay-200">
                        Invitaciones Digitales{' '}
                        <span className="gradient-text">que Enamoran</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-dark-600 max-w-3xl mx-auto leading-relaxed animate-slide-up animation-delay-400">
                        Transforma tus eventos en experiencias memorables con invitaciones digitales premium.
                        Diseño personalizado, tecnología inteligente y servicio excepcional.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 animate-slide-up animation-delay-600">
                        <button
                            onClick={scrollToPricing}
                            className="btn-accent text-lg group"
                        >
                            Ver Paquetes
                            <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={() => window.open('https://wa.me/5215512345678', '_blank')}
                            className="btn-outline text-lg group"
                        >
                            Contactar por WhatsApp
                            <svg className="inline-block ml-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-12 flex flex-wrap justify-center gap-8 text-dark-600 animate-fade-in animation-delay-800">
                        <div className="flex items-center gap-2 group cursor-default">
                            <Sparkles className="w-6 h-6 text-primary-500 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                            <span className="text-sm md:text-base">Diseños Únicos</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-default">
                            <Zap className="w-6 h-6 text-accent-500 group-hover:scale-110 transition-all duration-300" />
                            <span className="text-sm md:text-base">Entrega Rápida</span>
                        </div>
                        <div className="flex items-center gap-2 group cursor-default">
                            <Heart className="w-6 h-6 text-primary-500 group-hover:scale-110 group-hover:fill-primary-500 transition-all duration-300" />
                            <span className="text-sm md:text-base">100% Personalizado</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
                    <div className="w-1.5 h-3 bg-primary-500 rounded-full mt-2"></div>
                </div>
            </div>
        </section>
    );
}
