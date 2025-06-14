import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { askGemini } from '../lib/gemini';
// TODO: fix themeColor application
const characters = [
    {
        id: '1',
        name: 'clara',
        mood: 'calm',
        themeColor: 'is-info',
        prompt: 'calm, gentle, wise, supportive, kind, positive, clear, slow-paced, friendly tone',
    },
    {
        id: '2',
        name: 'ignis',
        mood: 'inspirational',
        themeColor: 'is-warning',
        prompt: 'inspirational, energetic, motivating, passionate, optimistic, encouraging, uplifting',
    },
    {
        id: '3',
        name: 'wiley',
        mood: 'witty',
        themeColor: 'is-primary',
        prompt: 'witty, clever, humorous, sharp, playful, quick-thinking, sarcastic but friendly',
    },
];

export default function MoodChat() {
    const navigate = useNavigate();
    const { characterId } = useParams();
    const character = characters.find((c) => c.id === characterId);

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const bottomRef = useRef(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;

        const userMessage = { from: 'user', text: input };
        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setInput('');

        const recentHistory = updatedMessages
            .slice(-10)
            .map((msg) =>
                msg.from === 'user'
                    ? `User: ${msg.text}`
                    : `Gemini: ${msg.text}`,
            )
            .join('\n');

        const chatSoFar = recentHistory
            ? `this chat:\n"${recentHistory}"\n`
            : `User: ${input}\nGemini:`;

        const prompt = `Short, chat-like response to ${chatSoFar}. You are: ${character.prompt}. Finish full thought.`;

        const replyText = await askGemini(prompt.trim());

        const aiMessage = {
            from: 'ai',
            text: replyText,
        };

        setMessages((prev) => [...prev, aiMessage]);

        /* TO TEST WITHOUT GEMINI
        const aiMessage = {
            from: 'ai',
            text: `(${character.mood} reply coming soon...)`,
        };
        setMessages((prev) => [...prev, aiMessage]);
        */
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleChangeCharacter = () => {
        navigate('/');
    };

    if (!character) return <p>Character not found</p>;

    return (
        <section
            className={`section ${character.themeColor}`}
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            <div
                className='container has-text-centered'
                style={{ maxWidth: '600px' }}
            >
                <h1 className='title has-text-white'>
                    {character.mood} {character.name} 💬
                </h1>

                {messages.length > 0 && (
                    <div className='box'>
                        <div
                            style={{
                                maxHeight: '300px',
                                overflowY: 'auto',
                                marginBottom: '1rem',
                            }}
                        >
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`notification is-${
                                        msg.from === 'user' ? 'light' : 'dark'
                                    }`}
                                >
                                    <strong>
                                        {msg.from === 'user'
                                            ? 'You'
                                            : character.name}
                                    </strong>
                                    : {msg.text}
                                </div>
                            ))}
                            <div ref={bottomRef} />
                        </div>
                    </div>
                )}

                <div className='box'>
                    <textarea
                        className='textarea'
                        // style={{ maxWidth: '300px' }}
                        rows='1'
                        maxLength={200}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={`what do you want to talk to ${character.name} about?`}
                    ></textarea>
                    <button
                        className='button is-link mt-3 is-medium'
                        onClick={handleSend}
                    >
                        send
                    </button>
                </div>

                <div className='mb-4'>
                    <button
                        className='button is-ghost is-size-7'
                        onClick={handleChangeCharacter}
                    >
                        change character
                    </button>
                </div>
            </div>
        </section>
    );
}
