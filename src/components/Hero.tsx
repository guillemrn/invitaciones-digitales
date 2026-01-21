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
                            className="btn-accent text-lg"
                        >
                            Ver Paquetes
                        </button>
                        <button
                            onClick={() => window.open('https://wa.me/5215512345678', '_blank')}
                            className="btn-outline text-lg"
                        >
                            Contactar por WhatsApp
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-12 flex flex-wrap justify-center gap-8 text-dark-600 animate-fade-in animation-delay-800">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">✨</span>
                            <span className="text-sm md:text-base">Diseños Únicos</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">⚡</span>
                            <span className="text-sm md:text-base">Entrega Rápida</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">💝</span>
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
