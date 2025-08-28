"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check } from "lucide-react"

export default function IntegrationsPage() {
  const integrations = [
    {
      name: "Shopify",
      description: "Sincroniza tu inventario, pedidos y productos automáticamente con tu tienda Shopify.",
      logo: "/shopify-logo.png",
      features: [
        "Sincronización automática de inventario",
        "Gestión de pedidos en tiempo real",
        "Actualización de precios automática",
        "Reportes unificados de ventas",
      ],
      status: "Disponible",
      category: "E-commerce",
    },
    {
      name: "Mercado Pago",
      description: "Procesa pagos de forma segura y gestiona tus transacciones desde una sola plataforma.",
      logo: "/mercadopago-logo.png",
      features: [
        "Procesamiento seguro de pagos",
        "Múltiples métodos de pago",
        "Conciliación automática",
        "Reportes financieros detallados",
      ],
      status: "Disponible",
      category: "Pagos",
    },
    {
      name: "Google Calendar",
      description: "Sincroniza tus citas y eventos automáticamente con Google Calendar para una gestión perfecta.",
      logo: "/google-calendar-icon.png",
      features: [
        "Sincronización bidireccional de eventos",
        "Recordatorios automáticos",
        "Gestión de disponibilidad",
        "Integración con notificaciones",
      ],
      status: "Disponible",
      category: "Productividad",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Volver al inicio</span>
            </Link>
            <Image src="/biznes-logo.png" alt="Biznes" width={100} height={30} className="h-6 w-auto" />
          </div>
        </div>
      </header>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Biznes ya cuenta con estas integraciones
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Conecta tu negocio con las herramientas esenciales para una gestión completa.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-gray-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">{integration.name.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{integration.name}</h3>
                      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full">
                        {integration.status}
                      </span>
                    </div>
                  </div>
                  <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-800">
                    {integration.category}
                  </span>
                </div>

                <p className="text-gray-600 mb-6">{integration.description}</p>

                <div className="space-y-3 mb-6">
                  {integration.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-gray-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
