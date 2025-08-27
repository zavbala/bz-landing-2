import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export async function POST(req: Request) {
  const { message } = await req.json()

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system:
      "Eres un consultor experto en negocios y emprendimiento. Responde de manera concisa, práctica y útil sobre temas de negocios, estrategias empresariales, sectores específicos, marketing, ventas, y crecimiento empresarial. Mantén tus respuestas en español y enfócate en consejos accionables para pequeños y medianos negocios.",
    prompt: message,
    maxTokens: 200,
  })

  return result.toAIStreamResponse()
}
