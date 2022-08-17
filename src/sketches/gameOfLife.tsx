import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import p5 from "p5";
import GameOfGrid from "./components/gameOfGrid";

function GameOfLife() {
  const resolution = 10;
  let grid: GameOfGrid;

  const sketch = (p: p5) => {
    p.setup = () => {
      const width = p.windowWidth;
      const height = p.windowHeight;
      p.createCanvas(width, height);

      grid = new GameOfGrid(
        p,
        Math.floor(height / resolution),
        Math.floor(width / resolution),
        resolution
      );

      p.frameRate(5);
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
