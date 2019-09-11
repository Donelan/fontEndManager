<template>
  <div class="select-input-setion">
    <el-input
      v-model.trim="text"
      :placeholder="placeholder"
      style="width:200px"
      :size="size"
      @keyup.native.enter="condition"
    ></el-input>
    <el-button type="primary" icon="el-icon-search" :size="size" v-wave @click="condition">搜索</el-button>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
      default: ""
    },
    size: {
      type: String,
      default: "medium",
      required: false
    },
    placeholder: {
      type: String,
      default: "请输入标题",
      required: false
    }
  },
  computed: {
    text: {
      get() {
        return this.value;
      },
      set(value) {
        
        this.$emit("update:value", value);
      }
    }
  },
  methods: {
    condition() {
      this.$emit("change");
    }
  }
};
</script>
<style lang="scss" scoped>
.select-input-setion {
  display: flex;
  align-items: flex-start;
}
</style>


