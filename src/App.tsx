import React, { Suspense, useEffect, useState } from "react";
import Onboarding from "./components/onboarding";
const BouncingBall = React.lazy(() => import("./sketches/bouncingBall"));
const GameOfLife = React.lazy(() => import("./sketches/gameOfLife"));

export enum Sketches {
  noSketch = "",
  bouncingBall = "Bouncing Ball",
  gameOfLife = "Game of Life",
}

function App() {
  const [sketchToShow, setSketch] = useState<Sketches>(Sketches.noSketch);

  const determineSketch = () => {
    switch (sketchToShow) {
      case Sketches.bouncingBall:
        return <BouncingBall />;
      case Sketches.gameOfLife:
        return <GameOfLife />;
      default:
        return;
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {sketchToShow ? (
        <Suspense fallback={<Onboarding setSketch={setSketch} />}>
          {determineSketch()}
        </Suspense>
      ) : (
        <Onboarding setSketch={setSketch} />
      )}
    </div>
  );
}

export default App;
