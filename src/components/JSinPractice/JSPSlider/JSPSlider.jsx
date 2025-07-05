// src/components/JSinPractice/JSPSlider/JSPSlider.jsx
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "./JSPSlider.module.scss";
import slidesData from "./slidesData";

const JSPSlider = () => {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  return (
    <article>
      <h3>🧩 Мини-проекты 💡</h3>
      <div className={styles.sliderContainer}>
        <button type="button" className={styles.navButton} onClick={handlePrev}>
          <ArrowLeftCircle />
        </button>

        <div className={styles.swiperWrapper}>
          <Swiper
            modules={[A11y]}
            loop={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              600: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {slidesData.map((slide, index) => (
              <SwiperSlide key={`JSPSlide-${index}`}>
                <article className={styles.slide}>
                  <h4 className={styles.slideTitle}>{slide.title}</h4>
                  <div className={styles.slideImageWrapper}>
                    <img
                      className={styles.slideImage}
                      src={slide.image}
                      alt={slide.alt}
                    />
                  </div>
                  <Link
                    className={styles.slideLink}
                    to={{
                      pathname: `/projects/${slide.cardLinkUrl}`,
                      hash: `#${slide.cardLinkUrl}`,
                    }}
                  >
                    {slide.cardLinkText}
                  </Link>
                  {/* <Link className={styles.slideLink} to={slide.cardLinkUrl}>
                  {slide.cardLinkText}
                </Link> */}
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <button type="button" className={styles.navButton} onClick={handleNext}>
          <ArrowRightCircle />
        </button>

        <div className={styles.navButtonMobile}>
          <button
            type="button"
            className={styles.navButtonMobile__button}
            onClick={handlePrev}
          >
            👈
          </button>
          <button
            type="button"
            className={styles.navButtonMobile__button}
            onClick={handleNext}
          >
            👉
          </button>
        </div>
      </div>
    </article>
  );
};

export default JSPSlider;
