/*
 * Create a list that holds all of your cards
 */

// var cards = ['fa-diamond', 'fa-diamond',
//     'fa-paper-plane-o', 'fa-paper-plane-o',
//     'fa-anchor', 'fa-anchor',
//     'fa-bolt', 'fa-bolt',
//     'fa-cube', 'fa-cube',
//     'fa-leaf', 'fa-leaf',
//     'fa-bicycle', 'fa-bicycle',
//     'fa-bomb', 'fa-bomb'
// ];

/* Code Suggestion from Udacity */
/*  1. neat way to double the array */
const cards_sample = ['fa-diamond',
    'fa-paper-plane-o',
    'fa-anchor',
    'fa-bolt',
    'fa-cube',
    'fa-leaf',
    'fa-bicycle',
    'fa-bomb',
];

const cards = cards_sample.concat(cards_sample);

let move = document.querySelector('#moves'); // get the <span> moves
let deck = document.querySelector('.deck');
let restart = document.querySelector('.restart'); //restart the game
let star_list = document.querySelectorAll(".ilstar"); //get the list of stars NodeList[] 
let result_time = document.querySelector("#result_time"); //modal: show the time and star rating
let result_stars = document.querySelector("#result_stars"); //modal: show the stars\

let timer = document.querySelector(".timer"); // get the timer
let countMoves = move.textContent; //get the textCountent
let coountClicks;

let openCards = []; // clicked cards and show the picture
let matchedCards; //count matched cards

let startTime;
let currentTime;
let timeUsed;
let mytimer;

let gameOn; //only first click and set to true

/*model part */
let bt_yes; // button yes : click to restart the game
let bt_no; // button no: click to to close the modal
let bt_close // button close: click to close the modal

initizlizeGame(); // order: 1

//generate cards
function generateCard(card) {
    let cardTemplate = `<li class="card" data-card="${card}">
   <i class="fa ${card}"></i>
   </li>`;
    // console.log(cardTemplate);
    return cardTemplate;
}

/** 
 * initialize the game: start
 */

function initizlizeGame() {

    countMoves = 0;
    countClicks = 0;
    matchedCards = 0;
    move.textContent = countMoves;
    timer.textContent = "0 s";
    gameOn = false; // true: first click to start game

    //set cards
    let cardHTML = cards.map(function(card) {
        return generateCard(card);
    });

    shuffle(cardHTML); //shuffle the cards orders
    deck.innerHTML = cardHTML.join(''); // add elements to deck
    //show all the stars
    star_list[0].style.display = "inline";
    star_list[1].style.display = "inline";
    star_list[2].style.display = "inline";

    addListeners(); //add eventlisters to all cards

    mytimer = setInterval(() => {
        currentTime = new Date();
        timeUsed = Math.round((currentTime - startTime) / 1000);
        if (!isNaN(timeUsed) && gameOn) {
            //console.log(timeUsed);
            timer.textContent = `${timeUsed} s`;
        }
        //console.log(time);
    }, 1000);

}



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length,
        temporaryValue, randomIndex;
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

/* addlisterner to the restart icon: 
 */
restart.addEventListener('click', function(e) {
    console.log("--Restart clicked: --Reset the Game----");

    //stop the timer
    clearInterval(mytimer);
    gameOn = false;

    initizlizeGame();
    console.log('--GAME INITIALIZED AGAIN---');
});

/*   generate the modal after all matched, and remove eventlisteners on allcards
 *   button yes:
 *   button no:
 *   button close:
 */
function showModal() {

    //stop the timer
    clearInterval(mytimer);
    gameOn = false;

    let modal = document.getElementById("myModal");
    modal.style.display = "block"; // show the modal

    bt_yes = document.getElementById("bt_yes"); //get the button: yes
    bt_no = document.getElementById("bt_no"); //get the button: no
    bt_close = document.querySelector(".close"); //get the icon: close

    //click yes to restart the game,and hidden the modal
    bt_yes.addEventListener("click", () => {
        initizlizeGame();
        modal.style.display = "none";
        //delete all the stars elements of result_stars in modal
        result_stars.innerHTML = '';

    });

    //click no to hidden th modal
    bt_no.addEventListener("click", () => {
        modal.style.display = "none";
        result_stars.innerHTML = '';

    });

    //click to close the modal
    bt_close.addEventListener("click", () => {
        modal.style.display = "none";
        result_stars.innerHTML = '';

    });

    result_time.textContent = `Time :  ${timeUsed} s  `;

    //copy the stars then put on the modal
    for (let star of star_list) {
        if (star.style.display != "none") {
            let nodeText = '<li><i class="fa fa-star" style="display:inline;"></i></li>';
            result_stars.insertAdjacentHTML("beforeend", nodeText);
        }
    }

    //remove eventlisteners from all cards
    let allCards = document.querySelectorAll('.card');

    allCards.forEach(function(card) {
        card.removeEventListener("click", checkMatch);
        card.removeEventListener("click", checkAllMatch);
    });

}



/*
 * add eventlisteners to all cards
 */

function addListeners() {

    let allCards = document.querySelectorAll('.card');

    /* 1st listener: check when two cards are matched
     */
    allCards.forEach(function(card) {
        card.addEventListener('click', checkMatch);
    });

    /* 2nd listener: check when all cards are matched
     * then invoke function showModal();  
     */
    allCards.forEach(function(card) {
        card.addEventListener('click', checkAllMatch);
    });

}

/** 
 * eventhandler: check if 2 cards match
 * if 2 cards are clicked within 1 second, check if they are mateched
 * matched: keep them open
 * not matched: flip over 
 */


function checkMatch() {

    const card = this; // *** get the card from the function scope

    if (!card.classList.contains('open') && !card.classList.contains('show') && !card.classList.contains('match')) {
        countClicks++;

        //when the first click, start to count time
        if (countClicks == 1) {
            startTime = new Date();
            gameOn = true;
        }

        openCards.push(card);
        card.classList.add('open', 'show');

        if (openCards.length == 2) {
            //check if two cards clicked are matched
            if (openCards[0].dataset.card == openCards[1].dataset.card) {
                //the first card clicked
                openCards[0].classList.add('open');
                openCards[0].classList.add('show');
                openCards[0].classList.add('match');
                //the second card clicked
                openCards[1].classList.add('open');
                openCards[1].classList.add('show');
                openCards[1].classList.add('match');

                // console.log(">> Matched & ClassList changed");

                openCards = [];
                matchedCards += 2;
                //console.log("matchedCards: " + matchedCards);

            } else {
                // console.log(">> NOT MATCHED");
                // if 2 cards don't match and flip over again, no thrid card allowed to show at the same time
                setTimeout(function() {
                    openCards.forEach(function(card) {
                        card.classList.remove('open', 'show');
                        openCards = [];
                    });
                }, 100);

            } //end else
            countMoves++;
        } //end of if (openCards.length == 2)

    } // end of if


    move.textContent = countMoves;
    // rating the stars
    // countMoves <=32 3 stars
    if (countMoves <= 16) {
        //console.log("3 stars");
    }
    //remove the 1 stars 
    else if (countMoves > 16 && countMoves <= 24) {
        //console.log("2 stars");
        star_list[2].style.display = "none";
    } else if (countMoves > 24) {
        //remove the 2 stars 
        // console.log("1 stars");
        star_list[1].style.display = "none";
    }

}

/**
 * eventhandler: check all matches and show the modal
 * 
 */
function checkAllMatch() {
    if (matchedCards == cards.length) {
        setTimeout(() => {
            //stop the timer
            clearInterval(mytimer);
            gameOn = false;

            let mytime = timeUsed;
            console.log("Time:  " + mytime + " s!");
            showModal(); //show the modal
        }, 100);
    }
}