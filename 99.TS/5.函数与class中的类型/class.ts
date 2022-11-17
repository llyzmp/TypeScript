// 一、类与类成员的类型签名
class Foo1 {
  prop: string;

  constructor(inputProp: string) {
    this.prop = inputProp;
  }

  print(addon: string): void {
    console.log(`${this.prop} and ${addon}`)
  }

  get propA(): string {
    return `${this.prop}+A`;
  }
  // setter 方法不允许进行返回值的类型标注
  set propA(value: string) {
    this.prop = `${value}+A`
  }

}

// 二、修饰符
// 访问性修饰符（public、 private、protected）、 属性修饰符（readonly）
/**
 * public: 此类成员在类、类的实例、子类中都能被访问
 * private: 此类成员仅能在类的内部被访问
 * protected: 此类成员仅能在类与子类中被访问，可以理解为类与类的实例当成两种概念，一旦实例化完毕（出厂零件），那就和类（工厂）无关了，即不允许再访问受保护的成员
 * 
 */
class Foo2 {
  private prop: string;

  constructor(inputProp: string) {
    this.prop = inputProp;
  }

  protected print(addon: string): void {
    console.log(`${this.prop} and ${addon}`)
  }

  public get propA(): string {
    return `${this.prop}+A`
  }
}

class Foo3 {
  constructor(public arg1: string, private arg2: boolean) {}
}

new Foo3('sunshineboy', true);



// 三、静态成员
// static关键字标识一个成员为静态成员, 在类的内部静态成员无法通过 this 来访问，需要通过 Foo4.staticHandler 这种形式进行访问
class Foo4 {
  static staticHandler() {}
  public instanceHandler() {}
}

/**
 * 静态成员和实例成员区别: 静态成员直接被挂载到函数体上，而实例成员挂载在原型上
 * 静态成员不会被实例继承，它只属于当前定义的这个类（以及其子类）
 * 实例成员则会沿着原型链进行传递，能被继承
 */
// 对于静态成员和实例成员的使用
class Utils {
  public static identifier = 'sunshineboy';

  public static makeHappy() {
    Utils.studyWithU();
  }

  public static studyWithU() {}
}

Utils.makeHappy();




// 四、继承、实现、抽象类

// 基类
class Base {}
// 派生类
class Derived extends Base {}

// 派生类中可以访问到使用public或protected修饰符的基类成员，除了访问以外，基类中的方法也可以在派生类中被覆盖，但是可以通过super访问到基类中的方法
class Base1 {
  print() {}
}
class Derived1 extends Base1 { 
  print() {
    super.print();
  }
}

// override关键字来确保派生类尝试覆盖的方法一定在基类中存在定义
class Base2 {
  printWithLove() {}
}
class Derived2 extends Base2 { 
  // 尝试覆盖的方法并未在基类中声明, 会报错，通过这一关键字我们就能确保首先这个方法在基类中存在，同时标识这个方法在派生类中被覆盖了。
  // override print() {
  //   // ...
  // }
}

// 抽象类： 就是对类结构与方法的抽象，一个抽象类描述了一个类中应当有哪些成员（属性、方法）等，一个抽象方法描述这一方法在实际实现中的结构
// 类的方法和函数相似，包括结构，抽象方法其实描述的就是这个方法的入参类型与返回值类型
abstract class AbsFoo {
  abstract absProp: string;
  abstract get absGetter(): string;
  abstract absMethod(name: string): string;
}

class Foo5 implements AbsFoo {
  absProp: string = 'sunshineboy';
  get absGetter() {
    return 'sunshineboy';
  }

  absMethod(name: string) {
    return name;
  }
}

// ts中无法声明静态抽象成员
interface FooStruct {
  absProp: string;
  get absGetter(): string;
  absMethod(input: string): string;
}

class Foo6 implements FooStruct {
  absProp: string = 'sunshineboy';
  get absGetter() {
    return 'sunshineboy';
  }
  absMethod(name: string) {
    return name
  }
}

// 接口的作用和抽象类一样，都是描述这个类的结构，除此之外还可以使用Newable Interface来描述一个类的结构

class Foo7 {}

interface FooStruct1 {
  new(): Foo7;
}

declare const NewableFoo7: FooStruct1;

const foo = new NewableFoo7();