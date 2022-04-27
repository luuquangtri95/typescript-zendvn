enum TodoState {
  CREATED = 201,
  PENDING,
  COMPLETED,
}

interface TodoListInterface {
  id: number
  todo: string
  status: TodoState
}

class TodoService {
  public static username: string = 'tri'
  todoList: TodoListInterface[]

  constructor(todoList: TodoListInterface[]) {
    this.todoList = todoList
  }

  getItems() {
    return this.todoList
  }

  showItemInfo(): void {
    for (let todo of this.todoList) {
      console.log(todo.todo)
    }
    // console.log('showItsemInfo')
  }
}

const newTodoList = new TodoService([
  {
    id: 1,
    todo: 'code',
    status: TodoState.COMPLETED,
  },
  {
    id: 2,
    todo: 'code php',
    status: TodoState.COMPLETED,
  },
  {
    id: 3,
    todo: 'code ts',
    status: TodoState.PENDING,
  },
])

console.log(newTodoList.showItemInfo())
