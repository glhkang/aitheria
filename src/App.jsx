import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import MoodChat from './components/MoodChat';
import PasswordModal from './components/PasswordModal';
import Footer from './components/Footer';

export default function App() {
    const [isAuthed, setIsAuthed] = useState(false);

    useEffect(() => {
        const authed = sessionStorage.getItem('authenticated') === 'true';
        setIsAuthed(authed);
    }, []);

    if (!isAuthed) {
        return <PasswordModal onAuthSuccess={() => setIsAuthed(true)} />;
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <main
                style={{
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}
            >
                {' '}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/chat/:characterId' element={<MoodChat />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}
