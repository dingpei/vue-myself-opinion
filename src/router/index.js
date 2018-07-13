import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path:"/",
      redirect:"/index"
    },
    {//登录
      path: '/data',
      name: 'data',
      component: resolve => require(['../page/data'], resolve),
      meta:{
        title:"login"
      },
    },
    {//首页
      path: '/index',
      name: 'index',
      component: resolve => require(['../page/index'], resolve),
      meta:{
        title:"index"
      },
      children:[
        {
          path:'child',
          component: resolve => require(['../page/child'], resolve),
        }
      ]
    },
    {
      path: '/error',
      name: 'error',
      component: resolve => require(['../page/error'], resolve),
      meta:{
        title:"error"
      }
    },
    {
      path: '/other',
      name: 'other',
      component: resolve => require(['../page/other'], resolve),
       meta:{
        title:"other"
      }
    }
  ]
})
//title标题的改变，如果依赖参数也在这里配置
router.beforeEach ( (to, from, next) => {
  if(to.meta.title){
    document.title = to.meta.title;
  }else{
    document.title = "vue开发模板"
  }
  next()
})

 export default router
