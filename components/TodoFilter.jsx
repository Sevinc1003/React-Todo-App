"use client";

export default function TodoFilter({ filter, onFilterChange }) {
  return (
    <div className="todo-filters">
      <button
        className={filter === "all" ? "active" : ""}
        onClick={() => onFilterChange("all")}
      >
        Hamısı
      </button>
      <button
        className={filter === "active" ? "active" : ""}
        onClick={() => onFilterChange("active")}
      >
        Aktiv
      </button>
      <button
        className={filter === "completed" ? "active" : ""}
        onClick={() => onFilterChange("completed")}
      >
        Tamamlanmış
      </button>
    </div>
  );
}