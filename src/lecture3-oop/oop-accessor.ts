// lưu ý: phải có _ phía trước biến, và phải sử dụng getter và setter

class newCourser {
  private _name: string

  constructor(name: string) {
    this._name = name
  }

  showInfo() {
    console.log(this.name)
  }

  public get name(): string {
    return this._name
  }

  public set name(v: string) {
    this._name = v
  }
}

const courserObj1 = new newCourser('ts')
console.log(courserObj1.name)

courserObj1.name = 'abc'

console.log(courserObj1.name)
