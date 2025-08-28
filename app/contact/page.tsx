"use client"

import type React from "react"

import Link from "next/link"
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send } from "lucide-react"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("¡Mensaje enviado! Te contactaremos pronto.")
      setFormData({ name: "", email: "", company: "", message: "" })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
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
              <span className="bg-gradient-to-r from-[#5DADEC] via-[#9B8AFB] to-[#6EE7B7] bg-clip-text text-transparent">
                Contacta
              </span>{" "}
              con nosotros
            </h1>
            <p className="text-lg sm:text-xl text-[#6E6E73] max-w-3xl mx-auto">
              ¿Tienes preguntas sobre Biznes? Estamos aquí para ayudarte. Contáctanos y te responderemos lo antes
              posible.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="bg-[#F5F5F7] rounded-2xl p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-[#1C1C1E] mb-6">Envíanos un mensaje</h2>

              {submitMessage ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <p className="text-green-600 font-medium">{submitMessage}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1C1C1E] mb-2">
                        Nombre *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1E] mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[#1C1C1E] mb-2">
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#1C1C1E] mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:border-transparent resize-none"
                      placeholder="Cuéntanos cómo podemos ayudarte..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] text-white px-6 py-3 rounded-lg font-medium hover:from-[#3B82F6] hover:to-[#0EA5E9] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-[#1C1C1E] mb-6">Información de contacto</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#60A5FA] mt-1" />
                    <div>
                      <p className="font-medium text-[#1C1C1E]">Email</p>
                      <p className="text-[#6E6E73]">contacto@biznes.mx</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#60A5FA] mt-1" />
                    <div>
                      <p className="font-medium text-[#1C1C1E]">Teléfono</p>
                      <p className="text-[#6E6E73]">+52 55 1234 5678</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#60A5FA] mt-1" />
                    <div>
                      <p className="font-medium text-[#1C1C1E]">Oficina</p>
                      <p className="text-[#6E6E73]">Ciudad de México, México</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-[#60A5FA] mt-1" />
                    <div>
                      <p className="font-medium text-[#1C1C1E]">Horario de atención</p>
                      <p className="text-[#6E6E73]">Lunes a Viernes: 9:00 - 18:00</p>
                      <p className="text-[#6E6E73]">Sábados: 9:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-[#F5F5F7] rounded-2xl p-6">
                <h3 className="text-lg font-bold text-[#1C1C1E] mb-4">Preguntas frecuentes</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="font-medium text-[#1C1C1E]">¿Cuánto tiempo tarda la respuesta?</p>
                    <p className="text-[#6E6E73]">Respondemos en menos de 24 horas hábiles.</p>
                  </div>
                  <div>
                    <p className="font-medium text-[#1C1C1E]">¿Ofrecen soporte técnico?</p>
                    <p className="text-[#6E6E73]">Sí, tenemos soporte técnico especializado disponible.</p>
                  </div>
                  <div>
                    <p className="font-medium text-[#1C1C1E]">¿Puedo agendar una demo?</p>
                    <p className="text-[#6E6E73]">Por supuesto, menciona en tu mensaje que quieres una demo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
