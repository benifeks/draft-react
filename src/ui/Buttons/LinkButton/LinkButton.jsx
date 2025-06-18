import React from "react";
import { useNavigate } from "react-router-dom";

const LinkButton = ({ to, children, className, ...props }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!to) return;

    if (to.startsWith("http")) {
      // Внешняя ссылка, открываем в новой вкладке
      window.open(to, "_blank", "noopener,noreferrer");
    } else if (to.startsWith("#")) {
      // Якорь — плавно скроллим к элементу
      const el = document.querySelector(to);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Внутренний маршрут
      navigate(to);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

export default LinkButton;
