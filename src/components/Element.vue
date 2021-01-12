<template>
  <div class="element">
    <div class="top">
      <a class="name" :href="'detail/' + contact.id">
        {{ contact.name }}
      </a>
      <button class="delete-contact" @click="check_delete = true">X</button>
    </div>
    <confirmModal
      v-if="check_delete"
      v-on:close="check_delete = false"
      v-on:submit="delete_contact"
      v-bind:title="'Удалить?'"
    />
  </div>
</template>

<script>
import confirmModal from "./ConfirmModal";
export default {
  props: ["contact"],
  components: { confirmModal },

  data() {
    return {
      check_delete: false,
    };
  },

  methods: {
    delete_contact() {
      this.$emit("delete", this.contact.id);
    },
  },
};
</script>
<style lang="scss">
.element {
  background-color: rgb(142, 172, 228);
  border-radius: 3px;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
  text-decoration: none;
  text-decoration-line: none;

  .top {
    display: flex;
    justify-content: space-between;
    .name {
      text-align: left;
      cursor: pointer;
      color: inherit;
      text-decoration: none;
    }
    .delete-contact {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: none;
      color: white;
      border: 0;
      cursor: pointer;
    }
  }

  .updated {
    text-align: end;
    color: rgb(218, 214, 214);
    font-size: 12px;
  }
}
</style>