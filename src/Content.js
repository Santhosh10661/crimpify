import React from "react";
import "./Content.css";
import ContentSecOne from "./ContentComponents/ContentSecOne";
import ContentSecTwo from "./ContentComponents/ContentSecTwo";
import ContentSecThree from "./ContentComponents/ContentSecThree";
import ContentPoints from "./ContentComponents/ContentPoints";

function Content(props) {
  let { formShow, setFormShow } = props;
  return (
    <main>
      <ContentSecOne formShow={formShow} setFormShow={setFormShow} />
      <ContentSecTwo />
      <ContentPoints />
      <ContentSecThree />
    </main>
  );
}

export default Content;
