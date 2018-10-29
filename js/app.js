/*
 * Create a list that holds all of your cards
 */
 var cards = document.getElementsByClassName('card');
 var iCards = [];

// function to listen to the card click
 for (let i=0; i<cards.length; i++){
   cards[i].addEventListener('click',flip);
   iCards[i] = cards[i].firstElementChild.className;
 }

 var count=0
 var st;
 var nd;
 var stChildClass;
 var ndChildClass;

 function flip(){
   //check if the card clicked before and prevent it to be clicked twice.
   if (! this.classList.contains('disabled')){
     //open the card.
     this.classList.add("show");
     this.classList.add("open");
     this.classList.add("disabled");
     count++;
   }
   // store the first clicked card (the classList of li and i)
   if (count==1){
     st=this.classList;
     stChildClass=this.firstElementChild.classList[1];

   }
   // store the second clicked card

   if (count==2){

     nd=this.classList;
     ndChildClass=this.firstElementChild.classList[1];


      st.remove("show");
      st.remove("open");
      st.remove("disabled");
      nd.remove("open");
      nd.remove("show");
      nd.remove("disabled");

     count=0
 //check if the two opend card are matched
     if (stChildClass===ndChildClass){
       st.toggle("match");
       nd.toggle("match");
       }

     }
   }


/*

 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
