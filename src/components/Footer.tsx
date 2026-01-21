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
                                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                            >
                                📷
                            </a>
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                            >
                                📘
                            </a>
                            <a
                                href="https://wa.me/5215512345678"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 bg-dark-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                            >
                                💬
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
                                    className="hover:text-primary-400 transition-colors duration-300"
                                >
                                    Inicio
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                                    className="hover:text-primary-400 transition-colors duration-300"
                                >
                                    Paquetes
                                </button>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                                    Galería
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-primary-400 transition-colors duration-300">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-semibold text-white mb-4">Contacto</h4>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                                <span>📧</span>
                                <a
                                    href="mailto:hola@invitacionesdigitales.com"
                                    className="hover:text-primary-400 transition-colors duration-300"
                                >
                                    hola@invitacionesdigitales.com
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>📱</span>
                                <a
                                    href="https://wa.me/5215512345678"
                                    className="hover:text-primary-400 transition-colors duration-300"
                                >
                                    +52 55 1234 5678
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>📍</span>
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
                    <p className="mt-2">
                        Diseñado con 💝 para crear momentos inolvidables
                    </p>
                </div>
            </div>
        </footer>
    );
}
