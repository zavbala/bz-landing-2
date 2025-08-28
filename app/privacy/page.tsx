import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Política de Privacidad</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-ES")}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-700 mb-4">
              En Biznes, recopilamos información que nos proporcionas directamente, como cuando te registras para una
              cuenta, utilizas nuestros servicios, o te comunicas con nosotros. Esta información puede incluir:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Nombre y información de contacto (email, teléfono)</li>
              <li>Información de la empresa y del negocio</li>
              <li>Datos de uso de la plataforma</li>
              <li>Información de facturación y pagos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Cómo Utilizamos tu Información</h2>
            <p className="text-gray-700 mb-4">Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Proporcionar y mejorar nuestros servicios</li>
              <li>Personalizar tu experiencia en la plataforma</li>
              <li>Comunicarnos contigo sobre actualizaciones y soporte</li>
              <li>Procesar pagos y transacciones</li>
              <li>Cumplir con obligaciones legales</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Compartir Información</h2>
            <p className="text-gray-700 mb-4">
              No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes
              circunstancias:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Con tu consentimiento explícito</li>
              <li>Para cumplir con la ley o procesos legales</li>
              <li>Con proveedores de servicios que nos ayudan a operar la plataforma</li>
              <li>En caso de fusión, adquisición o venta de activos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Seguridad de los Datos</h2>
            <p className="text-gray-700 mb-4">
              Implementamos medidas de seguridad técnicas y organizativas apropiadas para proteger tu información
              personal contra acceso no autorizado, alteración, divulgación o destrucción.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Tus Derechos</h2>
            <p className="text-gray-700 mb-4">Tienes derecho a:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Acceder a tu información personal</li>
              <li>Rectificar datos inexactos</li>
              <li>Solicitar la eliminación de tus datos</li>
              <li>Oponerte al procesamiento de tus datos</li>
              <li>Portabilidad de datos</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Contacto</h2>
            <p className="text-gray-700">
              Si tienes preguntas sobre esta Política de Privacidad, puedes contactarnos en:
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
