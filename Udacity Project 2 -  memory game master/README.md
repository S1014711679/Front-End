# Memory Game Project

## Table of Contents
* [Description](#Description)
* [Functions](#Functions)
* [How to Contribute](#How_to_Contribute)
* [Dependencies](#Dependencies)

## Description
The game starts timer when you click the first card on the deck. When you click the card, it will show the pattern of each card. Then you need to click the second card to check whether the two card clicked are a pair with the same pattern. If the two cards have the same pattern, they will stay on open status. Otherwise, they will be closed again and wait for next click. 

When all cards are open, the modal will show up. You can decide to play the game again by clicking "Yes" button, or you can choose to close the modal by clicking "No" button or close icon. You also can click the restore icon above the deck to restart the game. 

When you need 16 moves to finish the game, you will get 3 stars. When you need more 16 moves less than 24 moves, you will get 2 stars. Otherwise, you will get only 1 star.

I am also looking forward to adding more animations to the game later to make it more instereting. Let's check out in later days! :)

## Functions
### 1. function generateCard(card)

This function dynamically creates card templates to insert into deck, return the HTML elements.

### 2. function initizlizeGame()

This function sets the moves to 0, reset the 3 stars above the deck, shuffle the cards and add event listeners to all cards elements.

### 3. function shuffle(array) 
[Shuffle function](http://stackoverflow.com/a/2450976) is used to randomize the order of the cards and return the new array.

### 4. function showModal() 

This function is invoked to present the modal when all the cards are open and show the time used and rating stars. And the event listeners of all cards will be removed. 

The modal section in [index.html](https://github.com/S1014711679/Memory-Game/blob/master/fend-project-memory-game-master/index.html) will be displayed according to this function, otherwise, it will be hidden from the page.

You can choose to play again by clicking "Yes" or close the modal by clicking "No" or close icon.

### 5. function addListeners()

This funtion adds event listeners to all cards to check when two cards are matched and when all cards are open.

### 6. function checkMatch() 

This function is an event handler to check where two cards clicked are a pair. If they have the same pattern, they will stay open. 

The timer starts when the first card is clicked. 

The move counter will start to work after the first click. When clicking the opened cards, the counter will not accumulate the moves.

### 7. function checkAllMatch() 

This function is an event handler and only works when all cards are open. It will stop the timer and calculate the time used, then show the modal.

## How_to_Contribute

The files in this repository are used as the starting point for all students. Because we want students to write the majority of the code themselves, pull requests (most likely) will _not_ be merged into the project.

#### More functions will be implemented later to make the game more interesting ;).

## Dependencies
1.  [Shuffle function](http://stackoverflow.com/a/2450976)


