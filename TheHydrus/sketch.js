function make2DArray(rows, cols) {
  let arr = new Array(rows);
  for (let i = 0; i < rows; i++) {
    arr[i] = new Array(cols);
  }
  return arr;
}

let grid;
let cols;
let rows;
let w = 10;


function setup() {
    createCanvas(400, 400);
    cols = width / w;
    rows = height / w;
    grid = make2DArray(rows, cols);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            grid[i][j] = random();       
        }
    }
}

function draw() {
    background(0);
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            stroke(255);
            fill(grid[i][j]*255);
            let x = i * w;
            let y = j * w;
            square(x, y, w);
        }
    }
}
