<template>
  <section class="header-app flex align-center gap">
    <router-link :to="'/'">
      <img class="icon" :src="require('../assets/img/home.svg')" />
    </router-link>
    <router-link :to="'/contact'">
      <img class="icon" :src="require('../assets/img/contacts.svg')" />
    </router-link>
    <router-link :to="'/StatisticPage'">
      <img class="icon" :src="require('../assets/img/line-chart.svg')" />
    </router-link>
  </section>
</template>

<script>
export default {
  name: "Header",
  components: {},
};
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
</style>
