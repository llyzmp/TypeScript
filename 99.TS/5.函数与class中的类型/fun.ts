// 一、函数的类型签名
// 1.
const foo1 = (name: string): number => name.length
// 2.
const foo2: (name: string) => number = (name) => name.length 
// 3. 
type FunFoo = (name: string) => number
const foo3: FunFoo = (name) => name.length
// 4. 
interface FunFooStruct {
  (name: string): number
}
const foo4: FunFooStruct = (name) => name.length

// 二、 void类型
// 5.
function foo5(): void {}
function bar1(): void {
  return;
}

// 6. 在 TypeScript 中，undefined 类型是一个实际的、有意义的类型值，而 void 才代表着空的、没有意义的类型值, void类型就像是JavaScript中的 null一样，没有实际返回值时，使用 void 类型能更好地说明这个函数没有进行返回操作, 这里undefined更合适
function bar2(): undefined {
  return;
}

// 三、可选参数与rest参数, 可选参数要位于必选采纳数之后
// 7. 在逻辑中注入可选参数默认值
function foo7(name: string, age?: number): number {
  const inputAge = age ?? 18
  return name.length + inputAge
}
// 8. 直接为可选参数声明默认值
function foo8(name: string, age: number = 20): number {
  const inputAge = age
  return name.length + inputAge
}
// 9.
function foo9(arg1: string, ...rest: any[]) {}
// 10.
function foo10(arg1: string, ...rest: [number, boolean]) {}
foo10('天才小熊猫', 20, false)

// 四、重载
// 函数可能有多组入参和返回值类型
function func1(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 99
  }
}
// 可以只用函数重载签名，改写func1
function func2(foo: number, bar: true): string;
function func2(foo: number, bar?: false): number;
function func2(foo: number, bar?: boolean): string | number {
  if (bar) {
    return String(foo);
  } else {
    return foo * 599;
  }
}
const res1 = func2(99); // number
const res2 = func2(99, true); // string
const res3 = func2(99, false); // number

// 五、异步函数、Generator函数等类型签名
async function asyncFunc(): Promise<void> {}
function* genFunc(): Iterable<void> {}
async function* asyncGenFunc(): AsyncIterable<void>{}


// 六、私有构造函数
class Foo11 {
  private constructor() {}
}
// 当实例化这个类的时候，提示类的构造函数被标记为私有，且只允许在类内部访问

// 要一个不能实例化的类有啥用？有些场景比如类作为方法时，内部全部是静态资源，不希望实例化这个类，用私有构造函数可以阻止错误地被实例化
class Utils1 {
  public static identifier = 'sunshineboy'
  private constructor() {}
  public static makeHappy() {}
}
