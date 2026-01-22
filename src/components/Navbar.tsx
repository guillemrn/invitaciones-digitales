import { useState, useEffect } from 'react';
import { Menu, X, Sparkles, Plus } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Demos', href: '#demos' },
        { name: 'Cómo Funciona', href: '#how-it-works' },
        { name: 'Precios', href: '#pricing' },
    ];

    const scrollToSection = (href: string) => {
        setIsOpen(false);
        if (href === '#') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.querySelector(href);
            element?.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Top Bar for Partners */}
            <div className="bg-dark-900 text-white py-2 text-center text-xs md:text-sm font-medium relative z-[60]">
                ¿Eres Event Planner? Conoce nuestro programa de Partners{' '}
                <a href="#" className="text-primary-400 hover:underline inline-flex items-center gap-1">
                    Aquí <Sparkles className="w-3 h-3" />
                </a>
            </div>

            <nav
                className={`fixed top-10 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/90 backdrop-blur-xl shadow-luxury' : 'py-6 bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <div
                        onClick={() => scrollToSection('#')}
                        className="flex items-center gap-2 cursor-pointer group"
                    >
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-primary group-hover:rotate-12 transition-transform duration-300">
                            <Sparkles className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-2xl font-bold font-display text-dark-900 tracking-tight">
                            Joy<span className="text-primary-600">Link</span>
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className="text-dark-600 font-medium hover:text-primary-600 transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full"></span>
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('#pricing')}
                            className="btn-primary py-3 px-8 text-sm flex items-center gap-2 bg-dark-900 group"
                        >
                            <Plus className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                            Crear mi Invitación
                        </button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden p-2 text-dark-900 focus:outline-none group relative w-10 h-10 flex items-center justify-center"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <div className={`transition-all duration-500 transform ${isOpen ? 'rotate-180 scale-110' : ''}`}>
                            {isOpen ? <X className="w-8 h-8 text-primary-600" /> : <Menu className="w-8 h-8" />}
                        </div>
                    </button>
                </div>

                {/* Mobile Menu Content */}
                <div
                    className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex flex-col h-full p-8 pt-24">
                        <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 p-2 text-dark-400">
                            <X className="w-8 h-8" />
                        </button>

                        <div className="flex flex-col gap-8">
                            {navLinks.map((link, index) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.href)}
                                    className={`text-3xl font-bold font-display text-dark-900 text-left hover:text-primary-600 transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                                        }`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>

                        <div className="mt-auto pb-8">
                            <button
                                onClick={() => scrollToSection('#pricing')}
                                className="w-full btn-primary py-5 text-lg shadow-xl"
                            >
                                Crear mi Invitación
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
