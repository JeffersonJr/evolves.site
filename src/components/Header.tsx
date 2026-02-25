import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
        e.preventDefault();

        if (location.pathname !== '/') {
            navigate('/' + target);
            return;
        }

        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Handle scroll to element after routing back to homepage
    useEffect(() => {
        if (location.pathname === '/' && location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [location]);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/80 backdrop-blur-md border-b border-white/10">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => navigate('/')}
                >
                    <img src="/logo clara.png" alt="Evolves Logo" className="h-8 w-auto" />
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#about" onClick={(e) => handleNavClick(e, '#top')} className="hover:text-primary transition-colors">Home</a>
                    <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-primary transition-colors">Sobre</a>
                    <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-primary transition-colors">Serviços</a>
                    <a href="#cases" onClick={(e) => handleNavClick(e, '#cases')} className="hover:text-primary transition-colors">Cases</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-primary transition-colors">Contato</a>
                </nav>

                <a
                    href="#contact"
                    onClick={(e) => handleNavClick(e, '#contact')}
                    className="bg-primary hover:bg-accent text-secondary px-6 py-2.5 rounded-full text-sm font-bold transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                >
                    Solicitar Consultoria
                </a>
            </div>
        </header>
    );
};

export default Header;
