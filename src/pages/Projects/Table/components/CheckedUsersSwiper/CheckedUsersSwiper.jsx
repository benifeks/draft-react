import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React, { useContext } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { TableContext } from "../../context/TableContext";
import DetailsUserButton from "../DetailsUserButton/DetailsUserButton";
import UserSelectCheckbox from "../UserSelectCheckbox/UserSelectCheckbox";
import styles from "./CheckedUsersSwiper.module.scss";

const CheckedUsersSwiper = () => {
  const { checkedUsers } = useContext(TableContext);

  if (!checkedUsers || checkedUsers.length === 0) {
    return <p className={styles.empty}>Пользователи не выбраны.</p>;
  }

  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation={true}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={3}
      grabCursor={true}
      className={styles.swiper}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {checkedUsers.map((user) => (
        <SwiperSlide key={user.login.uuid} className={styles.slide}>
          <div className={styles.card}>
            <div className={styles.controls}>
              <DetailsUserButton
                uuid={user.login.uuid}
                sourceArray={checkedUsers}
              />
              <UserSelectCheckbox user={user} emojiChecked="❌" />
            </div>
            <img
              src={user.picture.medium}
              alt={`${user.name.first} ${user.name.last}`}
              className={styles.avatar}
            />
            <h4>{`${user.name.first} ${user.name.last}`}</h4>
            <ul className={styles.infoList}>
              <li>🎂 Возраст: {user.dob.age}</li>
              <li>🌍 Страна: {user.location.country}</li>
            </ul>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CheckedUsersSwiper;
