import React, { useEffect, useState } from "react";
import "./LocalServerData.scss";
import { callToGetServerData } from "../../../../services/api/utils/callToGetServerData";
import DeleteServerButton from "../DeleteServerButton/DeleteServerButton";

const LocalServerData = () => {
  // Храним данные пользователей
  const [data, setData] = useState(null);
  // Храним ошибку, если что-то пошло не так при загрузке данных
  const [error, setError] = useState(null);

  // useEffect с пустым массивом зависимостей — сработает только при монтировании
  useEffect(() => {
    // Вызов сервиса для получения данных
    callToGetServerData("users")
      .then((res) => {
        setData(res); // Устанавливаем полученные данные в состояние
      })
      .catch((err) => {
        setError(err.message); // Сохраняем сообщение об ошибке
      });
  }, []); // Зависимости пусты, чтобы избежать бесконечных вызовов

  // Функция, которую передадим в DeleteServer для обновления локального стейта при удалении
  const handleLocalDelete = (deletedId) => {
    setData((prevData) => prevData.filter((user) => user.id !== deletedId));
  };

  return (
    <section className="local-server-data">
      <h3>LocalServerData</h3>

      {/* Если есть ошибка, показываем её красным текстом */}
      {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}

      {/* Если данные загрузились, отображаем список */}
      {data ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>
              {user.name} : {user.email}
              {/* Передаём id, имя файла и колбек для удаления элемента */}
              <DeleteServerButton
                id={user.id}
                name="users"
                onDeleted={handleLocalDelete}
                NameBtn="x"
                className="local-server-data__delete-server-button"
              />
            </li>
          ))}
        </ul>
      ) : (
        // Если данных ещё нет и ошибки нет, показываем сообщение о загрузке
        !error && <p>Загрузка данных...</p>
      )}
    </section>
  );
};

export default LocalServerData;

// import React, { useEffect, useState } from "react";
// import "./LocalServerData.scss";
// import { callToGetServerData } from "../../../../services/api/utils/callToGetServerData";
// import DeleteServer from "../DeleteServer/DeleteServer";

// const LocalServerData = () => {
//   const [data, setData] = useState(null); // null пока не пришли данные
//   const [error, setError] = useState(null); // null пока не пришла ошибка

//   useEffect(() => {
//     callToGetServerData("users")
//       .then((res) => setData(res))
//       .catch((err) => setError(err.message));
//   }, []); // [] чтобы вызвать только один раз при монтировании

//   return (
//     <section className="local-server-data">
//       <h3>LocalServerData</h3>

//       {error && <p style={{ color: "red" }}>Ошибка: {error}</p>}

//       {data ? (
//         <ul>
//           {data.map((user) => (
//             <li key={user.id}>
//               {user.name} : {user.email}
//               <DeleteServer id={user.id} name="users" />
//             </li>
//           ))}
//         </ul>
//       ) : (
//         !error && <p>Загрузка данных...</p>
//       )}
//     </section>
//   );
// };

// export default LocalServerData;
