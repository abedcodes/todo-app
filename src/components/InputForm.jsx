import { useId } from "react";

export default function InputForm({ saveTodo, inputRef }) {
  const inputId = useId();

  return (
    <form onSubmit={saveTodo}>
      <label htmlFor={inputId}>What to do next?</label>
      <input
        type="text"
        id={inputId}
        ref={inputRef}
        className="rounded border-gray-500 border-2 px-2 py-1"
      />
      <button
        type="submit"
        className="px-6 py-1 bg-purple-500 text-white rounded ml-4"
      >
        Save
      </button>
    </form>
  );
}
