"use client";
import React, { useState, useEffect } from "react";

const ProgressBar = ({ isEmpty, onCompleted }) => {
  const [startTransition, setStartTransition] = useState(false);
  useEffect(() => {
    if (isEmpty || startTransition) return;
    setStartTransition(true);
  }, [startTransition, isEmpty]);

  return (
    <div className="h-2 border border-solid border-black bg-white">
      <div
        className={`h-full origin-left bg-black transition-transform duration-1000 ease-linear ${startTransition ? "scale-x-1" : "scale-x-0"}`}
        onTransitionEnd={() => {
          onCompleted();
        }}
      />
    </div>
  );
};

const App = () => {
  const [bars, setBars] = useState(0);
  const [filledBars, setFilledBars] = useState(0);
  return (
    <div>
      {Array(bars)
        .fill(null)
        .map((_, index) => (
          <ProgressBar
            key={index}
            isEmpty={index > filledBars}
            onCompleted={() => setFilledBars(filledBars + 1)}
          ></ProgressBar>
        ))}
      <button onClick={() => setBars(bars + 1)}>click</button>
    </div>
  );
};

export default App;
