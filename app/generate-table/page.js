"use client";

import React, { useState } from "react";

const Table = ({ rows, cols }) => {
  return (
    <table>
      <tbody>
        {Array.from({ length: rows }, () => 0).map((_, row) => (
          <tr key={row}>
            {Array.from({ length: cols }, () => 0).map((_, col) => (
              <td key={col}>
                {col % 2 === 0
                  ? rows * col + (row + 1)
                  : rows * (col + 1) - row}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const GenerateTable = () => {
  const [rows, setRows] = useState("");
  const [cols, setCols] = useState("");
  return (
    <div className="flex flex-col">
      <form>
        <div>
          <label htmlFor="rows"></label>
          <input
            id="rows"
            name="rows"
            type="text"
            value={rows}
            onChange={(e) => setRows(Number(e.target.value))}
          ></input>
        </div>
        <div>
          <label htmlFor="cols"></label>
          <input
            id="cols"
            name="cols"
            type="text"
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
          ></input>
        </div>
      </form>
      {<Table rows={rows} cols={cols}></Table>}
    </div>
  );
};

export default GenerateTable;
