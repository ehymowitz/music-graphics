import p5 from "p5";

export class FreqBall {
  p: p5;
  xCoord: number;
  freq: number;

  constructor(p5: p5, x: number, f: number) {
    this.p = p5;
    this.xCoord = x;
    this.freq = f;
  }

  draw(vol: number, spec: number[]) {
    this.p.ellipse(this.xCoord, this.p.height / 1.5 - vol, spec[this.freq] / 2);
  }
}
