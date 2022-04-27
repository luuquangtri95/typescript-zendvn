enum TaskState {
  Created = 100,
  Active,
  InActive,
  Process,
  Finish,
}

interface TaskInterface {
  id: number
  name: string
  state?: TaskState
}

class TaskService {
  tasks: TaskInterface[]
  constructor(tasks: TaskInterface[]) {
    this.tasks = tasks
  }

  getItems() {
    return this.tasks
  }
}

let taskList: TaskInterface[] = [
  {
    id: 1,
    name: 'code js',
    state: TaskState.Finish,
  },
]
const taskServiceObj = new TaskService(taskList)

console.log(taskServiceObj.getItems())
