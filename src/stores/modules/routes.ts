import { defineStore } from 'pinia'
import type { RouteModuleList } from '~/router/routes/typings'
import localCache from '~/utils/cache'
import { EnumCache } from '~/enums'

interface RouteState {
  routes: RouteModuleList
}
function traverseRoutes(routes: RouteModuleList, condition: (route: RouteModuleList[number]) => boolean) {
  const newRoutes = []
  for (let i = 0; i < routes.length; i++) {
    const route = routes[i]
    const newRoute = { ...route }
    if (condition(route)) {
      // create a new object with the same properties
      newRoutes.push(newRoute)
      if (route.children)
        newRoute.children = traverseRoutes(route.children, condition)
    }
    else {
      // create a new object with the modified properties
      // e.g. delete: continue
      // e.g. modify: const newRoute = { ...route, someProperty: someValue }
      continue
    }
  }
  return newRoutes
}

export const useRouteStore = defineStore('routes', {
  state: (): RouteState => ({
    routes: []
  }),
  getters: {
    getRoutes(state) {
      const authList: any[] = localCache.getCache(EnumCache.AUTH_KEY)
      return traverseRoutes(state.routes, route => authList.some(auth => auth.auth.startsWith(route.meta.auth)))
    }
  },
  actions: {
    appendRoute(route: GetArrayItemType<RouteModuleList> | RouteModuleList): void {
      // if (Array.isArray(route))
      //   this.routes.push(...route)
      // else this.routes.push(route)
      this.routes = route
    }
  }
})
