import React from "react";
import CustomSwiper from "../../ui/CustomSwiper/CustomSwiper";
import slidesData from "./slidesData";
import "./WebsiteLayout.scss";

const WebsiteLayout = () => {
  return (
    <section className="website-layout" id="website-layout">
      <h2>Вёрстка</h2>
      <h3>Реализация интерфейса по макету Figma 🎨 🖌️ </h3>
      <CustomSwiper
        slides={slidesData}
        slidesPerView={3}
        spaceBetween={5}
        loop={true}
        pagination={{ el: ".website-layout__pagination", clickable: true }}
        scrollbar={false}
        navigation={false}
        classNameContainer="website-layout__swiper"
        classNameSlide="website-layout__swiper--slide"
        classNameButtonPrev="website-layout__button-prev"
        classNameButtonNext="website-layout__button-next"
      />
    </section>
  );
};

export default WebsiteLayout;
