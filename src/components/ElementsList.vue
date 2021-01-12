<template>
  <div class="elements-list">
    <div class="elements slider">
      <element
        v-for="contact of contacts"
        v-bind:contact="contact"
        v-on:delete="delete_contact"
      />
    </div>
    <div class="controls">
      <button class="create" @click="modal = true">
        Добавить новый контакт
      </button>
    </div>
    <modalWindow
      v-if="modal"
      v-bind:active="modal"
      v-on:close="close_modal"
      v-on:submit="add_contact"
    />
  </div>
</template>

<script>
import element from "./Element";
import modalWindow from "./ContactModal"; // окно создания контакта
export default {
  components: {
    element,
    modalWindow,
  },
  data() {
    return {
      contacts: JSON.parse(localStorage.contacts).sort((a, b) =>
        a.id > b.id ? 1 : -1
      ), // достаем данные из localstorage
      modal: false,
    };
  },
  methods: {
    delete_contact(id) {
      let index = this.contacts.findIndex((contact) => contact.id == id);
      this.contacts.splice(index, 1);
      localStorage.contacts = JSON.stringify(this.contacts);
    },
    add_contact: function (name) {
      let id = this.contacts[this.contacts.length - 1].id + 1;
      this.contacts.push({ name: name, id: id });
      this.close_modal();
      localStorage.contacts = JSON.stringify(this.contacts);
      this.$router.push("/detail/" + id);
    },
    close_modal: function () {
      this.modal = false;
    },
  },
};
</script>

<style lang="scss">
.elements-list {
  height: 100%;
  display: contents;
  .elements {
    height: 95%;
    width: 92%;
    margin: 3% auto 3% auto;
    background-color: rgb(195, 216, 245);
    border-radius: 5px;
    overflow-y: auto;
  }

  .controls {
    background-color: rgb(195, 216, 245);
    width: 92%;
    height: 45px;
    margin: 0 auto 3% auto;
    border-radius: 5px;

    .create {
      width: 100%;
      height: 100%;
      background-color: rgb(142, 172, 228);
      border: 0;
      color: white;
      font-size: 16px;
      cursor: pointer;
      &:focus {
        outline: none;
      }
    }
  }
}
</style>