import React, { useState } from "react";
import styled from "styled-components";

import { popupWindow } from "../styles/index";
import { IoIosList } from "react-icons/io";
import { FiFlag, FiBell } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { MdLabelOutline } from "react-icons/md";

import Button from "../styles/Button";
import ButtonCancel from "../styles/ButtonCancel";

import DatePick from "../date-pick/DatePick";
import TextArea from "../text-area/text-area";
import Task from "../../models/Task";

const StyledTaskEditor = styled.div`
  max-width: 62.8rem;
  width: 100%;

  .frame {
    width: 100%;
    border: 1px solid grey;
    display: flex;
    justify-content: space-between;
    position: relative;
  }

  .date-pick-button {
    max-width: 20.2rem;
    width: 100%;
    border-left: 1px solid grey;
  }

  .controls {
    width: 100%;
    padding-top: 6px;
    display: flex;
    justify-content: space-between;
  }

  .options svg {
    width: 24px;
    height: 24px;
    color: gray;
    margin-left: 12px;

    :hover {
      color: #202020;
    }
  }

  .date-pick {
    ${popupWindow}
    position: absolute;
    top: 70px;
    right: 0;
  }
`;

const TaskItemEditor = ({ hide, task }) => {
  const [isDatePickerOn, setIsDatePickerOn] = useState(false);

  const [editedTask, setEditedTask] = useState(
    task
      ? {
          ...task,
          deadline: task.deadline ? new Date(task.deadline) : new Date()
        }
      : new Task()
  );

  const datePicker = isDatePickerOn ? (
    <div className="date-pick" onBlur={() => setIsDatePickerOn(false)}>
      <DatePick />
    </div>
  ) : null;

  const handleTaskEdit = event => {
    const { name, value } = event.target;
    setEditedTask({ ...editedTask, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log("submit");
  };

  const { name, deadline } = editedTask;

  return (
    <StyledTaskEditor>
      <form onSubmit={event => handleSubmit(event)}>
        <div className="frame">
          <TextArea name={"name"} value={name} handleChange={handleTaskEdit} />
          <button
            className="date-pick-button"
            type="button"
            onClick={() => setIsDatePickerOn(true)}
          >
            {deadline.toLocaleString("en-us", {
              day: "numeric",
              month: "long"
            })}
          </button>
          {datePicker}
        </div>

        <div className="controls">
          <div>
            <Button type="submit">+ AddTask</Button>
            <ButtonCancel onClick={() => hide()} type="button">
              Cancel
            </ButtonCancel>
          </div>

          <div className="options">
            <button type="button">
              <IoIosList />
            </button>
            <button type="button">
              <MdLabelOutline />
            </button>
            <button type="button">
              <FiFlag />
            </button>
            <button type="button">
              <FiBell />
            </button>
            <button type="button">
              <GoComment />
            </button>
          </div>
        </div>
      </form>
    </StyledTaskEditor>
  );
};

export default TaskItemEditor;
