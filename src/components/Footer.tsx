import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="py-12 border-t border-white/10 bg-secondary">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => navigate('/')}
                    >
                        <img src="/logo clara.png" alt="Evolves Logo" className="h-6 w-auto" />
                    </div>

                    <div className="flex items-center gap-8 text-sm text-gray-400">
                        <button onClick={() => navigate('/privacy-policy')} className="hover:text-primary transition-colors cursor-pointer">Políticas de Privacidade</button>
                        <button onClick={() => navigate('/terms-of-use')} className="hover:text-primary transition-colors cursor-pointer">Termos de Uso</button>
                        <a
                            href="https://www.linkedin.com/company/evolves-tecnologia/about/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>

                <div className="text-center md:text-left text-xs text-gray-500">
                    © {new Date().getFullYear()} Evolves Tecnologia. Todos os direitos reservados.
                    <p className="mt-2 text-[10px] opacity-30 uppercase tracking-widest font-bold">Inovação • Inteligência • Evolução</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
