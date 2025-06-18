import React from "react";
import "./Lab.scss";
import SomeData from "./SomeData/SomeData";

const Lab = () => {
  return (
    <section className="lab">
      <h2>Lab</h2>
      <div className="lab-container">
        <div className="lab-container__work">
          {/* ================================================ */}
          <SomeData />

          {/* ================================================ */}
        </div>
      </div>
    </section>
  );
};

export default Lab;
