import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import MoodChat from './components/MoodChat';
import PasswordModal from './components/PasswordModal';

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
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chat/:characterId' element={<MoodChat />} />
        </Routes>
    );
}
