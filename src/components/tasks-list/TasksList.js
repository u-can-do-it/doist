import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

import TaskItem from "../task-item/TaskItem";
import useTaskState from "../../store/TaskState";
import WithSpinner from "../with-spinner/with-spinner";
import AddTask from "../add-task/AddTask";

const TasksList = () => {
  const taskState = useTaskState();
  const { tasks = [], isFetching } = taskState;
  let match = useRouteMatch();

  return (
    <div>
      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            <h3> {match.params.name} </h3>
          </div>
        )}
      />
      <WithSpinner isLoading={isFetching}>
        <ul>
          {tasks.map(t => (
            <TaskItem task={t} key={t._id} />
          ))}
        </ul>
        <AddTask />
      </WithSpinner>
    </div>
  );
};

export default TasksList;
