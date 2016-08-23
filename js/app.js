//TODO: Take out unnecessary comments
//TODO: add any necessary comments

// Enemies our player must avoid
var Enemy = function(x, y, sprite) {

    this.x = x;
    this.y = y;

    this.speed = getRandomInt(80, 200);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

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
        this.x = 0;
    }

};

//var speed = getRandomInt(1, 100);

//function getRandomInt(min, max) {
  //  return Math.floor(Math.random() * (max - min + 1)) + min;
//}

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
    //TODO: add something here?

      if (this.y < 60) {
            this.x = 202;
            this.y = 403;
    }
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

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