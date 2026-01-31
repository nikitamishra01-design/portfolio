import { useState, useEffect } from "react";
import "./App.css";

function App() {
  
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  const [task, setTask] = useState("");
  const [dark, setDark] = useState(false);

  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, done: false }]);
    setTask("");
  };

  const toggleTodo = (i) => {
    const newTodos = [...todos];
    newTodos[i].done = !newTodos[i].done;
    setTodos(newTodos);
  };

  return (
    <div className={dark ? "app dark" : "app"}>
      <button className="theme-btn" onClick={() => setDark(!dark)}>
        🌗
      </button>

      <h1>Focus.</h1>
      <p>Stay organized and get things done.</p>

      <div className="input-box">
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What needs to be done?"
        />
        <button onClick={addTodo}>+</button>
      </div>

      <div className="list">
        {todos.map((t, i) => (
          <div key={i} className="todo">
            <input
              type="checkbox"
              checked={t.done}
              onChange={() => toggleTodo(i)}
            />
            <span className={t.done ? "done" : ""}>{t.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
