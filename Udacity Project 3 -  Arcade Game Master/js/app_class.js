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
        if (player.player_x < this.x + 51 &&
            player.player_x + 51 > this.x &&
            player.player_y < this.y + 40 &&
            player.player_y + 40 > this.y) {
            player.player_x = 202;
            player.player_y = 405;
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
    constructor(player_x, player_y) {
        this.player = 'images/char-boy.png';
        this.player_x = player_x;
        this.player_y = player_y;
    }

    update() {
        //if the player get into water-block for 3s, reset the player to the initial location
        if (this.player_y <= 10) {
            setTimeout(() => {
                this.player_x = 202;
                this.player_y = 405;
            }, 3000);
        }

    }
    render() {
        ctx.drawImage(Resources.get(this.player), this.player_x, this.player_y);
    }

    /** Player  - Scope and Movements
     * move vertically : 83 (-10,73,156,239,322,405)
     * move horizontally : 101 (0,101,202,303,404)
     */
    handleInput(key) {
        //move left and check the leftmost
        if (this.player_x >= 101 && key == "left") {
            this.player_x = this.player_x - 101;
        }
        //move right and check the right most
        if (this.player_x <= 303 && key == "right") {
            this.player_x = this.player_x + 101;
        }
        //move up and chech the top line
        if (this.player_y >= 73 && key == "up") {
            this.player_y = this.player_y - 83;
        }
        //move down and check the bottom line
        if (this.player_y <= 322 && key == 'down') {
            this.player_y = this.player_y + 83;
        }

    }

}


/** player: initial location (202,405)
 */
const player = new Player(202, 405);


/** enemies - scoope and movement
 *  move vertically : 83
 *  move horizontally: based on speed
 */


/** create enemies and push to the allEnemies array 
 *  and add to the canvas [63, 146, 229]
 *  set the start y axis location*/

const allEnemies = [
    new Enemy(0, 63, 202),
    new Enemy(0, 146, 202),
    new Enemy(0, 229, 202),
];

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
