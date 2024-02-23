"use client";

import React, { useState } from "react";
const items = [
  {
    title: "HTML",
    text: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
  },
  {
    title: "CSS",
    text: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
  },
  {
    title: "Javascript",
    text: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
  },
];

const Tabs = () => {
  const [selected, setSelected] = useState("HTML");

  return (
    <div className="flex flex-col">
      <div>
        {items.map((item) => {
          const active = item.title === selected;
          return (
            <button
              key={item.title}
              className={`${active ? "bg-blue-200" : ""}`}
              value={item.title}
              onClick={(e) => setSelected(e.target.value)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <div>
        {items.map((item) => (
          <p key={item.title} hidden={selected !== item.title}>
            {item.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
