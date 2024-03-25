<template>

  <!-- Создаем навбар приложения -->
  <div id="Navbar">
    <NavbarApp />
  </div>

  <!-- Добавляем киберспортивные дисциплины -->
  <div id="Sport">
    <SportDisciplines />
  </div>

  <!-- Добавляем Роуты -->
  <!-- <router-view></router-view> -->

  <!-- Создаем footer приложения -->
  <div id="Footer">
    <FooterApp />
  </div>
  


</template>

<script>
import SportDisciplines from './components/SportDisciplines.vue';
import NavbarApp from './components/NavbarApp.vue';
import FooterApp from './components/FooterApp.vue';

export default {
  name: 'App',
  components: {
    SportDisciplines,
    NavbarApp,
    FooterApp
  }
  // // Добавляем disqus в проект
  // mounted() {
  //   let s = document.createElement('script');
  //   s.src = 'https://your-disqus-url.disqus.com/embed.js';
  //   s.setAttribute('data-timestamp', +new Date());
  //   (document.head || document.body).appendChild(s);
  // }
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
*{
  /* background-color: rgb(17, 17, 81); */
}

</style>