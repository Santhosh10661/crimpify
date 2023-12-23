import React, { useState } from "react";
import troubleshootIMg from "./svg/undraw_bug_fixing_oc-7-a.svg";
import backupIMG from "./svg/server_down_s-4-lk.svg";
import guidanceIMG from "./svg/undraw_chat_bot_re_e2gj.svg";
import { IoIosArrowDown } from "react-icons/io";

function Services() {
  let [servicesInfo, setServiceInfo] = useState([
    {
      id: 1,
      title: "troubleshooting and issue resolution",
      describtion:
        "Encounter a technical hiccup? Our skilled technicians are here to diagnose and troubleshoot a wide range of issues, from software glitches to connectivity problems. We're determined to get your systems back up and running smoothly.",
      image: troubleshootIMg,
      isdescribOpen: false,
    },
    {
      id: 2,
      title: "data backup and recovery",
      describtion:
        "Accidentally lost important files? We offer data backup and recovery solutions to ensure that your data is secure and can be restored incase of emergencies.",
      image: backupIMG,
      isdescribOpen: false,
    },
    {
      id: 3,
      title: "remote guidance and training",
      describtion:
        "Looking to enhance your tech skills? Our team can guide you through using various software, tools, and platforms, making sure you're equipped to navigate the digital landscape confidently.",
      image: guidanceIMG,
      isdescribOpen: false,
    },
  ]);
  const handleClick = (id) => {
    let newInfo = servicesInfo.map((service) =>
      service.id === id
        ? { ...service, isdescribOpen: !service.isdescribOpen }
        : service
    );
    setServiceInfo(newInfo);
  };
  return (
    <main className="container-fluid" style={{ background: "#f1efef" }}>
      <div className="col text-center ">
        <span className="h1 ">S</span>
        <span className="h3 ">ervices</span>
      </div>
      {servicesInfo.map((service) => {
        return (
          <section
            className="row justify-content-center align-items-center my-2 p-3"
            key={service.id}
            style={{
              background: service.id % 2 === 0 ? "#f1efef" : "#f4f4f2",
            }}
          >
            <h6 className="col-10 m-0 text-capitalize fw-bold">
              {service.title}
            </h6>
            <IoIosArrowDown
              className="col fw-bold"
              onClick={() => handleClick(service.id)}
              style={{
                cursor: "pointer",
                transform: service.isdescribOpen
                  ? "rotate(180deg)"
                  : "rotate(0deg)",
                transition: " 0.3s ease-in-out",
              }}
            />
            <article
              className="my-2 rounded"
              style={{
                maxHeight: service.isdescribOpen ? "2000px" : "0px",
                height: "fit-content",
                // opacity: service.isdescribOpen ? "1" : "0.9",
                overflow: "hidden",
                transition: "0.3s ease",
                background: "#27374d",
              }}
            >
              <div className="row justify-content-between align-items-center ">
                <div className="col-12 col-sm-3 py-3">
                  <div
                    className="shadow rounded-circle d-flex justify-content-center align-items-center"
                    style={{
                      aspectRatio: "1/1",
                      background: service.id % 2 === 0 ? "#f4f4f2" : "#f1efef",
                    }}
                  >
                    <img src={service.image} alt="" className="col-8" />
                  </div>
                </div>
                <div
                  className=" col text-center"
                  style={{
                    background: "#27374d",
                    color: "#f4f4f2",
                    borderRadius: "50px 50px 50px 50px",
                  }}
                >
                  <p
                    className="col m-3 text-center text-capitalize"
                    style={{ fontWeight: "500" }}
                  >
                    {service.describtion}
                  </p>
                </div>
              </div>
            </article>
          </section>
        );
      })}
    </main>
  );
}

export default Services;
