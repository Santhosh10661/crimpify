import React from "react";
import "./Content.css";
import ContentSecOne from "./ContentComponents/ContentSecOne";
import ContentSecTwo from "./ContentComponents/ContentSecTwo";
import ContentSecThree from "./ContentComponents/ContentSecThree";

function Content() {
  return (
    <main>
      <ContentSecOne />
      <ContentSecTwo />
      <ContentSecThree />
    </main>
  );
}

export default Content;
