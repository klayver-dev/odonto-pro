import Image from "next/image";
import DoctorHero from "../../../../public/doctor-hero.png"

export function Hero() {
  return (
    <section id="home" className="gradient-bg text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">Agende consultas de forma fácil e rápida com <span className="border-b-4 border-white">odontoPRO</span></h1>
              <p className="text-xl mb-8">
                O sistema de agendamento completo que simplifica a gestão da sua clínica ou consultório, economizando tempo e melhorando a experiência dos seus pacientes.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <a href="#demo" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-bold text-lg text-center transition duration-300">Teste Grátis</a>
                  <a href="#features" className="border-2 border-white hover:bg-white hover:text-teal-600 px-8 py-4 rounded-lg font-bold text-lg text-center transition duration-300">Conheça as Funcionalidades</a>
              </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:ml-18">
            <Image
              alt="Hero do site"
              src={DoctorHero}
              className="rounded-lg max-w-sm w-full hidden md:block"
              priority
              quality={100}
            />
          </div>
      </div>
    </section>
  )
}