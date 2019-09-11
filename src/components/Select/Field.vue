
<template>
  <el-select v-model.trim="type" @change="change" style="width:100%" :size="size" multiple>
    <el-option
      v-for="(item,index) in options"
      :key="index"
      :label="item.name"
      :value="item.domainId"
    ></el-option>
  </el-select>
</template>
<script>
// 选择所有的域 下拉框
import { getDomainList } from "@/api";
export default {
  data() {
    return {
      options: []
    };
  },
  computed: {
    type: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      }
    }
  },
  created() {
    getDomainList()
      .then(res => {
        this.options = res.data.domianList;
      })
      .catch(res => {
        
      });
  },
  props: {
    value: {
      default: []
    },
    size: {
      type: String,
      default: "mini",
      required: false
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


