<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal">
        <div class="modal-header">
          <div class="modal-title">{{ title }}</div>
        </div>
        <div class="modal-controls">
          <button class="modal-button" @click="submit">Да</button>
          <button class="modal-button" @click="close">Нет</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["title"],
  methods: {
    close() {
      this.$emit("close");
    },
    submit() {
      this.$emit("submit");
    },
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
      .modal-title {
        color: black;
        font-weight: 600;
        font-size: 20px;
      }
    }
    .modal-body {
      color: black;
      .name-field {
        height: 25px;
        width: 400px;
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