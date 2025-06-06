import React from "react";

/**
 * @typedef {Object} CardProps
 * @property {string} [title] - Заголовок карточки
 * @property {string} [description] - Описание
 * @property {string} [image] - URL изображения
 * @property {string} [link] - Ссылка
 * @property {React.ReactNode} [children] - Дополнительный контент внутри карточки
 * @property {string} [className] - Дополнительные классы
 */

/**
 * @param {{
 *   title?: string,
 *   description?: string,
 *   link?: string,
 *   className?: string,
 *   children?: React.ReactNode
 * }} props
 */

export const Card = ({
  title,
  description,
  image,
  link,
  children,
  className = "",
}) => {
  return (
    <article
      href={link}
      className={`card ${className}`}
      target={link ? "_blank" : undefined}
      rel="noopener noreferrer"
    >
      {image && (
        <img src={image} alt={title || "card image"} className="card-image" />
      )}
      {title && <h5 className="card-title">{title}</h5>}
      {description && <p className="card-description">{description}</p>}
      {children}
    </article>
  );
};

export default Card;
