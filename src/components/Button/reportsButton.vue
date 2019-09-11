<template>
    <el-form-item align='right' style="padding-top:6px">
        <el-button :size="size" @click='onCancel' v-wave>{{cancel_name}}</el-button>
        <el-button type="primary" @click="onSubmit" :size="size" v-wave v-if="!disabled">{{submit_name}}</el-button>
        <el-button type="primary" :size="size" @click="onDraft" v-wave v-if="!disabled">{{draft_name}}</el-button>
    </el-form-item>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    cancel_name: {
      type: String,
      default: "取消"
    },
    submit_name: {
      type: String,
      default: "提交"
    },
    draft_name: {
      type: String,
      default: "保存"
    },
    size: {
      type: String,
      default: "small"
    },
    disabled:{
      type:Boolean,
      default:false
    },
    cancel: {}
  },
  methods: {
    onCancel() {
      this.$emit("cancel");
    },
    onSubmit() {
      this.$emit("submit");
    },
    onDraft() {
      this.$emit("draft");
    }
  }
};
</script>
