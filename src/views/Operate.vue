<template>
  <router-view></router-view>
  <el-container>
    <span>操作页面</span>
  </el-container>
</template>

<script>
import {ElBreadcrumb, ElBreadcrumbItem, ElHeader} from "element-plus";

export default{
  components: {
    ElHeader,
    ElBreadcrumb,
    ElBreadcrumbItem,
  },
  data(){
    return {
      isCollapse:false,
      headerCol:21,
      menuCol:3,
      foldOrExpend:'收起菜单'
    }
  },
  methods:{

  },
  mounted() {
  }
}
</script>

<style>
</style>