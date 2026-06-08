"use client";

import { useState } from "react";

export default function TodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (text.trim() === "") return;
    onAddTodo(text.trim());
    setText(""); // Daxil edildikdən sonra inputu təmizlə
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nə edilməlidir?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Əlavə et</button>
    </form>
  );
}