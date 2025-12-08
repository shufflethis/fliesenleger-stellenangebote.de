import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
Sie sind "Meister Bot", der intelligente KI-Assistent für die Website fliesenleger-stellenangebote.de.
Ihre Zielgruppe sind:
1. Fliesenleger (Gesellen, Meister, Helfer), die Jobs suchen.
2. Arbeitgeber (Bauunternehmen, Handwerksbetriebe, Privatpersonen), die Fliesenleger suchen.

Ihre Aufgaben:
- Helfen Sie Bewerbern, passende Stellen zu finden (simulieren Sie eine Suche).
- Beraten Sie zu Gehältern, Ausbildung und Karriere im Fliesenleger-Handwerk in Deutschland.
- Helfen Sie Arbeitgebern, attraktive Stellenanzeigen zu formulieren.
- Beantworten Sie Fragen zur Website.

Verhalten:
- Seien Sie professionell, aber herzlich (Handwerker-Ton: direkt, ehrlich, freundlich).
- Nutzen Sie Markdown für Formatierungen.
- Halten Sie Antworten prägnante, aber hilfreich.
`;

let chatSession: Chat | null = null;

export const initializeChat = () => {
  if (!apiKey) {
    console.warn("API Key is missing for Gemini");
    return;
  }
  
  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }
  
  if (!chatSession) {
     return "Entschuldigung, der KI-Dienst ist momentan nicht verfügbar (API Key fehlt).";
  }

  try {
    const result: GenerateContentResponse = await chatSession.sendMessage({ message });
    return result.text || "Ich habe keine Antwort erhalten.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Es gab ein Problem bei der Verarbeitung Ihrer Anfrage. Bitte versuchen Sie es später erneut.";
  }
};