import { motion } from 'framer-motion';
import { Globe, Server, Palette, Cpu, CheckCircle2 } from 'lucide-react';

const services = [
    {
        title: "Sites Inteligentes",
        description: "Websites profissionais focados em conversão, com performance otimizada e arquitetura SEO.",
        icon: Globe,
        features: ["Design Responsivo", "Otimização de Velocidade", "Integração com IA"]
    },
    {
        title: "Sistemas Customizados",
        description: "Desenvolvimento de software sob medida com inteligência artificial para otimizar seus processos.",
        icon: Cpu,
        features: ["Automação de Tarefas", "Análise de Dados", "Escalabilidade"]
    },
    {
        title: "Hospedagem & Performance",
        description: "Servidores de alta performance com segurança máxima para garantir que seu site nunca pare.",
        icon: Server,
        features: ["Backup Automático", "Suporte Humanizado", "Certificado SSL"]
    },
    {
        title: "Branding & Design",
        description: "Criação de identidades visuais modernas que conectam sua marca ao público-alvo.",
        icon: Palette,
        features: ["Logotipos", "Guia de Estilo", "UI/UX Design"]
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-secondary/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-4">Serviços que Impulsionam seu <span className="text-primary">Crescimento</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Combinamos design de vanguarda com as tecnologias mais recentes para entregar resultados reais.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 hover:bg-white/[0.08] transition-all flex flex-col h-full"
                        >
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                <service.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{service.description}</p>

                            <ul className="space-y-3 mt-auto">
                                {service.features.map(feature => (
                                    <li key={feature} className="flex items-center gap-2 text-xs text-gray-300">
                                        <CheckCircle2 size={14} className="text-primary" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
