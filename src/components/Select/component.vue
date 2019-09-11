<template>
  <el-select
    v-model.trim="controlSelectType"
    placeholder="请选择"
    size="small"
    @change="change"
    :disabled="disabled"
  >
    <el-option
      v-for="(item,index) in SELECT_LIST"
      :key="index"
      :label="item.label"
      :value="item.value"
    ></el-option>
  </el-select>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    value: {
      type: [Number, String],
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  name: "controlSelect",
  computed: {
    ...mapGetters([`component`]),
    SELECT_LIST() {
      return this.component;
    },
    controlSelectType: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      }
    }
  },
  methods: {
    change(e) {
      this.$emit("change", e);
    }
  }
};
</script>
