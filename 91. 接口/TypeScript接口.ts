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

// 2. 可选| 只读属性
interface Person1 {
  readonly name: string;
  age?: number;
}
// 制度属性用于限制只能在对象初建的时候修改其值，ts提供了ReadonlyArray<T>类型，它与Array<T>相似， 只是把所有可变的方法去掉了，因此可以确保数组创建后在也不能被修改
let a: number[] = [1, 2, 3, 4, 5]
let read: ReadonlyArray<number> = a;
// read[0] = 100; // error code
// read.push(100); // error code
// read.length = 100; // error code
// a = read // error code

// 3. 任意属性
// 有时候希望一个接口中除了包含必选和可选属性之外，还允许有其他的任意属性，这是可以使用索引签名的形式
interface Person2 {
  name: string;
  age?: number;
  [propName: string]: any;
}
const p1 = { name: 'John' };
const p2 = { name: 'kk', age: 1 };
const p3 = { name: 'xiaoli', sex: 'female' };

// 4. 接口与类型别名的区别
// 4.1 Objects/Functions
// 接口和类型别名都可以用来描述对象的形状或函数签名

// 接口
interface Point {
  x: number;
  y: number;
}
interface SetPoint {
  (x: number, y: number ): void;
}

// 类型别名
type Point1 = {
  x: number;
  y: number;
}
type SetPoint1 = (x: number, y: number) => void;

// 4.2 Other Types
// 与接口类型不一样， 类型别名可以用于一些其他类型， 比如原始类型，联合类型和元组；
// primitive
type Name = string;

// object
type PartialPointX = { x: number };
type PartialPointY = { y: number };

// union
type PartialPoint = PartialPointX | PartialPointY;

// tuple 
type Datka = [number, string];

// 4.3 Extend 
//  接口和类型别名都能够被扩展，但是语法不同，此外接口和类型别名不是互斥的，接口可以扩展类型别名，而反过来是不行的

// Interface extends Interface 
interface PartialPointX1 {
  x: number;
}
interface Point2 extends PartialPointX1 {
  y: number
}

// Type alias extends type alias
type PartialPointX2 = { x: number };
type Point3 = PartialPointX2 & { y: number };

// Interface extends type alias 
type PartialPointX3 = { x: number };
interface Point4 extends PartialPointX3 { y: number };

//  Type alias extends interface
interface PartialPointX4 { x: number };
type Point5 = PartialPointX4 & { y: number };

// 4.4 Implements
// 类可以以相同的方式实现接口或类型别名，但类不能实现使用类型别名定义的联合类型
interface Point6 {
  x: number;
  y: number;
}
class SomePoint implements Point6 { x: 1; y: 2; }

type Point7 = { x: number; y: number };

class SomePoint2 implements Point7 { x = 1; y = 2; }

type PartialPointX8 = { x: number } | { y: number };
// A class can only implement an object type or intersecrion of object types with statically known members

// 报错
// class SomePartialPoint implements PartialPointX8 {
//   x = 1;
//   y = 2;
// } 

// 4.5 Declaration merging
// 与类型别名不同，接口可以定义多次，会被自动合并为单个接口
interface Point8 { x: number }
interface Point8 { y: number }
const point8: Point8 = { x: 1, y: 1 };