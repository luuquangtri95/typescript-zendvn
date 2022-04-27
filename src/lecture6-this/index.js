const iphone7 = {
  // thuộc tính - property
  name: 'iphone7',
  color: 'pink',
  weight: 300,

  // phương thức - method
  takePhoto() {
    console.log(this)
  },

  objChild: {
    name: 'object child',
    methodChild() {
      console.log(this)
    },
  },
}

// từ khóa this sẽ trả về đối tượng nó đang thuộc về

function Car(name, color, weight) {
  this.name = name
  this.color = color
  this.weight = weight

  this.run = function () {
    console.log('runing....', this)
  }
}

const s450 = new Car('s450', 'red', 10)

console.log(s450.run())
