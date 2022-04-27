// object listeral
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

/**
 * todo: rất quan trọng chỗ này
 *
 * ! KHI KHỞI TẠO VỚI TỪ KHÓA "NEW" => SẼ XẢY RA CÁC THỨ BÊN DƯỚI
 *
 * todo: - Nó tạo ra một "EMPTY OBJECT" mới
 * Nó bind this vào object mới đc tạo
 * Nó thêm một property tên là proto vào object mới đc tạo đó, property này trỏ đến constructor của prototype của object của function
 * Nó thêm return this vào cuối của function, do đó object mới được tạo đc return từ function
 *
 */

function Car(name, color, weight) {
  //! console.log(this) =>> nó là 1 object rỗng
  /**
   * tương tự tạo ra các key và value tương ứng
   *
   * object.name = "s450"
   * object.color = "red"
   * object.weight = 10
   */
  this.name = name
  this.color = color
  this.weight = weight

  this.run = function () {
    console.log('runing....', this)
    ;(function () {
      console.log(this) // global object(window or globalThis)
    })()
  }
}

// add new property
Car.prototype.author = 'Luu quang tri'

const s450 = new Car('s450', 'red', 10)

console.log(s450.author)
