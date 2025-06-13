import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MoodChat from './pages/MoodChat';

export default function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/chat/:characterId' element={<MoodChat />} />
        </Routes>
    );
}
