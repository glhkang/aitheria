import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function askGemini(prompt) {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    try {
        const result = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
            generationConfig: {
                maxOutputTokens: 200,
                temperature: 1.7,
            },
        });
        const response = await result.response;
        return response.text();
    } catch (err) {
        console.error('Error calling Gemini API: ', err);
        return 'Sorry, something went wrong with the AI service.';
    }
}
