interface CourseInterface {
  id: number | string
  name: string
  time: number | string
  free?: boolean
}

let courseOne: CourseInterface = {
  id: 1,
  name: 'typescript',
  time: '5h',
}

let courserTwo: CourseInterface = {
  id: 2,
  name: 'javascript',
  time: '35h',
  free: false,
}
