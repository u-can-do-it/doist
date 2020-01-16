import React, { useEffect } from "react";
import useTaskState from "../../store/TaskState";
import tasksSeparators from "../../constants/tasksSeparators";

import LeftMenu from "../../components/left-menu/LeftMenu";
import TasksList from "../../components/tasks-list/TasksList";
import styled from "styled-components";

import WithSpinner from "../../components/with-spinner/with-spinner";
import ListWithHeader from "../../components/tasks-list/ListWithHeader";
import TaskItem from "../../components/task-item/TaskItem";

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
  const { tasks = [], isFetching } = taskState;
  useEffect(() => {
    taskState.fetchTasks();
  }, [taskState]);

  return (
    <StyledDashboard>
      <LeftMenu />
      <StyledContentContainer>
        <WithSpinner isLoading={isFetching}>lista zadań</WithSpinner>
      </StyledContentContainer>
    </StyledDashboard>
  );
};

export default DashboardPage;
