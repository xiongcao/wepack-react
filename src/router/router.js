/**
 *  hideInMenu: true 在侧边栏中不显示
 *  name: BasicLayout 后台管理工作台
 */

import Home from '@pages/Home/Home.js'
import User from '@pages/User/User.js'
import Test1 from '@pages/Test/Test1.js'
import Test2 from '@pages/Test/Test2.js'
import Test3 from '@pages/Test/Test3.js'
import Login from '@pages/Login/Login.js'

export default [
  {
    layout: 'LoginLayout',
    path: '/login',
    name: 'login',
    title: '首页',
    component: Login,
  },
  {
    path: '/admin',
    layout: 'BasicLayout',
    children: [
      {
        path: '/home',
        icon: 'home',
        title: '首页',
        // hideInMenu: true,
        component: Home,
        children: [
          {
            path: '/test2',
            title: '测试2',
            component: Test2,
          },
          {
            path: '/test1',
            title: '测试1',
            component: Test1,
            children: [
              {
                path: '/test3',
                title: '测试3',
                component: Test3,
              }
            ]
          }
        ]
      },
      {
        path: '/user',
        icon: 'user',
        title: '用户管理',
        component: User,
      }
    ]
  },
  {
    path: '/400',
    name: 'error_400',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/pages/Exception/400.js')
  },
  {
    path: '/500',
    name: 'error_500',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/pages/Exception/500.js')
  },
  {
    path: '*',
    name: 'error_404',
    meta: {
      hideInMenu: true
    },
    component: () => import('@/pages/Exception/404.js')
  }
]