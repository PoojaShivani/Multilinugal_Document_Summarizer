
import { GoogleGenAI } from "@google/genai";
import { Language } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const summarizeDocument = async (
  documentText: string,
  targetLanguage: Language,
  systemInstruction: string,
): Promise<string | undefined> => {
  try {
    const userPrompt = `Please summarize the following document in ${targetLanguage}:\n\n--- DOCUMENT START ---\n${documentText}\n--- DOCUMENT END ---`;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: systemInstruction,
      },
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    throw error;
  }
};
