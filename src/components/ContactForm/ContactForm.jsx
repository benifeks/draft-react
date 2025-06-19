import emailjs from "emailjs-com";
import React, { useState } from "react";

import styles from "./ContactForm.module.scss";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_pt0oeps",
        "template_aet7agt",
        formData,
        "eQ-bleyioVcVMvpt2"
      )
      .then(
        (response) => {
          setStatus("Сообщение отправлено успешно!");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          setStatus("Не удалось отправить сообщение, попробуйте еще раз.");
        }
      );
  };

  return (
    <section className={styles["contact-form"]} id="contact-form">
      <h2>Свяжитесь со мной</h2>
      <h3>🎉 Жду Ваших букв! 🥳</h3>
      <form className={styles["form"]} onSubmit={handleSubmit}>
        <label>
          Ваш email:
          <input
            className={styles["input"]}
            type="email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Ваше сообщение:
          <textarea
            className={styles["textarea"]}
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
          />
        </label>

        <button className={styles["button"]} type="submit">
          Отправить
        </button>

        {status && (
          <p
            className={
              styles[
                `status ${
                  status.includes("Сообщение отправлено успешно!")
                    ? "success"
                    : "error"
                }`
              ]
            }
            onClick={() => setStatus("")}
          >
            {status}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
