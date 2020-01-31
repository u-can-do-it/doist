import React, { useEffect } from "react";
import useTaskState from "../../store/TaskState";

import styled from "styled-components";

import WithSpinner from "../../components/with-spinner/with-spinner";
import ListWithHeader from "../../components/tasks-list/ListWithHeader";

const StyledDashboard = styled.div`
  border-right: 1px solid #f1f1f1;
  background-color: white;
  background-color: #fafafafa;
  h1 {
    margin-bottom: 8px;
  }
`;

const StyledContentContainer = styled.div`
  height: 100%;
  min-height: 100vh;
  padding: 5.5rem 2rem 4rem;
  background-color: #fff;
  transition: all 0.2s;
  width: 100%;
`;

const DashboardPage = ({ match }) => {
  const taskState = useTaskState();
  const { tasks, isFetching } = taskState;

  useEffect(() => {
    const fetch = () => taskState.fetchTasks();

    fetch();
    // eslint-disable-next-line
  }, []);

  const separator = match.params.separator;
  let list = [];
  let header = "inbox";
  if (tasks) {
    switch (separator) {
      case "today":
        header = "Today";
        list = (
          <ListWithHeader
            list={tasks.today}
            header={"Today"}
            subHeader={"17 styczeń"}
          />
        );
        break;
      case "next_7":
        header = "Next 7 days";
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
        list = <ListWithHeader list={tasks.inbox} header={"inbox"} />;
    }
  }

  return (
    <StyledDashboard>
      <StyledContentContainer>
        <h1>{header}</h1>
        <WithSpinner isLoading={isFetching}>{list}</WithSpinner>
      </StyledContentContainer>
    </StyledDashboard>
  );
};

export default DashboardPage;
