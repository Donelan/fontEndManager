<template>
  <el-select v-model.trim="type" size="small" @change="change" placeholder="部门类型" clearable>
    <el-option
      v-for="(item,index) in DEPT_TYPE"
      :key="index"
      :label="item.itemName"
      :value="item.dicId"
    ></el-option>
  </el-select>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["dict"]),
    DEPT_TYPE() {
      return this.dict.DEPT_TYPE;
    },
    type: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      }
    }
  },
  props: {
    value: {
      type: [Number, String],
      default: ""
    }
  },
  methods: {
    change(e) {
      this.type = e;
      this.$emit("change", e);
    }
  }
};
</script>


