/*** This "app_class.js" file use ES6 Class to build Enemy class and Player class
 *  and it has the same functions as "app.js" file
 * */

/**
 * Enemy : location (x,y)  and speed
 * 1) update()
 * 2) checkCollision()
 * 3) render()
 */

class Enemy {
    constructor(x, y, speed) {
        //the image 
        this.sprite = 'images/enemy-bug.png';
        // the location of sprite and speed of its movement
        this.x = x;
        this.y = y;
        this.speed = speed;
    }
    update(dt) {
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
    }

    //check the collsion between enemies and player, then set the player to original location
    checkCollision() {
        if (Math.abs(this.x - player.x) <= 50 && Math.abs(this.y - player.y) <= 10) {
            player.x = 202;
            player.y = 405;
        }
    }

    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}

/**Player:
 * 1) update()
 * 2) render()
 * 3) handleInput(key)
 */

class Player {
    constructor(x, y) {
        this.player = 'images/char-boy.png';
        this.x = x;
        this.y = y;
    }

    update() {

    }
    render() {
        ctx.drawImage(Resources.get(this.player), this.x, this.y);
    }

    /** Player  - Scope and Movements
     * move vertically : 83 (-10,73,156,239,322,405)
     * move horizontally : 101 (0,101,202,303,404)
     */
    handleInput(key) {
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

        setTimeout(() => {
            //if the player get into water-block for 3s, reset the player to the initial location

            if (this.y <= -10) {
                player.x = 202;
                player.y = 405;
            }
        }, 3000);
    }

}


/** player: initial location (202,405)
 */
const player = new Player(202, 405);


/** enemies - scoope and movement
 *  move vertically : 83
 *  move horizontally: based on speed
 */
const allEnemies = []; // to store all the enmies in array
const enemyLocations = [63, 146, 229]; // set the start y axis location

//create enemies and push to the allEnemies array and add to the canvas
enemyLocations.forEach((y) => {
    const enemy = new Enemy(0, y, 202); // create enemy: initial location (0,y), speed
    allEnemies.push(enemy); // add enemy to allEnemies array
});


// This listens for key presses and sends the keys to your Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});