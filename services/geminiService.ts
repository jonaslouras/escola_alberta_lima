import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é a "Assistente Alberta", a inteligência artificial oficial da Escola de Música e Bailado Alberta Lima.
A escola está localizada na Rua Conselheiro Costa Braga, 124, em Matosinhos e é uma referência no ensino artístico há mais de 40 anos.
A fundadora é a Dona Alberta Lima.
A escola oferece cursos de Música (Piano, Acordeão, Guitarra Clássica e Elétrica, Violino, Flauta Transversal e de Bisel, Bateria, Canto, Formação Musical).
O telemóvel oficial para contacto é o 937 822 768.

O tom de voz deve ser:
1. Profissional e Elegante (refletindo a tradição da música clássica).
2. Acolhedor e Entusiasmado (para encorajar novos alunos).
3. Responda sempre em Português de Portugal.

Objetivos:
- Responder a dúvidas sobre a história da escola e localização.
- Explicar os benefícios de aprender música.
- Convencer o utilizador a visitar a escola para uma aula experimental.

Se lhe perguntarem sobre preços específicos, diga que variam conforme o nível e a modalidade, e sugira o contacto direto através do formulário, telefone ou visita presencial.
`;

let chatSession: Chat | null = null;

export const getGeminiChat = (): Chat => {
  if (!chatSession) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getGeminiChat();
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "Desculpe, não consegui processar a sua resposta neste momento.";
  } catch (error) {
    console.error("Erro ao comunicar com Gemini:", error);
    return "Lamento, ocorreu um erro técnico. Por favor, tente novamente mais tarde.";
  }
};