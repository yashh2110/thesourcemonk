import React, { useEffect } from "react";

function ContactUs() {
  useEffect(() => {
    const header = document.querySelector(".header");
    header.classList.add("header-scroll");
    window.scrollTo(0, 0);
  }, []);
  return <div>ContactUs</div>;
}

export default ContactUs;
