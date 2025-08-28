"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, Zap, Shield, Users, BarChart3, Clock, Smartphone } from "lucide-react"

export default function ProductPage() {
  const features = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Gestión de Inventario IA",
      description: "Control inteligente de stock con predicciones automáticas y alertas de reposición.",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "E-commerce Integrado",
      description: "Vende en línea con integración directa a Shopify y otras plataformas.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Clientes y Proveedores",
      description: "Gestiona relaciones comerciales con herramientas de CRM avanzadas.",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Calendario y Citas",
      description: "Programa y gestiona citas con sincronización automática.",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Asistente IA",
      description: "Obtén respuestas inteligentes sobre tu negocio las 24 horas.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Reportes Inteligentes",
      description: "Análisis profundo de tu negocio con insights accionables.",
    },
  ]

  const benefits = [
    "Automatización completa de procesos",
    "Integración con más de 50 herramientas",
    "Soporte 24/7 en español",
    "Actualizaciones automáticas",
    "Seguridad empresarial",
    "Escalabilidad ilimitada",
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link
              href="/"
              className="flex items-center space-x-2 text-[#60A5FA] hover:text-[#3B82F6] transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Volver al inicio</span>
            </Link>
            <Image src="/biznes-logo.png" alt="Biznes" width={100} height={30} className="h-6 w-auto" />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            La plataforma todo-en-uno para{" "}
            <span className="bg-gradient-to-r from-[#5DADEC] via-[#9B8AFB] to-[#6EE7B7] bg-clip-text text-transparent">
              hacer crecer tu negocio
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Biznes combina inteligencia artificial, automatización y herramientas empresariales en una sola plataforma
            diseñada para pequeñas y medianas empresas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open("https://app.biznes.mx/register", "_blank")}
              className="px-8 py-4 bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Comenzar gratis
            </button>
            <button
              onClick={() =>
                window.open("https://app.biznes.mx/login?username=demo_biznes&password=biznes2025", "_blank")
              }
              className="px-8 py-4 text-gray-600 hover:text-gray-700 hover:bg-gray-200 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Ver demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Características principales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre todas las herramientas que Biznes pone a tu disposición para optimizar tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-[#60A5FA] mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F5F5F7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">¿Por qué elegir Biznes?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Más que una herramienta, Biznes es tu socio estratégico para el crecimiento empresarial.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-[#60A5FA] flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#60A5FA] mb-2">+10,000</div>
                <div className="text-gray-600 mb-6">Empresas confían en Biznes</div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-gray-900">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">Soporte</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">50+</div>
                    <div className="text-sm text-gray-600">Integraciones</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">30 días</div>
                    <div className="text-sm text-gray-600">Prueba gratis</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#60A5FA] to-[#38BDF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">¿Listo para transformar tu negocio?</h2>
          <p className="text-xl text-white/80 mb-8">Únete a miles de empresarios que ya están creciendo con Biznes.</p>
          <button
            onClick={() => window.open("https://app.biznes.mx/register", "_blank")}
            className="px-8 py-4 bg-white text-[#60A5FA] hover:bg-gray-50 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Comenzar ahora - Es gratis
          </button>
        </div>
      </section>
    </div>
  )
}
