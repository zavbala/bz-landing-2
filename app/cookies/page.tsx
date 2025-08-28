import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al inicio
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Cookies</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-ES")}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">¿Qué son las Cookies?</h2>
            <p className="text-gray-700 mb-4">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas nuestro sitio
              web. Nos ayudan a mejorar tu experiencia, recordar tus preferencias y analizar cómo utilizas nuestro
              servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tipos de Cookies que Utilizamos</h2>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Cookies Esenciales</h3>
              <p className="text-gray-700 mb-2">
                Estas cookies son necesarias para el funcionamiento básico del sitio web y no pueden ser desactivadas.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Autenticación de usuario</li>
                <li>Seguridad del sitio</li>
                <li>Funcionalidad básica de la plataforma</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Cookies de Rendimiento</h3>
              <p className="text-gray-700 mb-2">
                Estas cookies nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Google Analytics</li>
                <li>Métricas de uso</li>
                <li>Análisis de rendimiento</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Cookies de Funcionalidad</h3>
              <p className="text-gray-700 mb-2">
                Estas cookies permiten que el sitio web recuerde las opciones que haces y proporcione características
                mejoradas.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Preferencias de idioma</li>
                <li>Configuraciones de usuario</li>
                <li>Personalización de la interfaz</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Cookies de Marketing</h3>
              <p className="text-gray-700 mb-2">
                Estas cookies se utilizan para hacer que los mensajes publicitarios sean más relevantes para ti.
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Seguimiento de conversiones</li>
                <li>Publicidad personalizada</li>
                <li>Análisis de campañas</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Cookies de Terceros</h2>
            <p className="text-gray-700 mb-4">
              Utilizamos servicios de terceros que pueden establecer cookies en tu dispositivo:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Google Analytics:</strong> Para análisis de tráfico web
              </li>
              <li>
                <strong>Stripe:</strong> Para procesamiento de pagos
              </li>
              <li>
                <strong>Intercom:</strong> Para soporte al cliente
              </li>
              <li>
                <strong>Facebook Pixel:</strong> Para análisis de marketing
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Gestión de Cookies</h2>
            <p className="text-gray-700 mb-4">
              Puedes controlar y/o eliminar las cookies como desees. Puedes eliminar todas las cookies que ya están en
              tu dispositivo y configurar la mayoría de los navegadores para evitar que se coloquen.
            </p>
            <p className="text-gray-700 mb-4">
              <strong>Nota:</strong> Si eliges rechazar las cookies, es posible que no puedas utilizar todas las
              funciones de nuestro sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Configuración del Navegador</h2>
            <p className="text-gray-700 mb-4">Para gestionar las cookies en los navegadores más populares:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>
                <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies
              </li>
              <li>
                <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies
              </li>
              <li>
                <strong>Safari:</strong> Preferencias → Privacidad → Cookies
              </li>
              <li>
                <strong>Edge:</strong> Configuración → Cookies y permisos del sitio
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Contacto</h2>
            <p className="text-gray-700">
              Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos en:
              <a href="mailto:privacy@biznes.mx" className="text-blue-600 hover:text-blue-800 ml-1">
                privacy@biznes.mx
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
