"use client";

import { useId, useState } from "react";

function getAccordionHeaderId(id, value) {
  return id + "-header-" + value;
}

function getAccordionPanelId(id, value) {
  return id + "-panel-" + value;
}

function Accordion({ sections }) {
  const accordionId = useId();
  const [expanded, setExpanded] = useState(new Set());
  return (
    <div>
      {sections.map(({ value, title, contents }) => {
        const headerId = getAccordionHeaderId(accordionId, value);
        const panelId = getAccordionPanelId(accordionId, value);
        const open = expanded.has(value);

        return (
          <div key={value}>
            <button
              id={headerId}
              aria-controls={panelId}
              aria-expanded={open}
              onClick={() => {
                const newOpenSections = new Set(expanded);

                if (newOpenSections.has(value)) {
                  newOpenSections.delete(value);
                } else {
                  newOpenSections.add(value);
                }

                setExpanded(newOpenSections);
              }}
            >
              {title}
            </button>
            <div id={panelId} aria-labelledby={headerId} hidden={!open}>
              {contents}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function App() {
  return (
    <div className="wrapper">
      <Accordion
        sections={[
          {
            value: "html",
            title: "HTML",
            contents:
              "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
          },
          {
            value: "css",
            title: "CSS",
            contents:
              "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
          },
          {
            value: "javascript",
            title: "JavaScript",
            contents:
              "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
          },
        ]}
      />
    </div>
  );
}
