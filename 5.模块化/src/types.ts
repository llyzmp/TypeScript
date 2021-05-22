import { Color, numType } from "./enums";

// 一张牌
export type oneCard = {
  color: Color,
  num: numType
}
// 一副牌
export type allCard = oneCard[];
