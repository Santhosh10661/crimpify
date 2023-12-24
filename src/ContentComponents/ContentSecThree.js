import React from "react";
import TSimg from "../svg/undraw_undraw_selectoption_y9cm_mx7w.svg";
import ROIimg from "../svg/undraw_engineering_team_a7n2.svg";
import SGimg from "../svg/undraw_next_tasks_re_5eyy.svg";

function ContentSecThree() {
  let allContents = [
    {
      id: 1,
      title: "technical experience",
      describtion:
        "We are well-versed in a variety of operating systems, networks, and databases. We work with just about any technology that a small business would encounter. We use this expertise to help customers with small to mid-sized projects.",
      image: TSimg,
    },
    {
      id: 2,
      title: "high ROI",
      describtion:
        "Do you spend most of your IT budget on maintaining your current system? Many companies find that constant maintenance eats into their budget for new technology. By outsourcing your IT management to us, you can focus on what you do best--running your business.",
      image: ROIimg,
    },
    {
      id: 3,
      title: "satisfaction guaranteed",
      describtion:
        "The world of technology can be fast-paced and scary. That's why our goal is to provide an experience that is tailored to your company's needs. No matter the budget, we pride ourselves on providing professional customer service. We guarantee you will be satisfied with our work.",
      image: SGimg,
    },
  ];
  return (
    <main>
      {allContents.map((content) => {
        return (
          <section
            className="container-fluid"
            key={content.id}
            style={{
              background: content.id % 2 === 0 ? "#f1efef" : "#f4f4f2",
            }}
          >
            <div className="container-xxl">
              <div
                className={
                  content.id % 2 === 0
                    ? "row flex-row-reverse py-3"
                    : "row flex-row py-3"
                }
              >
                <div className="col-12 col-sm-6 d-flex align-items-center justify-content-center ">
                  <div
                    className="col-8 col-sm-8 shadow rounded-circle d-flex align-items-center justify-content-center  "
                    style={{
                      aspectRatio: "1/1",
                      background: content.id % 2 === 0 ? "#f4f4f2" : "#f1efef",
                    }}
                  >
                    <img src={content.image} alt="" className="col-6" />
                  </div>
                </div>
                <div className="col-12 col-sm-6 text-center p-3 d-flex flex-column justify-content-center">
                  <h1 className="text-capitalize">{content.title}</h1>
                  <div
                    className="text-center"
                    style={{
                      background: "#27374d",
                      color: "#f4f4f2",
                      borderRadius:
                        content.id % 2 === 0
                          ? "10px 50px 10px 50px"
                          : "50px 10px 50px 10px",
                    }}
                  >
                    <p className=" text-capitalize my-4 mx-3 conDes">
                      {content.describtion}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}

export default ContentSecThree;
