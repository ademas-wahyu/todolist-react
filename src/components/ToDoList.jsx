import { useState } from "react";
import Navbar from "./navbar";
import TodoItem from "./TodoItem";

function ToDoList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "doctor appoinment",
      completed: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      completed: true,
    },
  ]);

  const [text, SetText] = useState("");

  function addTask(text) {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    SetText("");
  }
  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleCompleted(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  }
  return (
    <div className="todo-list">
      <Navbar />
      <div className="listTask">
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleCompleted={toggleCompleted}
          />
        ))}
      </div>
      <div className="submiter">
        <input value={text} onChange={(e) => SetText(e.target.value)} />
        <button onClick={() => addTask(text)}>Add</button>
      </div>
    </div>
  );
}

export default ToDoList;
