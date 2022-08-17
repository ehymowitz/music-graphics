import p5 from "p5";

export default class GameOfGrid {
  p: p5;
  rows: number;
  cols: number;
  resolution: number;
  array: number[][];
  secondArray: number[][];

  constructor(p: p5, rows: number, cols: number, resolution: number) {
    this.p = p;
    this.rows = rows;
    this.cols = cols;
    this.resolution = resolution;
    this.array = this.createArray();
    this.secondArray = this.array;
  }

  draw = () => {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const x = j * this.resolution;
        const y = i * this.resolution;

        this.p.stroke(255);
        this.p.fill(255);
        if (this.array[i][j] === 1) {
          this.p.fill(0);
        }

        this.p.rect(x, y, this.resolution, this.resolution);
      }
    }

    this.evolveArray(this.array);
  };

  private createArray = () => {
    let grid = new Array<number[]>(this.rows);
    for (let i = 0; i < this.rows; i++) {
      grid[i] = new Array(this.cols);
    }

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        grid[i][j] = Math.floor(Math.random() * 2);
      }
    }
    console.table(grid);

    return grid;
  };

  private evolveArray = (array: number[][]) => {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const liveNeighbors = this.testNeighbors(i, j);
        const currentValue = array[i][j];
        this.secondArray[i][j] = this.updateAlive(liveNeighbors, currentValue);
      }
    }

    this.array = this.secondArray;
  };

  private updateAlive = (neighbors: number, currentValue: number) => {
    if (currentValue === 1 && (neighbors === 2 || neighbors === 3)) {
      return 1;
    } else if (currentValue === 0 && neighbors === 3) {
      return 1;
    } else {
      return 0;
    }
  };

  private testNeighbors = (x: number, y: number) => {
    let liveNeighbors = 0;

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        liveNeighbors +=
          this.array[(y + i + this.rows) % this.rows][
            (x + j + this.cols) % this.cols
          ];
      }
    }
    return liveNeighbors;
  };
}
