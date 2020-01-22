class Task {
  constructor(
    archived = false,
    _id,
    name = "",
    order = "",
    deadline = new Date(),
    user
  ) {
    this.archived = archived;
    this._id = _id;
    this.name = name;
    this.order = order;
    this.deadline = deadline;
    this.user = user;
  }
}

export default Task;
