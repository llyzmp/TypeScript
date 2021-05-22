// // 枚举
// enum Gender {
//   male = "男",
//   female = "女"
// }

// let gender: Gender;
// gender = Gender.male;
// gender = Gender.female;

// function printGender() {
//   const vals = Object.values(Gender);
//   vals.forEach(v => console.log('v', v));
// }

// printGender();

// console.log(gender);

// // 改造扑克牌
// // 扑克牌颜色
// enum Color {
//   'hongtao' = '♥',
//   'heitao' = '♠',
//   'meihua' = '♣',
//   'fangkuai' = '♦'
// }
// // 扑克牌数字
// enum numType {
//   'one'= 'A',
//   'two'= '2',
//   'three'= '3',
//   'four'= '4',
//   'five'= '5',
//   'six'= '6',
//   'seven'= '7',
//   'eight'= '8',
//   'nine'= '9',
//   'ten'= '10',
//   'eleven'= 'J',
//   'twelve'= 'Q',
//   'thirth'= 'K',
// }
// // 一张牌
// type oneCard = {
//   color: Color,
//   num: numType
// }
// // 一副牌
// type allCard = oneCard[];

// // 创建扑克牌
// function createCard(): allCard {
//   const colorVals = Object.values(Color);
//   const typeVals = Object.values(numType);
//   let tempCards: allCard = []
//   typeVals.forEach(ele => {
//     colorVals.forEach(it => {
//         tempCards.push({
//           num: ele,
//           color: it
//         })
//     });
//   })
//   return tempCards;
// }

// // 打印扑克牌
// function printCard(card: allCard) {
//   let result = '\n';
//   card.forEach((ele, i) => {
//     let str = ele.num + ele.color;
//     result += str + '\t';
//     if((i + 1) % 6 === 0) {
//       result += '\n';
//     }
//   });
//   console.log(result);

// }


// let cards = createCard();
// printCard(cards);

// 位运算
enum Permission {
  Read  = 1,  // 0001
  Write = 2,  // 0010
  Create = 4, // 0100
  Delete = 8  // 1000
}

// 1. 如何组合权限
// 使用或运算
// 0001
// 或
// 0010
// 0011

let p:Permission = Permission.Read | Permission.Write;

// 2.如何判断是否拥有某个权限
// 0011
// 且
// 0010
// 0010
function hasPermission(target: Permission,per: Permission) {
  return (target & per) === per;
}
// 判断变量p是否拥有可读权限
console.log(hasPermission(p, Permission.Write))

// 3. 如何删除某个权限
// 0011
// 异或   相同位置相同为0,不同为1
//  0010 
// 0001
p = p ^ Permission.Write; //删除写权限
console.log(hasPermission(p, Permission.Write))// 没有写权限了


