class Task {
  constructor(archived = false, _id, name = "", deadline = new Date(), user) {
    this.archived = archived;
    this._id = _id;
    this.name = name;
    this.deadline = new Date(deadline);
    this.user = user;
  }
}

export default Task;
