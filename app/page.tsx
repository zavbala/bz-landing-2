"use client";

import type React from "react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Instagram,
  Linkedin,
  Twitter,
  Brain,
  Shield,
  Cpu,
  Network,
  Calendar,
  MessageSquare,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FFFFFF] via-[#F5F5F7] to-[#FFFFFF]">
      <SiteHeader />
      <Hero />
      <Features />
      <AIChat />
      <Pricing />
      <CTA />
      <SiteFooter />
    </div>
  );
}

/* Header */
function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#5DADEC]/20 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center space-x-2">
          <Image
            src="/biznes-logo.png"
            alt="Biznes"
            width={100}
            height={26}
            className="h-5 sm:h-6 w-auto"
            priority
          />
        </div>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            href="#features"
            className="text-[#6E6E73] hover:text-[#5DADEC] transition-colors text-sm lg:text-base"
          >
            Soluciones
          </Link>
          <Link
            href="#pricing"
            className="text-[#6E6E73] hover:text-[#5DADEC] transition-colors text-sm lg:text-base"
          >
            Precios
          </Link>
          <Link
            href="/contact"
            className="text-[#6E6E73] hover:text-[#5DADEC] transition-colors text-sm lg:text-base"
          >
            Contacto
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
          <Link
            href="https://app.biznes.mx/login?redirect_url=https%3A%2F%2Fapp.biznes.mx%2F"
            className="text-[#6E6E73] hover:text-[#5DADEC] transition-colors text-sm font-medium"
          >
            Iniciar Sesión
          </Link>
          <Link href="https://app.biznes.mx/register">
            <Button className="rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Comenzar
            </Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-[#6E6E73] hover:text-[#5DADEC] transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[#5DADEC]/20 bg-white/95 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="#features"
              className="block text-[#6E6E73] hover:text-[#5DADEC] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Soluciones
            </Link>
            <Link
              href="#pricing"
              className="block text-[#6E6E73] hover:text-[#5DADEC] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Precios
            </Link>
            <Link
              href="/contact"
              className="block text-[#6E6E73] hover:text-[#5DADEC] transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <div className="pt-4 border-t border-gray-200 space-y-3">
              <Link
                href="#"
                className="block text-[#6E6E73] hover:text-[#5DADEC] transition-colors py-2 text-sm font-medium"
              >
                Iniciar Sesión
              </Link>
              <Button className="max-w-xs mx-auto rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white py-2 sm:py-3 px-6 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-transparent">
                Comenzar
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

/* Hero */
function Hero() {
  const [showDemoForm, setShowDemoForm] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const result = await fetch("https://app.biznes.mx/book/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (result.ok) {
        setSubmitMessage("¡Demo agendado! Te contactaremos pronto.");
        setEmail("");
        setTimeout(() => {
          setShowDemoForm(false);
          setSubmitMessage("");
        }, 3000);
      } else {
        setSubmitMessage("Error al agendar. Intenta nuevamente.");
      }
    } catch (error) {
      setSubmitMessage("Error al agendar. Intenta nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-[#F5F5F7]">
      <div className="container px-4 sm:px-6 py-12 sm:py-16 md:py-20 lg:py-32 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <div className="space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5DADEC]/10 to-[#9B8AFB]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#5DADEC] border border-[#5DADEC]/20">
              <Brain className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">
                Inteligencia Artificial para Negocios
              </span>
              <span className="sm:hidden">IA para Negocios</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-[#1C1C1E]">El agente que tu</span>
              <br />
              <span className="bg-gradient-to-r from-[#5DADEC] via-[#9B8AFB] to-[#6EE7B7] bg-clip-text text-transparent">
                negocio necesitaba
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#6E6E73] max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
              Conecta tus ventas, inventario y clientes en un solo lugar. Recibe
              recomendaciones inteligentes para vender más, ahorrar tiempo y
              hacer crecer tu negocio sin complicaciones.
            </p>

            <div className="relative flex flex-col gap-2 sm:gap-3 md:flex-row md:gap-2 justify-center px-4 sm:px-0">
              <Button
                size="lg"
                className="rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-xs sm:text-sm md:text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                onClick={() =>
                  window.open("https://app.biznes.mx/register", "_blank")
                }
              >
                Comenzar Ahora
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => setShowDemoForm(!showDemoForm)}
                className="rounded-full bg-transparent text-gray-600 hover:bg-gray-200 hover:text-gray-700 text-xs sm:text-sm md:text-base font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto shadow-lg hover:shadow-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4"
              >
                Contactar Ventas
              </Button>
            </div>

            {showDemoForm && (
              <div className="w-full max-w-xs mx-auto mt-3 animate-in slide-in-from-top-2 duration-300 ease-out">
                <form onSubmit={handleDemoSubmit} className="space-y-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="tu@email.com"
                    required
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-blue-400 focus:outline-none text-sm transform transition-all duration-200 ease-out"
                  />
                  <Button
                    type="submit"
                    disabled={isSubmitting || !email}
                    className="w-full rounded-lg bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 text-sm transition-all duration-200 disabled:opacity-50 transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? "..." : "Agendar"}
                  </Button>
                  {submitMessage && (
                    <p
                      className={`text-xs text-center transition-all duration-200 ease-in ${submitMessage.includes("Error") ? "text-red-500" : "text-green-600"}`}
                    >
                      {submitMessage}
                    </p>
                  )}
                </form>
              </div>
            )}

            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 pt-4 text-xs sm:text-sm text-[#6E6E73] justify-center">
              <div className="flex items-center gap-2">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#6EE7B7] flex-shrink-0" />
                <span>Prueba Demo</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#6EE7B7] flex-shrink-0" />
                <span>Lista para usar</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="h-3 w-3 sm:h-4 sm:w-4 text-[#6EE7B7] flex-shrink-0" />
                <span>Soporte 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Features */
function Features() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardHover = (index: number) => {
    setExpandedCard(index);
  };

  const handleCardLeave = () => {
    setExpandedCard(null);
  };

  const features = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: "Punto de Venta e Inventario",
      description:
        "Vende rápido, controla tu inventario y potencia tus productos más rentables.",
    },
    {
      icon: <Network className="h-5 w-5" />,
      title: "E-commerce Integrado",
      description:
        "Conecta tu tienda física con tu tienda online y sincroniza todo automáticamente.",
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Clientes y Proveedores",
      description:
        "Identifica a tus mejores clientes, entiende sus hábitos, crea cotizaciones al instante y compara proveedores fácilmente.",
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: "Reportes Inteligentes",
      description:
        "Obtén reportes claros que te indican exactamente qué acciones tomar.",
    },
    {
      icon: <Calendar className="h-5 w-5" />,
      title: "Calendario y Citas",
      description:
        "Gestiona citas y tareas con nuestro calendario, totalmente integrado con Google Calendar.",
    },
    {
      icon: <MessageSquare className="h-5 w-5" />,
      title: "Asistente IA",
      description:
        "Haz cualquier consulta sobre tu negocio, recibe respuestas instantáneas y activa notificaciones inteligentes que te guían a tomar mejores decisiones.",
    },
  ];

  return (
    <section id="features" className="w-full py-12 sm:py-16 md:py-24 bg-white">
      <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 sm:gap-6 text-center mb-8 sm:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5DADEC]/10 to-[#9B8AFB]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#5DADEC] border border-[#5DADEC]/20">
            <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-[#5DADEC] flex-shrink-0" />
            Herramientas
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1C1C1E] px-4 sm:px-0">
            Todo lo que necesitas para{" "}
            <span className="bg-gradient-to-r from-[#5DADEC] via-[#9B8AFB] to-[#6EE7B7] bg-clip-text text-transparent">
              hacer crecer tu negocio
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed px-4 sm:px-0">
            Todas nuestras herramientas cuentan con funcionalidades de IA y se
            adaptan a tu forma de trabajar.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-fade-in-up h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isExpanded={expandedCard === index}
                onHover={() => handleCardHover(index)}
                onLeave={handleCardLeave}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  isExpanded,
  onHover,
  onLeave,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  isExpanded: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const isInventoryCard = title === "Punto de Venta e Invenario";
  const isCommerceCard = title === "E-commerce Integrado";
  const isClientsCard = title === "Clientes y Proveedores";
  const isCalendarCard = title === "Calendario y Citas";
  const isAIAssistantCard = title === "Asistente IA";
  const isReportsCard = title === "Reportes Inteligentes";

  return (
    <Card
      className={`group cursor-pointer bg-white transition-all duration-1000 ease-in-out rounded-2xl sm:rounded-3xl overflow-hidden transform hover:scale-[1.01] sm:hover:scale-[1.03] hover:-translate-y-0.5 sm:hover:-translate-y-2 relative backdrop-blur-sm shadow-lg hover:shadow-2xl h-full flex flex-col ${
        isExpanded ? "shadow-2xl" : "hover:shadow-2xl"
      }`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="h-full w-full relative flex flex-col">
        <div className="absolute top-1 left-1 w-1 h-6 bg-gradient-to-b from-[#5DADEC] to-transparent rounded-full opacity-30 group-hover:opacity-60 transition-all duration-800 ease-in-out" />
        <div className="absolute top-2 right-2 w-4 h-1 bg-gradient-to-r from-[#6BB6EF] to-transparent rounded-full opacity-20 group-hover:opacity-50 transition-all duration-800 ease-in-out" />

        <CardHeader className="relative p-4 sm:p-6 flex-shrink-0">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex-shrink-0 inline-flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-[#5DADEC]/20 via-[#6BB6EF]/15 to-[#4A90E2]/20 text-[#5DADEC] group-hover:from-[#5DADEC]/30 group-hover:via-[#6BB6EF]/25 group-hover:to-[#4A90E2]/30 transition-all duration-800 ease-in-out group-hover:scale-105 group-hover:rotate-3 shadow-lg group-hover:shadow-xl h-12 w-12 sm:h-14 sm:w-14">
              <div className="transform group-hover:scale-105 transition-transform duration-600 ease-in-out">
                {icon}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <CardTitle className="bg-gradient-to-r from-[#5DADEC] via-[#9B8AFB] to-[#6EE7B7] bg-clip-text text-transparent font-bold transition-all duration-800 ease-in-out leading-tight tracking-tight text-base sm:text-lg group-hover:transform group-hover:scale-102">
                {title}
              </CardTitle>
            </div>
          </div>
        </CardHeader>

        <div
          className={`overflow-hidden transition-all duration-1000 ease-in-out flex-1 ${
            isExpanded
              ? "max-h-96 sm:max-h-[500px] opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <CardContent className="relative px-4 sm:px-6 pb-4 sm:pb-6">
            <p className="text-[#6E6E73] text-sm sm:text-base leading-relaxed group-hover:text-[#1C1C1E] transition-colors duration-800 ease-in-out animate-fade-in mb-4">
              {description}
            </p>

            {isInventoryCard && isExpanded && (
              <div className="mt-4 rounded-lg sm:rounded-xl overflow-hidden shadow-lg animate-fade-in">
                <Image
                  src="/inventory-interface.png"
                  alt="Interfaz de Inventario Biznes"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority={false}
                />
              </div>
            )}

            {isCommerceCard && isExpanded && (
              <div className="mt-4 flex justify-center items-center p-6 bg-gradient-to-r from-[#F5F5F7] to-white rounded-lg sm:rounded-xl shadow-sm animate-fade-in">
                <Image
                  src="/shopify-logo.png"
                  alt="Shopify Integration"
                  width={200}
                  height={60}
                  className="h-12 sm:h-16 w-auto object-contain"
                  priority={false}
                />
              </div>
            )}

            {isClientsCard && isExpanded && (
              <div className="mt-4 rounded-lg sm:rounded-xl overflow-hidden shadow-lg animate-fade-in">
                <Image
                  src="/user-data-interface.png"
                  alt="Interfaz de Datos del Usuario"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority={false}
                />
              </div>
            )}

            {isCalendarCard && isExpanded && (
              <div className="mt-4 space-y-4">
                <div className="flex justify-center items-center">
                  <Image
                    src="/google-calendar-icon.png"
                    alt="Google Calendar"
                    width={32}
                    height={32}
                    className="h-6 w-6 sm:h-8 sm:w-8 object-contain animate-fade-in"
                    priority={false}
                  />
                </div>
                <div className="rounded-lg sm:rounded-xl overflow-hidden shadow-lg animate-fade-in">
                  <Image
                    src="/calendar-interface.png"
                    alt="Interfaz de Calendario Biznes"
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority={false}
                  />
                </div>
              </div>
            )}

            {isAIAssistantCard && isExpanded && (
              <div className="mt-4 rounded-lg sm:rounded-xl overflow-hidden shadow-lg animate-fade-in">
                <Image
                  src="/ai-assistant-interface.png"
                  alt="Interfaz del Asistente IA Biznes"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority={false}
                />
              </div>
            )}

            {isReportsCard && isExpanded && (
              <div className="mt-4 rounded-lg sm:rounded-xl overflow-hidden shadow-lg animate-fade-in">
                <Image
                  src="/financial-reporting-interface.png"
                  alt="Financial Reporting Interface"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                  priority={false}
                />
              </div>
            )}

            {isExpanded && (
              <div className="mt-4 sm:mt-6 px-2 sm:px-0 flex justify-center animate-fade-in">
                {isInventoryCard && (
                  <button
                    onClick={() =>
                      window.open(
                        "https://app.biznes.mx/login?username=demo_biznes&password=biznes2025",
                        "_blank",
                      )
                    }
                    className="w-full max-w-xs mx-auto rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Agregar Inventario
                  </button>
                )}

                {isCommerceCard && (
                  <button
                    onClick={() =>
                      window.open(
                        "https://app.biznes.mx/login?username=demo_biznes&password=biznes2025",
                        "_blank",
                      )
                    }
                    className="w-full max-w-xs mx-auto rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Empieza a vender en línea
                  </button>
                )}

                {isClientsCard && (
                  <button
                    onClick={() =>
                      window.open(
                        "https://app.biznes.mx/login?username=demo_biznes&password=biznes2025",
                        "_blank",
                      )
                    }
                    className="w-full max-w-xs mx-auto rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Agrega con AI
                  </button>
                )}

                {isCalendarCard && (
                  <button
                    onClick={() =>
                      window.open(
                        "https://app.biznes.mx/login?username=demo_biznes&password=biznes2025",
                        "_blank",
                      )
                    }
                    className="w-full max-w-xs mx-auto rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Agregar Cita
                  </button>
                )}

                {isAIAssistantCard && (
                  <button
                    onClick={() =>
                      window.open(
                        "https://app.biznes.mx/login?username=demo_biznes&password=biznes2025",
                        "_blank",
                      )
                    }
                    className="w-full max-w-xs mx-auto rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Comienza ahora
                  </button>
                )}

                {isReportsCard && (
                  <button
                    onClick={() =>
                      window.open(
                        "https://app.biznes.mx/login?username=demo_biznes&password=biznes2025",
                        "_blank",
                      )
                    }
                    className="w-full max-w-xs mx-auto rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    Genera un reporte
                  </button>
                )}
              </div>
            )}
          </CardContent>
        </div>

        <div
          className={`absolute bottom-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-[#5DADEC] via-[#6BB6EF] to-[#4A90E2] transition-all duration-800 ease-in-out ${
            isExpanded
              ? "opacity-100 scale-150 animate-pulse shadow-lg"
              : "opacity-70 scale-100"
          }`}
        />
      </div>
    </Card>
  );
}

/* Auto-Questioning AI Chat Section */
function AIChat() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [messages, setMessages] = useState<
    Array<{ id: string; role: string; content: string; isTyping?: boolean }>
  >([]);
  const [isActive, setIsActive] = useState(false);
  const [questionsLeft, setQuestionsLeft] = useState(9);
  const [isTyping, setIsTyping] = useState(false);

  const businessQuestions = [
    {
      question: "¿Cuánto vendí hoy?",
      response:
        "Según tus datos, hoy has vendido $2,450 MXN con 18 transacciones. Esto es un 15% más que ayer. Tu producto más vendido fue 'Café Premium' con 12 unidades. Te recomiendo promocionar productos complementarios como pasteles para aumentar el ticket promedio.",
    },
    {
      question: "¿Cuál es mi producto más rentable?",
      response:
        "Tu producto más rentable es 'Servicio de Consultoría Premium' con un margen del 78%. Genera $1,200 MXN de ganancia por venta. Te sugiero crear paquetes similares y promocionarlo más en redes sociales para maximizar tus ingresos.",
    },
    {
      question: "¿Cómo puedo aumentar mis ventas?",
      response:
        "Basado en tu historial, puedes aumentar ventas 25% implementando: 1) Programa de lealtad para clientes frecuentes, 2) Venta cruzada de productos complementarios, 3) Horario extendido los fines de semana. Tus clientes compran más entre 2-4 PM.",
    },
    {
      question: "¿Qué inventario debo reponer urgente?",
      response:
        "Tienes stock crítico en: Café Premium (2 días restantes), Azúcar (1 día), y Servilletas (3 días). Basado en tu velocidad de venta, necesitas reordenar esta semana. Tu proveedor habitual tiene descuento del 10% en pedidos mayores a $1,000.",
    },
    {
      question: "¿Quiénes son mis mejores clientes?",
      response:
        "Tus top 3 clientes son: María González ($2,400/mes, viene 3x/semana), Carlos Ruiz ($1,800/mes, prefiere productos premium), y Ana López ($1,200/mes, siempre compra los martes). Te sugiero crear ofertas personalizadas para mantener su lealtad.",
    },
    {
      question: "¿En qué horarios vendo más?",
      response:
        "Tus picos de venta son: 8-10 AM (café matutino, $450 promedio), 1-3 PM (almuerzo, $680 promedio), y 6-8 PM (merienda, $320 promedio). Te recomiendo tener más personal en estos horarios y promociones específicas.",
    },
    {
      question: "¿Qué puedo mejorar en mi marketing?",
      response:
        "Tu marketing en Instagram genera 60% más engagement que Facebook. Te sugiero: 1) Publicar fotos de productos a las 7 PM, 2) Usar hashtags locales como #CaféLocal, 3) Colaborar con influencers de tu zona. Tu presupuesto ideal sería $500/mes.",
    },
    {
      question: "¿Cómo reducir mis costos operativos?",
      response:
        "Puedes ahorrar $800/mes optimizando: 1) Cambiar a proveedor local (ahorro 15%), 2) Implementar sistema de inventario automático (reduce desperdicio 20%), 3) Negociar descuento por volumen con tu proveedor principal.",
    },
    {
      question: "¿Debería expandir mi negocio?",
      response:
        "Sí, estás listo para expandir. Tus métricas muestran: flujo de caja positivo por 8 meses, clientes leales (70% retorno), y demanda insatisfecha en zona norte. Te recomiendo una segunda sucursal con inversión estimada de $45,000 MXN.",
    },
  ];

  const startDemo = () => {
    if (questionsLeft <= 0) return;
    setIsActive(true);
    setMessages([]);
    setCurrentQuestionIndex(0);
    askNextQuestion(0);
  };

  const askNextQuestion = (questionIndex: number) => {
    if (questionIndex >= businessQuestions.length || questionsLeft <= 0) {
      setIsActive(false);
      return;
    }

    setIsTyping(true);

    // Add AI question
    setTimeout(() => {
      const aiQuestion = {
        id: `ai-${Date.now()}`,
        role: "assistant",
        content: businessQuestions[questionIndex].question,
        isTyping: false,
      };
      setMessages((prev) => [...prev, aiQuestion]);
      setIsTyping(false);

      // Simulate user thinking time, then add response
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          const aiResponse = {
            id: `response-${Date.now()}`,
            role: "assistant",
            content: businessQuestions[questionIndex].response,
            isTyping: false,
          };
          setMessages((prev) => [...prev, aiResponse]);
          setIsTyping(false);
          setQuestionsLeft((prev) => Math.max(0, prev - 1));

          // Continue to next question after delay
          setTimeout(() => {
            const nextIndex = questionIndex + 1;
            setCurrentQuestionIndex(nextIndex);
            if (nextIndex < businessQuestions.length && questionsLeft > 1) {
              askNextQuestion(nextIndex);
            } else {
              setIsActive(false);
            }
          }, 3000);
        }, 2000);
      }, 1500);
    }, 1000);
  };

  const resetDemo = () => {
    setMessages([]);
    setCurrentQuestionIndex(0);
    setQuestionsLeft(9);
    setIsActive(false);
    setIsTyping(false);
  };

  return (
    <section className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-[#F5F5F7] to-white">
      <div className="container px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 sm:gap-6 text-center mb-8 sm:mb-12 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5DADEC]/10 to-[#9B8AFB]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#5DADEC] border border-[#5DADEC]/20">
            <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-[#5DADEC] flex-shrink-0" />
            Demo Interactivo con IA
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1C1C1E] px-4 sm:px-0">
            Ve cómo el{" "}
            <span className="bg-gradient-to-r from-[#5DADEC] via-[#9B8AFB] to-[#6EE7B7] bg-clip-text text-transparent">
              agente
            </span>{" "}
            <span className="bg-gradient-to-r from-[#5DADEC] via-[#9B8AFB] to-[#6EE7B7] bg-clip-text text-transparent">
              IA
            </span>{" "}
            <span className="bg-gradient-to-r from-[#5DADEC] via-[#9B8AFB] to-[#6EE7B7] bg-clip-text text-transparent">
              analiza tu negocio
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed px-4 sm:px-0">
            Observa una conversación real entre un emprendedor y nuestro
            asistente IA. {questionsLeft} preguntas de demostración disponibles.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-0 bg-white shadow-xl rounded-2xl sm:rounded-3xl overflow-hidden">
            <div className="h-64 sm:h-80 md:h-96 overflow-y-auto p-4 sm:p-6 bg-gradient-to-b from-white to-[#F5F5F7]">
              {messages.length === 0 && !isActive && (
                <div className="text-center py-6 sm:py-12 animate-fade-in-up">
                  <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-[#5DADEC]/20 to-[#9B8AFB]/20 mb-3 sm:mb-4">
                    <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-[#5DADEC]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#1C1C1E] mb-2">
                    Demo Inteligente de Negocios
                  </h3>
                  <p className="text-sm sm:text-base text-[#6E6E73] mb-4 sm:mb-6 px-4 sm:px-0">
                    Observa cómo nuestro asistente IA hace preguntas
                    inteligentes sobre tu negocio y proporciona análisis
                    detallados con datos reales.
                  </p>

                  <div className="grid gap-2 grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto mb-4 sm:mb-6">
                    {businessQuestions.slice(0, 6).map((item, index) => (
                      <div
                        key={index}
                        className="p-2 sm:p-3 text-xs sm:text-sm text-left bg-white hover:bg-gradient-to-r hover:from-[#5DADEC]/5 hover:to-[#9B8AFB]/5 border border-gray-200 rounded-lg sm:rounded-xl transition-all duration-300"
                      >
                        {item.question}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex mb-3 sm:mb-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[90%] sm:max-w-[85%] p-3 sm:p-4 rounded-xl sm:rounded-2xl ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-[#5DADEC] to-[#9B8AFB] text-white"
                        : "bg-white text-[#1C1C1E] shadow-sm border border-gray-100"
                    }`}
                  >
                    <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start mb-4">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-[#5DADEC] rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-[#9B8AFB] rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      />
                      <div
                        className="w-2 h-2 bg-[#6EE7B7] rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-4 sm:p-6 bg-white border-t border-gray-100">
              {questionsLeft > 0 ? (
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between text-xs sm:text-sm text-[#6E6E73]">
                    <span>Preguntas de demo restantes: {questionsLeft}</span>
                    <span className="flex items-center gap-1">
                      <Brain className="h-3 w-3 sm:h-4 sm:w-4" />
                      IA Empresarial
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    {!isActive && messages.length === 0 ? (
                      <Button
                        onClick={startDemo}
                        className="rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white px-6 sm:px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base md:text-base"
                      >
                        <Brain className="h-4 w-4 mr-2" />
                        Iniciar Demo Automático
                      </Button>
                    ) : isActive ? (
                      <>
                        <div className="flex items-center gap-2 text-[#5DADEC] justify-center px-6 sm:px-8 py-3">
                          <div className="w-2 h-2 bg-[#5DADEC] rounded-full animate-pulse" />
                          <span className="text-xs sm:text-sm font-medium">
                            Demo en progreso...
                          </span>
                        </div>
                        <Button
                          asChild
                          className="rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white px-6 sm:px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base md:text-base"
                        >
                          <a href="https://app.biznes.mx/register">
                            ¡Comienza ya!
                          </a>
                        </Button>
                        <Button
                          onClick={resetDemo}
                          variant="outline"
                          className="rounded-full border-2 border-[#60A5FA]/5 text-[#1C1C1E] px-6 sm:px-8 py-3 font-medium hover:shadow-lg transition-all duration-300 bg-transparent w-full sm:w-auto text-sm sm:text-base md:text-base"
                        >
                          Reiniciar Demo
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          asChild
                          className="rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white px-6 sm:px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base md:text-base"
                        >
                          <a href="https://app.biznes.mx/register">
                            ¡Comienza ya!
                          </a>
                        </Button>
                        <Button
                          onClick={resetDemo}
                          variant="outline"
                          className="rounded-full border-2 border-[#60A5FA]/5 text-[#1C1C1E] px-6 sm:px-8 py-3 font-medium hover:shadow-lg transition-all duration-300 bg-transparent w-full sm:w-auto text-sm sm:text-base md:text-base"
                        >
                          Reiniciar Demo
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="text-lg font-semibold text-[#1C1C1E] mb-4">
                    ¡Demo completado! 🎉
                  </div>
                  <p className="text-[#6B7280] mb-6">
                    Has visto cómo Biznes puede transformar tu negocio con
                    insights inteligentes y automatización avanzada.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                    <Button
                      asChild
                      className="rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white px-6 sm:px-8 py-3 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base md:text-base"
                    >
                      <a href="https://app.biznes.mx/register">¡Comienza ya!</a>
                    </Button>
                    <Button
                      onClick={resetDemo}
                      variant="outline"
                      className="rounded-full border-2 border-[#60A5FA]/5 text-[#1C1C1E] px-6 sm:px-8 py-3 font-medium hover:shadow-lg transition-all duration-300 bg-transparent w-full sm:w-auto text-sm sm:text-base md:text-base"
                    >
                      Reiniciar Demo
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

/* Pricing */
function Pricing() {
  return (
    <section
      id="pricing"
      className="w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-gradient-to-b from-white to-[#F5F5F7]"
    >
      <div className="container px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 sm:gap-6 text-center mb-12 sm:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5DADEC]/10 to-[#9B8AFB]/10 px-3 sm:px-4 py-2 text-xs sm:text-sm text-[#5DADEC] border border-[#5DADEC]/20">
            <Brain className="h-4 w-4 sm:h-5 sm:w-5 text-[#5DADEC] flex-shrink-0" />
            Planes
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#1C1C1E] px-4 sm:px-0">
            Planes que{" "}
            <span className="bg-gradient-to-r from-[#5DADEC] via-[#9B8AFB] to-[#6EE7B7] bg-clip-text text-transparent">
              crecen contigo
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] leading-relaxed px-4 sm:px-0">
            ¡Comienza ya! y escala según tus necesidades
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <PlanCard
              name="Básico"
              price="$200"
              cadence="/mes"
              description="Perfecto para empezar"
              features={[
                "Inventario básico",
                "Punto de venta (POS)",
                "Gestión de clientes",
                "Cotizaciones simples",
                "Reportes básicos",
                "Chat con IA",
                "$100 MXN en créditos IA",
              ]}
              cta="Comenzar"
              actionurl="https://app.biznes.mx/register"
              highlighted={false}
            />
          </div>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <PlanCard
              name="Pro"
              price="$400"
              cadence="/mes"
              description="Para negocios en crecimiento"
              features={[
                "Inventario avanzado",
                "POS completo",
                "Gestión avanzada de clientes",
                "Reportes avanzados",
                "Chat IA ilimitado",
                "$200 MXN en créditos IA",
                "Integraciones premium",
              ]}
              cta="Crecer Ahora"
              actionurl="https://app.biznes.mx/register"
              highlighted={true}
            />
          </div>
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <PlanCard
              name="Empresarial"
              price="Personalizado"
              cadence=""
              description="Para organizaciones grandes"
              features={[
                "Todo ilimitado",
                "Multi-sucursal",
                "IA predictiva",
                "Automatizaciones",
                "Soporte prioritario",
                "Integraciones personalizadas",
                "Onboarding dedicado",
              ]}
              cta="Contactar Ventas"
              actionurl="https://api.whatsapp.com/send?phone=528123711117&text=Hola,%20quiero%20más%20información%20sobre%20el%20plan%20empresarial en Biznes."
              highlighted={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  actionurl,
  name,
  price,
  cadence,
  description,
  features,
  cta,
  highlighted,
}: {
  actionurl?: string;
  name: string;
  price: string;
  cadence: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}) {
  return (
    <Card
      className={`relative border-0 rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 overflow-hidden ${
        highlighted
          ? "bg-gradient-to-br from-white to-[#F5F5F7] shadow-xl ring-2 ring-[#60A5FA]/20 hover:shadow-2xl"
          : "bg-white hover:shadow-xl hover:bg-gradient-to-br hover:from-white hover:to-[#F5F5F7]"
      }`}
    >
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
        {highlighted ? (
          <div className="bg-gradient-to-br from-[#60A5FA]/5 to-[#38BDF8]/5" />
        ) : (
          <div className="bg-gradient-to-br from-[#93C5FD]/5 to-[#7DD3FC]/5" />
        )}
      </div>

      <CardHeader className={`relative text-center p-0 pb-4 sm:pb-6`}>
        <CardTitle className="text-xl sm:text-2xl text-[#1C1C1E] font-semibold mb-2">
          {name}
        </CardTitle>
        <div className="mb-2">
          <span className="text-3xl sm:text-4xl font-bold text-[#1C1C1E]">
            {price}
          </span>
          <span className="text-[#6E6E73] ml-1 text-sm sm:text-base">
            {cadence}
          </span>
        </div>
        <CardDescription className="text-[#6E6E73] text-sm sm:text-base">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent className="relative p-0 pb-4 sm:pb-6">
        <ul className="space-y-2 sm:space-y-3">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 sm:gap-3 text-[#6E6E73] text-sm sm:text-base"
            >
              <Check className="h-4 w-4 sm:h-5 sm:w-5 text-[#6EE7B7] flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="relative p-0">
        <Button
          className={`w-full rounded-full py-2 sm:py-3 md:py-4 font-medium transition-all duration-300 transform hover:scale-105 text-xs sm:text-sm md:text-base ${
            highlighted
              ? "bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white shadow-lg hover:shadow-xl"
              : "bg-gradient-to-r from-[#60A5FA]/20 to-[#38BDF8]/20 hover:from-[#60A5FA]/30 hover:to-[#38BDF8]/30 text-[#1C1C1E] border border-transparent hover:border-[#60A5FA]/30"
          }`}
          variant={highlighted ? "default" : "ghost"}
          onClick={() => window.open(actionurl, "_blank")}
        >
          {cta}
        </Button>
      </CardFooter>
    </Card>
  );
}

/* CTA */
function CTA() {
  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-32 bg-white">
      <div className="container px-4 sm:px-6 max-w-4xl mx-auto text-center">
        <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-[#1C1C1E] px-4 sm:px-0">
            Listo para{" "}
            <span className="bg-gradient-to-r from-[#5DADEC] via-[#9B8AFB] to-[#6EE7B7] bg-clip-text text-transparent">
              transformar tu negocio
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#6E6E73] max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Únete a más empresarios que ya están creciendo con nuestra
            plataforma inteligente
          </p>
          <div className="flex flex-col gap-2 sm:gap-3 md:flex-row md:gap-2 justify-center px-4 sm:px-0">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-[#60A5FA] to-[#38BDF8] hover:from-[#3B82F6] hover:to-[#0EA5E9] text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-sm sm:text-base md:text-lg"
              onClick={() =>
                window.open("https://app.biznes.mx/register", "_blank")
              }
            >
              ¡Comienza ya!
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full bg-transparent text-gray-600 hover:bg-gray-200 hover:text-gray-700 px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 font-medium transition-all duration-600 ease-in-out transform hover:scale-103 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl"
              onClick={() =>
                window.open(
                  "https://app.biznes.mx/login?username=demo_biznes&password=biznes2025",
                  "_blank",
                )
              }
            >
              Probar demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Footer */
function SiteFooter() {
  return (
    <footer className="w-full border-t border-gray-200 bg-[#F5F5F7]">
      <div className="container px-4 sm:px-6 py-8 sm:py-12 max-w-7xl mx-auto">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3 sm:space-y-4 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/biznes-logo.png"
                alt="Biznes"
                width={100}
                height={26}
                className="h-5 sm:h-6 w-auto bg-transparent"
              />
            </Link>
            <p className="text-xs sm:text-sm text-[#6E6E73] max-w-xs">
              La plataforma inteligente que organiza tu negocio y lo hace
              crecer.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <Link
                href="https://x.com/biznesmx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6E6E73] hover:text-[#1C1C1E] transition-colors"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="https://www.instagram.com/biznes.mx?utm_source=ig_web_button_share_sheet&igsh=aWg0NjA0NGV3MXU5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6E6E73] hover:text-[#1C1C1E] transition-colors"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@biznes.mx?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6E6E73] hover:text-[#1C1C1E] transition-colors"
              >
                <TikTokIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/85610391/admin/page-posts/published/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#6E6E73] hover:text-[#1C1C1E] transition-colors"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-[#1C1C1E]">
              Producto
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-[#6E6E73]">
              <li>
                <Link
                  href="/product"
                  className="hover:text-[#1C1C1E] transition-colors"
                >
                  Soluciones
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="hover:text-[#1C1C1E] transition-colors"
                >
                  Precios
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className="hover:text-[#1C1C1E] transition-colors"
                >
                  Integraciones
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-[#1C1C1E]">
              Empresa
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-[#6E6E73]">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#1C1C1E] transition-colors"
                >
                  Acerca de
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#1C1C1E] transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="hover:text-[#1C1C1E] transition-colors"
                >
                  Soporte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-[#1C1C1E]">
              Legal
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-[#6E6E73]">
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-[#1C1C1E] transition-colors"
                >
                  Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-[#1C1C1E] transition-colors"
                >
                  Términos
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="hover:text-[#1C1C1E] transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-[#6E6E73]">
            © {new Date().getFullYear()} Biznes. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
