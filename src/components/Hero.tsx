import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
    return (
        <section id="top" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="container mx-auto px-6">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium mb-8"
                    >
                        <Sparkles size={16} />
                        Líder em Soluções com IA e Design Inteligente
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8"
                    >
                        Transformamos Ideias em <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Experiências Digitais</span> de Alto Impacto.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed"
                    >
                        Criamos soluções personalizadas com inteligência artificial para empresas que buscam escala, eficiência e uma presença digital inesquecível.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <a
                            href="#contact"
                            className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-accent text-secondary font-bold rounded-xl transition-all flex items-center justify-center gap-2 group shadow-xl shadow-primary/20"
                        >
                            Começar Agora
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#services"
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 font-bold rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                            Ver Nossos Serviços
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
