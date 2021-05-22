type Deck = NormalCard[];

type Color = '♥' | '♦' | '♣' | '♠';
type NormalCard = {
  color: Color
  mark: number
};


// 创建一副扑克牌
function createDeck(): Deck {
  let deckArr:Deck = [];
  for(let i = 1; i <= 13; i++) {
    deckArr.push({
      mark: i,
      color: '♠'
    });
    deckArr.push({
      mark: i,
      color: '♣'
    });
    deckArr.push({
      mark: i,
      color: '♥'
    });
    deckArr.push({
      mark: i,
      color: '♦'
    });
  };
  return deckArr;
}

// 打印扑克牌
function printDeck(deck: Deck) {
  let result = '\n';
  deck.forEach((ele, i) => {
    let str = ele.color;
    if(ele.mark <= 10) {
      str += ele.mark;
    }else if(ele.mark === 11) {
      str += 'J'
    }else if(ele.mark === 12) {
      str += 'Q'
    }else {
      str += 'K'
    }
    result += str + '\t';
    if((i + 1) % 4 === 0) {
      result += '\n';
    }
  })
  console.log(result)
}


const deck = createDeck();
printDeck(deck)