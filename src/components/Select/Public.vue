<template>
  <el-select v-model.trim="type" size="medium" style="margin-right:8px;" @change="change">
    <el-option label="全部类型" value="0"></el-option>
    <el-option
      v-for="(item,index) in NOTICE_TYPE"
      :key="index"
      :label="item.itemName"
      :value="item.itemValue"
    ></el-option>
  </el-select>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(["dict"]),
    NOTICE_TYPE() {
      return this.dict.NOTICE_TYPE;
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
      default: "0"
    }
  },
  methods: {
    change(e) {
      this.type = e;
      this.$emit("change");
    }
  }
};
</script>


