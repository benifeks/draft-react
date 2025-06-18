import "swiper/css";
import "swiper/css/pagination";
import "./WebsiteLayoutSlider.scss";

import React, { useRef } from "react";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const WebsiteLayoutSlider = ({ slides = [] }) => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <div className="sliderContainer">
      <button className="sliderContainer__navButton" onClick={handlePrev}>
        🔙
      </button>

      <Swiper
        modules={[A11y]}
        loop={true}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={16}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map(({ image, alt, cardLink, cardMessage }, index) => (
          <SwiperSlide
            key={`WebsiteLayoutSlide-${index}`}
            className="sliderContainer__slide"
          >
            {cardMessage && (
              <div className="sliderContainer__slide--messageClass">
                <p>Макет {cardMessage.messageName} можно </p>
                <p>
                  <a
                    href={cardMessage.messageUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    посмотреть в Figma
                  </a>
                </p>
              </div>
            )}

            <div className="sliderContainer__slide--slideImageWrapper">
              <img
                src={image}
                alt={alt}
                className="sliderContainer__slide--slideImageWrapper--slideImage"
              />
            </div>

            <div className="sliderContainer__slide--messageClass">
              {cardLink?.cardLinkUrl && (
                <a
                  href={cardLink.cardLinkUrl}
                  className={cardLink.cardLinkClass}
                >
                  {cardLink.cardLinkText || "Подробнее"}
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="sliderContainer__navButton" onClick={handleNext}>
        🔜
      </button>
    </div>
  );
};

export default WebsiteLayoutSlider;
