"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight, Video } from "lucide-react"
import Link from "next/link"

export default function SupportPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const faqs = [
    {
      question: "¿Cómo empiezo a usar Biznes?",
      answer:
        "Simplemente regístrate en nuestra plataforma, completa tu perfil de negocio y sigue nuestro asistente de configuración inicial. En menos de 10 minutos tendrás tu cuenta lista para usar.",
    },
    {
      question: "¿Puedo importar mis datos existentes?",
      answer:
        "Sí, Biznes permite importar datos desde Excel, CSV y otras plataformas populares. También ofrecemos asistencia gratuita para la migración de datos en planes premium.",
    },
    {
      question: "¿Qué incluye el plan gratuito?",
      answer:
        "El plan gratuito incluye gestión básica de inventario, hasta 100 productos, reportes básicos y soporte por email. Es perfecto para negocios que están empezando.",
    },
    {
      question: "¿Cómo funciona la IA de Biznes?",
      answer:
        "Nuestra IA analiza tus datos de ventas, inventario y clientes para generar insights automáticos, predicciones de demanda y recomendaciones personalizadas para optimizar tu negocio.",
    },
    {
      question: "¿Mis datos están seguros?",
      answer:
        "Absolutamente. Utilizamos encriptación de nivel bancario, servidores seguros y cumplimos con todas las regulaciones de protección de datos. Tus datos nunca se comparten con terceros.",
    },
    {
      question: "¿Puedo cancelar mi suscripción en cualquier momento?",
      answer:
        "Sí, puedes cancelar tu suscripción en cualquier momento desde tu panel de control. No hay penalizaciones ni cargos ocultos.",
    },
  ]

  const handleFaqToggle = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-white py-12">
      <main className="container mx-auto px-4 max-w-4xl space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1E]">
            Centro de{" "}
            <span className="bg-gradient-to-r from-[#5DADEC] via-[#9B8AFB] to-[#6EE7B7] bg-clip-text text-transparent">
              Soporte
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#6E6E73] max-w-3xl mx-auto">
            Encuentra respuestas rápidas, tutoriales y obtén ayuda de nuestro equipo de expertos.
          </p>
        </div>

        {/* Tutorial Video */}
        <div className="flex items-center bg-[#F5F5F7] rounded-xl p-4 hover:bg-gray-100 transition-colors cursor-pointer max-w-md mx-auto">
          <a
            href="https://www.youtube.com/your-channel-link"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4"
          >
            <div className="w-12 h-12 bg-[#60A5FA]/10 rounded-lg flex items-center justify-center">
              <Video className="h-6 w-6 text-[#60A5FA]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1C1C1E]">Tutoriales en Video</h3>
              <p className="text-sm text-[#6E6E73]">Aprende paso a paso con nuestros videos</p>
            </div>
          </a>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] text-center mb-8">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#F5F5F7] rounded-xl overflow-hidden">
                <button
                  onClick={() => handleFaqToggle(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-[#1C1C1E]">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronDown className="h-5 w-5 text-[#6E6E73]" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-[#6E6E73]" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-[#6E6E73] leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support CTA */}
        <div className="text-center bg-gradient-to-r from-[#8cc5f6] to-[#90cee0] rounded-2xl p-6 sm:p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
          <p className="mb-6 opacity-90">
            Nuestro equipo de soporte está aquí para ayudarte. Contáctanos y te responderemos rápidamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-[#60A5FA] px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
            >
              Contactar Soporte
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
