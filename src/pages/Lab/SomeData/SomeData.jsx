import React, { useState, useEffect } from "react";
import "./SomeData.scss";
import LocalServerData from "./LocalServerData/LocalServerData";
import PostServer from "./PostServer/PostServer";
import RandomUser from "./RandomUser/RandomUser";
import DeleteServer from "./DeleteServer/DeleteServer";
import RandomUsersList from "./RandomUsersList/RandomUsersList";

const SomeData = () => {
  // Состояние для хранения списка пользователей
  const [users, setUsers] = useState([]);

  // Функция загрузки пользователей с сервера при монтировании компонента
  useEffect(() => {
    // Импортируем функцию получения данных (предполагается, что она есть)
    import("../../../services/api/utils/callToGetServerData").then(
      ({ callToGetServerData }) => {
        callToGetServerData("post")
          .then((data) => {
            setUsers(data); // Устанавливаем полученные данные в состояние
          })
          .catch((error) => {
            console.error("Ошибка загрузки пользователей:", error);
            setUsers([]); // В случае ошибки очищаем список
          });
      }
    );
  }, []);

  // Функция для добавления нового пользователя в список (передадим в RandomUser)
  const addUser = (newUser) => {
    // Обновляем состояние, добавляя нового пользователя
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  // Функция для удаления пользователя из списка (передадим в RandomUsersList)
  const deleteUser = (idToDelete) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== idToDelete));
  };

  return (
    <section className="some-data">
      <h2>SomeData</h2>
      <div className="some-data__local-server-block">
        <LocalServerData />
        <PostServer />
        <DeleteServer />
      </div>

      <div className="some-data__random-user-block">
        {/* Передаем функцию добавления пользователя в RandomUser */}
        <RandomUser addUser={addUser} />
        {/* Передаем список пользователей и функцию удаления в RandomUsersList */}
        <RandomUsersList users={users} deleteUser={deleteUser} />
      </div>
    </section>
  );
};

export default SomeData;

// import React from "react";
// import "./SomeData.scss";
// import LocalServerData from "./LocalServerData/LocalServerData";
// import PostServer from "./PostServer/PostServer";
// import RandomUser from "./RandomUser/RandomUser";
// import DeleteServer from "./DeleteServer/DeleteServer";
// import RandomUsersList from "./RandomUsersList/RandomUsersList";

// const SomeData = () => {
//   return (
//     <section className="some-data">
//       <h2>SomeData</h2>
//       <div className="some-data__local-server-block">
//         <LocalServerData />
//         <PostServer />
//         <DeleteServer />
//       </div>
//       <div className="some-data__random-user-block">
//         <RandomUser />
//         <RandomUsersList />
//       </div>
//     </section>
//   );
// };

// export default SomeData;
