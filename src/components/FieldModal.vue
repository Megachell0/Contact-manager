<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <div class="modal-header">
          <div class="title">Новое поле</div>
        </div>
        <hr />
        <div class="modal-body">
          <div class="modal-titles">
            <div class="modal-title">Имя поля</div>
            <div class="modal-title">Значение</div>
          </div>
          <div class="modal-fields">
            <input type="text" class="modal-field" v-model="key" />
            <input type="text" class="modal-field" v-model="value" />
          </div>
        </div>
        <div class="modal-controls">
          <button class="modal-button" @click="close">Закрыть</button>
          <button class="modal-button" @click="submit">Сохранить</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["active"],
  methods: {
    close() {
      this.$emit("close");
      this.key = "";
      this.value = "";
    },
    submit() {
      this.$emit("submit", this.key, this.value);
    },
  },
  data() {
    return {
      key: "",
      value: "",
    };
  },
};
</script>

<style lang="scss">
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  .modal {
    background: #ffffff;
    box-shadow: 2px 2px 20px 1px black;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    width: 550px;
    height: 220px;
    justify-content: center;
    border-radius: 10px;
    background-color: rgb(208, 233, 243);

    .modal-header {
      margin-top: 15px;
      .title {
        font-weight: 600;
        font-size: 20px;
      }
    }
    .modal-body {
      color: black;
      .modal-titles {
        width: 400px;
        margin: auto;
        margin-bottom: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
      .modal-fields {
        display: flex;
        margin: auto;
        width: 400px;
        justify-content: space-around;
        .modal-field {
          height: 25px;
          width: 190px;
        }
      }
    }
    .modal-controls {
      margin-top: 10px;
      .modal-button {
        margin: 10px;
        width: 180px;
        height: 50px;
        background-color: rgb(142, 172, 228);
        border: 0;
        cursor: pointer;
      }
    }
    .btn-close {
      border: none;
      font-size: 20px;
      padding: 20px;
      cursor: pointer;
      font-weight: bold;
      color: #4aae9b;
      background: transparent;
    }
  }
}
</style>