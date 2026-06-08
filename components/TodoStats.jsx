export default function TodoStats({ todos }) {
  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;
  const remaining = total - completed;

  return (
    <div className="todo-stats">
      <span>Ümumi: {total}</span>
      <span>Tamamlanmış: {completed}</span>
      <span>Qalan: {remaining}</span>
    </div>
  );
}