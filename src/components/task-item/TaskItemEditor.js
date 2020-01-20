import React from "react";
import styled from "styled-components";
import { FaProjectDiagram, FaBell } from "react-icons/fa";
import { MdLabel, MdPriorityHigh } from "react-icons/md";

import DatePick from "../date-pick/DatePick";
import TextArea from "../text-area/text-area";

const StyledTaskEditor = styled.div`
  max-width: 62.8rem;
  width: 100%;

  form {
    width: 100%;
    border: 1px solid grey;
    display: flex;
  }

  .date-pick {
    background-color: blue;
  }
`;

const TaskItemEditor = ({ hide }) => (
  <StyledTaskEditor>
    <form>
      <TextArea name={"name"} />
      <DatePick className="date-pick" />
    </form>

    <div>
      <button>+ AddTask</button>
      <button>Cancel</button>
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
  </StyledTaskEditor>
);
export default TaskItemEditor;
