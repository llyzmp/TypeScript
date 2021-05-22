import { Color, numType } from "./enums";
import { allCard } from "./types";

// 创建扑克牌
export function createCard(): allCard {
  const colorVals = Object.values(Color);
  const typeVals = Object.values(numType);
  let tempCards: allCard = []
  typeVals.forEach(ele => {
    colorVals.forEach(it => {
        tempCards.push({
          num: ele,
          color: it
        })
    });
  })
  return tempCards;
}

// 打印扑克牌
export function printCard(card: allCard) {
  let result = '\n';
  card.forEach((ele, i) => {
    let str = ele.num + ele.color;
    result += str + '\t';
    if((i + 1) % 6 === 0) {
      result += '\n';
    }
  });
  console.log(result);

}