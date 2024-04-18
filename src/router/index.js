import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    component: ()=>import('@/views/Index.vue'),
    name: 'Index',
    children: [
      //二级路由
      {
        path: '/dataList',
        name: 'dataList',
        component: ()=>import('@/views/DataList.vue'),
        meta:{
          title:'数据列表',
          showFather: true,
        },
        children:[
          //三级路由
          {
            path: 'operate',
            name: 'operate',
            component: ()=>import('@/views/Operate.vue'),
            meta:{
              title:'操作',
              showFather: false,
            },
          }
        ]
      },
      {
        path: '/statisticsCharts',
        name: 'statisticsCharts',
        component: ()=>import('@/views/StatisticsCharts.vue'),
        meta:{
          title:'图表列表'
        }
      }
    ],
    meta: {
      keepAlive: true,
    }
  }
]

//创建路由
const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes,
})

//将路由暴露出去
export default router
