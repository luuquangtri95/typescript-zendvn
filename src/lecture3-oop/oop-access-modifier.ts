// cho phép truy cập: như private, protected, public trong oop

class Courser {
  public id: number
  private name: string
  protected price: number

  constructor(id: number, name: string, price: number) {
    this.id = id
    this.name = name
    this.price = price
  }

  showCourserInfo(): void {
    console.log(`${this.id} - ${this.name} - ${this.price}`)
  }
}

class MobileCourser extends Courser {
  author: string

  constructor(id: number, name: string, price: number, author: string) {
    super(id, name, price)
    this.author = author
  }

  showCourserInfo(): void {
    super.showCourserInfo()
    console.log('author', this.author)
  }

  getProps() {
    console.log(this.id)
    // console.log(this.name) =>> chỉ được truy cập nội tại thằng chưa private
    console.log(this.price)
  }
}

const mobileClass = new MobileCourser(1, 'react-native', 1000, 'luu quang tri')
const courserObj = new Courser(2, 'react', 100000)

// console.log(courserObj.price)

console.log(mobileClass.getProps())

/**
 *                       Inside             OutSide               ChildClass
 * public                   +                  +                       +
 * private                  +                  -                       -
 * protected                +                  -                       +
 *
 */
