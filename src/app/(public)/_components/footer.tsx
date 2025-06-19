import { Logo } from "./logo";

export function Footer() {
  return (
<footer className="bg-gray-800 text-white py-12">
    <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center">
            <div className="mb-8 md:mb-0 flex flex-col items-center text-center">
                <div className="flex items-center mb-4">
                    <Logo />
                    <span className="ml-3 text-xl font-bold">odonto<span className="text-teal-400">PRO</span></span>
                </div>
                <p className="text-gray-400 max-w-xs">O sistema de agendamento completo para clínicas e profissionais de saúde.</p>
            </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
            <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <p className="text-gray-400">
                    OdontoPRO © Todos os direitos reservados 2024 - {new Date().getFullYear()}
                </p>
                <span className="text-white font-bold hover:text-emerald-500 cursor-pointer transition">
                    EVOM
                </span>
            </div>
        </div>
    </div>
</footer>
  )
}