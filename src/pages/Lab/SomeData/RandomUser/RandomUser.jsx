import React, { useMemo, useState } from "react";
import { useFetch } from "../../../../hooks/useFetch"; // Кастомный хук для загрузки данных
import "./RandomUser.scss";
import { callToPostServerData } from "../../../../services/api/utils/callToPostServerData"; // Функция отправки данных на сервер

const RandomUser = ({ addUser }) => {
  // Локальное состояние для "перезагрузки" useFetch — при изменении этого значения URL меняется
  const [reloadTrigger, setReloadTrigger] = useState(0);

  // useMemo используется для создания объекта options один раз
  const options = useMemo(() => ({ method: "GET" }), []);

  // Используем кастомный хук для получения данных с randomuser.me
  // URL меняется при изменении reloadTrigger, что вызывает повторный запрос
  const { data, loading, error } = useFetch(
    `https://randomuser.me/api?key=${reloadTrigger}`,
    options
  );

  // Функция отправки пользователя на сервер и добавления его в список наверху
  const handleSendUser = async () => {
    // Берём первого пользователя из полученных данных
    const user = data?.results?.[0];
    if (!user) return; // Если пользователя нет, ничего не делаем

    // Формируем полезную нагрузку для отправки
    const payload = {
      id: Date.now(), // Уникальный ID — временная метка
      firstName: user.name.first,
      lastName: user.name.last,
      thumbnail: user.picture.thumbnail,
    };

    try {
      // Отправляем данные на сервер (например, в файл post.json)
      await callToPostServerData("post", payload);
      alert("Пользователь успешно отправлен!");

      // После успешной отправки вызываем функцию addUser из пропсов,
      // чтобы добавить пользователя в общий список в SomeData
      if (addUser) {
        addUser(payload);
      }
    } catch (err) {
      // При ошибке выводим сообщение
      alert("Ошибка при отправке: " + err.message);
    }
  };

  // Функция для запроса другого пользователя — просто увеличиваем счётчик
  const handleNewUser = () => {
    setReloadTrigger((prev) => prev + 1);
  };

  return (
    <section className="random-user">
      <h3>RandomUser</h3>

      {/* Кнопка для запроса другого пользователя */}
      <button onClick={handleNewUser}>Другой пользователь</button>

      {/* Показываем состояние загрузки */}
      {loading && <p>Загрузка...</p>}

      {/* Показываем ошибку, если произошла */}
      {error && <p>Ошибка: {error.message}</p>}

      {/* Если есть данные, показываем имя и миниатюру пользователя */}
      {data?.results?.[0] && (
        <div>
          <p>
            {data.results[0].name.first} {data.results[0].name.last}
          </p>
          <img src={data.results[0].picture.thumbnail} alt="User" />
        </div>
      )}

      {/* Кнопка отправки пользователя на сервер */}
      <button onClick={handleSendUser}>Отправить на сервер</button>
    </section>
  );
};

export default RandomUser;

// import React, { useMemo, useState } from "react";
// import { useFetch } from "../../../../hooks/useFetch"; // Кастомный хук для загрузки данных
// import "./RandomUser.scss";
// import { callToPostServerData } from "../../../../services/api/utils/callToPostServerData"; // Функция отправки данных на сервер

// const RandomUser = () => {
//   // Локальное состояние для "перезагрузки" useFetch — при изменении этого значения URL меняется
//   const [reloadTrigger, setReloadTrigger] = useState(0);

//   // useMemo используется для создания объекта options один раз
//   const options = useMemo(() => ({ method: "GET" }), []);

//   // Хук загрузки данных. Когда reloadTrigger меняется, URL меняется и useFetch перезапускается
//   const { data, loading, error } = useFetch(
//     `https://randomuser.me/api?key=${reloadTrigger}`, // Уникальный URL при каждом запросе
//     options
//   );

//   // Обработчик кнопки "Отправить на сервер"
//   const handleSendUser = async () => {
//     // Проверяем, есть ли данные и берём первого пользователя из массива
//     const user = data?.results?.[0];
//     if (!user) return;

//     // Формируем полезную нагрузку для отправки
//     const payload = {
//       id: Date.now(), // Уникальный ID (время)
//       firstName: user.name.first,
//       lastName: user.name.last,
//       thumbnail: user.picture.thumbnail, // Ссылка на миниатюру пользователя
//     };

//     try {
//       // Отправляем данные на сервер (в файл post.json)
//       await callToPostServerData("post", payload);
//       alert("Пользователь успешно отправлен!");
//     } catch (err) {
//       // Обрабатываем возможную ошибку при отправке
//       alert("Ошибка при отправке: " + err.message);
//     }
//   };

//   // Обработчик кнопки "Другой пользователь" — просто увеличивает счётчик
//   const handleNewUser = () => {
//     // Это заставляет useFetch повторно загрузить данные с другим URL
//     setReloadTrigger((prev) => prev + 1);
//   };

//   return (
//     <section className="random-user">
//       <h3>RandomUser</h3>

//       {/* Кнопка запроса нового пользователя */}
//       <button onClick={handleNewUser}>Другой пользователь</button>

//       {/* Отображаем состояние загрузки */}
//       {loading && <p>Загрузка...</p>}

//       {/* Показываем ошибку, если она произошла */}
//       {error && <p>Ошибка: {error.message}</p>}

//       {/* Если данные успешно загружены, отображаем имя и картинку */}
//       {data?.results?.[0] && (
//         <div>
//           <p>
//             {data.results[0].name.first} {data.results[0].name.last}
//           </p>
//           <img src={data.results[0].picture.thumbnail} alt="User" />
//         </div>
//       )}

//       {/* Кнопка отправки пользователя на сервер */}
//       <button onClick={handleSendUser}>Отправить на сервер</button>
//     </section>
//   );
// };

// export default RandomUser;
