import Link from "next/link"
import { ArrowLeft, Users, Target, Award, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="container px-4 sm:px-6 py-4 max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#60A5FA] hover:text-[#3B82F6] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Biznes
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container px-4 sm:px-6 py-8 sm:py-12 max-w-4xl mx-auto">
        <div className="space-y-8 sm:space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1E]">
              Acerca de{" "}
              <span className="bg-gradient-to-r from-[#5DADEC] via-[#9B8AFB] to-[#6EE7B7] bg-clip-text text-transparent">
                Biznes
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-[#6E6E73] max-w-3xl mx-auto">
              Tu agente de IA personal que transforma cómo gestionas y haces crecer tu negocio de manera más inteligente.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-[#F5F5F7] rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-[#60A5FA]" />
              <h2 className="text-2xl font-bold text-[#1C1C1E]">Nuestra Misión</h2>
            </div>
            <p className="text-[#6E6E73] leading-relaxed">
              Hacemos que cualquier negocio, sin importar su tamaño, acceda a herramientas inteligentes para
              optimizar sus operaciones, crecer y competir en igualdad de condiciones..
            </p>
          </div>

          {/* Values Section */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-[#60A5FA]/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-[#60A5FA]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1C1C1E]">Centrados en el Cliente</h3>
              <p className="text-sm text-[#6E6E73]">
                Cada decisión que tomamos está enfocada en resolver los problemas reales de nuestros usuarios.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-[#60A5FA]/10 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-6 w-6 text-[#60A5FA]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1C1C1E]">Excelencia</h3>
              <p className="text-sm text-[#6E6E73]">
                Nos comprometemos a ofrecer soluciones modernas, eficientes y bien diseñadas.
              </p>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-[#60A5FA]/10 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-6 w-6 text-[#60A5FA]" />
              </div>
              <h3 className="text-lg font-semibold text-[#1C1C1E]">Pasión y compromiso</h3>
              <p className="text-sm text-[#6E6E73]">
              Disfrutamos lo que hacemos todos los días y nos comprometemos con la innovación y el crecimiento de las PYMES.
              </p>
            </div>
          </div>

          {/* Story Section */}
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] text-center">Nuestra Historia</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-[#6E6E73] leading-relaxed">
                Biznes nació al trabajar de cerca con pequeñas empresas y ver que necesitaban más organización, procesos claros y un plan para crecer.
              </p>
              <p className="text-[#6E6E73] leading-relaxed">
                Por eso creamos herramientas sencillas, que usan inteligencia artificial, para ayudar a que todo sea más fácil y eficiente.
              </p>
              <p className="text-[#6E6E73] leading-relaxed">
                Hoy, Biznes ayuda a las empresas a mejorar su día a día, vender más y tomar decisiones con confianza, apoyándolas a crecer de manera flexible, estratégica y competitiva.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-[#8cc5f6] to-[#90cee0] rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">¿Listo para transformar tu negocio?</h2>
            <p className="mb-6 opacity-90">
              Únete a más empresarios que ya confían en Biznes para hacer crecer sus negocios.
            </p>
            <Link
              href="https://app.biznes.mx/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#60A5FA] px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Comenzar Ahora
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
