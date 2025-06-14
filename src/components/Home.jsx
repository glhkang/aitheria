import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const characters = [
    {
        id: 1,
        name: 'clara',
        mood: 'calm',
        animation:
            'https://lottie.host/25d06d3b-91c1-4756-89b7-5c49e8017c18/J8HdmWjKAh.lottie',
    },
    {
        id: 2,
        name: 'ignis',
        mood: 'inspirational',
        animation:
            'https://lottie.host/9e703286-fd9d-4822-a35e-ed9df9d92476/I1wKS4rk4H.lottie',
    },
    {
        id: 3,
        name: 'wiley',
        mood: 'witty',
        animation:
            'https://lottie.host/6a209d32-2841-4f79-b25f-23868823b277/bYnapZwXwA.lottie',
    },
];

export default function Home() {
    const [index, setIndex] = useState(0);
    const navigate = useNavigate();

    const prev = () =>
        setIndex((index - 1 + characters.length) % characters.length);
    const next = () => setIndex((index + 1) % characters.length);
    const select = () => navigate(`/chat/${characters[index].id}`);

    const { name, mood, animation } = characters[index];

    return (
        <section className='section has-text-centered'>
            <h1 className='title'>mood</h1>
            <div className='button is-centered mb-4'>
                <button className='button' onClick={prev}></button>
                <DotLottieReact
                    key={index}
                    src={animation}
                    // background='transparent'
                    // speed='1'
                    style={{ width: '200px', height: '200px' }}
                    loop={'true'}
                    autoplay
                />
                <button className='button' onClick={next}></button>
            </div>
            <p className='subtitle'>
                {mood} {name}
            </p>

            <button className='button is-primary mt-4' onClick={select}>
                select
            </button>
        </section>
    );
}
