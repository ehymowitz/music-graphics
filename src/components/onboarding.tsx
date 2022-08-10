import React from "react";
import { Sketches } from "../App";

interface OnboadingProps {
  setSketch: React.Dispatch<React.SetStateAction<Sketches>>;
}

const Onboarding = ({ setSketch }: OnboadingProps) => {
  return (
    <>
      {Object.values(Sketches)
        .filter((value) => value !== "")
        .map((sketch) => (
          <button key={sketch} onClick={() => setSketch(sketch)}>
            <p>{sketch}</p>
          </button>
        ))}
    </>
  );
};

export default Onboarding;
