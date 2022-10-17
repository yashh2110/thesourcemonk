import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { rwImgs } from "../../data/recentWorks";
import divider from "../../assets/icons/divder.svg";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
function RecentWorks() {
  const slider = useRef();
  const [activeIndex, setActiveIndex] = useState(1);
  useEffect(() => {}, []);
  const nextSlide = () => {
    slider.current.slickNext();
  };
  const prevSlide = () => {
    slider.current.slickPrev();
  };
  const settings = {
    // items: 1,
    // loop: true,
    // center: true,

    // nav: true,
    // navText: [
    //   "<div className='rw-navs owl-next'>as</div>",
    //   "<div className='rw-navs owl-prev'>as</div>",
    // ],
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 1100,
    slidesToShow: 1,
    slidesToScroll: 1,
    focusOnSelect: false,

    beforeChange: (current, next) => setActiveIndex(next),
    // afterChange: (current) => setActiveIndex(current),
  };
  return (
    <div className="recentContainer">
      <p className="rw-title">
        <span>Our Recent Work</span>
      </p>
      <div className="rw-content">
        <div className="rw-content-desc">
          <p>
            We promise your dream to a reality. Look into some of our recent
            works
          </p>
          <div className="navPaging">
            <p>
              0{activeIndex + 1} <img src={divider} alt="--" /> 0{rwImgs.length}
            </p>
          </div>
          <div className="navControls">
            <div onClick={prevSlide}>
              <TrendingFlatIcon className="prevIcon" />
            </div>
            <div className="" onClick={nextSlide}>
              <TrendingFlatIcon className="nextIcon" />
            </div>
          </div>
        </div>
        {/* <OwlCarousel
          {...settings}
          loop
          margin={15}
          className="rw-slider center">
          {rwImgs?.map((e) => (
            <div className="rw-slider-item">
              <img src={e.img} alt="rw1" className="rw-slider-img" />
            </div>
          ))}
        </OwlCarousel> */}
        <Slider ref={slider} {...settings} className="rw-slider center">
          {rwImgs?.map((e) => (
            <div className="rw-slider-item ">
              <div
                className="rw-img-container"
                style={{ backgroundImage: `url(${e.img})` }}></div>
              {/* <img src={e.img} alt="rw1" className="rw-slider-img" /> */}
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default RecentWorks;
