import { BellRing, CalendarClock, Clock3, FileChartColumn, MonitorSmartphone, Users } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Tudo que você precisa em um só lugar</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Simplifique sua rotina e ofereça uma experiência excepcional aos seus pacientes</p>
          </div>
              
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-xl feature-card transition duration-300">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                  <CalendarClock className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Agendamento Inteligente</h3>
                <p className="text-gray-600">Seus pacientes podem agendar consultas diretamente pelo site, escolhendo o serviço e horário disponível, sem necessidade de ligações.</p>
            </div>
              
            {/* Feature 2 */}
            <div className="bg-gray-50 p-8 rounded-xl feature-card transition duration-300">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                  <BellRing className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Lembretes Automáticos</h3>
                <p className="text-gray-600">Notificações por SMS e e-mail são enviadas automaticamente para confirmar consultas e reduzir faltas.</p>
            </div>
              
            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-xl feature-card transition duration-300">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                  <FileChartColumn className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Relatórios Detalhados</h3>
                <p className="text-gray-600">Acompanhe o desempenho do seu consultório com relatórios financeiros e de produtividade em tempo real.</p>
            </div>
              
            {/* Feature 4 */}
            <div className="bg-gray-50 p-8 rounded-xl feature-card transition duration-300">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                  <Users className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Gestão de Pacientes</h3>
                <p className="text-gray-600">Armazene todas as informações dos pacientes de forma segura e organizada, com histórico de consultas e tratamentos.</p>
            </div>
              
            {/* Feature 5 */}
            <div className="bg-gray-50 p-8 rounded-xl feature-card transition duration-300">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                  <Clock3 className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Horários Personalizados</h3>
                <p className="text-gray-600">Defina seus horários de trabalho, intervalos e períodos de indisponibilidade de forma simples e intuitiva.</p>
            </div>
              
            {/* Feature 6 */}
            <div className="bg-gray-50 p-8 rounded-xl feature-card transition duration-300">
                <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mb-6">
                  <MonitorSmartphone className="text-white text-3xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Acesso Multiplataforma</h3>
                <p className="text-gray-600">Acesse o sistema de qualquer dispositivo, com aplicativo móvel para você e sua equipe ficarem sempre conectados.</p>
            </div>
          </div>
        </div>
    </section>
  )
}