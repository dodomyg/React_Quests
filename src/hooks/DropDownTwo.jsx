import { useState } from "react";

const DropDownTwo = () => {
  const [tasks, setTasks] = useState([
    "play game ",
    "play cricket",
    "read book",
  ]);

  const removeTask = (t) => {
    setTasks(tasks.filter((task) => task !== t));
  };
  return (
    <div>
      {tasks &&
        tasks.map((task, i) => (
          <div className="flex items-center gap-2" key={i}>
            <h1>{task}</h1>
            <button type="button" onClick={() => removeTask(task)}>
              Delete
            </button>
          </div>
        ))}
    </div>
  );
};

export default DropDownTwo;
