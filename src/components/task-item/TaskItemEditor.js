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
import CatchOutsideClick from "../hoc/CartchOutsideClick";

const StyledTaskEditor = styled.div`
  max-width: 62.8rem;
  width: 100%;

  form {
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

  svg {
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

const TaskItemEditor = ({ hide, task = {} }) => {
  const [isDatePickerOn, setisDatePickerOn] = useState(false);

  const datePicker = isDatePickerOn ? (
    <div className="date-pick">
      <DatePick />
    </div>
  ) : null;

  return (
    <StyledTaskEditor>
      <form onBlur={() => setisDatePickerOn(false)}>
        <TextArea name={"name"} />
        <button
          className="date-pick-button"
          type="button"
          onClick={() => setisDatePickerOn(true)}
        >
          set date
        </button>
        {datePicker}
      </form>
      <div className="controls">
        <div>
          <Button>+ AddTask</Button>
          <ButtonCancel onClick={() => hide()}>Cancel</ButtonCancel>
        </div>

        <div>
          <button>
            <IoIosList />
          </button>
          <button>
            <MdLabelOutline />
          </button>
          <button>
            <FiFlag />
          </button>
          <button>
            <FiBell />
          </button>
          <button>
            <GoComment />
          </button>
        </div>
      </div>
      <DatePick />
    </StyledTaskEditor>
  );
};

export default TaskItemEditor;
