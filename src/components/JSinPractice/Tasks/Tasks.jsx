import React from "react";
import { Link } from "react-router-dom";

import styles from "./Tasks.module.scss";

const Tasks = () => {
  return (
    <article className={styles.tasks}>
      <h3>📝 Задачи 📂</h3>
      <ul className={styles.tasksList}>
        <li>
          🔁 <strong>Заполнение матрицы по спирали</strong>
          <p>
            Алгоритмическая задача: заполнить двумерный массив по спирали по
            часовой стрелке.
          </p>
        </li>
        <li>
          💱 <strong>Калькулятор валют</strong>
          <p>
            Простой конвертер валют с использованием актуального API и
            перерасчётом в реальном времени.
          </p>
        </li>
        <li>
          🎯 <strong>Игра «Угадай число»</strong>
          <p>
            Генерация случайного числа и пользовательские попытки угадать его с
            подсказками.
          </p>
        </li>
      </ul>
      <Link
        className={styles.tasksBtn}
        to={{
          pathname: "/exercises",
          hash: "#exercises",
        }}
      >
        посмотреть задачи
      </Link>
    </article>
  );
};

export default Tasks;
