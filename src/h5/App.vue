<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <svg-icon icon-class="404" />
    <div class="icon icon-logo"></div>
    <div class="aaa">123131</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>
<style scoped lang="scss">
#app {
  .aaa {
    font-size: 32px;
    line-height: 40px;
    color: red;
  }
}
</style>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
