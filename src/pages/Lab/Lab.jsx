import React, { useEffect, useState } from "react";
import "./Lab.scss";

const Lab = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => {
        if (!res.ok) throw new Error("Network error");
        return res.json();
      })
      .then((json) => setData(json))
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <div>Ошибка: {error}</div>;
  if (!data) return <div>Загрузка...</div>;

  return (
    <section className="lab">
      <h3>Проверка fetch</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
};

export default Lab;

// import React from "react";
// import "./Lab.scss";

// const Lab = () => {
//   return (
//     <section className="lab">
//       <h2>Lab</h2>
//     </section>
//   );
// };

// export default Lab;
