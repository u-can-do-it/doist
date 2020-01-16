import React, { useState } from "react";
import useTaskState from "../../store/TaskState";
import { MdLabel, MdPriorityHigh } from "react-icons/md";
import { FaProjectDiagram, FaBell } from "react-icons/fa";

import TextArea from "../text-area/text-area";
import FormInput from "../form-input/FormInput";

const AddTask = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const taskState = useTaskState();
  const { addTask } = taskState;
  const [newTask, setNewTask] = useState({
    name: ""
  });

  const handleNameSet = event => {
    setNewTask({
      ...newTask,
      name: event.target.value
    });
  };

  const handleDeadlineSet = event => {
    setNewTask({
      ...newTask,
      deadline: event.target.value
    });
  };

  const editButton = (
    <button onClick={() => setIsEditMode(true)}>Add task</button>
  );

  const handeAddTask = () => {
    addTask(newTask);
    setIsEditMode(false);
    setNewTask({ name: "" });
  };
  const editor = (
    <div>
      <form>
        <TextArea handleChange={handleNameSet} name={"name"} />

        <div>date field</div>
      </form>

      <div>
        <div>
          <button onClick={handeAddTask}>+ AddTask</button>
          <button onClick={() => setIsEditMode(false)}>Cancel</button>
        </div>
        <div>
          <button>
            <FaProjectDiagram />
          </button>
          <button>
            <MdLabel />
          </button>
          <button>
            <MdPriorityHigh />
          </button>
          <button>
            <FaBell />
          </button>
        </div>
      </div>
    </div>
  );
  return isEditMode ? editor : editButton;
};

export default AddTask;
