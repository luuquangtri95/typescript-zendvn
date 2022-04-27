class Task {
  _id: number
  _name: string
  _state: string

  constructor(_id: number, _name: string, _state: string) {
    this._id = _id
    this._name = _name
    this._state = _state
  }

  showTaskInfo() {
    console.log(`${this._id} - ${this._name} - ${this._state}`)
  }
}

const taskTodo1 = new Task(1, 'learn js', 'created')

taskTodo1.showTaskInfo()
