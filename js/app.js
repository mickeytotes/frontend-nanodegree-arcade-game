// Enemies our player must avoid
var Enemy = function(x, y, sprite) {

    this.x = x;
    this.y = y;

    this.speed = getRandomInt(80, 200);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += this.speed * dt;
    if (this.x > 500) {
        this.x = -100;
    }

    checkCollisions();
};

// Runs in the Enemy.update() method. Restarts the game if the player
// collides with any enemy. 2D collision detection provided by
// Mozilla Develloper Network.
var checkCollisions = function() {

        for (i = 0; i < allEnemies.length; i++) {

        var rect1 = {x: allEnemies[i].x, y: allEnemies[i].y, width: 80, height: 50}
        var rect2 = {x: player.x, y: player.y, width: 50, height: 80}

        if (rect1.x < rect2.x + rect2.width &&
        rect1.x + rect1.width > rect2.x &&
        rect1.y < rect2.y + rect2.height &&
        rect1.height + rect1.y > rect2.y) {
            player.x = 202;
            player.y = 403;
            console.log("A bug squashed you! Try again.");
        }
    }
    };

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.x = 202;
    this.y = 403;
    this.sprite = 'images/char-boy.png';
};

Player.prototype.update = function(dt) {

    if (this.y < 60) {
        this.x = 202;
        this.y = 403;
        console.log("You win!");
    }
};

// Draw the player on the screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Make the player move with arrow keys, also set boundaries so
// player can't fall off the screen
Player.prototype.handleInput = function(direction) {
    if (direction == 'left' && this.x > 50) {
        this.x -= 100
    }
    if (direction == 'right' && this.x < 400) {
        this.x += 100
    }
    if (direction == 'up' && this.y > 29) {
        this.y -= 85
    }
    if (direction == 'down' && this.y < 403) {
        this.y += 85
    }
    };

// Now instantiate your objects.
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


// Unncecessary function to log the x location of each enemy for
// every game tic
//var enemyLoc = function() {
  //  for (i = 0; i < allEnemies.length; i++) {
    //    console.log(allEnemies[i].x);
    //}
//};