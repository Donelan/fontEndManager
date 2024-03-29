import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/dashboard',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: '',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/course',
    component: Layout,
    meta: { title: '课程管理', icon: 'dashboard' },
    children: [
      {
        path: 'privateCourse',
        name: '团课排期',
        component: () => import('@/views/course/privateCourse'),
        meta: { title: '私教课排期' }
      },
      {
        path: 'teamCourse',
        name: '团课排期',
        component: () => import('@/views/course/teamCourse'),
        meta: { title: '团课排期' }
      },
      {
        path: 'signInPrivate',
        name: '私教课签到',
        component: () => import('@/views/course/signInPrivate'),
        meta: { title: '私教课签到' }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    meta: { title: '用户管理', icon: 'dashboard' },
    children: [
      {
        path: 'member',
        name: '会员管理',
        component: () => import('@/views/user/member'),
        meta: { title: '会员管理' }
      },
      {
        path: 'coach',
        name: '教练管理',
        component: () => import('@/views/user/coach'),
        meta: { title: '教练管理' }
      },
    ]
  },
  {
    path: '/finance',
    component: Layout,
    meta: { title: '财务管理', icon: 'dashboard' },
    children: [
      {
        path: 'monthlyStatement',
        name: '月对账单',
        component: () => import('@/views/finance/monthlyStatement'),
        meta: { title: '月对账单' }
      },
      {
        path: 'offlineOrder',
        name: '线下订单',
        component: () => import('@/views/finance/offlineOrder'),
        meta: { title: '线下订单' }
      },
      {
        path: 'tradeDetails',
        name: '交易明细',
        component: () => import('@/views/finance/tradeDetails'),
        meta: { title: '交易明细' }
      },
    ]
  },
  {
    path: '/venue',
    component: Layout,
    meta: { title: '场馆设置', icon: 'dashboard' },
    children: [
      {
        path: 'branchStore',
        name: '分店管理',
        component: () => import('@/views/venue/branchStore'),
        meta: { title: '分店管理' }
      },
      {
        path: 'storeUser',
        name: '人员设置',
        component: () => import('@/views/venue/storeUser'),
        meta: { title: '人员设置' }
      },
      {
        path: 'roleManagement',
        name: '角色设置',
        component: () => import('@/views/venue/roleManagement'),
        meta: { title: '角色设置' }
      },
    ]
  },
  {
    path: '/system',
    component: Layout,
    meta: { title: '系统设置', icon: 'dashboard' },
    children: [
      {
        path: 'dict',
        name: '字典设置',
        component: () => import('@/views/system/dict'),
        meta: { title: '字典设置' }
      },
      {
        path: 'resource',
        name: '资源管理',
        component: () => import('@/views/system/resource'),
        meta: { title: '资源管理' }
      },
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
