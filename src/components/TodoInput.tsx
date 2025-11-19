import React, { useState } from 'react';
import { Plus } from 'lucide-react';

interface TodoInputProps {
    onAdd: (title: string) => void;
}

export const TodoInput: React.FC<TodoInputProps> = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (title.trim()) {
            onAdd(title.trim());
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="What needs to be done?"
                style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    border: '1px solid #e5e7eb',
                    outline: 'none',
                    background: 'rgba(255, 255, 255, 0.5)',
                }}
            />
            <button type="submit" className="btn btn-primary">
                <Plus size={20} />
                Add
            </button>
        </form>
    );
};
