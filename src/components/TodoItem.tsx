import React, { useState } from 'react';
import { Check, Trash2, Edit2, X } from 'lucide-react';

export interface Todo {
    id: string;
    title: string;
    completed: boolean;
    createdAt: number;
}

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTitle] = useState(todo.title);

    const handleEditSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editTitle.trim()) {
            onEdit(todo.id, editTitle.trim());
            setIsEditing(false);
        }
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '0.75rem',
            background: 'rgba(255, 255, 255, 0.4)',
            borderRadius: '0.5rem',
            marginBottom: '0.5rem',
            transition: 'all 0.2s ease',
            border: '1px solid transparent',
        }}
            className="todo-item"
        >
            <div
                onClick={() => onToggle(todo.id)}
                style={{
                    cursor: 'pointer',
                    marginRight: '1rem',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: `2px solid ${todo.completed ? 'var(--success-color)' : '#d1d5db'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: todo.completed ? 'var(--success-color)' : 'transparent',
                    transition: 'all 0.2s ease',
                }}
            >
                {todo.completed && <Check size={14} color="white" />}
            </div>

            {isEditing ? (
                <form onSubmit={handleEditSubmit} style={{ flex: 1, display: 'flex', gap: '0.5rem' }}>
                    <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        autoFocus
                        style={{
                            flex: 1,
                            padding: '0.25rem 0.5rem',
                            borderRadius: '0.25rem',
                            border: '1px solid #e5e7eb',
                        }}
                    />
                    <button type="submit" className="btn-icon" style={{ color: 'var(--success-color)' }}>
                        <Check size={18} />
                    </button>
                    <button type="button" className="btn-icon" onClick={() => setIsEditing(false)}>
                        <X size={18} />
                    </button>
                </form>
            ) : (
                <>
                    <span style={{
                        flex: 1,
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#9ca3af' : 'inherit',
                        transition: 'all 0.2s ease',
                    }}>
                        {todo.title}
                    </span>
                    <div style={{ display: 'flex', gap: '0.25rem' }}>
                        <button
                            className="btn-icon"
                            onClick={() => setIsEditing(true)}
                            aria-label="Edit task"
                        >
                            <Edit2 size={16} />
                        </button>
                        <button
                            className="btn-icon"
                            onClick={() => onDelete(todo.id)}
                            style={{ color: 'var(--danger-color)' }}
                            aria-label="Delete task"
                        >
                            <Trash2 size={16} />
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
