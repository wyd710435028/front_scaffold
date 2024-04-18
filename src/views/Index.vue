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
      <!-- 头部 -->
      <el-header style="background: #ffffff;height: 50px">
        <el-dropdown style="float: right;margin-top: 10px">
          <el-avatar src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg" class="avatar" shape="square"> admin </el-avatar>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="toUserInformation()">个人信息</el-dropdown-item>
              <el-dropdown-item @click="dialogVisible = true">切换用户</el-dropdown-item>
              <el-dropdown-item @click="quit()">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-row style="margin-top: 20px">
          <el-icon v-if="isCollapse"  @click="toggleCollapse" color="black"><Expand /></el-icon>
          <el-icon v-else  @click="toggleCollapse" color="black"><Fold /></el-icon>
          <!-- 面包屑 -->
          <Breadcrumb style="margin-top: 1px;margin-left: 10px"></Breadcrumb>
        </el-row>
      </el-header>
      <!-- 分割线 -->
      <el-divider style="margin: 8px 0"></el-divider>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer></el-footer>
    </el-container>
  </el-container>
</template>
<script setup>
  // 图标
  import {Fold, Expand, HomeFilled, List, TrendCharts} from '@element-plus/icons-vue';
  //面包屑
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
      foldOrExpend:'收起菜单'
    }
  },
  methods:{
    handleOpen(){
    },
    handleClose(){
    },
    //展开/收起菜单
    toggleCollapse(){
      this.isCollapse = !this.isCollapse;
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