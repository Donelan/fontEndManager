<template>
  <section class="select-date-setion">
    <el-date-picker
      v-model.trim="beginendTime"
      type="date"
      align="right"
      size="medium"
      placeholder="开始日期"
      @change="change(0)"
    ></el-date-picker>
    <el-date-picker
      style="margin-right:8px;"
      v-model.trim="endendTime"
      @change="change(1)"
      type="date"
      size="medium"
      placeholder="结束日期"
    ></el-date-picker>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    start: {},
    end: {}
  },
  computed: {
    endendTime: {
      get() {
        return this.end;
      },
      set(value) {
        this.$emit("update:end", value);
      }
    },
    beginendTime: {
      get() {
        return this.start;
      },
      set(value) {
        this.$emit("update:start", value);
      }
    }
  },
  methods: {
    change(bool) {
      if (this.beginendTime && this.endendTime) {
        if (+this.beginendTime > +this.endendTime) {
          this.$message({
            message: "开始时间应小于结束时间",
            type: "warning"
          });
          if (bool) {
            this.endendTime = "";
          } else {
            this.beginendTime = "";
          }
          return;
        }
      }
      this.$emit("change");
    }
  }
};
</script>

<style lang="scss" scoped>
.select-date-setion {
  display: flex;
  align-items: flex-start;
}
</style>


