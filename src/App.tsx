import React, { Suspense, useEffect, useState } from "react";
const Sketch = React.lazy(() => import("./Sketch"));

function App() {
  const [showSketch, setShowSketch] = useState(false);

  const loadingText = "Click to start";

  return (
    <div
      onClick={() => setShowSketch(true)}
      style={{ height: "100vh", width: "100vw" }}
    >
      {showSketch ? (
        <Suspense fallback={<div>{loadingText}</div>}>
          <Sketch />
        </Suspense>
      ) : (
        <div>{loadingText}</div>
      )}
    </div>
  );
}

export default App;
