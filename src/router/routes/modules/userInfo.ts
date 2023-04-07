import type { RouteRecordRaw } from 'vue-router'
import { SettingOutlined } from '@ant-design/icons-vue'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/user',
  name: 'user',
  component: DefaultLayout,
  meta: {
    auth: '02',
    icon: SettingOutlined,
    title: '个人信息',
    sort: 3
  },
  children: [
    {
      path: 'my',
      name: 'my',
      component: () => import('~/views/user/index.vue'),
      meta: {
        auth: '0201',
        icon: SettingOutlined,
        title: '我的信息',
        sort: 1
      }
    }
  ]
}

export default route
