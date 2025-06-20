
let canvas = document.querySelector('#canvas');

let context;

const mapTiles = 100
const rowTiles = 10
const columnTiles = 10
const tilesWidth = 80
const tilesHeight = 80

canvas.height = tilesHeight * columnTiles;
canvas.width = tilesWidth * rowTiles;

context = canvas.getContext('2d');

let colonyImage = new Image()
colonyImage.src = "./images/colony-db32.png"

let floorTilesImage = new Image()
floorTilesImage.src = "./images/terrain.png"

const floorTilesImageSize = 1024
const floorTilesImageTileSize = 32

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
        for (let j = 0; j < rowTiles; j++) {
            floorArray.push(new grassFloor(tilesWidth * j, tilesHeight * i))
        }
    }   

}

//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

class grassFloor {
    constructor(dX, dY) {
        this.sX = floorTilesImageTileSize * 0
        this.sY = floorTilesImageTileSize * 11
        this.sWidth = floorTilesImageTileSize 
        this.sHeight = floorTilesImageTileSize
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
        this.sX = 32 * 29
        this.sY = 32 * 5
        this.sWidth = floorTilesImageTileSize
        this.sHeight = floorTilesImageTileSize
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
