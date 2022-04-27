class Task {
  id: number
  name: string
  state: string

  constructor(id: number, name: string, state: string) {
    this.id = id
    this.name = name
    this.state = state
  }

  showTaskInfo() {
    console.log(`${this.id} - ${this.name} - ${this.state}`)
  }
}

const taskTodo1 = new Task(1, 'learn js', 'created')

taskTodo1.showTaskInfo()
