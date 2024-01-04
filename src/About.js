import React from "react";
import ContactUs from "./Contact us";

function About() {
  let aboutContnets = [
    {
      id: 1,
      title: "Welcome to Crimpify:",
      describtion:
        "Where challenges meet solutions and where your technology's potential is maximized.",
    },
    {
      id: 2,
      title: "Our Mission: Crimping the Challenges",
      describtion:
        "Our technical support services are like crimping - reliable and ready to tackle any issues for a seamless experience.",
    },
    {
      id: 3,
      title: "Our Vision: Unleashing Solutions",
      describtion:
        "Our support solutions unlock your technology's full potential, from troubleshooting to expert guidance, ensuring peak performance.",
    },
  ];
  return (
    <>
      <section className="container-fluid " style={{ background: "#f1efef" }}>
        <div className="container-xxl">
          <div className="container">
            <div className="row flex-column justify-content-center align-items-center">
              {/* <h1 className="text-center">Crimp's Story</h1> */}
              <div className="col text-center ">
                <span className="h1 ">C</span>
                <span className="h3 ">rimp's </span>
                <span className="h1 "> S</span>
                <span className="h3 ">tory</span>
              </div>
              {aboutContnets.map((contents) => {
                return (
                  <div className="col-sm-7" key={contents.id}>
                    <h3 className="text-capitalize text-center m-3 ">
                      {contents.title}
                    </h3>
                    <p
                      className="text-capitalize text-center"
                      style={{ fontWeight: "600" }}
                    >
                      {contents.describtion}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <ContactUs />
    </>
  );
}

export default About;
