var myPlayer;

var myGameArea = {
    start: function() {
        var heightRatio = 0.75;
        console.log(this.canvas);
        this.canvas = document.getElementById("playerLocalCanvas");
        this.canvas.width = 160;
        this.canvas.height = this.canvas.width*heightRatio;
        this.context = this.canvas.getContext("2d");
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    },
    stop: function() {
        clearInterval(this.interval);
    }
}

/*
* Component size and position is in percentage of canvas, and not absolute pixels since canvas adapts to screen size.
*/
function component(width, height, color, x, y, type) {
    this.type = type;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.update = function() {
        let ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function startGame() {
    myPlayer = new component(35, 4, "red", 62.5, 110);
    myGameArea.start();
}

function updateGameArea() {
    myGameArea.clear();
    myPlayer.update();
}