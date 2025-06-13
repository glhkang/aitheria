import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

const characters = [
    { id: '1', name: 'clara', mood: 'calm', themeColor: 'is-info' },
    { id: '2', name: 'ignis', mood: 'inspirational', themeColor: 'is-warning' },
    { id: '3', name: 'wiley', mood: 'witty', themeColor: 'is-primary' },
];

export default function MoodChat() {
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
        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        // mock AI message
        const aiMessage = {
            from: 'ai',
            text: `(${character.mood} ${character.name}'s reply coming soon...)`,
        };
        setMessages((prev) => [...prev, aiMessage]);

        // const response = await fetch('/api/chat', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ message: input, mood: character.mood }),
        // });

        // const data = await response.json();

        // const aiMessage = { from: 'ai', text: data.reply || '...' };
        // setMessages((prev) => [...prev, aiMessage]);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    if (!character) return <p>Character not found</p>;

    return (
        <section className={`section ${character.themeColor}`}>
            <div className='container'>
                <h1 className='title has-text-white'>
                    chat with {character.mood} {character.name}
                </h1>

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

                <div className='box'>
                    <textarea
                        className='textarea'
                        rows='4'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder={`what do you want to talk to ${character.name} about?`}
                    ></textarea>
                    <button
                        className='button is-dark mt-3'
                        onClick={handleSend}
                    >
                        send
                    </button>
                </div>
            </div>
        </section>
    );
}
