import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Demo() {
  return (
    <section id="demo" className="py-20 gradient-bg text-white">
        <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Experimente o odontoPRO gratuitamente</h2>
                <p className="text-xl mb-10">Cadastre-se agora e teste todas as funcionalidades por 14 dias sem compromisso. Sem necessidade de cartão de crédito.</p>
                
                <form className="max-w-md mx-auto">
                    <div className="flex flex-col sm:flex-row gap-4">
                    <Input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="w-full px-4 py-3 rounded-lg gradient-bg text-zinc-800 placeholder:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  />

                      <Button
                        type="submit"
                        className="bg-white text-teal-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-bold transition duration-300 whitespace-nowrap cursor-pointer">
                        Começar teste grátis
                      </Button>
                    </div>
                    <p className="text-sm mt-3 opacity-80">
                      Ao clicar em "Começar teste grátis", você concorda com nossos Termos de Serviço.
                    </p>
              </form>
            </div>
        </div>
    </section>
  )
}