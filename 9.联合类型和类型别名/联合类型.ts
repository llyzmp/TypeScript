// 联合类型通常和null，undefined一起使用

const sayHello = (name: string | undefined) => {}

/**
 * 例如： 这里name的类型为string|undefined意味着可以将string或undefined的值传给sayHello函数
 */
sayHello('libai');
sayHello(undefined);

// 可能是
// 用来约束取值只能是某几个中的一个
let num: 1 | 2 = 1;
type EventNames = 'click' | 'scroll' | 'dblclick';


