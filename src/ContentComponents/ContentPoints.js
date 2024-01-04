import React from "react";
import { TbTargetArrow } from "react-icons/tb";

function ContentPoints() {
  let points = [
    "IT personnel leaving? need a new provider",
    "Outgrowing current IT service",
    "Unconfident in our technology plan",
    "Unsure about our security status",
    "Unexpected IT costs are a recurring problem",
    "Overworked IT department",
    "Team lacks necessary compliance expertise",
  ];

  return (
    <section className="coontainer-fluid">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <ul
            className="m-0 my-3 p-0 py-2"
            style={{ width: "fit-content", listStyle: "none" }}
          >
            {points.map((point, index) => {
              return (
                <>
                  <li
                    key={index}
                    style={{ width: "fit-content" }}
                    className={`${
                      index % 2 !== 0 ? "ms-sm-5" : ""
                    } text-capitalize fw-bolder mb-3 points`}
                  >
                    <TbTargetArrow
                      className="m-1"
                      style={{ width: "30px", height: "30px" }}
                    />
                    {point}
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ContentPoints;
