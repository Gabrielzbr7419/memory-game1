function urlBuilder(number){
    number+="";
    number =number.padStart(2,'0');

    return `images/heros/hero${number}.webp`;
}
let card = new CardManager(urlBuilder);
let board = new BoardManager("board", 5, card);
