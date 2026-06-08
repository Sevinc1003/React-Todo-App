"use client";

import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import TodoFilter from "../components/TodoFilter";
import TodoStats from "../components/TodoStats";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  // Yeni todo əlavə etmək
  function handleAddTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  }

  // Todonun tamamlanma vəziyyətini dəyişmək
  function handleToggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  // Todonu silmək
  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  // Filtrasiya olunmuş todolar (Derived State)
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
    return true; // 'all' olduqda hamısını göstər
  });

  return (
    <main className="todo-app">
      <h1>Todo App</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoFilter filter={filter} onFilterChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
      <TodoStats todos={todos} />
    </main>
  );
}