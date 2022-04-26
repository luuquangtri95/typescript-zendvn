// chuyển đổi qua lại các kiểu dữ liệu

let mVariable: any = 'seri typescript'

// let total = (<string>mVariable).length

let total = (mVariable as string).length

console.log(mVariable.length)
