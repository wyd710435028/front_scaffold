import { createApp } from 'vue'
import App from './App.vue'
//引入路由
import router from './router'
//引入element-plus
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import zhLocale from 'element-plus/es/locale/lang/zh-cn';
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

/**
 * 初始化插件
 */
const  app =createApp(App).use(router).use(ElementPlus,{
    locale:{
        el:{
            // 整体覆盖
            ...zhLocale.el,
            pagination: {
                pagesize: '条/页',
                total: `共 {total} 条`,
                goto: '前往第',
                pageClassifier: '页'
            }
        }
    }
}).mount('#app');

/**
 * ElementPlus icon
 */
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}


