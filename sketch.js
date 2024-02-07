const textures = [];
const colorArray = ["#f1930b", "#f6e272", "#900945", "#aeaf64", "#80e33a ", "#5b3c44"];

function preload() {
}


function setup() {

    //size of each square in pixels
    const squareSize = 50;
    //number of cells of the gric
    const cellNumber = 20;
    //maximum offset
    const maxOffsetPosition = 150;
    //const maxOffsetSize = 150;
    const possibleCellsizes = [2 * squareSize, 3 * squareSize, 5 * squareSize];

    createCanvas(800, 800);
    noStroke();
    background(205, 92, 92);

    for(let row = 0; row < cellNumber; row++) {
        for(let column = 0; column < cellNumber; column++) {

           const cellColor = random(colorArray);

            // use fill to fill all the square with one color
            fill(cellColor);

            //calculate random offset
            const randomOffsetHorizontal = random(-maxOffsetPosition, maxOffsetPosition);
            const randomOffsetVertical = random(-maxOffsetPosition, maxOffsetPosition);

            //random offset with size
            //const randomOffsetHeight = random(-maxOffsetSize, maxOffsetSize);
            //const randomOffsetWidth = random(-maxOffsetSize, maxOffsetSize);

            //calculate horizontal position in pixels
            const x = row * squareSize + randomOffsetHorizontal;
            //calculate the vertical position in pixels;
            const y = column * squareSize + randomOffsetVertical;

            //set witdh  and height
            //const width = squareSize + randomOffsetWidth;
            //const height = squareSize + randomOffsetHeight;

            const width= random(possibleCellsizes);
            const height = random(possibleCellsizes);


          

            //image(background x position, y position, width, height)
            //will draw image the given background at the given position and width/height
            rect(x, y, width, height)

            //square(x, y, s)
            //x = position of the left of the square
            //y = position of the top og the square
            //s = size of the side of the square
            //square(x, y, squareSize);

            
        }
    }

}

