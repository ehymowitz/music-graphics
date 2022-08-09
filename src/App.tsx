import React, { useEffect, useRef } from "react";
import p5 from "p5";

function App() {
  const p5Ref = useRef<any>();

  useEffect(() => {
    const p5Sketch = new p5(sketch, p5Ref.current);
    p5Sketch.remove();
  }, [p5Ref]);

  const sketch = (p: p5) => {
    p.setup = () => {
      p.createCanvas(p.windowWidth, p.windowHeight);
      p.frameRate(60);
    };

    p.draw = () => {
      p.background(5, 23, 23);
    };
  };

  return <div ref={p5Ref}></div>;
}

export default App;
