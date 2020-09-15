<template>
  <div id="app">
    <Calendar :dateProps="time" />
  </div>
</template>

<script>
import Calendar from "./components/calendar.vue";

export default {
  name: "App",
  components: {
    Calendar
  },
  data() {
    return {
      time: "2000-05-12"
      // time: false
    };
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
