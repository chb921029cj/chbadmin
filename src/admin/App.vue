<template>
  <div id="app" >
    <img alt="Vue logo" src="./assets/logo.png" />
    <svg-icon icon-class="404" />
    <div class="icon icon-logo"></div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  mounted(){
    console.log(process.env.ENV)
  }
};
</script>

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
