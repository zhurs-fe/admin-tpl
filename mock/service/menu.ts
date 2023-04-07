import type { MockMethod } from 'vite-plugin-mock'
import type { requestParams } from '../_util'
import { getRequestToken, resultError, resultSuccess } from '../_util'
import { createFakeUserList } from './user'

export default [
  {
    url: '/api/menu/list',
    method: 'get',
    response: (request: requestParams) => {
      const token = getRequestToken(request)
      if (!token)
        return resultError('Invalid token!')

      const checkUser = createFakeUserList().find(item => item.token === token)
      if (!checkUser)
        return resultError('Invalid user token!')

      const menu: Object[] = [
        {
          id: '1',
          auth: '01',
          name: '首页',
          type: 2
        },
        {
          id: '2',
          auth: '0101',
          name: '关于',
          type: 2
        },
        {
          id: '2',
          auth: '02',
          name: '关于',
          type: 2
        },
        {
          id: '2',
          auth: '0201',
          name: '关于',
          type: 2
        },
        {
          id: '2',
          auth: '03',
          name: '关于',
          type: 2
        }
      ]

      return resultSuccess(menu)
    }
  }
] as MockMethod[]
