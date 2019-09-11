<template>
  <div class="common-page">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="pageCurrent"
      :page-sizes="pageList"
      :page-size.sync="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      background
      :total="pageTotal"
    ></el-pagination>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      pageList: [5, 10, 15, 20]
    };
  },
  props: {
    total: {
      type: Number
    },
    size: {
      type: Number
    },
    current: {
      type: Number
    }
  },
  computed: {
    pageTotal() {
      return this.total;
    },
    pageSize: {
      get() {
        return this.size;
      },
      set(e) {
        this.$emit("update:size", e);
      }
    },
    pageCurrent: {
      get() {
        return this.current;
      },
      set(e) {
        this.$emit("update:current", e);
      }
    }
  },
  beforeDestroy() {
    // sessionStorage.removeItem(this.$route.path + "/current");
  },
  created() {
    var defaultPage = this.pageList[0];
    if (this.pageList) {
      defaultPage = this.pageList[0];
    }
    var pageSize = localStorage.getItem(this.$route.path + "/size");
    this.pageSize = pageSize ? pageSize - 0 : defaultPage;
  },
  methods: {
    handleCurrentChange(e) {
      // sessionStorage.setItem(this.$route.path + "/current", e);
      this.pageCurrent = e;
      this.$emit("change");
    },
    handleSizeChange(e) {
      localStorage.setItem(this.$route.path + "/size", e);
      this.pageSize = e;
      this.pageCurrent = 1;
      this.$emit("change");
    }
  }
};
</script>

