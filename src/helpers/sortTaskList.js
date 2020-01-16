import moment from "moment";

export function sortTaskList(list) {
  const today = moment();
  const sortedTasks = [
    { daysFromNow: 0, tasks: [] },
    { daysFromNow: 1, tasks: [] },
    { daysFromNow: 2, tasks: [] },
    { daysFromNow: 3, tasks: [] },
    { daysFromNow: 4, tasks: [] },
    { daysFromNow: 5, tasks: [] },
    { daysFromNow: 6, tasks: [] },
    { daysFromNow: "later", tasks: [] }
  ];
  list.forEach(task => {
    const deadline = moment(task.deadline);
    const daysToDeadline = deadline.diff(today, "days");
    const index = daysToDeadline > 6 ? 7 : daysToDeadline;
    const _daysFromNow = daysToDeadline > 6 ? "later" : daysToDeadline;
    let { daysFromNow = _daysFromNow, tasks = [] } = sortedTasks[index] || {};
    tasks.push(task);
    sortedTasks[index] = { daysFromNow, tasks };
  });
  return sortedTasks;
}

const sortedTasks = tasks => {
  const sorted = {
    overdue: [],
    today: [],
    one: [],
    two: [],
    three: [],
    four: [],
    six: [],
    next: []
  };

  const today = moment();
  tasks.forEach(task => {
    const deadline = moment(task.deadline);
    const daysToDeadline = deadline.diff(today, "days");
  });
};

class TasksList {}
