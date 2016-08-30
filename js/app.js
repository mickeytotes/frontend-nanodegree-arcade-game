// Enemies our player must avoid
var Enemy = function(x, y, sprite) {
// Set the image for the enemy
    "use strict";
    this.sprite = 'images/enemy-bug.png';

    this.x = x;
    this.y = y;

    // make enemy speeds random
    this.speed = getRandomInt(80, 200);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


};

// Update the enemy's position
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    "use strict";
    // multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 500) {
        this.x = -100;
    }

    this.checkCollisions();
};

// Runs in the Enemy.update() method. Restarts the game if the player
// collides with any enemy. 2D collision detection provided by
// Mozilla Develloper Network.
Enemy.prototype.checkCollisions = function() {
    "use strict";
    var rect1 = {x: this.x, y: this.y, width: 80, height: 50};
    var rect2 = {x: player.x, y: player.y, width: 50, height: 80};

    if (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.height + rect1.y > rect2.y) {
        player.x = 202;
        player.y = 403;
        console.log("A bug squashed you! Try again.");
        }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    "use strict";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Create player class
var Player = function() {
    "use strict";
    this.x = 202;
    this.y = 403;
    this.sprite = 'images/char-boy.png';
};

// Restart game if player reaches the water
Player.prototype.update = function(dt) {
    "use strict";

    if (this.y < 60) {
        this.x = 202;
        this.y = 403;
        console.log("You win!");
    }
};

// Draw the player on the screen
Player.prototype.render = function() {
    "use strict";
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Make the player move with arrow keys, also set boundaries so
// player can't fall off the screen
Player.prototype.handleInput = function(direction) {
    "use strict";
    if (direction == 'left' && this.x > 50) {
        this.x -= 100;
    }
    if (direction == 'right' && this.x < 400) {
        this.x += 100;
    }
    if (direction == 'up' && this.y > 29) {
        this.y -= 85;
    }
    if (direction == 'down' && this.y < 403) {
        this.y += 85;
    }
};

// instantiate enemy objects.
var enemy1 = new Enemy(-150, 234, 'images/enemy-bug.png');
var enemy2 = new Enemy(-100, 234, 'images/enemy-bug.png');
var enemy3 = new Enemy(-180, 150, 'images/enemy-bug.png');
var enemy4 = new Enemy(-110, 58, 'images/enemy-bug.png');

// Place all enemy objects in an array called allEnemies
var allEnemies = [];
    allEnemies.push(enemy1);
    allEnemies.push(enemy2);
    allEnemies.push(enemy3);
    allEnemies.push(enemy4);

// Place the player object in a variable called player
var player = new Player(202, 403);

var allPlayers = [];
allPlayers.push(player);

// This listens for key presses and sends the keys to your
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    "use strict";
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});