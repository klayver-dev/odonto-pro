export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Planos que cabem no seu orçamento</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Escolha o plano ideal para o tamanho do seu consultório</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Basic Plan */}
              <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                  <div className="p-8 text-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Básico</h3>
                      <p className="text-gray-600 mb-6">Ideal para profissionais autônomos</p>
                      <div className="mb-8">
                          <span className="text-4xl font-bold text-teal-500">R$ 19,90</span>
                          <span className="text-gray-600">/mês</span>
                      </div>
                      <a href="#demo" className="block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 mb-6">Assinar agora</a>
                  </div>
                  <div className="border-t border-gray-200 p-8 bg-white">
                      <ul className="space-y-4">
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>1 profissional</span>
                          </li>
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>Agendamento online</span>
                          </li>
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>Lembretes automáticos</span>
                          </li>
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>Até 100 consultas/mês</span>
                          </li>
                      </ul>
                  </div>
              </div>
              
              {/* Professional Plan (Featured) */}
              <div className="bg-gradient-to-b from-teal-500 to-blue-500 rounded-xl overflow-hidden shadow-xl transform md:-translate-y-6">
                  <div className="p-8 text-center text-white">
                      <div className="bg-white text-teal-500 rounded-full py-1 px-4 inline-block mb-4 font-bold text-sm">MAIS POPULAR</div>
                      <h3 className="text-2xl font-bold mb-2">Profissional</h3>
                      <p className="mb-6">Perfeito para pequenas clínicas</p>
                      <div className="mb-8">
                          <span className="text-4xl font-bold">R$ 29,90</span>
                          <span>/mês</span>
                      </div>
                      <a href="#demo" className="block bg-white text-teal-500 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition duration-300 mb-6">Assinar agora</a>
                  </div>
                  <div className="border-t border-teal-400 p-8 bg-white">
                      <ul className="space-y-4">
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>Até 3 profissionais</span>
                          </li>
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>Todos recursos básicos</span>
                          </li>
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>Relatórios avançados</span>
                          </li>
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>Consultas ilimitadas</span>
                          </li>
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>Integração com WhatsApp</span>
                          </li>
                      </ul>
                  </div>
              </div>
              
              {/* Clinic Plan */}
              <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                  <div className="p-8 text-center">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">Clínica</h3>
                      <p className="text-gray-600 mb-6">Para clínicas maiores e franquias</p>
                      <div className="mb-8">
                          <span className="text-4xl font-bold text-teal-500">R$ 49,90</span>
                          <span className="text-gray-600">/mês</span>
                      </div>
                      <a href="#demo" className="block bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition duration-300 mb-6">Assinar agora</a>
                  </div>
                  <div className="border-t border-gray-200 p-8 bg-white">
                      <ul className="space-y-4">
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>Até 10 profissionais</span>
                          </li>
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>Todos recursos profissionais</span>
                          </li>
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>Controle de múltiplas unidades</span>
                          </li>
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>Suporte prioritário</span>
                          </li>
                          <li className="flex items-center text-gray-700">
                              <i className="fas fa-check-circle text-teal-500 mr-3"></i>
                              <span>API para integrações</span>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
          
          <div className="mt-12 text-center">
              <p className="text-gray-600">Precisa de um plano personalizado? <a href="#contact" className="text-teal-500 font-medium hover:underline">Fale conosco</a></p>
          </div>
      </div>
    </section>
  )
}