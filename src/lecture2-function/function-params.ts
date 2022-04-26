// truyền tham số vào hàm

function userInfo1(name: string, age: number): string {
  return `${name} - ${age}`
}

console.log(userInfo1('tri', 27))

function userInfo2(name: string = 'tri', age: number = 12): string {
  return `${name} - ${age}`
}

console.log(userInfo2())

function userInfo3(name: string = 'tri', age?: number): string {
  if (age === null) return name

  return `${name} - ${age}`
}

console.log(userInfo3('huynh cat my'))

/**********************************************/

function totalLength(x: string | any[], y: string[] | string): number {
  return x.length + y.length
}

totalLength([1, 2, 3], ['tri'])
