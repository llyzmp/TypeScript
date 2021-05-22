// let name:string;

// name = '333'

// function add(a: number, b: number) {
//   return a + b;
// }

// let num1 = add(12, 23);


// let phone = "12312312312";

// 数组类型
// let nums: number[] = [2,34,5]
// let nums: Array<number> = [2, 34, 5];

// function printValues(obj: object) {
//   const vals = Object.values(obj);
//   vals.forEach((ele) => console.log(ele));
// }

// printValues({
//   name: '123',
//   age: 88
// })


// 联合类型
// let name: string | undefined

// void类型
// function printMenu(): void {
//   console.log('1,注册')
//   console.log('2，登录')
// }

// // never 
// function throwError(msg: string): never {
//   throw new Error(msg);
// }

// function alwaysDoSomeThing(): never {
//   while(true) {
//     //......fsfs
//   }
// }

// 字面量类型
// let a: 'A';
// a = 'A'

// let gender: '男' | '女';
// gender = '女'
// let arr:[]; // arr永远只能取值为一个空数组

// let user: {
//   name: string,
//   age: number
// }

// let tu: [string,number];

// tu = ['1', 5]


// type Gender = '男' | '女';
// type User = {
//   name: string
//   age: number
//   gender: Gender
// }


// 函数的约束
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;

function combine(a: string | number , b: string | number): number | string {
  if(typeof a === 'number' && typeof b === 'number' ) {
    return a * b;
  }
  else if(typeof a === 'string' && typeof b === 'string') {
    return a + b;
  }
  throw new Error('a和b必须是相同类型')
}
const result = combine(2,3);

// function sum(a: number, b: number, c?: number) {
//   if(c) {
//     return a + b + c;
//   }
//   else {
//     return a + b
//   }
// }

// sum(3, 4)
// sum(2,4,5)