import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
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

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Términos de Servicio</h1>

        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>Última actualización:</strong> {new Date().toLocaleDateString("es-ES")}
          </p>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 mb-4">
              Al acceder y utilizar la plataforma Biznes, aceptas estar sujeto a estos Términos de Servicio. Si no estás
              de acuerdo con alguna parte de estos términos, no debes utilizar nuestro servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Descripción del Servicio</h2>
            <p className="text-gray-700 mb-4">
              Biznes es una plataforma de gestión empresarial que proporciona herramientas para:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Gestión de inventario con IA</li>
              <li>E-commerce integrado</li>
              <li>Análisis de clientes y proveedores</li>
              <li>Reportes inteligentes</li>
              <li>Calendario y citas</li>
              <li>Asistente de IA</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Registro y Cuenta de Usuario</h2>
            <p className="text-gray-700 mb-4">
              Para utilizar ciertos aspectos del servicio, debes registrarte y crear una cuenta. Te comprometes a:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Proporcionar información precisa y actualizada</li>
              <li>Mantener la seguridad de tu cuenta y contraseña</li>
              <li>Notificar inmediatamente cualquier uso no autorizado</li>
              <li>Ser responsable de todas las actividades en tu cuenta</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Uso Aceptable</h2>
            <p className="text-gray-700 mb-4">Te comprometes a no utilizar el servicio para:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Actividades ilegales o no autorizadas</li>
              <li>Violar derechos de propiedad intelectual</li>
              <li>Transmitir contenido malicioso o dañino</li>
              <li>Interferir con el funcionamiento del servicio</li>
              <li>Acceder a datos de otros usuarios sin autorización</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Pagos y Facturación</h2>
            <p className="text-gray-700 mb-4">
              Los servicios de pago están sujetos a los planes de precios publicados. Los pagos son no reembolsables
              excepto según se especifique en nuestra política de reembolsos.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Propiedad Intelectual</h2>
            <p className="text-gray-700 mb-4">
              El servicio y su contenido original, características y funcionalidad son propiedad de Biznes y están
              protegidos por derechos de autor, marcas comerciales y otras leyes de propiedad intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Terminación</h2>
            <p className="text-gray-700 mb-4">
              Podemos terminar o suspender tu cuenta inmediatamente, sin previo aviso, por cualquier motivo, incluyendo
              el incumplimiento de estos Términos de Servicio.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Contacto</h2>
            <p className="text-gray-700">
              Si tienes preguntas sobre estos Términos de Servicio, puedes contactarnos en:
              <a href="mailto:legal@biznes.mx" className="text-blue-600 hover:text-blue-800 ml-1">
                legal@biznes.mx
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
