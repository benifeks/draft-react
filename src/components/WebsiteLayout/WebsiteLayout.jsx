import "swiper/css";
import "swiper/css/pagination";

import React from "react";

import slidesData from "./slidesData";
import WebsiteLayoutSlider from "./WebsiteLayoutSlider/WebsiteLayoutSlider";

const WebsiteLayout = () => {
  return (
    <section className="website-layout" id="website-layout">
      <h2>Вёрстка</h2>
      <h3>🖌️ по макетам Figma 🎨 </h3>
      <WebsiteLayoutSlider slides={slidesData} />
    </section>
  );
};

export default WebsiteLayout;
