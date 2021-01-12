<template>
  <div class="nav">
    <a class="title" href="/">Simple Contact Manager</a>
  </div>
  <MainApp />
</template>


<script>
import MainApp from "@/components/MainApp.vue";
export default {
  components: {
    MainApp, //основной компонент
  },
};
</script>


<style lang="scss">
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  background-color: #49a1e9;
  height: 45px;
  display: flex;
  .title {
    margin: auto;
    color: #ffffff;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 20px;
    text-decoration-line: none;
  }
}
.slider {
  &::-webkit-scrollbar {
    width: 15px;
    background-color: rgb(195, 216, 245);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    height: 50px;
    background-color: #7591a8;
    border-radius: 3px;
  }
}
</style>
