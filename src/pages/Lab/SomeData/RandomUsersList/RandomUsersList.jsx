import React from "react";
import "./RandomUsersList.scss";
import DeleteServerButton from "../DeleteServerButton/DeleteServerButton";

const RandomUsersList = ({ users, deleteUser }) => {
  // Функция-обёртка для передачи удаления наверх
  const handleLocalDelete = (deletedId) => {
    if (deleteUser) {
      deleteUser(deletedId);
    }
  };

  return (
    <section className="random-users-list">
      <h3>RandomUsersList</h3>

      {/* Если пользователей нет, показываем сообщение */}
      {!users || users.length === 0 ? (
        <p>Список пользователей пуст.</p>
      ) : (
        // Если есть пользователи — показываем список
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {/* Имя и фамилия пользователя */}
              {user.firstName} : {user.lastName}
              {/* Миниатюра */}
              <img src={user.thumbnail} alt="User" />
              {/* Кнопка удаления — передаем id, имя файла (post), и колбек для обновления */}
              <DeleteServerButton
                id={user.id}
                name="post"
                onDeleted={handleLocalDelete}
                NameBtn="x"
                className="random-users-list__delete-server-button"
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default RandomUsersList;
