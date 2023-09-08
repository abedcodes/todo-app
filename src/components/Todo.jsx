export default function Todo({ todo, markCompleted, deleteTodo }) {
  return (
    <div
      className={`${todo.completed ? "bg-green-200" : ""} ${true ? "flex mb-2 justify-between w-[600px]" : ""}`}
    >
      <h2 className="text-xl font-bold">{todo.description}</h2>
      <div>
        <button
          onClick={() => markCompleted(todo)}
          className="px-3 py-1 bg-blue-500 text-white rounded ml-1"
        >
          mark completed
        </button>
        <button className="px-3 py-1 bg-yellow-500 text-white rounded ml-1">
          edit
        </button>
        <button
          onClick={() => deleteTodo(todo)}
          className="px-3 py-1 bg-red-500 text-white rounded mx-1"
        >
          delete
        </button>
      </div>
    </div>
  );
}
