import { motion } from 'framer-motion';
import { Target, Users, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl lg:text-5xl font-bold mb-8 italic">
                            Nossa <span className="text-primary">Missão</span> é Evoluir o Seu Negócio
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Na Evolves Tecnologia, não apenas entregamos código. Nós construímos pilares digitais que sustentam o crescimento de empresas modernas. Nossa abordagem une design intuitivo com inteligência artificial para criar soluções que são, ao mesmo tempo, belas e extremamente eficientes.
                        </p>

                        <div className="space-y-6">
                            {[
                                {
                                    icon: Target,
                                    title: "Foco em Resultados",
                                    desc: "Cada pixel e cada linha de código são pensados para converter visitantes em clientes."
                                },
                                {
                                    icon: Users,
                                    title: "Parceria Próxima",
                                    desc: "Trabalhamos como uma extensão do seu time, garantindo que sua visão seja superada."
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Tecnologia de Ponta",
                                    desc: "Segurança, performance e escalabilidade são os alicerces de tudo o que criamos."
                                }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-[40px] overflow-hidden border border-white/10 bg-white/5 p-2">
                            <div className="w-full h-full rounded-[32px] overflow-hidden relative">
                                <img
                                    src="/performance_dash.png"
                                    alt="Performance Dashboard Visualization"
                                    className="w-full h-full object-cover opacity-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-transparent opacity-60"></div>
                            </div>
                        </div>

                        {/* Stats Overlay */}
                        <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-3xl shadow-2xl shadow-primary/20 hidden md:block">
                            <div className="text-4xl font-black text-secondary mb-1">100%</div>
                            <div className="text-xs font-bold text-secondary/70 uppercase tracking-widest">Comprometimento</div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
