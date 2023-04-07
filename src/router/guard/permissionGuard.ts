import type { Router } from 'vue-router'
import localCache from '~/utils/cache'
import { EnumCache, EnumPath } from '~/enums'
import { useUserStore } from '~/stores'

const whitelist = ['/login', '/not-found']

export function createPermissionGuard(router: Router) {
  router.beforeEach((to) => {
    const user = useUserStore()
    const token = localCache.getCache(EnumCache.TOKEN_KEY)
    const auth = user.getAuth(to.meta.auth as string)
    if (to.path !== EnumPath.LOGIN) {
      if (!token)
        return EnumPath.LOGIN
    }
    else {
      if (token)
        return EnumPath.HOME
    }

    if (!whitelist.includes(to.path) && !auth)
      return EnumPath.NOT_FOUND
  })
}
