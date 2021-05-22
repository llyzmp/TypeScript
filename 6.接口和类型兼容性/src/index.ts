
interface User {
  name: string
  age: number
  sayHello(): void
}

// type User = {
//   name: string
//   age: number
// }

let u: User = {
  name: 'aasd',
  age: 33,
  sayHello() {
    console.log('ssdfdsfdfs');
  }
}