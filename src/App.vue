<template>

  <!-- Добавляем навбар приложения -->
  <div id="Navbar">
    <NavbarApp />
  </div>

  <!-- Добавляем киберспортивные дисциплины -->
  <div id="Sport">
    <SportDisciplines />
  </div>

  <!-- Добавялем компонент О Нас в приложение -->
  <div id="About">
    <AboutUs />
  </div>

  <!-- Добавляем Роуты в приложение -->
  <!-- <router-view></router-view> -->

  <!-- Добавляем disqus в приложение -->
  <div id="Disqus">
    <DisQus />
  </div>

  <!-- Создаем footer приложения -->
  <div id="Footer">
    <FooterApp />
  </div>


</template>

<script>
import SportDisciplines from './components/SportDisciplines.vue';
import NavbarApp from './components/NavbarApp.vue';
import FooterApp from './components/FooterApp.vue';
import AboutUs from './components/AboutUs.vue';
import DisQus from './components/DisQus.vue';

export default {
  name: 'App',
  components: {
    SportDisciplines,
    NavbarApp,
    FooterApp,
    AboutUs,
    DisQus
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
* {
  /* background-color: rgb(17, 17, 81); */
}
</style>