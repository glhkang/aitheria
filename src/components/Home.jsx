import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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
            'https://lottie.host/67ab7480-3990-4f13-af31-700500da4c70/5lDFoQsepp.lottie',
    },
    {
        id: 3,
        name: 'wiley',
        mood: 'witty',
        animation:
            'https://lottie.host/2be9539c-3657-4ec5-aa45-f2f3897f9b28/7Y8k3jZgT8.lottie',
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
