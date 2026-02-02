
import { GoogleGenAI } from "@google/genai";
import { ConflictStyle } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function getPersonalizedInsights(scores: Record<ConflictStyle, number>, topStyle: ConflictStyle, userName: string) {
  const prompt = `
    The user, ${userName}, has taken the Thomas-Kilman Conflict Mode Instrument (TKI). 
    Their scores are:
    ${Object.entries(scores).map(([style, score]) => `- ${style}: ${score}`).join('\n')}
    
    Their primary style is ${topStyle}.
    
    Please provide a concise, encouraging, and highly professional 2-3 paragraph summary addressed to ${userName} about what this says about their leadership and communication style. 
    Explain how they can leverage their ${topStyle} style while being mindful of their lowest scoring style.
    Use a professional yet warm tone, addressing them by name at the beginning.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });
    return response.text || "I was unable to generate insights at this time, but your scores suggest a unique approach to conflict resolution.";
  } catch (error) {
    console.error("Gemini Insight Error:", error);
    return "Conflict is natural. Your scores indicate a clear preference in how you handle disagreements. Understanding these patterns is the first step toward better communication.";
  }
}
