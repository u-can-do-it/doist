import moment from "moment";

// export function sortTaskList(list) {
//   const today = moment();
//   const sortedTasks = [
//     { daysFromNow: 0, tasks: [] },
//     { daysFromNow: 1, tasks: [] },
//     { daysFromNow: 2, tasks: [] },
//     { daysFromNow: 3, tasks: [] },
//     { daysFromNow: 4, tasks: [] },
//     { daysFromNow: 5, tasks: [] },
//     { daysFromNow: 6, tasks: [] },
//     { daysFromNow: "later", tasks: [] }
//   ];
//   list.forEach(task => {
//     const deadline = moment(task.deadline);
//     const daysToDeadline = deadline.diff(today, "days");
//     const index = daysToDeadline > 6 ? 7 : daysToDeadline;
//     const _daysFromNow = daysToDeadline > 6 ? "later" : daysToDeadline;
//     let { daysFromNow = _daysFromNow, tasks = [] } = sortedTasks[index] || {};
//     tasks.push(task);
//     sortedTasks[index] = { daysFromNow, tasks };
//   });
//   return sortedTasks;
// }

// const sortedTasks = tasks => {
//   const sorted = {
//     overdue: [],
//     today: [],
//     one: [],
//     two: [],
//     three: [],
//     four: [],
//     six: [],
//     next: []
//   };

//   const today = moment();
//   tasks.forEach(task => {
//     const deadline = moment(task.deadline);
//     const daysToDeadline = deadline.diff(today, "days");
//   });
// };

export class TasksList {
  next_7 = [];
  format = "MM-DD-YYYY";
  today = moment();
  inbox = [];
  todayTasks = [];
  constructor(tasks) {
    this.next_7 = this.sort(tasks);
    this.todayTasks = this.next_7[this.today.format(this.format)] || [];
    this.inbox = tasks;
  }

  sort(tasks) {
    const sortedTasks = tasks.reduce((sorted, task) => {
      const deadline = moment(task.deadline);

      const tasksKey = deadline.format(this.format);
      const daysToDeadline = deadline.diff(this.today, "days");
      console.log(daysToDeadline);
      switch (true) {
        case daysToDeadline < 0:
          sorted.overdue
            ? sorted.overdue.push(task)
            : (sorted.overdue = [task]);
          break;
        case daysToDeadline < 7:
          sorted[tasksKey]
            ? sorted[tasksKey].push(task)
            : (sorted[tasksKey] = [task]);
          break;
        default:
          sorted.later ? sorted.later.push(task) : (sorted.later = [task]);
      }
      return sorted;
    }, {});

    Object.keys(sortedTasks).forEach(key =>
      sortedTasks[key].sort((a, b) => b.order - a.order)
    );

    return sortedTasks;
  }
}
