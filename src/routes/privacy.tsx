import { pageHead } from "@/lib/seo";
import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => pageHead("/privacy"),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 mx-auto max-w-4xl px-6 py-32 sm:py-40">
        <h1 className="text-4xl font-bold tracking-tight mb-8">Política de Privacidade</h1>
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p>
            A sua privacidade é importante para nós. É política da Evolves Tecnologia respeitar a sua
            privacidade em relação a qualquer informação sua que possamos coletar no nosso site e em outros
            sites que possuímos e operamos.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Informações que coletamos</h2>
          <p>
            Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um
            serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também
            informamos por que estamos coletando e como será usado.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Uso e retenção de dados</h2>
          <p>
            Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado.
            Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar
            perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Compartilhamento de dados</h2>
          <p>
            Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto
            quando exigido por lei.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Seus direitos</h2>
          <p>
            Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não
            possamos fornecer alguns dos serviços desejados. Se você tiver alguma dúvida sobre como lidamos
            com dados do usuário e informações pessoais, entre em contato conosco.
          </p>

          <p className="mt-8 text-sm text-muted-foreground">Esta política é efetiva a partir de Janeiro de 2024.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
