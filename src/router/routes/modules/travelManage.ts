import type { RouteRecordRaw } from 'vue-router'
import { SettingOutlined } from '@ant-design/icons-vue'
import { DefaultLayout } from '~/layouts'

const route: RouteRecordRaw = {
  path: '/travel',
  name: 'travel',
  component: DefaultLayout,
  meta: {
    auth: '03',
    icon: SettingOutlined,
    title: '管理',
    sort: 3
  },
  children: [
    {
      path: 'approval',
      name: 'approval',
      component: () => import('~/views/travel/index.vue'),
      meta: {
        auth: '0301',
        icon: SettingOutlined,
        title: '出行审批',
        sort: 1
      }
    }
  ]
}

export default route
