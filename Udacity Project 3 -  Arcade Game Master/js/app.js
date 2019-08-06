// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    // the location of sprite and speed of its movement
    this.x = x;
    this.y = y;
    this.speed = speed;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    this.x = this.x + this.speed * dt;

    // if the sprite reach the right most boundary
    //start from the leftmost and change the speed
    if (this.x >= 505) {
        //console.log("reach the right ");
        this.x = -101;
        if (this.speed <= 300) {
            this.speed += Math.random() * 20;
        }
    }
    this.checkCollision(); // check the collision

};

//Check the collsion between enemies and player, then set the player to original location
Enemy.prototype.checkCollision = function() {
    if (Math.abs(this.x - player.x) <= 50 && Math.abs(this.y - player.y) <= 10) {
        player.x = 202;
        player.y = 405;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



// Now write your own player class
// This class requires an update(), render() and a handleInput() method.
var Player = function(x, y) {
    this.player = 'images/char-boy.png';
    this.x = x;
    this.y = y;
};


Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.player), this.x, this.y);
};

//control the movements of player
Player.prototype.handleInput = function(key) {
    //move left and check the leftmost
    if (this.x >= 101 && key == "left") {
        this.x = this.x - 101;
    }
    //move right and check the right most
    if (this.x <= 303 && key == "right") {
        this.x = this.x + 101;
    }
    //move up and chech the top line
    if (this.y >= 73 && key == "up") {
        this.y = this.y - 83;
    }
    //move down and check the bottom line
    if (this.y <= 322 && key == 'down') {
        this.y = this.y + 83;
    }

    //if the player get into water-block for 3s, reset the player to the initial location
    setTimeout(() => {
        if (this.y <= -10) {
            player.x = 202;
            player.y = 405;
        }
    }, 3000);
};

/** Player  - Scope and Movements
 * move vertically : 83 (-10,73,156,239,322,405)
 * move horizontally : 101 (0,101,202,303,404)
 */
const player = new Player(202, 405); //create player: location (200,300)


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

/** Enemies - Scoope and Movement
 *  move vertically : 83
 *  move horizontally: based on speed
 */
const allEnemies = []; // to store all the enmies in array
const enemyLocations = [63, 146, 229]; // set the start y axis location

//create enemies and push to the allEnemies array
//add to the canvas
enemyLocations.forEach((y) => {
    enemy = new Enemy(0, y, 202); // create enemy: initial location (0,y), speed
    allEnemies.push(enemy); // add enemy to allEnemies array
});


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});