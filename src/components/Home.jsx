import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleChevronLeft,
    faCircleChevronRight,
} from '@fortawesome/free-solid-svg-icons';

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
            'https://lottie.host/6fb7c6de-ad77-444e-b7df-11610774f800/pJeHF4Xqh5.lottie',
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
        <section
            className='section is-flex is-justify-content-center is-align-items-center'
            style={{
                minHeight: '100vh',
                width: '100%',
                margin: 0,
                padding: 0,
            }}
        >
            <div
                className='box has-text-centered'
                style={{
                    maxWidth: '600px',
                    width: '100%',
                    padding: '3rem',
                    margin: '0 auto',
                }}
            >
                <h1 className='title is-size-3 mb-3'>chat with:</h1>

                <div className='is-flex is-align-items-center mb-4'>
                    <button className='button is-ghost' onClick={prev}>
                        <FontAwesomeIcon icon={faCircleChevronLeft} size='2x' />
                    </button>

                    <DotLottieReact
                        key={index}
                        src={animation}
                        style={{
                            width: '600px',
                            // height: '400px',
                            margin: '0 auto',
                        }}
                        loop
                        autoplay
                    />

                    <button className='button is-ghost' onClick={next}>
                        <FontAwesomeIcon
                            icon={faCircleChevronRight}
                            size='2x'
                        />
                    </button>
                </div>

                <p className='subtitle is-size-4'>
                    {mood} {name}
                </p>

                <button className='button is-link' onClick={select}>
                    select
                </button>
            </div>
        </section>
    );
}
