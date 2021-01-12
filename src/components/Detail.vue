<template>
  <div class="detail">
    <div class="detail-fields slider">
      <field
        v-for="field of Object.entries(fields)"
        v-bind:field="field"
        v-on:delete="delete_field"
        v-on:change="change_field"
      />
    </div>
    <div class="detail-controls">
      <button class="detail-button" @click="go_home">Закрыть</button>
      <button class="detail-button" @click="modal = true">Новое поле</button>
    </div>
    <fieldmodal
      v-if="modal"
      v-on:close="modal = false"
      v-on:submit="add_field"
    />
  </div>
</template>


<script>
import field from "./Field";
import fieldmodal from "./FieldModal";
export default {
  components: {
    field,
    fieldmodal,
  },
  data() {
    return {
      fields: JSON.parse(localStorage.contacts).filter(
        (contact) => contact.id == this.$route.params.id
      )[0],
      modal: false,
      unsaved: [], //для сохранения изменений при закрытии
    };
  },
  methods: {
    add_field(key, value) {
      this.fields[key] = value;
      let contacts = JSON.parse(localStorage.contacts);
      let index = contacts.findIndex(
        (contact) => contact.id == this.$route.params.id
      );
      contacts.splice(index, 1);
      contacts.push(this.fields);
      localStorage.contacts = JSON.stringify(contacts);
      this.modal = false;
    },

    go_home() {
      this.save_changed();
      this.$router.push("/");
    },

    delete_field(key, value) {
      delete this.fields[key];
      let contacts = JSON.parse(localStorage.contacts);
      let index = contacts.findIndex(
        (contact) => contact.id == this.$route.params.id
      );
      contacts.splice(index, 1);
      contacts.push(this.fields);
      localStorage.contacts = JSON.stringify(contacts);
    },
    change_field(old_key, key, value) {
      this.unsaved.push([old_key, key, value]);
    },
    save_changed() {
      for (let val of this.unsaved) {
        delete this.fields[val[0]];
        this.fields[val[1]] = val[2];
      }
      let contacts = JSON.parse(localStorage.contacts);
      let index = contacts.findIndex(
        (contact) => contact.id == this.$route.params.id
      );
      contacts.splice(index, 1);
      contacts.push(this.fields);
      localStorage.contacts = JSON.stringify(contacts);
    },
  },
};
</script>;

<style lang="scss">
.detail {
  height: 100%;
  display: contents;
  .detail-fields {
    height: 85%;
    width: 92%;
    margin: 3% auto 0 auto;
    background-color: rgb(195, 216, 245);
    border-radius: 5px;
    overflow-y: auto;
  }
  .detail-controls {
    //background-color: rgb(195, 216, 245);
    width: 92%;
    height: 7%;
    margin: auto;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;

    .detail-button {
      width: 49%;
      height: 100%;
      background-color: #8eace4;
      color: white;
      border: 0;
    }
  }
}
</style>