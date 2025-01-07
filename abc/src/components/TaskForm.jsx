import React, { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

const TaskForm = () => {
  //   const [task, setTask] = useState("");
  //   const [status, setStatus] = useState("");
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={taskData.task}
          name="task"
          type="text"
          className="task_input"
          placeholder="Enter your task"
        ></input>

        <div className="task_form_bottom_line">
          <div>
            <Tag tagName="HTML" />
            <Tag tagName="CSS" />
            <Tag tagName="JavaScript" />
            <Tag tagName="React" />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              onChange={handleChange}
              value={taskData.status}
            >
              <option value="todo">할일</option>
              <option value="doing">진행중</option>
              <option value="done">완료</option>
            </select>

            <button type="submit" className="task_submit">
              +추가
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
