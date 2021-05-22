Object.defineProperty(exports, "__esModule", { value: true });
exports.printCard = exports.createCard = void 0;
const enums_1 = require("./enums");
function createCard() {
    const colorVals = Object.values(enums_1.Color);
    const typeVals = Object.values(enums_1.numType);
    let tempCards = [];
    typeVals.forEach(ele => {
        colorVals.forEach(it => {
            tempCards.push({
                num: ele,
                color: it
            });
        });
    });
    return tempCards;
}
exports.createCard = createCard;
function printCard(card) {
    let result = '\n';
    card.forEach((ele, i) => {
        let str = ele.num + ele.color;
        result += str + '\t';
        if ((i + 1) % 6 === 0) {
            result += '\n';
        }
    });
    console.log(result);
}
exports.printCard = printCard;
