import { useEffect, useState } from "react";
import "./style.css";
import { TodoItem } from "./todoItems";

function App() {
  const [newTodoName, setNewTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log(todos);
  }, [todos])

  function addNewtodo() {
    if (newTodoName === "") {
      return;
    }
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { name: newTodoName, completed: false, id: crypto.randomUUID() },
      ];
    });
  }

  function toggleTodo(todoid, completed) {
    console.log(completed);
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === todoid) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function removetodo(todoid) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todoid !== todo.id);
    });
  }

  return (
    <>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              toggleTodo={toggleTodo}
              removetodo={removetodo}
            />
          );
        })}
      </ul>
      <div id="new-todo-form">
        {/* {JSON.stringify(todos)} */}
        <label for="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
        />
        <button onClick={addNewtodo}>Add Todo</button>
      </div>
    </>
  );
}

export default App;
