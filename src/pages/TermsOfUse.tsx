import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-[#000D16] text-white">
            <Header />
            <main className="pt-32 pb-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl lg:text-6xl font-bold mb-12 italic"
                    >
                        Termos de <span className="text-primary">Uso</span>
                    </motion.h1>

                    <div className="prose prose-invert max-w-none space-y-8 text-gray-400">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 italic">1. Aceitação dos Termos</h2>
                            <p>Ao acessar o site da Evolves Tecnologia, você concorda em cumprir estes termos de serviço e todas as leis e regulamentos aplicáveis.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 italic">2. Licença de Uso</h2>
                            <p>É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da Evolves Tecnologia, apenas para visualização transitória pessoal e não comercial.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 italic">3. Isenção de Responsabilidade</h2>
                            <p>Os materiais no site da Evolves Tecnologia são fornecidos 'como estão'. A Evolves não oferece garantias, expressas ou implícitas, e por este meio isenta e nega todas as outras garantias.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 italic">4. Limitações</h2>
                            <p>Em nenhum caso a Evolves Tecnologia ou seus fornecedores serão responsáveis por quaisquer danos decorrentes do uso ou da incapacidade de usar os materiais em seu site.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default TermsOfUse;
