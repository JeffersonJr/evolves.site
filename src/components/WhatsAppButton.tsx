import { useState } from "react";
import { X } from "lucide-react";

const WHATSAPP_NUMBER = "5513981326869";

const subjects = [
  "Sites Inteligentes",
  "Sistemas Customizados",
  "Hospedagem & Performance",
  "Branding & Design",
  "Outro",
];

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: subjects[0], message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, vim pelo site da Evolves!\n\nNome: ${formData.name}\nE-mail: ${formData.email}\nAssunto: ${formData.subject}\n\n${formData.message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    setIsOpen(false);
    setFormData({ name: "", email: "", subject: subjects[0], message: "" });
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center cursor-pointer rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-110"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-md rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)] animate-fade-up">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Fale com um Especialista</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">
              Preencha os dados abaixo para enviarmos sua mensagem diretamente para o nosso WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="wa-name" className="block text-sm font-medium mb-1">Nome completo</label>
                <input 
                  id="wa-name" 
                  required 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" 
                  placeholder="Seu nome" 
                />
              </div>
              <div>
                <label htmlFor="wa-email" className="block text-sm font-medium mb-1">E-mail corporativo</label>
                <input 
                  id="wa-email" 
                  type="email" 
                  required 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none" 
                  placeholder="seu@email.com.br" 
                />
              </div>
              <div>
                <label htmlFor="wa-subject" className="block text-sm font-medium mb-1">Assunto</label>
                <select
                  id="wa-subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
                >
                  {subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="wa-message" className="block text-sm font-medium mb-1">Como podemos te ajudar?</label>
                <textarea 
                  id="wa-message" 
                  required 
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full rounded-xl border border-border bg-background px-4 py-2 text-sm min-h-[100px] resize-none focus:border-primary focus:ring-1 focus:ring-primary outline-none" 
                  placeholder="Descreva brevemente o seu projeto..." 
                />
              </div>
              <button 
                type="submit" 
                className="mt-2 w-full cursor-pointer rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-[1.02]"
              >
                Iniciar Conversa
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
