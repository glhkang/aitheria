import React, { useState, useEffect } from 'react';
import { PORTFOLIO_PASSWORD } from '../config';

const PasswordModal = ({ onAuthSuccess }) => {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [showModal, setShowModal] = useState(true);

    useEffect(() => {
        const isAuthed = sessionStorage.getItem('authed') === 'true';
        if (isAuthed) {
            setShowModal(false);
            onAuthSuccess();
        }
    }, [onAuthSuccess]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const correctPassword = PORTFOLIO_PASSWORD;

        if (password === correctPassword) {
            sessionStorage.setItem('authenticated', true);
            setShowModal(false);
            onAuthSuccess();
        } else {
            setError('Incorrect password');
        }
    };

    if (!showModal) return null;

    return (
        <div className='modal is-active'>
            <div className='modal-background' />
            <div className='modal-card'>
                <section className='modal-card-body has-text-centered'>
                    <h1 className='title is-4'>enter password</h1>
                    <form onSubmit={handleSubmit}>
                        <input
                            className='input my-3'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                            type='button'
                            onClick={() => setShowPassword((prev) => !prev)}
                            style={{ marginLeft: '8px' }}
                        >
                            {showPassword ? 'hide' : 'show'}
                        </button>
                        <button className='button is-primary' type='submit'>
                            enter
                        </button>
                        {error && (
                            <p className='has-text-danger mt-2'>{error}</p>
                        )}
                    </form>
                </section>
            </div>
        </div>
    );
};

export default PasswordModal;
