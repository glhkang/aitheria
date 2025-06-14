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
            <div
                className='modal-card is-rounded-card'
                style={{ maxWidth: '400px', margin: '0 auto' }}
            >
                <section className='modal-card-body has-text-centered'>
                    <h1 className='title is-3'>enter password</h1>
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <input
                            className='input'
                            type={showPassword ? 'text' : 'password'}
                            placeholder='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {error && (
                            <p className='has-text-danger mt-2 is-size-7'>
                                {error}
                            </p>
                        )}

                        <button
                            type='button'
                            className='button is-ghost is-size-7'
                            style={{ marginTop: '0px', marginBottom: '10px' }}
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? 'hide' : 'show'}
                        </button>
                        <button
                            className='button is-link is-medium'
                            type='submit'
                        >
                            enter
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default PasswordModal;
