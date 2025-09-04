"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="container max-w-7xl mx-auto py-3 px-4 sm:px-6 flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#60A5FA] hover:text-[#3B82F6] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver a Biznes
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center mt-24 px-4 sm:px-6 gap-6 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1E]">
          <span className="bg-gradient-to-r from-[#5DADEC] via-[#9B8AFB] to-[#6EE7B7] bg-clip-text text-transparent">
            ¿Cómo te gustaría
          </span>{" "}
          contactarnos?
        </h1>
        <p className="text-lg sm:text-xl text-[#6E6E73] max-w-md">
          Elige una de las siguientes opciones para ponerte en contacto con
          nuestro equipo.
        </p>

        {/* Contact Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* WhatsApp */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wa.me/528123711117?text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20Biznes."
            className="flex items-center justify-center gap-2 w-64 px-6 py-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:via-green-600 hover:to-green-600 text-white rounded-full font-medium transition-all"
          >
            <FaWhatsapp className="h-5 w-5" />
            WhatsApp
          </a>

          {/* Email */}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:biznes@gmail.com?subject=Contacto%20desde%20la%20página%20de%20Biznes"
            className="flex items-center justify-center gap-2 w-64 px-6 py-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-500 hover:from-blue-500 hover:via-blue-600 hover:to-blue-700 text-white rounded-full font-medium transition-all"
          >
            <FaEnvelope className="h-5 w-5" />
            Email
          </a>
        </div>
      </main>
    </div>
  );
}
