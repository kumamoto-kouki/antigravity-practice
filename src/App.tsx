import { useState, useMemo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Layout } from './components/Layout';
import { Header } from './components/Header';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';
import { FilterBar } from './components/FilterBar';
import type { Todo } from './components/TodoItem';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todo-app-data', []);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTodo = (title: string) => {
    const newTodo: Todo = {
      id: uuidv4(),
      title,
      completed: false,
      createdAt: Date.now(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newTitle: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title: newTitle } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <Layout>
      <Header />
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={filteredTodos}
        onToggle={toggleTodo}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
      <FilterBar
        filter={filter}
        setFilter={setFilter}
        onClearCompleted={clearCompleted}
        activeCount={activeCount}
      />
    </Layout>
  );
}

export default App;
