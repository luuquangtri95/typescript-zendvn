// // sự kế thừa

// class Courser {
//   id: number
//   name: string
//   price: number

//   constructor(id: number, name: string, price: number) {
//     this.id = id
//     this.name = name
//     this.price = price
//   }

//   showCourserInfo(): void {
//     console.log(`${this.id} - ${this.name} - ${this.price}`)
//   }
// }

// class MobileCourser extends Courser {
//   author: string

//   constructor(id: number, name: string, price: number, author: string) {
//     super(id, name, price)
//     this.author = author
//   }

//   showCourserInfo(): void {
//     super.showCourserInfo()
//     console.log('author', this.author)
//   }
// }

// const mobileClass = new MobileCourser(1, 'react-native', 1000, 'luu quang tri')
// const normalClass = new Courser(2, 'react', 15000)

// console.log(mobileClass.showCourserInfo())
// console.log(normalClass.showCourserInfo())
