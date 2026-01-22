import { useState, useEffect } from 'react';
import { Menu, X, Sparkles } from 'lucide-react';

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
        { name: 'Inicio', href: '#' },
        { name: 'Características', href: '#features' },
        { name: 'Precios', href: '#pricing' },
        { name: 'Galería', href: '#gallery' },
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
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-4 bg-white/80 backdrop-blur-xl shadow-luxury' : 'py-6 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <div
                    onClick={() => scrollToSection('#')}
                    className="flex items-center gap-2 cursor-pointer group"
                >
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center shadow-primary group-hover:rotate-12 transition-transform duration-300">
                        <Sparkles className="w-6 h-6 text-white animate-pulse-subtle" />
                    </div>
                    <span className="text-xl font-bold font-display text-dark-900 group-hover:text-primary-600 transition-colors duration-300">
                        Invitaciones <span className="text-primary-600">Premium</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
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
                        onClick={() => window.open('https://wa.me/5215512345678', '_blank')}
                        className="btn-primary py-2.5 px-6 text-sm animate-shimmer"
                    >
                        Contactar
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

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-dark-900/40 backdrop-blur-md z-40 transition-opacity duration-500 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setIsOpen(false)}
            />

            {/* Mobile Menu Content */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-[80%] max-w-xs bg-white z-50 shadow-2xl transform transition-transform duration-500 ease-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full p-8">
                    <div className="flex items-center justify-between mb-12">
                        <span className="text-xl font-bold font-display text-primary-600">Menú</span>
                        <button onClick={() => setIsOpen(false)} className="p-2 text-dark-400 hover:text-primary-600">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex flex-col gap-6">
                        {navLinks.map((link, index) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.href)}
                                className={`text-2xl font-bold font-display text-dark-900 text-left hover:text-primary-600 transition-all duration-300 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                                    }`}
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    <div className="mt-auto pt-12">
                        <button
                            onClick={() => window.open('https://wa.me/5215512345678', '_blank')}
                            className="w-full btn-accent animate-shimmer py-4"
                        >
                            Cotizar Proyecto
                        </button>
                        <p className="mt-6 text-center text-dark-400 text-sm">
                            Diseñamos momentos inolvidables
                        </p>
                    </div>
                </div>
            </div>
        </nav>
    );
}
