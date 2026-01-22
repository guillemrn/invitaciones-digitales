import { Instagram, Facebook, MessageCircle, Mail, Phone, MapPin, ChevronUp } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark-900 text-dark-300 py-12">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="font-display text-2xl font-bold text-white mb-4">
                            Invitaciones Digitales
                        </h3>
                        <p className="text-dark-400 leading-relaxed mb-4">
                            Creamos experiencias digitales memorables para tus eventos más especiales.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-600 hover:scale-110 hover:rotate-12 transition-all duration-300 group"
                            >
                                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-600 hover:scale-110 hover:rotate-12 transition-all duration-300 group"
                            >
                                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            </a>
                            <a
                                href="https://wa.me/5215512345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-600 hover:scale-110 hover:rotate-12 transition-all duration-300 group"
                            >
                                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Enlaces Rápidos</h4>
                        <ul className="space-y-2">
                            <li>
                                <button
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                    className="hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                                    Inicio
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group"
                                >
                                    <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                                    Paquetes
                                </button>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                                    Galería
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary-400 transition-colors duration-300 flex items-center gap-2 group">
                                    <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contacto</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 group">
                                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-300" />
                                <a
                                    href="mailto:hola@invitacionesdigitales.com"
                                    className="hover:text-primary-400 transition-colors duration-300"
                                >
                                    hola@invitacionesdigitales.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2 group">
                                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-primary-400 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                                <a
                                    href="https://wa.me/5215512345678"
                                    className="hover:text-primary-400 transition-colors duration-300"
                                >
                                    +52 55 1234 5678
                                </a>
                            </li>
                            <li className="flex items-start gap-2 group">
                                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-primary-400 group-hover:scale-110 transition-all duration-300" />
                                <span>Zona Metropolitana de Guadalajara</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-dark-800 text-center text-dark-500 text-sm">
                    <p>
                        © {currentYear} Invitaciones Digitales Premium. Todos los derechos reservados.
                    </p>
                    <p className="mt-2 flex items-center justify-center gap-2">
                        Diseñado con
                        <span className="inline-block text-primary-400 hover:scale-125 hover:rotate-12 transition-all duration-300 cursor-default">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                            </svg>
                        </span>
                        para crear momentos inolvidables
                    </p>
                </div>
            </div>
        </footer>
    );
}
