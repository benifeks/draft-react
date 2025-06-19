import React, { useState } from "react";

import CardExercises from "../ui/CardExercises/CardExercises";
import styles from "./SpiralMatrix.module.scss";
import { handleClear, handleStart } from "./spiralMatrix.utils";

const SpiralMatrix = () => {
  const [size, setSize] = useState("");
  const [matrix, setMatrix] = useState([]); // запас под визуализацию

  return (
    <CardExercises title="Спиральная матрица" className={styles.SpiralMatrix}>
      <input
        className={styles.SpiralMatrix__input}
        name="SpiralMatrixInput"
        type="number"
        min="1"
        max="9"
        step="1"
        pattern="[1-9]"
        inputMode="numeric"
        onInput={(e) => {
          if (e.target.value.length > 1) {
            e.target.value = e.target.value.slice(0, 1);
          }
        }}
        value={size}
        onChange={(e) => setSize(e.target.value)}
        placeholder="Введите размер от 1 до 9"
      />

      <div className={styles.SpiralMatrix__buttons}>
        <button onClick={() => handleStart(Number(size), setSize, setMatrix)}>
          ▶️ Создать
        </button>
        <button onClick={() => handleClear(setSize, setMatrix)}>
          🆑 Очистить
        </button>
      </div>

      <div className={styles.SpiralMatrix__matrix}>
        <div>
          {matrix.map((row, rowIndex) => (
            <div key={rowIndex} style={{ display: "flex" }}>
              {row.map((cell, colIndex) => (
                <div
                  key={colIndex}
                  style={{
                    width: "30px",
                    height: "30px",
                    border: "1px solid #ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {cell}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </CardExercises>
  );
};

export default SpiralMatrix;
