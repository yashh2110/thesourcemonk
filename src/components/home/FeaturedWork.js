import React, { useRef } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import Slider from "react-slick";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import fwbg from "../../assets/d1.jpg";
import { rwImgs } from "../../data/recentWorks";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import Testimonial from "./Testimonial";
import { testimonials } from "../../data/testimonials";
import Footer from "../common/Footer";

function FeaturedWork() {
  const fwSlider = useRef();
  const settings = {
    // items: 1,
    // loop: true,
    center: true,

    // nav: true,
    // navText: [
    //   "<div className='rw-navs owl-next'>as</div>",
    //   "<div className='rw-navs owl-prev'>as</div>",
    // ],
    arrows: false,
    dots: false,
    infinite: true,
    autoplay: false,
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
        className="fw-bg-container">
        {/* <div className="fw-bg-container"> */}
        <div className="fw-overlay">
          <p className="fw-title">
            <span>Testimonials</span>
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
            {testimonials?.map((e) => (
              <div className="fw-slider-item">
                <div className="test-item-container">
                  <p>
                    <FormatQuoteIcon /> {e.text} <FormatQuoteIcon />
                  </p>
                  <p> - {e.user}</p>
                </div>
                {/* <img src={e.img} alt="rw1" className="rw-slider-img" /> */}
              </div>
            ))}
          </Slider>
          {/* <Testimonial settings={settings} ref={fwSlider} /> */}
          <Footer />
        </div>
      </ParallaxBanner>
      {/* </div> */}
    </div>
  );
}

export default FeaturedWork;
