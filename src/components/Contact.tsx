import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-secondary/80">
            <div className="container mx-auto px-6">
                <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 lg:p-16 overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>

                    <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <h2 className="text-4xl lg:text-6xl font-extrabold mb-8 italic text-white">Vamos <span className="text-primary">Evoluir</span> Seu Projeto?</h2>
                            <p className="text-gray-400 text-lg mb-12">Entre em contato hoje mesmo e descubra como podemos transformar seu negócio com tecnologia inteligente.</p>

                            <div className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Email</div>
                                        <div className="text-lg text-white">contato@evolves.site</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Telefone</div>
                                        <div className="text-lg text-white">+55 (13) 98132-6869</div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">Localização</div>
                                        <div className="text-lg text-white">São Paulo - Brasil</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <form
                                className="space-y-6"
                                action="https://formspree.io/f/contato@evolves.site"
                                method="POST"
                            >
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Nome</label>
                                        <input
                                            type="text"
                                            placeholder="Seu nome completo"
                                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary outline-none transition-all text-white placeholder:text-gray-600"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                                        <input
                                            type="email"
                                            placeholder="seu@email.com"
                                            className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary outline-none transition-all text-white placeholder:text-gray-600"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Assunto</label>
                                    <select className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary outline-none transition-all appearance-none cursor-pointer text-white">
                                        <option className="bg-secondary">Sites Inteligentes</option>
                                        <option className="bg-secondary">HSistemas Customizados</option>
                                        <option className="bg-secondary">Hospedagem & Performance</option>
                                        <option className="bg-secondary">Branding & Design</option>
                                        <option className="bg-secondary">Outro</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400 ml-1">Mensagem</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Como podemos te ajudar?"
                                        className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-primary outline-none transition-all resize-none text-white placeholder:text-gray-600"
                                    ></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-5 bg-primary hover:bg-accent text-secondary font-extrabold rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group"
                                >
                                    Enviar Solicitação
                                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
