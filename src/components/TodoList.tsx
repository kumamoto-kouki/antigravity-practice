import React from 'react';
import { TodoItem, type Todo } from './TodoItem';

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: string) => void;
    onDelete: (id: string) => void;
    onEdit: (id: string, newTitle: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onEdit }) => {
    if (todos.length === 0) {
        return (
            <div style={{ textAlign: 'center', padding: '2rem', color: '#9ca3af' }}>
                <p>No tasks found.</p>
            </div>
        );
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggle={onToggle}
                    onDelete={onDelete}
                    onEdit={onEdit}
                />
            ))}
        </div>
    );
};
