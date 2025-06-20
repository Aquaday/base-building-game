let canvas = document.querySelector('#canvas');

let context;

const mapTiles = 100
const rowTiles = 20
const columnTiles = 20
const tilesSize = 32
const tilesWidth = 32
const tilesHeight = 32

canvas.height = tilesHeight * columnTiles;
canvas.width = tilesWidth * rowTiles;

context = canvas.getContext('2d');

let colonyImage = new Image()
colonyImage.src = "./images/colony-db32.png"

let floorTilesImage = new Image()
floorTilesImage.src = "./images/terrain.png"

let floorArray = []

// 417 x 328

//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

floorTilesImage.onload = () => {
    createFloor()
    update()
}

function update() {
    // context.fillStyle = 'black';
    // context.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < floorArray.length; i++) {
        floorArray[i].draw();
      }
}



function createFloor() {

    for (let i = 0; i < columnTiles; i++) {
        let randomNumber = Math.floor(Math.random() * 3) + 15
        for (let j = 0; j < rowTiles; j++) {
            if (randomNumber < j) {
            floorArray.push(new waterFloor(tilesWidth * j, tilesHeight * i))
        } else {
            floorArray.push(new grassFloor(tilesWidth * j, tilesHeight * i))
        }
            console.log(randomNumber)
        }
    }   

}

//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

class grassFloor {
    constructor(dX, dY) {
        this.sX = tilesSize * 0
        this.sY = tilesSize * 5
        this.sWidth = tilesWidth
        this.sHeight = tilesHeight
        this.dX = dX
        this.dY = dY
    
    }

    draw() {
        context.drawImage(
            floorTilesImage,
            this.sX, this.sY, this.sWidth, this.sHeight,
            this.dX, this.dY, tilesWidth, tilesHeight
        );
    }
}

class waterFloor {
    constructor(dX, dY) {
        this.sX = tilesSize * 29
        this.sY = tilesSize * 5
        this.sWidth = tilesWidth
        this.sHeight = tilesHeight
        this.dX = dX
        this.dY = dY
    
    }

    draw() {
        context.drawImage(
            floorTilesImage,
            this.sX, this.sY, this.sWidth, this.sHeight,
            this.dX, this.dY, tilesWidth, tilesHeight
        );
    }
}
