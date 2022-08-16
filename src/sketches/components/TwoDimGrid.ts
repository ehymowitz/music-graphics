import p5 from "p5";

export default class TwoDimGrid {
  p: p5;
  rows: number;
  cols: number;
  resolution: number;
  array: number[][];

  constructor(p: p5, rows: number, cols: number, resolution: number) {
    this.p = p;
    this.rows = rows;
    this.cols = cols;
    this.resolution = resolution;
    this.array = this.createArray();
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

        this.p.rect(x, y, this.resolution - 1, this.resolution - 1);
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
    const newArray = array;
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const liveNeighbors = this.testNeighbors(i, j);
        const currentValue = array[i][j];
        if (
          currentValue === 1 &&
          (liveNeighbors === 2 || liveNeighbors === 3)
        ) {
          newArray[i][j] = 1;
        } else if (currentValue === 0 && liveNeighbors === 3) {
          newArray[i][j] = 1;
        } else {
          newArray[i][j] = 0;
        }
      }
    }

    this.array = newArray;
  };

  private testNeighbors = (x: number, y: number) => {
    let liveNeighbors = 0;

    for (let i = -1; i < 2; i++) {
      for (let j = -1; j < 2; j++) {
        liveNeighbors +=
          this.array[(x + i + this.rows) % this.rows][
            (y + j + this.cols) % this.cols
          ];
      }
    }
    return liveNeighbors;
  };
}
