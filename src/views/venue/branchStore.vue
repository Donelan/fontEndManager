<template>
  <div>
    <v-title>场馆列表</v-title>
    <div class="common-action">
      <div>
        <select-input v-model="name" @change="condition"></select-input>
      </div>
      <div>
        <el-button
          type="primary"
          icon="el-icon-location"
          size="medium"
          v-wave
          @click="addStore"
        >新增分店</el-button>
      </div>
    </div>
    <div class="common-table">
      <el-table :data="tableData" border v-loading="loading" style="width: 100%">
        <el-table-column prop="name" align="center" label="场馆名称"></el-table-column>
        <el-table-column prop="detailAddress" align="center" label="场馆地址"></el-table-column>
        <el-table-column prop="shopPhone" align="center" label="联系电话"></el-table-column>
        <el-table-column prop="createTime" align="center" label="创建时间"></el-table-column>
        <el-table-column prop="name" label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="success"
              icon="el-icon-edit-outline"
              @click="edit_role(scope.row)"
              v-wave
            >修改</el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="del_category(scope.row.id)"
              v-wave
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <page-list :total="total" :size.sync="size" :current.sync="current" @change="init"></page-list>

    <el-dialog :visible.sync="dialog" title="新增操房" class="common-dialog" v-drag>
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="分店名称" prop="title">
          <el-input v-model.trim="form.title" size="small" maxlength="50"></el-input>
        </el-form-item>
        <el-form-item label="联系电话" prop="title">
          <el-input v-model.trim="form.shopPhone" size="small" maxlength="50"></el-input>
        </el-form-item>
        <el-form-item label="选择地区" prop="part">
          <pick-region v-model="region" :max-level="3" noInput></pick-region>
        </el-form-item>
        <el-form-item label="详细地址" prop="part">
          <el-input v-model.trim="form.address" size="small" maxlength="50"></el-input>
        </el-form-item>
        <el-form-item label="营业时间" prop="part">
          <el-time-picker
            is-range
            v-model="form.timeRange"
            range-separator="-"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围"
            format="HH:mm"
            size="small"
          ></el-time-picker>
        </el-form-item>
        <el-form-item label="公告内容" prop="content">
          <el-checkbox-group v-model="form.hasList">
            <el-checkbox label="WIFI"></el-checkbox>
            <el-checkbox label="沐浴"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <form-button @submit="submit" @cancel="cancel"></form-button>
      </el-form>
    </el-dialog>
  </div>
</template>

<script >
import PickRegion from "@/components/PickRegion";
import SelectInput from "@/components/Select/Input";
import { parseTime } from "@/utils/index";
export default {
  components: { SelectInput, PickRegion },
  data() {
    return {
      total: 0,
      size: 5,
      current: 1,
      loading: false,
      tableData: [],
      region: [],
      name: "",
      dialog: false,
      form: {
        hasList: [],
        timeRange: "",
        address: ""
      },
      rules: {}
    };
  },
  created() {
    this.init();
  },
  methods: {
    condition() {
      this.current = 1;
      this.init();
    },
    init() {
      this.$get("/v1/branchShop/list", {
        current: this.current - 1,
        size: this.size,
        name: this.name
      }).then(res => {
        this.total = res.data.count;
        this.tableData = res.data.rows.map(res => {
          res.detailAddress =
            res.provinceName + res.cityName + res.zoneName + res.address;
          return res;
        });
      });
    },
    submit() {
      let startTime;
      let endTime;
      if (this.form.timeRange) {
        startTime = parseTime(this.form.timeRange[0], "{h}:{i}");
        endTime = parseTime(this.form.timeRange[1], "{h}:{i}");
      }
      this.$post("/v1/branchShop/createOrUpdate", {
        id: "",
        name: this.form.title,
        shopPhone: this.form.shopPhone,
        province: this.region[0],
        city: this.region[1],
        zone: this.region[2],
        address: this.form.address,
        longitude: "",
        latitude: "",
        startTime,
        endTime,
        hasWifi: this.form.hasList.includes("WIFI"),
        hasBath: this.form.hasList.includes("沐浴")
      })
        .then(res => {
          this.dialog = false;
          this.$message({
            message: "操作成功！",
            type: "success"
          });
          this.init();
        })
        .catch(res => {
          console.log(res);
        });
    },
    cancel() {
      this.dialog = false;
    },
    addStore() {
      this.dialog = true;
    }
  }
};
</script>