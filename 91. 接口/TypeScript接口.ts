/**
 * 在面向对象语言中，接口是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类去实现
 * TS中的接口是一个灵活的概念，除了可用于对类的一部分行为进行抽象外，也常用于对（对象的形状Shape）的描述
 */

// 1. 对象的形状Shape
interface Person {
  name: string;
  age: number;
}

let libai: Person = {
  name: 'libai',
  age: 18
}