<template>
  <div class="main-app">
    <div class="container">
      <!-- Контейнер для компонентов -->
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    if (localStorage.getItem("contacts") === null) {
      localStorage.contacts =
        '[{"id":1,"Телефон":"+79999999999","Адрес":"г.Москва","Email":"test@gmail.com","name":"Иванов Иван Иванович"}]';
    }
  },
};
</script>

<style lang="scss">
.main-app {
  height: 90vh;
  display: flex;

  .container {
    display: flex;
    flex-direction: column;
    background-color: rgb(208, 233, 243);
    width: 45%;
    height: 90%;
    margin: auto;
    border-radius: 8px;
  }
}
</style>