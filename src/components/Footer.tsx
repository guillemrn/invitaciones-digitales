import { ShieldCheck, Mail, Globe, Sparkles } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-white border-t border-dark-50 pt-24 pb-12">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
                    {/* Brand & Mission */}
                    <div className="md:col-span-2 space-y-6">
                        <div className="flex items-center gap-2 group cursor-pointer">
                            <div className="w-10 h-10 bg-dark-900 rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold font-display text-dark-900 tracking-tight">JoyLink</span>
                        </div>
                        <p className="text-dark-500 text-lg leading-relaxed max-w-sm">
                            La plataforma premium para invitaciones digitales que automatiza la gestión de tus momentos más especiales.
                        </p>
                        <div className="flex gap-4 items-center pt-2">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-dark-100 flex items-center justify-center overflow-hidden">
                                        <div className={`w-full h-full bg-gradient-to-br ${i % 2 === 0 ? 'from-primary-200 to-accent-200' : 'from-accent-200 to-primary-200'}`}></div>
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm font-bold text-dark-600">+10,000 Invitados gestionados</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-dark-900 uppercase tracking-widest text-xs mb-8">Navegación</h4>
                        <ul className="space-y-4">
                            <li><a href="#demos" className="text-dark-500 hover:text-primary-600 transition-colors">Demos en Vivo</a></li>
                            <li><a href="#how-it-works" className="text-dark-500 hover:text-primary-600 transition-colors">Cómo Funciona</a></li>
                            <li><a href="#pricing" className="text-dark-500 hover:text-primary-600 transition-colors">Precios</a></li>
                            <li><a href="#" className="text-dark-500 hover:text-primary-600 transition-colors">Event Planners</a></li>
                        </ul>
                    </div>

                    {/* Contact & Support */}
                    <div>
                        <h4 className="font-bold text-dark-900 uppercase tracking-widest text-xs mb-8">¿Necesitas ayuda técnica?</h4>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-dark-500">
                                <Mail className="w-5 h-5 text-primary-500" />
                                <a href="mailto:hola@joylink.mx" className="hover:text-primary-600">hola@joylink.mx</a>
                            </li>
                            <li className="flex items-center gap-3 text-dark-500">
                                <Globe className="w-5 h-5 text-primary-500" />
                                <span>joylink.mx</span>
                            </li>
                            <li className="pt-4">
                                <button className="flex items-center gap-2 text-primary-600 font-bold hover:underline">
                                    Chat con Soporte (WhatsApp)
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Legal & Trust */}
                <div className="pt-12 border-t border-dark-50 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-6 text-sm font-medium text-dark-400">
                        <a href="#" className="hover:text-dark-900">Privacidad</a>
                        <a href="#" className="hover:text-dark-900">Términos</a>
                        <span>© {currentYear} JoyLink</span>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 px-4 py-2 bg-dark-50 rounded-lg text-dark-500 text-xs font-bold border border-dark-100">
                            <ShieldCheck className="w-4 h-4 text-green-600" />
                            Stripe Secure Pay
                        </div>
                        <div className="flex items-center gap-2 px-4 py-2 bg-dark-50 rounded-lg text-dark-500 text-xs font-bold border border-dark-100">
                            <ShieldCheck className="w-4 h-4 text-green-600" />
                            SSL Encrypted
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
