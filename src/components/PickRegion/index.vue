<template>
  <div class="pick-region">
    <div class="pick-region-box">
      <!-- 这里是省-->
      <el-select v-model="province" :size="size" clearable placeholder="省份" :disabled="disabled">
        <el-option v-for="item in provinceList" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
      <!-- 这里是市-->
      <el-select v-model="city" :size="size" clearable placeholder="市" :disabled="disabled">
        <el-option v-for="item in cityList" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
      <!-- 这里是区-->
      <el-select v-model="area" :size="size" clearable placeholder="区" :disabled="disabled">
        <el-option v-for="item in areaList" :key="item.id" :label="item.name" :value="item.id"></el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      provinceList: [],
      cityList: [],
      areaList: []
    };
  },
  props: {
    value: {
      type: Array,
      required: false
    },
    size: {
      type: String,
      default: "small"
    },
    label: {
      default: "extName"
    },
    disabled: {
      default: false,
      type: Boolean,
      required: false
    }
  },
  computed: {
    // 1
    province: {
      get() {
        return (this.value && this.value[0]) || "";
      },
      set(value) {
        this.changeProvince(value);
      }
    },
    // 2
    city: {
      get() {
        return (this.value && this.value[1]) || "";
      },
      set(value) {
        this.changeCity(value);
      }
    },
    // 3
    area: {
      get() {
        return (this.value && this.value[2]) || "";
      },
      set(value) {
        this.changeArea(value);
      }
    }
  },
  // async updated() {
  //   await this.init();
  // },
  async created() {
    await this.saveInitData();
    await this.init();
  },
  watch: {
    province(value) {
      this.cityList = [];
      this.areaList = [];
      if (!value) return;
      this.getChildren(value).then(res => {
        this.cityList = res.data;
      });
    },
    city(value) {
      this.areaList = [];
      if (!value) return;
      this.getChildren(value).then(res => {
        this.areaList = res.data;
      });
    }
  },
  methods: {
    // 缓存省和市的数据
    async saveInitData() {
      var provinceList = sessionStorage.getItem("provinceList");
      if (provinceList + "" !== "null") {
        this.provinceList = JSON.parse(provinceList);
      } else {
        await this.getChildren("0").then(res => {
          this.provinceList = res.data;
          sessionStorage.setItem("provinceList", JSON.stringify(res.data));
        });
      }
      if (!this.provinceList.length) return;
      var cityList = sessionStorage.getItem("cityList");
      if (cityList + "" !== "null") {
        this.cityList = JSON.parse(cityList);
      } else {
        await this.getChildren(this.provinceList[0].id).then(res => {
          this.cityList = res.data;
          sessionStorage.setItem("cityList", JSON.stringify(res.data));
        });
      }
    },
    async init() {
      if (!this.value) return;
      const areaList = await this.getChildrenList(this.value[1], "areaList");
      const countyList = await this.getChildrenList(
        this.value[2],
        "countyList"
      );
      const villageList = await this.getChildrenList(
        this.value[3],
        "villageList"
      );
      if (areaList.data.length) {
        this.areaList = areaList.data;
      }
      if (countyList.data.list.length) {
        this.countyList = countyList.data;
      }
      if (villageList.data.list.length) {
        this.villageList = villageList.data;
      }
    },
    getChildrenList(pid, name) {
      if (!pid) return { data: { list: [] } };
      if (this[name][length]) {
        return { data: { list: [] } };
      }
      return this.getChildren(pid);
    },
    getChildren(pid) {
      return this.$post("/v1/utils/getRegion", {
        pid
      });
    },
    changeProvince(value) {
      console.log(value);
      if (this.province === value) return;
      if (!value) {
        this.areaList = [];
        this.countyList = [];
        this.$emit("input", ["", "", ""]);
        return;
      }
      this.$emit("input", [value, "", ""]);
    },
    changeCity(value) {
      // 相同值不走
      if (this.city === value) return;
      if (!value) {
        this.countyList = [];
        this.$emit("input", [this.province, "", ""]);
        return;
      }
      if (this.maxLevel > 2) {
        // this.getChildren(value).then(res => {
        //   this.areaList = res.data.list;
        // });
      }
      this.$emit("input", [this.province, value, ""]);
    },
    changeArea(value) {
      // 相同值不走
      if (this.area === value) return;
      if (!value) {
        this.countyList = [];
        this.$emit("input", [
          this.province,
          this.city,
          "",
          "",
          "",
          this.street
        ]);
        return;
      }
      if (this.maxLevel > 3) {
        // this.getChildren(value).then(res => {
        //   this.countyList = res.data.list;
        // });
      }
      this.$emit("input", [
        this.province,
        this.city,
        value,
        "",
        "",
        this.street
      ]);
    }
  }
};
</script>

<style lang="scss">
.pick-region {
  display: inline-block;
  .pick-region-box {
    display: flex;
    > .el-select {
      flex: 1;
      margin-left: 6px;
      &:nth-of-type(1) {
        margin-left: 0;
      }
    }
  }
}
</style>

