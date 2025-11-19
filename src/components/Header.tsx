import React from 'react';

export const Header: React.FC = () => {
    return (
        <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <h1 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                background: 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '0.5rem'
            }}>
                Todo App
            </h1>
            <p style={{ color: '#6b7280' }}>Stay organized, stay focused.</p>
        </header>
    );
};
