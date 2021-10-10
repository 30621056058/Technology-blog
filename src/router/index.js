import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import first from '../components//first'
// import login from '@/components/login'
// import youxiang from '../components/logina/youxiang'
// import registeredphone '@/comments/registered/registeredphone'
// import registeredphone from '@/components/registered/registeredphone'

import registeredpage from '@/components/registered/registeredpage'
import registeredphone from '../components/registered/registeredphone'
import registeredemali from '../components/registered/registeredemali'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    // {
    //   path: '/first',
    //   name: 'first',
    //   component: first
    // },
    // {
      // path: '/login',
      // name: 'login',
      // component: login,
      // children:[{
        // path: '/youxiang',
        // name: 'youxiang',
        // component: youxiang
      // }]
    // },
    
    {
      path: '/registeredpage',
      name: 'registeredpage',
      component: registeredpage,
      children:[{
        // default:'/registered/registeredphone',
        path: '/registered/registeredphone',
        name: 'registeredphone',
        component: registeredphone,
          
      },
    {
      path:'/registered/registeredemali',
      name: 'registeredemali',
      component: registeredemali,
    }],redirect:'/registered/registeredphone'
     
    },
  ]
})
