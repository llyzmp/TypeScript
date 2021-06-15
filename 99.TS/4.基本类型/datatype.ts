//  原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = 'adfs'

// 数组,两种写法等价
let arr1: number[] = [1,2,3];
let arr2: Array<number> = [1,2,3,4];
// 数组的联合类型
let arr3: Array<number | string> = [1,23,4,'555'];

// 元组(限定了数组的元素类型和个数)
let tuple: [number,string] = [0,'111'];
tuple.push(22);
console.log(tuple); // [0,'111',22];
// 但是访问不了tuple[2]

// 函数 
let add = (x:number,y:number) => x+y
// 定义一个函数类型
let compute:(x:number,y:number) => number

// 对象
let obj: Object = {x:1, y:2}  // 这样不能访问obj.x
// 定义对象
let obj1: {x:number,y:number} = {x:1,y:2}

// symbol 
let s1: symbol = Symbol();
let s2 = Symbol();


// undefined , null

let un: undefined = undefined; // 不能被赋值其他类型
let nu: null = null; 


// void 没有任何返回值的函数
let noReturn = () => {}

// any
let x


//  never
// 抛出异常
let error = () => {
  throw new Error('error')
}
// 死循环
let endless = () => {
  while(true) {}
}


