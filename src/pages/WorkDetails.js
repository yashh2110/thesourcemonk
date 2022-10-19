import React, { useEffect } from "react";
function WorkDetails() {
  useEffect(() => {
    const header = document.querySelector(".header");
    header.classList.add("header-scroll");
  }, []);
  return <div>WorkDetails</div>;
}

export default WorkDetails;
