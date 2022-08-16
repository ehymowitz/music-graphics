import React from "react";
import { ReactP5Wrapper } from "react-p5-wrapper";
import "./utils/sound";
import p5, { AudioIn, FFT } from "p5";
import "p5/lib/addons/p5.sound";
import FreqBall from "./components/freqBall";

function BouncingBall() {
  const sketch = (p: p5) => {
    const smoothing = 0.9;

    let mic: AudioIn;

    let fft: FFT;
    const binCount = 16;

    const circles: FreqBall[] = [];
    const numberOfCircles = 8;

    p.setup = () => {
      p.createCanvas(p.windowWidth * 1.1, p.windowHeight * 1.3);
      mic = new p5.AudioIn();
      mic.start();

      fft = new p5.FFT(smoothing, binCount);
      fft.setInput(mic);

      for (let i = 1; i <= numberOfCircles; i++) {
        circles.push(new FreqBall(p, p.width * 0.125 * i, i + 2));
      }

      p.fullscreen(true);
    };

    p.draw = () => {
      p.background(5, 23, 23);

      const spectrum = fft.analyze(binCount);
      const vol = mic.getLevel(smoothing) * 1500;

      circles.forEach((circle, i) => circle.draw(vol, spectrum));
    };
  };

  return (
    <div>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
}

export default BouncingBall;
