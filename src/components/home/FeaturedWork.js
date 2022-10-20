import React, { useRef } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Slider from "react-slick";
import fwbg from "../../assets/featuredwork/fw-bg.jpg";
import { rwImgs } from "../../data/recentWorks";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

function FeaturedWork() {
  const fwSlider = useRef();
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
    slidesToShow: 2,
    slidesToScroll: 1,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
    // afterChange: (current) => setActiveIndex(current),
  };

  const nextSlide = () => {
    fwSlider.current.slickNext();
  };
  const prevSlide = () => {
    fwSlider.current.slickPrev();
  };
  return (
    <div className="fw-container" id="featured">
      <ParallaxBanner
        layers={[{ image: fwbg, speed: -25 }]}
        className="fw-bg-container"
      >
        {/* <div className="fw-bg-container"> */}
        <div className="fw-overlay">
          <p className="fw-title">
            <span>Featured Work</span>
            <div className="navControls">
              <div onClick={prevSlide}>
                <TrendingFlatIcon
                  className="prevIcon"
                  style={{ color: "#fff", borderColor: "#fff" }}
                />
              </div>
              <div className="" onClick={nextSlide}>
                <TrendingFlatIcon
                  className="nextIcon"
                  style={{ color: "#fff", borderColor: "#fff" }}
                />
              </div>
            </div>
          </p>
          <Slider ref={fwSlider} {...settings} className="fw-slider center">
            {rwImgs?.map((e) => (
              <div className="fw-slider-item">
                <div
                  className="rw-img-container"
                  style={{ backgroundImage: `url(${e.img})` }}
                ></div>
                {/* <img src={e.img} alt="rw1" className="rw-slider-img" /> */}
              </div>
            ))}
          </Slider>
        </div>
      </ParallaxBanner>
      {/* </div> */}
    </div>
  );
}

export default FeaturedWork;
