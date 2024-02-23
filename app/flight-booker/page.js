"use client";

import React, { useState } from "react";

const TODAY = formatDate(new Date());
const DAY_IN_SECONDS = 24 * 60 * 60 * 1000;

function formatDate(date) {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return [year, month, day].join("-");
}

const FlightBooker = () => {
  const [flightOption, setFlightOption] = useState("one-way");
  const [departureDate, setDepartureDate] = useState(
    formatDate(new Date(Date.now() + DAY_IN_SECONDS)),
  );
  const [returnDate, setReturnDate] = useState(departureDate);

  async function submitHandler(e) {
    e.preventDefault();

    try {
      if (flightOption === "one-way") {
        alert(`You have booked a one-way flight on ${departureDate}`);
        return;
      }

      alert(
        `You have booked a return flight, departing on ${departureDate} and returning on ${returnDate}`,
      );
    } catch (err) {}
  }

  return (
    <div>
      <form onSubmit={(e) => submitHandler(e)}>
        <select
          id="flight-option"
          onChange={(e) => setFlightOption(e.target.value)}
        >
          <option value="one-way">One-way flight</option>
          <option value="round-trip">Roundtrip</option>
        </select>
        <input
          type="date"
          onChange={(e) => setDepartureDate(e.target.value)}
          min={TODAY}
        />
        {flightOption === "round-trip" && (
          <input
            type="date"
            onChange={(e) => setReturnDate(e.target.value)}
            min={departureDate}
          />
        )}
        <button>submit</button>
      </form>
    </div>
  );
};

export default FlightBooker;
