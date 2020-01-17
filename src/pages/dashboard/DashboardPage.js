import React, { useEffect } from "react";
import useTaskState from "../../store/TaskState";
import tasksSeparators from "../../constants/tasksSeparators";

import LeftMenu from "../../components/left-menu/LeftMenu";
import TasksList from "../../components/tasks-list/TasksList";
import styled from "styled-components";

import WithSpinner from "../../components/with-spinner/with-spinner";
import ListWithHeader from "../../components/tasks-list/ListWithHeader";
import TaskItem from "../../components/task-item/TaskItem";
import moment from "moment";

const StyledDashboard = styled.div`
  border-right: 1px solid #f1f1f1;
  min-height: 100vh;
  padding-top: 4.4rem;
  background-color: white;
`;

const StyledContentContainer = styled.div`
  margin-left: 23.5rem;
  height: 100%;
  padding-top: 3rem;
`;

const DashboardPage = ({ match }) => {
  const taskState = useTaskState();
  const { tasks, isFetching } = taskState;
  useEffect(() => {
    taskState.fetchTasks();
  }, []);
  const separator = match.params.separator;
  let list = [];
  if (tasks) {
    switch (separator) {
      case "TODAY":
        list = (
          <ListWithHeader
            list={tasks.todayTasks}
            header={"Today"}
            subHeader={"17 styczeń"}
          />
        );
        break;
      case "INBOX":
        list = <ListWithHeader list={tasks.inbox} header={"Inbox"} />;
        break;
      case "NEXT_7":
        const tasksList = tasks.next_7;
        const days = Object.keys(tasksList);
        list = days.reduce(
          (acc, day, index) =>
            (acc = [
              ...acc,
              <ListWithHeader list={tasksList[day]} header={day} key={index} />
            ]),
          []
        );
        break;
      default:
    }
  }

  return (
    <StyledDashboard>
      <LeftMenu />
      <StyledContentContainer>
        <WithSpinner isLoading={isFetching}>{list} </WithSpinner>
      </StyledContentContainer>
    </StyledDashboard>
  );
};

export default DashboardPage;
