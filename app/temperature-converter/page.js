"use client";

import React, { useState } from "react";

const CELCIUS = "celcius";
const FAHRENHEIT = "fahrenheit";

function format(number) {
  // Show 4 d.p. if number has more than 4 decimal places.
  return /\.\d{5}/.test(number) ? Number(number).toFixed(4) : number;
}

const TemperatureConverter = () => {
  const [celciusValue, setCelciusValue] = useState(0);
  const [fahrenheitValue, setFahrenheitValue] = useState(0);

  function convert(e) {
    console.log(e);
    const val = e.target.value;
    const numericValue = Number(val);
    const name = e.target.name;

    const isValid = !Number.isNaN(numericValue) && Boolean(val);

    if (name === CELCIUS) {
      setCelciusValue(val);
      setFahrenheitValue(isValid ? format((numericValue * 9) / 5 + 32) : "");
    } else {
      setFahrenheitValue(val);
      setCelciusValue(isValid ? format(((numericValue - 32) * 5) / 9) : "");
    }
  }

  return (
    <div className="flex w-[300px] flex-row">
      <aside id="left-aside" className="flex flex-col">
        <input
          id="celcius"
          name="celcius"
          type="number"
          value={celciusValue}
          onChange={convert}
        ></input>
        <label htmlFor="celcius">Celcius</label>
      </aside>
      <div id="equal">=</div>
      <aside id="right-aside" className="flex flex-col">
        <input
          id="fahrenheit"
          name="fahrenheit"
          type="number"
          value={fahrenheitValue}
          onChange={convert}
        ></input>
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </aside>
    </div>
  );
};

export default TemperatureConverter;
