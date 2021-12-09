// # instanceof关键字

interface Padder {
  getPaddingString(): string;
}

class SpaceRepeatingPadder implements Padder {
  constructor(private numSpaces: number) {
  }
  getPaddingString() {
    return Array(this.numSpaces + 1).join(' ');
  }
}

class StringPadder implements Padder {
  constructor(private value: string) {}
  getPaddingString() {
    return this.value;
  }
}

let padder: Padder = new SpaceRepeatingPadder(10)

if(padder instanceof SpaceRepeatingPadder) {
  // padder的类型收窄为'SpaceRepeatingPadder'
}