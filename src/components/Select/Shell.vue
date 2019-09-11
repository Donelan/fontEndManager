<template>
  <!-- 下拉框的外壳 -->
  <el-select
    v-model="type"
    :size="size"
    style="width:100%"
    :disabled="disabled"
    @change="change"
    :multiple="multiple"
    :clearable="clearable"
    :placeholder='placeholder'
  >
    <el-option
      :label="item[label]"
      :value="item[keys]"
      v-for="(item,index) in options"
      :key="index"
    ></el-option>
  </el-select>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    list: {
      type: Array,
      default: [],
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    value: {
      required: false
    },
    label: {
      default: "label",
      type: String,
      required: false
    },
    size: {
      default: "small",
      type: String,
      required: false
    },
    keys: {
      default: "id",
      type: String,
      required: false
    },
    filter: {
      required: false
    },
    disabled: {
      required: false,
      default: false
    },
    clearable: {
      required: false,
      default: false
    },
    placeholder: {
      type: String,
      required: false,
    }
  },
  computed: {
    type: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("update:value", value);
      }
    },
    options() {
      if (!this.filter) {
        return this.list;
      } else {
        let array = [];
        this.list.forEach(res => {
          let arr = this.filter[1].split(",");
          arr.forEach(f => {
            // 将 类型等于这个f  得筛选出来。
            if (res[this.filter[0]] === f) {
              array.push(res);
            }
          });
        });
        return array;
      }
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

