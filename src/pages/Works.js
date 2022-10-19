import React, { useEffect, useState } from "react";
import { services } from "../data/services";
import "../styles/work.css";

function Works() {
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {
    window.scrollTo(0, 0);
    const header = document.querySelector(".header");
    header.classList.add("header-scroll");
  }, []);
  return (
    <div className="work">
      <p className="work-title">
        <span>Our Works</span>
      </p>
      <div className="work-menu">
        {services?.map((e) => (
          <div
            className={`work-item ${
              e.id == activeIndex ? "work-item-active" : ""
            }`}
            onClick={() => setActiveIndex(e.id)}
          >
            <span>{e.name}</span>
          </div>
        ))}
      </div>
      <div className="work-gallery">
        {services?.map((e) => (
          <div className="wg-item">
            {/* <img className="wg-img-container" src={e.img} /> */}
            <div
              className="wg-img-container"
              style={{ backgroundImage: `url(${e.img})` }}
            >
              <div className="wg-details">
                <p className="wg-title">{e.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
