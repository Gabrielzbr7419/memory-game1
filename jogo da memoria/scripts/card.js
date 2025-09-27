class CardManager {

flippedCards = new Set();
urlFactory;

constructor(factory) {
    this.urlFactory = factory
}

gen(heroNumber) {
    let template = document.getElementById("cardTemplate");
    let clone = template.content.cloneNode(true);

    let img = clone.querySelector("img");

    img.setAttribute('src', this.urlFactory(heroNumber));

    clone.children[0].addEventListener('click',
        event => this.onClick(event)
    );

    return clone;       
}

onClick(event) {
    if (this.flippedCards.size >= 2) {
        this.endTurn();
    }else{
        this.flippedCards(event.target); 
         }
   }
}