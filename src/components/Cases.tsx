import { motion } from 'framer-motion';

const cases = [
    {
        title: "Zion Tecnologia",
        category: "Site Institucional",
        description: "Uma plataforma moderna para líderes em sistemas de importação.",
        image: "/Zion tecnologia.png",
        tags: ["WordPress", "SEO", "Performance"]
    },
    {
        title: "DuimpWeb",
        category: "Portal de Notícias",
        description: "Portal customizado para disseminação de conteúdo do setor têxtil.",
        image: "/DuimpWeb.png",
        tags: ["CMS Custom", "IA", "Design"]
    },
    {
        title: "ProjecTi",
        category: "Soluções Digitais",
        description: "Referência em soluções digitais e inteligência aplicada.",
        image: "/Projecti.png",
        tags: ["Solutions", "Tech", "Branding"]
    }
];

const Cases = () => {
    return (
        <section id="cases" className="py-24 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl lg:text-5xl font-bold mb-4 italic text-white">Cases de <span className="text-primary">Sucesso</span></h2>
                        <p className="text-gray-400">Projetos que transformaram negócios e elevaram o patamar digital de nossos clientes.</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {cases.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10"
                        >
                            <div className="aspect-[16/10] overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60"></div>
                            </div>

                            <div className="p-8 relative">
                                <div className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{project.category}</div>
                                <h3 className="text-2xl font-bold mb-3 text-white">{project.title}</h3>
                                <p className="text-gray-400 text-sm mb-6">{project.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-medium text-gray-300">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Cases;
