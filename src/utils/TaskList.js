import moment from "moment";

export class TasksList {
  next_7 = [];
  format = "MM-DD-YYYY";
  todayDate = moment();
  inbox = [];
  today = [];

  constructor(tasks) {
    this.next_7 = this.sort(tasks);
    this.today = this.next_7[this.todayDate.format(this.format)] || [];
    this.inbox = tasks;
  }

  sort(tasks) {
    const sortedTasks = tasks.reduce((sorted, task) => {
      const deadline = moment(task.deadline);
      const tasksKey = deadline.format(this.format);
      const daysToDeadline = deadline.diff(this.todayDate, "days");

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

  addTask(taskToAdd) {
    this.inbox = this.inbox.concat(taskToAdd);
    this.next_7 = this.sort(this.inbox);
    this.today = this.next_7[this.todayDate.format(this.format)] || [];
  }

  deleteTask(taskToDelete) {
    this.inbox = this.inbox.filter(task => task._id !== taskToDelete._id);
    this.next_7 = this.sort(this.inbox);
    this.today = this.next_7[this.todayDate.format(this.format)] || [];
  }

  editTask(editedTask) {
    const index = this.inbox.findIndex(task => task._id === editedTask._id);
    this.inbox[index] = editedTask;
    this.next_7 = this.sort(this.inbox);
    this.today = this.next_7[this.todayDate.format(this.format)] || [];
  }
}
