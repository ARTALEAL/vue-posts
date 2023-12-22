<template>
  <h1 class="main-title">Добро пожаловать!</h1>
  <main class="main-page">
    <div>
      <img
        class="main-photo"
        src="https://sun9-41.userapi.com/impg/uNf-bKWah2WcKOQTGZrNNkhEUfCGCgwKygItWA/-GXps-Er2u4.jpg?size=640x644&quality=96&sign=9e201240391e1406598066f68c872fc4&type=album"
        alt="My photo"
      />
    </div>
    <div class="main-text">
      <h3>Меня зовут Артём, я фронтенд-разработчик.</h3>
      <p>
        Ещё в университете меня интересовала сфера веб-разработки, магия кода и
        как всё это работает.
      </p>
      <p>
        В данный момент работаю фронтенд-разработчиком в коммерческом проекте. В
        свободное время, углубляюсь в тематику пройденных тем и расширяю свои
        знания дополнительными курсами, технологиями и практикуюсь в написании
        кода.
      </p>
      <p>
        Окончил курс по профессии frontend-разработчика в Яндекс Практикум, сдал
        все проектные работы в срок, защитил диплом. Так же, прошёл курсы в
        Хекслет по профессиям "FullStack-разработчик" и "Верстальщик".
      </p>
      <p>
        <strong>Пишу код на:</strong> Vue (данный проект написан на нём),
        React.js, JavaScript/TypeScript, HTML5, CSS3/SCSS
      </p>
      <p>
        <strong>Использую в работе:</strong> Redux, Vuex, Git, BEM, Figma,
        Bootstrap и тд.
      </p>
      <p>
        <strong>Коротко о данном приложении:</strong> Данное SPA приложение было
        написано для практики работы с фреймворком Vue и не более того &#128516;
      </p>
    </div>
  </main>
</template>

<script>
import NavBar from '@/components/UI/NavBar.vue';
export default {
  components: { NavBar },
};
</script>

<style>
.main-title {
  margin-bottom: 25px;
}
.main-page {
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: flex-start;
}
.main-photo {
  display: block;
  max-width: 150px;
}
.main-text {
  max-width: 50vw;
}
p {
  margin-top: 15px;
  font-size: 1.5rem;
}
@media (width < 768px) {
  .main-page {
    flex-direction: column;
  }
  .main-text {
    max-width: 100%;
  }
  p {
    font-size: 1rem;
  }
}
</style>
