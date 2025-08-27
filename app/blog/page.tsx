"use client"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { ArrowRight, BookOpen, User, Clock, X, Cpu, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function BlogPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-white text-[#1C1C1E]">
      <Header />
      <main className="flex-1">
        <Blog />
      </main>
      <SiteFooter />
    </div>
  )
}

/* Header */
function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container flex h-16 items-center justify-between gap-4 px-6 max-w-7xl mx-auto">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative">
            <Cpu className="h-6 w-6 text-[#5DADEC]" />
          </div>
          <span className="font-semibold text-[#1C1C1E] text-lg">POS Intelligence</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/#features" className="text-sm text-[#6E6E73] hover:text-[#1C1C1E] transition-colors">
            Soluciones
          </Link>
          <Link href="/blog" className="text-sm text-[#6E6E73] hover:text-[#1C1C1E] transition-colors">
            Blog
          </Link>
          <Link href="/#pricing" className="text-sm text-[#6E6E73] hover:text-[#1C1C1E] transition-colors">
            Planes
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#"
            className="hidden rounded-full px-4 py-2 text-sm text-[#6E6E73] hover:text-[#1C1C1E] transition-colors md:inline-block"
          >
            Iniciar Sesión
          </Link>
          <Button className="rounded-full bg-gradient-to-r from-[#5DADEC] to-[#9B8AFB] hover:from-[#5DADEC]/90 hover:to-[#9B8AFB]/90 text-white px-6 py-2 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            Comenzar
          </Button>
        </div>
      </div>
    </header>
  )
}

/* Blog */
function Blog() {
  const [selectedPost, setSelectedPost] = useState<any>(null)

  const blogPost = {
    id: 1,
    title: "Cómo la IA está revolucionando los pequeños negocios en 2024",
    description:
      "Descubre las últimas tendencias en inteligencia artificial y cómo pueden transformar tu negocio local en una empresa más eficiente y rentable.",
    author: "María González",
    date: "15 de Enero, 2024",
    readTime: "5 min de lectura",
    chatMessages: [
      {
        type: "user",
        message: "¿Cómo está revolucionando la IA a los pequeños negocios en 2024?",
      },
      {
        type: "ai",
        message:
          "¡Excelente pregunta! La inteligencia artificial ya no es solo para grandes corporaciones. En 2024, los pequeños negocios están adoptando herramientas de IA para competir de manera más efectiva y ofrecer mejores experiencias a sus clientes.",
      },
      {
        type: "user",
        message: "¿Cuáles son los principales beneficios de la IA para las PYMEs?",
      },
      {
        type: "ai",
        message:
          "Los beneficios principales son:\n\n• **Automatización de tareas repetitivas:** Libera tiempo valioso para enfocarte en el crecimiento del negocio\n\n• **Análisis predictivo:** Anticipa las necesidades de tus clientes y optimiza tu inventario\n\n• **Personalización a escala:** Ofrece experiencias únicas a cada cliente sin aumentar costos\n\n• **Toma de decisiones basada en datos:** Reduce la incertidumbre con insights precisos",
      },
      {
        type: "user",
        message: "¿Tienes ejemplos reales de casos de éxito?",
      },
      {
        type: "ai",
        message:
          "¡Por supuesto! Te comparto dos casos muy interesantes:\n\n**Caso 1:** Una pequeña tienda de ropa en Ciudad de México aumentó sus ventas en un 40% después de implementar un sistema de recomendaciones con IA. El sistema analiza las preferencias de compra y sugiere productos complementarios, aumentando el ticket promedio significativamente.\n\n**Caso 2:** Una cafetería local utiliza IA para predecir la demanda diaria, reduciendo el desperdicio de alimentos en un 30% y mejorando la rentabilidad.",
      },
      {
        type: "user",
        message: "¿Cómo puede empezar un pequeño negocio con la IA?",
      },
      {
        type: "ai",
        message:
          "No necesitas ser un experto en tecnología para aprovechar la IA. Mi recomendación es:\n\n1. **Comienza con herramientas simples** que se integren con tu sistema actual de punto de venta\n\n2. **Elige soluciones que se adapten** a tu flujo de trabajo existente\n\n3. **Empieza gradualmente** con una función específica antes de expandir\n\nEl futuro de los pequeños negocios está aquí, y la IA es tu aliado más poderoso para crecer de manera inteligente y sostenible.",
      },
    ],
  }

  return (
    <>
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-[#F5F5F7] to-white">
        <div className="container px-6 max-w-7xl mx-auto">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center mb-16 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#5DADEC]/10 to-[#9B8AFB]/10 px-4 py-2 text-sm text-[#5DADEC] border border-[#5DADEC]/20">
              <BookOpen className="h-4 w-4" />
              Blog de Negocios
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-[#1C1C1E]">
              Insights para hacer crecer tu negocio
            </h1>
            <p className="text-lg text-[#6E6E73] leading-relaxed">
              Consejos prácticos, tendencias y estrategias para emprendedores
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <BlogCard post={blogPost} onClick={() => setSelectedPost(blogPost)} />
          </div>
        </div>
      </section>

      {selectedPost && <ChatBlogPost post={selectedPost} onClose={() => setSelectedPost(null)} />}
    </>
  )
}

function BlogCard({ post, onClick }: { post: any; onClick: () => void }) {
  return (
    <Card
      className="group border-0 bg-white hover:bg-gradient-to-br hover:from-white hover:to-[#F5F5F7] transition-all duration-500 hover:shadow-xl rounded-2xl p-8 transform hover:scale-105 hover:-translate-y-2 cursor-pointer relative overflow-hidden animate-fade-in-up"
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#5DADEC]/5 via-[#9B8AFB]/5 to-[#6EE7B7]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <div className="flex items-center gap-4 mb-6 text-sm text-[#6E6E73]">
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            {post.author}
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            {post.date}
          </div>
          <div className="hidden sm:block text-[#6E6E73]">{post.readTime}</div>
        </div>

        <h3 className="text-2xl font-bold text-[#1C1C1E] mb-4 group-hover:text-[#5DADEC] transition-colors duration-300 leading-tight">
          {post.title}
        </h3>

        <p className="text-[#6E6E73] leading-relaxed mb-6 group-hover:text-[#1C1C1E] transition-colors duration-300">
          {post.description}
        </p>

        <Button
          className="rounded-full bg-gradient-to-r from-[#5DADEC]/20 to-[#9B8AFB]/20 hover:from-[#5DADEC] hover:to-[#9B8AFB] text-[#5DADEC] hover:text-white px-6 py-2 text-sm font-medium transition-all duration-300 transform group-hover:scale-105 border border-[#5DADEC]/30 hover:border-transparent"
          variant="ghost"
        >
          Leer más
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </Card>
  )
}

function ChatBlogPost({ post, onClose }: { post: any; onClose: () => void }) {
  const [messages, setMessages] = useState<any[]>([])
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (currentMessageIndex < post.chatMessages.length) {
      const timer = setTimeout(
        () => {
          if (post.chatMessages[currentMessageIndex].type === "ai") {
            setIsTyping(true)
            setTimeout(() => {
              setMessages((prev) => [...prev, post.chatMessages[currentMessageIndex]])
              setIsTyping(false)
              setCurrentMessageIndex((prev) => prev + 1)
            }, 1500)
          } else {
            setMessages((prev) => [...prev, post.chatMessages[currentMessageIndex]])
            setCurrentMessageIndex((prev) => prev + 1)
          }
        },
        currentMessageIndex === 0 ? 500 : 2000,
      )

      return () => clearTimeout(timer)
    }
  }, [currentMessageIndex, post.chatMessages])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-[#6E6E73]">
              <Bot className="h-5 w-5 text-[#5DADEC]" />
              <span className="font-medium">Chat con IA sobre:</span>
            </div>
            <h2 className="text-lg font-semibold text-[#1C1C1E] truncate">{post.title}</h2>
          </div>
          <Button variant="ghost" size="sm" onClick={onClose} className="rounded-full hover:bg-gray-100 p-2">
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Chat Messages */}
        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex gap-3 animate-fade-in-up ${msg.type === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.type === "ai" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#5DADEC] to-[#9B8AFB] flex items-center justify-center">
                  <Bot className="h-4 w-4 text-white" />
                </div>
              )}

              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  msg.type === "user"
                    ? "bg-gradient-to-r from-[#5DADEC] to-[#9B8AFB] text-white"
                    : "bg-[#F5F5F7] text-[#1C1C1E]"
                }`}
              >
                <div className="text-sm leading-relaxed whitespace-pre-line">{msg.message}</div>
              </div>

              {msg.type === "user" && (
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#6E6E73] flex items-center justify-center">
                  <User className="h-4 w-4 text-white" />
                </div>
              )}
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex gap-3 justify-start animate-fade-in-up">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-[#5DADEC] to-[#9B8AFB] flex items-center justify-center">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <div className="bg-[#F5F5F7] rounded-2xl px-4 py-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-[#6E6E73] rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-[#6E6E73] rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-[#6E6E73] rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white/80 backdrop-blur-md border-t border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-[#6E6E73]">
              Conversación con IA • {post.author} • {post.date}
            </div>
            <Button
              onClick={onClose}
              className="rounded-full bg-gradient-to-r from-[#5DADEC] to-[#9B8AFB] hover:from-[#5DADEC]/90 hover:to-[#9B8AFB]/90 text-white px-6 py-2 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Cerrar Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* Footer */
function SiteFooter() {
  return (
    <footer className="w-full border-t border-gray-200 bg-[#F5F5F7]">
      <div className="container px-6 py-12 max-w-7xl mx-auto">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-[#5DADEC]" />
              <span className="font-semibold text-[#1C1C1E]">POS Intelligence</span>
            </Link>
            <p className="text-sm text-[#6E6E73] max-w-xs">La plataforma inteligente que hace crecer tu negocio</p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#1C1C1E]">Producto</h3>
            <ul className="space-y-2 text-sm text-[#6E6E73]">
              <li>
                <Link href="/#features" className="hover:text-[#1C1C1E] transition-colors">
                  Características
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#1C1C1E] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-[#1C1C1E] transition-colors">
                  Precios
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#1C1C1E]">Empresa</h3>
            <ul className="space-y-2 text-sm text-[#6E6E73]">
              <li>
                <Link href="#" className="hover:text-[#1C1C1E] transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#1C1C1E] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-[#1C1C1E]">Legal</h3>
            <ul className="space-y-2 text-sm text-[#6E6E73]">
              <li>
                <Link href="#" className="hover:text-[#1C1C1E] transition-colors">
                  Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#1C1C1E] transition-colors">
                  Términos
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-sm text-[#6E6E73]">
            © {new Date().getFullYear()} POS Intelligence. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
