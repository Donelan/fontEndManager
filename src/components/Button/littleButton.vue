<template>
  <span :class="'little-button ' + classTitle" @click.stop="submit">
    <svg-icon :icon-class="className.iconName" v-if="className.iconName"></svg-icon>
    {{name === '撤销'? '撤回': name.replace(/\s/g,'')}}
  </span>
</template>
<script>
export default {
  data() {
    return {};
  },
  computed: {
    classTitle() {
      if (this.disabled) {
        return "disabled";
      } else {
        return this.className.className;
      }
    },
    className() {
      switch (this.name) {
        case "提醒":
          return {
            className: "shangjia",
            iconName: "提醒"
          };
        case "增加人员":
          return {
            className: "shangjia",
            iconName: "增加"
          };
        case "已上架":
          return {
            className: "yishangjia",
            iconName: "上架"
          };
        case "发布课程":
          return {
            className: "shangjia",
            iconName: "导出"
          };
        case "已下架":
          return {
            className: "yixiajia",
            iconName: "时间"
          };
        case "资源管理":
          return {
            className: "ziyuanguanli",
            iconName: "文件夹"
          };
        case "上架":
          return {
            className: "shangjia",
            iconName: "上架"
          };
        case "下架":
          return {
            className: "xiajia",
            iconName: "下架"
          };
        case "编辑":
          return {
            className: "bianji",
            iconName: "编辑"
          };
        case "查看":
          return {
            className: "xiajia",
            iconName: "眼睛"
          };
        case "下载":
          return {
            className: "rukediaochan",
            iconName: "导出"
          };
        case "删除":
          return {
            className: "shanchu",
            iconName: "删除"
          };
        case "签收人信息":
          return {
            className: "shanchu",
            iconName: "编辑"
          };
        case "接收人信息":
          return {
            className: "rukediaochan",
            iconName: "编辑"
          };
        case "拒签人信息":
          return {
            className: "tongzhibiangeng",
            iconName: "编辑"
          };
        case "通知失败信息":
          return {
            className: "tongzhibiangeng",
            iconName: "编辑"
          };
        case "举报":
          return {
            className: "jubao"
          };
        case "调岗":
          return {
            className: "tongzhibiangeng"
          };
        case "通知变更":
          return {
            className: "tongzhibiangeng"
          };
        case "入户调查":
          return {
            className: "rukediaochan"
          };
        case "撤销":
          return {
            className: "xiajia",
            iconName: "撤销"
          };
        case "撤销 ":
          return {
            className: "xiajia",
            iconName: "撤销"
          };
        case "变更":
          return {
            className: "biangeng",
            iconName: "变更"
          };
        case "课程章节":
          return {
            className: "tongzhibiangeng",
            iconName: "菜单"
          };
        case "练习题":
          return {
            className: "biangeng",
            iconName: "练习题"
          };
        case "学习进度":
          return {
            className: "rukediaochan",
            iconName: "学习进度"
          };
        case "批量导入试题":
          return {
            className: "rukediaochan",
            iconName: "撤销"
          };
        case "创建试题":
          return {
            className: "bianji",
            iconName: "增加"
          };
        case "考试详情":
          return {
            className: "bianji",
            iconName: "菜单"
          };
        case "试卷详情":
          return {
            className: "ziyuanguanli",
            iconName: "菜单"
          };
        case "开启考试":
          return {
            className: "biangeng",
            iconName: "飞机"
          };
        case "试卷配置":
          return {
            className: "bianji",
            iconName: "设置"
          };
        case "详情":
          return {
            className: "rukediaochan",
            iconName: "放大镜"
          };
        case "停用":
          return {
            className: "tongzhibiangeng",
            iconName: "暂停"
          };
        case "转出":
          return {
            className: "rukediaochan",
            iconName: "导出"
          };
        case "启用":
          return {
            className: "biangeng",
            iconName: "撤销"
          };
        case "材料征集":
          return {
            className: "rukediaochan"
          };
        case "通知":
          return {
            className: "rukediaochan"
          };
        case "部门合并":
          return {
            className: "rukediaochan"
          };
        case "会议":
          return {
            className: "rukediaochan"
          };
        case "公告":
          return {
            className: "rukediaochan"
          };
        case "网站信息":
          return {
            className: "rukediaochan"
          };
        case "移除":
          return {
            className: "shanchu",
            iconName: "删除"
          };
        case "设为常用":
          return {
            className: "biangeng"
          };
        case "添加":
          return {
            className: "biangeng",
            iconName: "plus"
          };
        case "查看":
          return {
            className: "rukediaochan",
            iconName: "眼睛"
          };
        case "查看 ":
          return {
            className: "rukediaochan"
          };
        case "转发":
          return {
            className: "rukediaochan"
          };
        case " 变更 ":
          return {
            className: "tongzhibiangeng"
          };
        case "批量下载":
          return {
            className: "shangjia"
          };
        case "转发详情":
          return {
            className: "ziyuanguanli"
          };
        case "查阅":
          return {
            className: "bianji"
          };
        case "签收":
          return {
            className: "biangeng"
          };
        case "回退":
          return {
            className: "jubao"
          };
        case "跟踪":
          return {
            className: "tongzhibiangeng"
          };
        case "纸文领取":
          return {
            className: "yishangjia"
          };
        case "撤回":
          return {
            className: "shanchu"
          };
        case "补发":
          return {
            className: "rukediaochan"
          };
        case "催收":
          return {
            className: "tongzhibiangeng"
          };
        case "纸文收取":
          return {
            className: "yishangjia"
          };
        case "调班":
          return {
            className: "tiaoban",
            iconName: "调班"
          };
        case "批示":
          return {
            className: "tiaoban",
            iconName: "批示"
          };
        case "办理":
          return {
            className: "banli",
            iconName: "办理"
          };
        case "上报":
          return {
            className: "yishangjia",
            iconName: "飞机"
          };
        default:
          return {
            className: ""
          };
      }
    }
  },
  props: {
    name: {
      default: "",
      type: String
    },
    disabled: {
      default: false,
      type: Boolean
    }
  },
  methods: {
    submit() {
      if (this.disabled) {
        return;
      }
      this.$emit("click");
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss">
.little-button {
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 3px;
  margin: 0 5px;
  color: #ffff;
  cursor: pointer;
  text-align: center;
  vertical-align: middle;
  .svg-icon {
    margin-right: 4px;
  }
  &.yishangjia {
    background-color: #35ca79;
    cursor: pointer;
  }
  &.yixiajia {
    background-color: #ccc;
    cursor: default;
  }
  &.ziyuanguanli {
    padding: 4px 8px;
    background-color: #fff;
    color: #333;
    border: 1px solid #ccc;
  }
  &.shangjia {
    background-color: #35ca79;
  }
  &.xiajia {
    background-color: rgb(241, 105, 127);
  }
  &.bianji {
    background-color: #67c23a;
  }
  &.shanchu {
    background-color: #f56c6c;
  }
  &.jubao {
    background-color: #f47447;
  }
  &.tongzhibiangeng {
    background-color: #fab858;
  }
  &.rukediaochan {
    background-color: #55cfde;
  }
  &.biangeng {
    background-color: #35ca79;
    .svg-icon {
      font-size: 14px;
      vertical-align: sub;
    }
  }
  &.tiaoban {
    background-color: #fab858;
  }
  &.banli {
    background-color: #409EFF;
  }
  &.disabled {
    color: #333;
    border: solid 1px #ccc;
    background-color: #ccc;
  }
}
</style>

