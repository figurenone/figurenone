import React from "react";

export const PagePreview = ({ entry, widgetFor }) => {
  return (
    <main>
      <h1>{entry.getIn(["data", "title"])}</h1>
      <article>{widgetFor("body")}</article>
    </main>
  );
};