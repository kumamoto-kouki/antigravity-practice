import React from 'react';

interface FilterBarProps {
    filter: 'all' | 'active' | 'completed';
    setFilter: (filter: 'all' | 'active' | 'completed') => void;
    onClearCompleted: () => void;
    activeCount: number;
}

export const FilterBar: React.FC<FilterBarProps> = ({ filter, setFilter, onClearCompleted, activeCount }) => {
    const filters: ('all' | 'active' | 'completed')[] = ['all', 'active', 'completed'];

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1.5rem',
            paddingTop: '1rem',
            borderTop: '1px solid rgba(0,0,0,0.05)',
            fontSize: '0.875rem',
            color: '#6b7280',
        }}>
            <span>{activeCount} items left</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                {filters.map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        style={{
                            padding: '0.25rem 0.5rem',
                            borderRadius: '0.25rem',
                            border: 'none',
                            background: filter === f ? 'rgba(99, 102, 241, 0.1)' : 'transparent',
                            color: filter === f ? 'var(--primary-color)' : 'inherit',
                            fontWeight: filter === f ? '600' : '400',
                            cursor: 'pointer',
                            textTransform: 'capitalize',
                        }}
                    >
                        {f}
                    </button>
                ))}
            </div>
            <button
                onClick={onClearCompleted}
                style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'inherit',
                    cursor: 'pointer',
                }}
                className="hover:text-gray-900"
            >
                Clear completed
            </button>
        </div>
    );
};
