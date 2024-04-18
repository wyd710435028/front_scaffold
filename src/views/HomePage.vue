<template>
  <router-view></router-view>
  <el-container>
    <!-- 公共头部 -->
    <common-header></common-header>
    <el-main style="border: 2px">
      <!-- 查询部分 -->
      <el-row>
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="下拉选择查询条件">
            <el-select
                v-model="hospitalNo"
                clearable
                filterable
                allow-create
                default-first-option
                placeholder="下拉选择查询条件">
              <el-option v-for="item in options"
                         :key="item.value"
                         :label="item.label"
                         :value="item.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="输入框查询条件">
            <el-input v-model="admissionId" placeholder="输入框查询条件" clearable></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="queryList">
              <el-icon>
                <Search/>
              </el-icon>
              <span>查询</span>
            </el-button>
          </el-form-item>
        </el-form>
      </el-row>
      <!-- 列表部分 -->
      <el-row>
        <el-table :data="tableData" border style="width: 100%">
          <el-table-column fixed type="index" label="序号" width="60">
          </el-table-column>
          <el-table-column prop="date" label="日期"/>
          <el-table-column prop="name" label="名称"/>
          <el-table-column prop="address" label="地址" />
          <el-table-column label="操作">
            <template v-slot="scope">
              <el-row>
                <el-button type="primary" :loading="scope.row.isSending">操作按钮</el-button>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
    </el-main>
    <el-footer>
      <div class="block">
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="pagination.currentPage"
            :page-size="pagination.pageSize"
            layout="->,total, sizes, prev, pager, next, jumper"
            :total="pagination.total"
            :page-sizes="[10,50,100,200,300,500]"
            @size-change="handleSizeChange"
            :background="true"
        >
        </el-pagination>
      </div>
    </el-footer>
    <el-drawer
        v-model="openCommentDetail"
        title="评论详情"
        direction="ltr"
        size="50%"
    >
    </el-drawer>
  </el-container>
</template>
<script>
  import CommonHeader from "@/views/common/CommonHeader.vue";
  import {Search} from "@element-plus/icons-vue";
  export default {
    components: {Search,CommonHeader},
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-04',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
          {
            date: '2016-05-01',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
          },
        ],
        options: [],
        admissionId:'',
        hospitalNo:'',
        pagination: {
          currentPage: 1,
          pageSize: 10,
          total: 0
        },
        understandStatus:'',
        openCommentDetail:false,
        dialogVisible:false
      }
    },
    methods:{
      //分页插件方法
      //切换当前页
      handleCurrentChange(val) {
        this.pagination.currentPage = val;
      },
      //切换每页显示条数
      handleSizeChange(val) {
        this.pagination.pageSize = val;
      },
    },
    mounted() {

    }
  }
</script>
<style>
.el-header{
  background-color: #409EFF;
  color: #ffffff;
  text-align: left;
  line-height: 60px;
  font-size: 20px;
  font-family:"微软雅黑";
}
.el-footer {
  line-height: 60px;
}
.avatar{
  float:right;
  margin-top: 10px;
}
.avatar:hover{
  background-color: #B3C0D1;
  //border: 1px solid #4682B4;
}
</style>