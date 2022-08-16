import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import p5 from "p5";
import TwoDimGrid from "./components/TwoDimGrid";

function GameOfLife() {
  const resolution = 10;
  let grid: TwoDimGrid;

  const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);

      grid = new TwoDimGrid(
        p,
        Math.floor(p.windowHeight / resolution),
        Math.floor(p.windowWidth / resolution),
        resolution
      );
    };

    p.draw = () => {
      grid.draw();
    };
  };

  return (
    <div>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}

export default GameOfLife;
