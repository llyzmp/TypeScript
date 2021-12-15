/**
 * 为了方便开发，提供了 如： Partial, Required, Readonly, Record, ReturnType等
 * 
 */

// Partial工具类型

/**
 * 1. typeof
 * typeof操作符可以用来获取一个变量声明或对象的类型
 */
interface Person {
  name: string;
  age: number;
}
const sem: Person = { name: 'laowang', age: 36 };
type Sem = typeof sem;  // Person      
function toArray(x: number): Array<number> {
  return [x]
}

type Func = typeof toArray; //(X: number) => number[]


/**
 * 2. keyof 
 * keyof操作符是用于获取某种类型的所有建，其返回类型时联合类型
 */
interface Person1 {
  name: string;
  age: number;
}

type P1 = keyof Person1; // "name" | "age"
type P2 = keyof Person1[]; // "length" | "toString" | "pop" | "push" | "concat" | "join"
type P3 = keyof {[x: string]: Person1}; // "string" | "number"

// ts支持两种索引签名，数字索引和字符串索引
interface StringArray {
  // 字符串索引 -> keyof StringArray => string | number
  [index: string]: string;
}
interface StringArray1 {
  // 数字索引 -> keyof StringArray1 => number
  [index: number]: string;
}
// 为了同时支持两种索引类型， 就得要求数字索引的返回值必须是字符串索引返回的子类，其中是因为当使用数值索引时，js在执行索引操作时，会先把数值索引转换为字符串索引，
// 所以 keyof { [x: string]: Person } 的结果会返回string | number

/**
 * 3. in
 * in用来遍历枚举类型
 */
type Keys = 'a' | 'b' | 'c' | 'd'
type Obj = { 
  [p in Keys]: any
} // -> { a: any, b: any, c: any }

/**
 * 4. infer 
 * 在条件类型语句中，可以使用infer声明一个类型变量并且对它进行使用
 */
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;// infer R就是声明一个变量来承载传入函数签名的返回值类型，

/**
 * 5. extends
 * 有时候定义的泛型不想过于灵活或者说想集成某些类等， 可以通过extends关键字添加泛型约束
 */

interface LengthWise {
  length: number;
}
function logIdentity <T extends LengthWise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
// 目前这个泛型函数被定义了约束， 因此不再是适用于任意类型
// logIdentity(36); // Error, number doesn't have a .length property
// 需要传入符合约束类型的值，必须包含的属性
logIdentity({length: 9, value: 5});

/**
 * 6. Partial
 * Prtial<T>的作用是将某个类型里的属性全部变为可选项 ?
 */
// 定义
type Prtial<T> = {
  [p in keyof T]?: T[p];
}
// 通过keyof T 拿到 T 的所有属性名， 然后使用 in 进行遍历， 将赋值给 P, 最后通过 T[p] 取到相应的属性值， 中间的?号，用于将所有属性变为可选
interface To {
  title: string;
  description: string;
}

function updateTo (to: To, fileds: Partial<To>) {
  return { ...to, ...fileds };
}
const to1 = { title: '标题1', description: 'aaaaaaaaaaa'}
const to2 = updateTo(to1,{
  description: 'tstststststs'
})

// 在updateTo方法中， 使用了Partial<T>工具类型， 定义fileds类型为Partial<To>
// {
//   title?: string | undefined;
//   description?: string | undefined;
// }
