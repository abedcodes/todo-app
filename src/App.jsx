import { useRef, useState } from "react";
import InputForm from "./components/InputForm";
import Todo from "./components/Todo";
import "./index.css";

export default function App() {
  const inputRef = useRef(null);
  const [todoList, setTodoList] = useState([]);

  function saveTodo(event) {
    event.preventDefault();
    const newTodo = {
      id: id(),
      description: inputRef.current.value,
      completed: false,
    };
    // debugger;
    inputRef.current.value = ""; //clearing input for next todo
    setTodoList([...todoList, newTodo]);
  }

  // auto-incrementing id
  // function id() {
  //   const lastTodo = todoList.slice(-1)[0];
  //   // debugger;
  //   return lastTodo === undefined ? 1 : ++lastTodo.id;
  // }

  function id() {
    const random = Math.random() * 1_000_000_000;
    return Math.ceil(random).toString(36);
  }

  function deleteTodo(todo) {
    const reducedTodoList = todoList.filter((t) => t.id !== todo.id);
    setTodoList(reducedTodoList);
  }

  function markCompleted(todo) {
    const modifiedTodoList = todoList.map((t) => {
      if (t.id === todo.id) {
        const todoCopy = JSON.parse(JSON.stringify(todo));
        todoCopy.completed = true;
        return todoCopy;
      }
      return t;
    });
    // debugger;
    setTodoList(modifiedTodoList);
  }

  return (
    <>
      <div>
        <InputForm saveTodo={saveTodo} inputRef={inputRef} />
      </div>
      <hr />
      <div>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            markCompleted={markCompleted}
            deleteTodo={deleteTodo}
          />
        ))}
      </div>
    </>
  );
}
