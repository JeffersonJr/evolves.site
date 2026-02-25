import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
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
                        Políticas de <span className="text-primary">Privacidade</span>
                    </motion.h1>

                    <div className="prose prose-invert max-w-none space-y-8 text-gray-400">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 italic">1. Coleta de Informações</h2>
                            <p>Coletamos informações que você nos fornece diretamente, como quando você preenche nosso formulário de contato ou solicita uma consultoria.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 italic">2. Uso das Informações</h2>
                            <p>As informações coletadas são utilizadas exclusivamente para:</p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Responder a suas solicitações de contato;</li>
                                <li>Melhorar nossos serviços e a experiência do usuário;</li>
                                <li>Enviar comunicações relacionadas aos projetos em andamento.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 italic">3. Proteção de Dados</h2>
                            <p>Implementamos medidas de segurança técnicas e organizacionais para proteger seus dados contra acesso não autorizado, alteração ou destruição.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-4 italic">4. Seus Direitos</h2>
                            <p>De acordo com a LGPD, você tem o direito de acessar, corrigir ou excluir seus dados pessoais a qualquer momento. Entre em contato conosco para exercer esses direitos.</p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
