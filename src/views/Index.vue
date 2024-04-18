<template>
  <el-container>
    <!-- 左侧导航栏 -->
    <el-aside width="auto">
      <el-menu
          active-text-color="#ffd04b"
          background-color="#1f2937"
          text-color="#fff"
          default-active="1"
          class="layout_col"
          :collapse="isCollapse"
          @open="handleOpen"
          @close="handleClose"
          :router="true"
          @select="handleSelect"
      >
        <el-menu-item index="/">
          <el-icon><HomeFilled /></el-icon>
          <span style="font-size: 16px;font-weight: bold;">前端脚手架</span>
        </el-menu-item>
        <el-menu-item index="/dataList">
          <el-icon><List /></el-icon>
          <span>数据列表</span>
        </el-menu-item>
        <el-menu-item index="/statisticsCharts">
          <el-icon><TrendCharts /></el-icon>
          <span>统计图表</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- 右侧页面内容 -->
    <el-container>
      <el-header style="background: #ffffff;height: 50px">
        <el-row style="margin-top: 15px">
          <el-icon v-if="isCollapse"  @click="toggleCollapse" color="black"><Expand /></el-icon>
          <el-icon v-if="!isCollapse"  @click="toggleCollapse" color="black"><Fold /></el-icon>
          <!-- 面包屑 -->
          <Breadcrumb style="margin-top: 3px;margin-left: 10px"></Breadcrumb>
        </el-row>
      </el-header>
      <el-divider style="margin: 3px 0"></el-divider>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>
<script setup>
  // 图标
  import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    Fold,
    ArrowRight,
    ArrowRightBold,
    ArrowLeftBold,
    DArrowRight,
    DArrowLeft,
    Expand,
    HomeFilled,
    List,
    TrendCharts,
  } from '@element-plus/icons-vue';
  import Breadcrumb from "@/components/Breadcrumb.vue";
</script>
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
    handleOpen(){
    },
    handleClose(){
    },
    toggleCollapse(){
      this.isCollapse = !this.isCollapse;
      if (this.isCollapse){
        this.foldOrExpend = '展开菜单';
        // this.menuCol = 3;
        // this.headerCol = 21;
      }else {
        this.foldOrExpend = '收起菜单';
        // this.menuCol = 1;
        // this.headerCol = 23;
      }
    }
  }
}
</script>

<style>
.layout_col:not(.el-menu--collapse){
  height: 100vh;
  width: 200px;
  border: none;
}
.layout_col:is(.el-menu--collapse){
  height: 100vh;
  width: 75px;
  border: none;
}
</style>