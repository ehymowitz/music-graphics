import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "./globals/sound";
import p5 from "p5";
import "p5/lib/addons/p5.sound";

function Sketch() {
  const sketch = (p: p5) => {
    let mic: any;

    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.noStroke();
      mic = new p5.AudioIn();
      mic.start();
    };

    p.draw = () => {
      p.background(5, 23, 23);

      let vol = mic.getLevel();
      p.fill(127);
      p.stroke(0);

      // Draw an ellipse with height based on volume
      let h = p.map(vol, 0, 1, p.height, 0);
      p.ellipse(p.width / 2, h - 25, 50, 50);
    };
  };

  return (
    <div>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}

export default Sketch;
