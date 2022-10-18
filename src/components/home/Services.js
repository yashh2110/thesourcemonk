import React from "react";
import { services } from "../../data/services";

function Services() {
  return (
    <div className="serviceContainer" id="services">
      <div className="serviceSubContainer">
        <p className="services-title">
          <span>Main Services</span>
        </p>
        <div className="service-content">
          {services?.map((e) => (
            <div
              className="service-item"
              style={{ backgroundImage: `url(${e.img})` }}
              key={e.name}
            >
              <div className="service-detail">
                <p className="service-title">{e.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
