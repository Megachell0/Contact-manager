<template>
  <div class="field">
    <div class="window">
      <div class="field-row" v-if="field[0] != 'id'">
        <div class="field-key" v-if="!on_change">{{ key }}</div>
        <div class="field-value" v-if="!on_change">{{ value }}</div>

        <input type="text" class="field-value" v-if="on_change" v-model="key" />
        <input
          type="text"
          class="field-value"
          v-if="on_change"
          v-model="value"
        />

        <div class="field-edit">
          <button
            class="field-button"
            @click="on_change = true"
            v-if="!on_change && !changed"
          >
            I
          </button>
          <button
            class="field-button"
            @click="confirm_check = true"
            v-if="changed"
          >
            ⭯
          </button>
          <button class="field-button" @click="confirm_field" v-if="on_change">
            ✓
          </button>
          <button
            class="field-button"
            @click="check_delete = true"
            v-if="field[0] != 'name'"
          >
            X
          </button>
        </div>
      </div>
    </div>
    <confirmModal
      v-if="confirm_check"
      v-on:close="close_check"
      v-on:submit="apply_check"
      v-bind:title="'Отменить изменения?'"
    />
    <confirmModal
      v-if="check_delete"
      v-on:close="close_check"
      v-on:submit="apply_delete"
      v-bind:title="'Удалить?'"
    />
  </div>
</template>

<script>
import confirmModal from "./ConfirmModal";
export default {
  props: ["field"],
  components: { confirmModal },
  data() {
    return {
      key: "",
      value: "",
      old_key: "",
      old_value: "",
      on_change: false,
      changed: false,
      confirm_check: false,
      check_delete: false,
    };
  },
  methods: {
    apply_delete() {
      this.close_check();
      this.$emit("delete", this.field[0], this.field[1]);
    },

    close_check() {
      this.confirm_check = false;
      this.check_delete = false;
    },
    apply_check() {
      this.confirm_check = false;
      this.changed = false;
      this.key = this.field[0];
      this.value = this.field[1];
      this.$emit("change", this.field[0], this.key, this.value);
    },
    confirm_field() {
      this.on_change = false;
      this.changed = true;
      this.$emit("change", this.field[0], this.key, this.value);
    },
  },
  mounted() {
    this.key = this.field[0];
    this.value = this.field[1];
  },
};
</script>;

<style lang="scss">
.field {
  .field-row {
    background-color: rgb(142, 172, 228);
    border-radius: 3px;
    color: white;
    display: grid;
    grid-template-columns: 2fr 4fr 1fr;
    align-items: center;
    padding: 10px;
    margin-bottom: 10px;
    text-decoration: none;
    text-decoration-line: none;
    .field-edit {
      .field-button {
        width: 25px;
        height: 25px;
        background-color: #d0e9f3;
        border: solid 1px rgb(142, 172, 228);
      }
    }
  }
}
</style>