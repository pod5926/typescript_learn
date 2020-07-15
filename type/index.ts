let hasValue = true
let count = 10
let float = 3.14
let negative = -0.12
let single = 'hello'
let double = 'hello'
let back = `hello`
let hello: string
hello = 'hello'

const person = {
  name: {
    first: 'Jack',
    last: 'Smith',
  },
  age: 21,
}
const fruits = ['Apple', 'Banana', 'Grape']

// 18-tuple
const book: [string, number, boolean] = ['business', 1500, false]

// 19-enum
enum CoffeeSize {
  SHORT,
  TALL = 'TALL',
  GRANDE = 1,
  VENTI,
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL,
}
coffee.size = CoffeeSize.SHORT

// 20-any
let anything: any = true
anything = 'hello'
anything = ['hello', 33, true]
anything = {}
anything.fjiafjaj = 'faijfi'
let banana = 'banana'
banana = anything

// 21-union
let unionType: number | string = 10
let unionTypes: (number | string)[] = [21, 'hello']

// 22-literal & 23-type
type ClothSize = 'small' | 'medium' | 'large'
const apple = 'apple'
let clothSize: ClothSize = 'large'
const cloth: {
  color: string
  size: ClothSize
} = {
  color: 'white',
  size: 'medium',
}

// 24-function
function add(num1: number, num2: number): number {
  return num1 + num2
}

// 25-void
function sayHello(): void {
  // console.log('Hello!');
}

// console.log(sayHello());
let tmp: undefined

// 27
const anotherAdd: (n1: number, n2: number) => number = function (num1, num2) {
  return num1 + num2
}
const doubleNumber: (num: number) => number = num => num * 2

// 28-coallback
function doubleAndHandle(num: number, cb: (num: number) => void): void {
  const doubleNum = cb(num * 2)
  console.log(doubleNum)
}
doubleAndHandle(21, doubleNum => {
  return doubleNum
})

let unknownInput: unknown
let anyInput: any
let text: string
unknownInput = 'hello'
unknownInput = 21
unknownInput = true
text = anyInput
if (typeof unknownInput === 'string') {
  text = unknownInput
}

// function error(message: string) {
//   throw new Error(message)
// }
// console.log(error('This is an error'))
