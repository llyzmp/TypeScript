// 泛型语法
// T是传递类型, 链式传递给参数类型和返回类型
function identify<T>(value: T): T {
  return value;
}
/**
 * 参考上边函数， 当调用identity<Number>(1), Number类型就像参数 1 一样，他将在出现 T 的任何位置填充该类型，上边 T 被称为类型变量，
 * 它是希望传递给identity函数的类型占位符，
 * 同时它被分配给value参数用来替代他的类型，而不是特定的Number类型
 */
/**
 * 其中 T 代表 Type， 在定义泛型时通常用作第一个类型变量名称，但实际上可以用任何有效名称代替，除了 T 之外，
 * 还有 K(key): 表示对象中的键的类型
 * V(Value): 表示对象中的值类型
 * E(Element): 表示元素类型
 */
// 也可以引入希望定义的任何数量的类型变量，可以引入新的类型变量 U，用于扩展定义的 identity函数

function identity1 <T, U>(value: T, message: U): T {
  console.log(message);
  return value;
}
console.log(identity1<Number, string>(100, 'xiaoli'));
// 可以省略尖括号
console.log(identity1(999, 'xiaobai'));