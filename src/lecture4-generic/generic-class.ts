class Product<A, B, C> {
  id: A
  name: B
  price: C

  constructor(id: A, name: B, price: C) {
    this.id = id
    this.name = name
    this.price = price
  }

  showProduct() {
    console.log(`${this.id} - ${this.name} - ${this.price}`)
  }
}

const iphone = new Product<string, string, number>('1', 'iphone', 10000)
const iphone2 = new Product<number, string, string>(12, 'iphone2', '10000 usd')
const iphone3 = new Product<number, string, boolean>(12, 'iphone3', true)

console.log(iphone.showProduct())
