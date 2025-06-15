import { GoogleGenerativeAI } from '@google/generative-ai';
console.log(
    'zzzzzzzzzzzzzzzzzzzzzzzzzzAttempting to initialize Gemini with key:zzzzzzzzzzzzzzz:::::',
    import.meta.env.VITE_GEMINI_API_KEY,
);

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);

export async function askGemini(prompt) {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
            maxOutputTokens: 200,
            temperature: 1.7,
        },
    });
    const response = await result.response;
    return response.text();
}
