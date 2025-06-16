import my_foto_1 from "../../assets/images/about/my_foto_1.jpg";
import my_foto_2 from "../../assets/images/about/my_foto_2.jpg";
import sprite from "../../assets/images/about/symbol-defs.svg";

const aboutVariables = {
  aboutTitle: "Немного о себе",
  sprite: sprite,

  article_1: {
    articleTitle: '🚧 "Ещё вчера..." ⚒️',
    imageUrl: my_foto_1,
    imageAlt: "photo of miner",
    message: `Мне 53, за плечами 20 лет под землёй — шахтёрская закалка, пыль, усталость и простые радости вроде кофе после смены. Теперь всё иначе: больше солнца, больше времени, и даже фронтенд-разработка вошла в жизнь. Шахтёр внутри, но живу уже по-другому — тем, что действительно радует.`,
    children: (
      <svg className="about__container--card__svg">
        <use href={`${sprite}#icon-GlitchMiner`} />
      </svg>
    ),
  },

  article_2: {
    articleTitle: "⛏️ Новая глава... 💻",
    imageUrl: my_foto_2,
    imageAlt: "photo of man with laptop",
    message: `Когда шахта осталась позади, я понял — без дела не могу. Начал изучать фронтенд, втянулся: JavaScript, сайты, технологии. Теперь учусь и надеюсь не просто понимать, а работать в этой сфере. Верю,что возраст — не помеха, если есть интерес и движение вперёд.`,
    children: (
      <svg className="about__container--card__svg">
        <use href={`${sprite}#icon-characters_operator`} />
      </svg>
    ),
  },
};

export default aboutVariables;
