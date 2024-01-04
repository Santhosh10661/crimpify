import React from "react";
import networkManagement from "../svg/network management.svg";
import cloudServices from "../svg/cloud services.svg";
import securityServices from "../svg/security services.svg";
import helpDesk from "../svg/help desk.svg";
import wireless from "../svg/wireless.svg";

function ServicesComThree() {
  let ServicecardList = [
    {
      id: 1,
      image: networkManagement,
      title: "network management",
      Describtion:
        "Monitoring and managing an organization's network infrastructure to ensure optimal performance, security, and reliability.",
    },
    {
      id: 2,
      image: cloudServices,
      title: "cloud services",
      Describtion:
        "Providing and managing cloud-based resources, including infrastructure, platform, and software services.",
    },
    {
      id: 3,
      image: securityServices,
      title: "Security Services",
      Describtion:
        "Protecting an organization's digital assets and information from cyber threats and ensuring compliance with security standards.",
    },
    {
      id: 4,
      image: helpDesk,
      title: "Help Desk and Support",
      Describtion:
        "Offering technical support to end-users, resolving issues, and providing assistance with software and hardware problems.",
    },
    {
      id: 5,
      image: wireless,
      title: "Managed Wireless Networking",
      Describtion:
        "Designing, implementing, and managing wireless networks to ensure reliable and secure connectivity.",
    },
  ];
  return (
    <section className="container-fluid">
      <div className="container-xxl">
        <div className="row flex-wrap justify-content-center">
          {ServicecardList.map((cardItems) => {
            return (
              <div
                key={cardItems.id}
                className="card col-11 col-sm-5 col-md-4 col-lg-3 p-0 my-1 m-sm-2 m-md-1 m-lg-2"
                style={{
                  background: "#f4f4f2",
                  overflow: "hidden",
                }}
              >
                <img
                  src={cardItems.image}
                  className="card-img-top p-2"
                  alt=""
                />
                <div
                  className="card-body"
                  style={{ backgroundColor: "#27374d", color: "#f1efef" }}
                >
                  <h5 className="card-title text-capitalize">
                    {cardItems.title}
                  </h5>
                  <p className="card-text text-capitalize">
                    {cardItems.Describtion}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServicesComThree;
