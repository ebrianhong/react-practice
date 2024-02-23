import React from "react";

const MIN = 0;
const MAX = 100;

const ProgressBar = ({ value }) => {
  const percent = Math.min(Math.max(value, MIN), MAX);
  return (
    <div className="h-12 w-full overflow-hidden rounded-3xl border border-solid border-black">
      <div
        style={{ width: `${percent}%` }}
        className="h-full bg-black text-center text-white"
      >
        {percent}%
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="flex flex-col gap-2 p-1">
      <ProgressBar value="50"></ProgressBar>
      <ProgressBar value="10"></ProgressBar>
      <ProgressBar value="20"></ProgressBar>
      <ProgressBar value="100"></ProgressBar>
      <ProgressBar value="0"></ProgressBar>
      <ProgressBar value="-50"></ProgressBar>
    </div>
  );
};

export default App;
