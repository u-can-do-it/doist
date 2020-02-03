// import moment from "moment";

// export class TasksList {
//   next_7 = [];
//   format = "MM-DD-YYYY";
//   todayDate = moment();
//   inbox = [];
//   today = [];

//   constructor(tasks) {
//     this.next_7 = this.sort(tasks);
//     this.today = this.next_7[this.todayDate.format(this.format)] || [];
//     this.inbox = tasks;
//   }

//   sort(tasks) {
//     const sortedTasks = tasks.reduce((sorted, task) => {
//       const deadline = moment(task.deadline);
//       const tasksKey = deadline.format(this.format);
//       const daysToDeadline = deadline.diff(this.todayDate, "days");

//       switch (true) {
//         case daysToDeadline < 0:
//           sorted.overdue
//             ? sorted.overdue.push(task)
//             : (sorted.overdue = [task]);
//           break;
//         case daysToDeadline < 7:
//           sorted[tasksKey]
//             ? sorted[tasksKey].push(task)
//             : (sorted[tasksKey] = [task]);
//           break;
//         default:
//           sorted.later ? sorted.later.push(task) : (sorted.later = [task]);
//       }
//       return sorted;
//     }, {});

//     Object.keys(sortedTasks).forEach(key =>
//       sortedTasks[key].sort((a, b) => b.order - a.order)
//     );

//     return sortedTasks;
//   }

//   addTask(taskToAdd) {
//     this.inbox = this.inbox.concat(taskToAdd);
//     this.next_7 = this.sort(this.inbox);
//     this.today = this.next_7[this.todayDate.format(this.format)] || [];
//   }

//   deleteTask(taskToDelete) {
//     this.inbox = this.inbox.filter(task => task._id !== taskToDelete._id);
//     this.next_7 = this.sort(this.inbox);
//     this.today = this.next_7[this.todayDate.format(this.format)] || [];
//   }

//   editTask(editedTask) {
//     const index = this.inbox.findIndex(task => task._id === editedTask._id);
//     this.inbox[index] = editedTask;
//     this.next_7 = this.sort(this.inbox);
//     this.today = this.next_7[this.todayDate.format(this.format)] || [];
//   }
// }

const daysBetween = (day1, day2) => {
  console.log((day2 - day1) / 86400000);
  return Math.ceil((day1 - day2) / 86400000);
};

export class TasksList {
  dateKeys = [];
  overdueTasks = [];
  todayTasks = [];
  inbox = [];

  constructor(tasks) {
    this.dateKeys.push("overdue");
    const day = new Date();
    for (let i = 0; i < 7; i++) {
      this.dateKeys.push(day.toLocaleDateString());
      day.setDate(day.getDate() + 1); // next day
    }
    this.dateKeys.push("later");

    this.sort(tasks);
  }

  sort(tasks) {
    const day = new Date(new Date().toISOString().split("T")[0]);

    const list = this.dateKeys.reduce((list, key) => {
      return { ...list, [key]: [] };
    }, {});

    tasks.forEach(task => {
      task.deadline = new Date(task.deadline);
      const dayDiff = daysBetween(task.deadline, day);
      switch (true) {
        case dayDiff < 1:
          list.overdue.push(task);
          break;
        case dayDiff > 6:
          list.later.push(task);
          break;
        default:
          list[task.deadline.toLocaleDateString()].push(task);
      }
    });

    this.dateKeys.forEach(key =>
      list[key].sort((a, b) => a.deadline - b.deadline)
    );
    const inbox = [];
    this.dateKeys.forEach(key => list[key].forEach(task => inbox.push(task)));

    this.inbox = inbox;
    this.list = { ...list };
    this.todayTasks = list[day.toLocaleDateString()];
    this.overdue = list.overdue;
  }

  addTask(task) {
    this.inbox.push(task);
    this.sort(this.inbox);
  }

  editTask(editedTask) {
    const index = this.inbox.findIndex(task => task._id === editedTask._id);
    this.inbox[index] = editedTask;
    this.sort(this.inbox);
  }

  deleteTask(taskToDelete) {
    const tasks = this.inbox.filter(task => task._id !== taskToDelete._id);
    this.sort(tasks);
  }
}
