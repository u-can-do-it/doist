import React from "react";

import TaskItem from "../task-item/TaskItem";

const ListWithHeader = ({ header = "", subHeader = "", list = [] }) => (
  <div>
    <h2>
      {header}
      <span>{subHeader}</span>
    </h2>
    <ul>
      {list.map((item, index) => (
        <TaskItem task={item} key={index} />
      ))}
    </ul>
  </div>
);

export default ListWithHeader;
