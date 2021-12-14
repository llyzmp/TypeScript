// # 泛型接口
interface GenericIdentityFn<T> {
  (arg: T): T;
}

// 泛型类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();

myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
}