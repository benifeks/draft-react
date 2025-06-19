import React from "react";

/**
 * @typedef {Object} CardProps
 * @property {string} [title]
 * @property {string} [description]
 * @property {string} [image]
 * @property {string} [link]
 * @property {string} [className]
 * @property {React.ReactNode} [children]
 */

/**
 * @param {CardProps & React.HTMLAttributes<HTMLElement>} props
 */
export const Card = ({
  title,
  description,
  image,
  link,
  className = "",
  children,
  ...restProps
}) => {
  return (
    <article className={`card ${className}`} {...restProps}>
      {title && <h3 className="card-title">{title}</h3>}

      {description && <p className="card-description">{description}</p>}

      {children}
    </article>
  );
};

export default Card;
