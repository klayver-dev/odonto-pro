import { Testimony } from "./testimony";

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">O que nossos clientes dizem</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">Profissionais de saúde que já transformaram seus consultórios</p>
          </div>
          
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Testimony
            srcImg="https://randomuser.me/api/portraits/women/43.jpg"
            name="Dra. Ana Lúcia"
            location="Dentista - São Paulo/SP"
            description="O odontoPRO revolucionou meu consultório. Reduzi em 70% as faltas e agora consigo focar no que realmente importa: meus pacientes."
            alt="Dra. Ana"
          />

          <Testimony
            srcImg="https://randomuser.me/api/portraits/men/32.jpg"
            name="Dr. Carlos Eduardo"
            location="Ortodontista - Rio de Janeiro/RJ"
            description="A economia de tempo foi incrível. Antes perdia horas no telefone marcando consultas, agora tudo é automatizado e organizado."
            alt="Dr. Carlos Eduardo"
          />

          <Testimony
            srcImg="https://randomuser.me/api/portraits/women/65.jpg"
            name="Dra. Mariana Silva"
            location="Clínica Odontológica - Belo Horizonte/MG"
            description="Para nossa clínica com 5 dentistas, o odontoPRO foi a solução perfeita. Centralizamos todos os agendamentos e melhoramos nosso fluxo."
            alt="Dra. Mariana Silva"
          />
          
        </div>
      </div>
    </section>
  )
}