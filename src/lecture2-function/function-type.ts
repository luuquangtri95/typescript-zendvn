function getUserInfo1(name: string, age?: number): string {
  return name
}

const getUserInfo2 = function (name: string, age?: number) {
  return name
}

const getUserInfo3: (name: string, age?: number) => string = function (name, age) {
  return name
}

const getUserInfo4 = (name: string, age?: number): string => name
