import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import createlist from '@/components/createlist'
import planlist from '@/components/planlist'
import studyidea from '@/components/studyidea'
import learnidea from '@/components/learnidea'
import NotFound from '@/components/404'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name:Home,
      component: Home
    },
	 {
      path: '/',
      name:Home,
      component: Home
    },
	{
	 path:'/plan-list',
	 component:planlist,
	 children : [{
		 path:'create-list',
	     component:resolve=>require(['@/components/createlist.vue'],resolve),
		 }]	
	},
	{
	 path:'/learn-idea',
	 component:learnidea,
	 children:[{
		 path:'study-idea',
		 component:resolve=>require(['@/components/studyidea.vue'],resolve)
		 }]
	},
    {
	path:'*',
	component:NotFound	
	}
  ]
})
