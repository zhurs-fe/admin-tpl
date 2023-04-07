import type { RouteRecordRaw } from 'vue-router'
import { SettingOutlined } from '@ant-design/icons-vue'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/',
  name: 'index',
  component: DefaultLayout,
  redirect: '/index',
  meta: {
    auth: '01',
    icon: SettingOutlined,
    title: '首页',
    sort: 1
  },
  children: [
    {
      path: 'index',
      name: 'index',
      component: () => import('~/views/index/index.vue'),
      meta: {
        auth: '0101',
        icon: SettingOutlined,
        title: '首页',
        sort: 1
      }
    }
  ]
}

export default route
