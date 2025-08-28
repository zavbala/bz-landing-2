"use client"

import Link from "next/link"
import { ArrowLeft, HelpCircle, Book, MessageCircle, Video, Search, ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState("")
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

  const resources = [
    {
      title: "Guía de inicio rápido",
      description: "Aprende lo básico en 5 minutos",
      icon: Book,
      link: "#",
    },
    {
      title: "Tutoriales en video",
      description: "Videos paso a paso para cada función",
      icon: Video,
      link: "#",
    },
    {
      title: "Chat en vivo",
      description: "Habla con nuestro equipo de soporte",
      icon: MessageCircle,
      link: "#",
    },
    {
      title: "Centro de ayuda",
      description: "Documentación completa y detallada",
      icon: HelpCircle,
      link: "#",
    },
  ]

  const handleFaqToggle = (index: number) => {
    try {
      setExpandedFaq(expandedFaq === index ? null : index)
    } catch (error) {
      console.error("Error toggling FAQ:", error)
    }
  }

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
      <main className="container px-4 sm:px-6 py-8 sm:py-12 max-w-6xl mx-auto">
        <div className="space-y-8 sm:space-y-12">
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

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-[#6E6E73]" />
              <input
                type="text"
                placeholder="Busca en nuestra base de conocimientos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent"
              />
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {resources.map((resource, index) => (
              <Link
                key={index}
                href={resource.link}
                className="bg-[#F5F5F7] rounded-2xl p-6 hover:bg-gray-100 transition-colors group"
              >
                <div className="w-12 h-12 bg-[#60A5FA]/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-[#60A5FA]/20 transition-colors">
                  <resource.icon className="h-6 w-6 text-[#60A5FA]" />
                </div>
                <h3 className="text-lg font-semibold text-[#1C1C1E] mb-2">{resource.title}</h3>
                <p className="text-sm text-[#6E6E73]">{resource.description}</p>
              </Link>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1C1C1E] text-center mb-8">Preguntas Frecuentes</h2>
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

          {/* Contact Support */}
          <div className="text-center bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] rounded-2xl p-6 sm:p-8 text-white">
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
              <Link
                href="mailto:soporte@biznes.mx"
                className="inline-block border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white/10 transition-colors"
              >
                Enviar Email
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
