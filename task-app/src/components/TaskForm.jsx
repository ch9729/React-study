import React, { useState } from "react";
import Tag from "./Tag";
import "./TaskForm.css";

const TaskForm = ({ setTasks }) => {
  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("");
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskData.task === "") {
      alert("입력창은 필수입니다.");
      return;
    } else {
      setTasks((prev) => {
        return [...prev, taskData];
      });
      setTaskData({ task: "", status: "todo", tags: [] });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      //taskData의 태그들의 item 값이 tag와 같으면
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return { ...prev, tags: filterTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tag] };
      });
    }
  };
  console.log(taskData.tags);

  const checkTag = (tag) => {
    // tag가 현재 선택한 태그들에 있으면 true 없으면 false
    return taskData.tags.some((item) => item === tag);
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
          name="task"
          value={taskData.task}
        ></input>
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
          </div>
          <div>
            <select
              className="task_status"
              name="status"
              value={taskData.status}
              onChange={handleChange}
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
