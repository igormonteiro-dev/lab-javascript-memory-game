class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards(arr) {
    if (!arr) return undefined;

    let newArr = [];

    let i = arr.length,
      a,
      temp; // a is to generate random index and temp is to swap the values
    while (--i > 0) {
      a = Math.floor(Math.random() * i);
      temp = arr[a];
      arr[a] = arr[i];
      arr[i] = temp;
    }
    return newArr;
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;

    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }

  checkIfFinished() {
    if (this.pairsGuessed < 12) return false;
    if (this.pairsGuessed === 12) return true;
  }
}
