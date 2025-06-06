import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/**
 * @typedef {Object} SlideItem
 * @property {string} imgSrc - Путь к изображению
 * @property {string} [alt] - Альтернативный текст
 * @property {cardLink: {cardLinkUrl: string, cardLinkText: string, cardLinkClass: string}} [cardLink] - Ссылка (если есть)
 * @property {{messageName: string, messageUrl: string, messageClass: string}} [cardMessage] - Текст сообщения
 *
 *
 */

/**
 * @param {{
 *   slides: SlideItem[],
 *   slidesPerView?: number,
 *   spaceBetween?: number,
 *   loop?: boolean,
 *   pagination?: boolean | object,
 *   scrollbar?: boolean | object,
 *   navigation?: boolean | object,
 *   classNameContainer?: string,
 *   classNameSlide?: string,
 *   classNameButtonPrev?: string,
 *   classNameButtonNext?: string
 * }} props
 */

const CustomSwiper = ({
  slides = [],
  slidesPerView = 1,
  spaceBetween = 10,
  loop = false,
  pagination = false,
  scrollbar = false,
  navigation = false,
  classNameContainer = "",
  classNameSlide = "",
  classNameButtonPrev = "",
  classNameButtonNext = "",
}) => {
  const swiperRef = useRef(null);
  return (
    <div className={classNameContainer}>
      <button
        className={classNameButtonPrev}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        &#10149;
      </button>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        loop={loop}
        pagination={pagination}
        scrollbar={scrollbar}
        navigation={navigation}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {slides.map(({ image, alt, cardLink, cardMessage }, index) => (
          <SwiperSlide className={classNameSlide} key={index}>
            {cardMessage && (
              <div className={cardMessage.messageClass}>
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
            <img src={image} alt={alt} />
            {cardLink.cardLinkUrl && (
              <a href={cardLink.cardLinkUrl} className={cardLink.cardLinkClass}>
                {cardLink.cardLinkText || "Подробнее"}
              </a>
            )}
          </SwiperSlide>
        ))}
        {pagination && <div className={pagination.el.replace(".", "")}></div>}
      </Swiper>

      <button
        className={classNameButtonNext}
        onClick={() => swiperRef.current?.slideNext()}
      >
        &#10150;
      </button>
    </div>
  );
};

export default CustomSwiper;
