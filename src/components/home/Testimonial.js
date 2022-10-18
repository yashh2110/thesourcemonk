import React, { useRef } from "react";
import Slider from "react-slick";
import { testimonials } from "../../data/testimonials";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
function Testimonial() {
  const testRef = useRef();
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
  return (
    <div className="testimonial">
      <Slider ref={testRef} {...settings} className="test-slider center">
        {testimonials?.map((e) => (
          <div className="test-slider-item">
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
    </div>
  );
}

export default Testimonial;
