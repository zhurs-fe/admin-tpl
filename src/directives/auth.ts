/**
 *  Global authority directive
 *  用于细粒度权限控制, 通过v-auth指令控制元素的显示隐藏,根据locastorage中的AUTH__KEY__进行判断
 *  @Example v-auth = "authList.auth"
 */
import type { App, Directive, DirectiveBinding } from 'vue'
import { EnumCache } from '~/enums/cache'

function auth(el: HTMLImageElement, binding: any) {
  const authList = JSON.parse(localStorage.getItem(EnumCache.AUTH_KEY))
  if (!authList) {
    el.parentNode.removeChild(el)
    return
  }
  const auth = binding.value
  // 与authList数组项中的auth进行比较, 如果没有匹配的, 则删除该元素
  // eslint-disable-next-line eqeqeq
  if (!authList.some((item: any) => item.auth == auth))
    el.parentNode.removeChild(el)
}

const mounted = (el: HTMLImageElement, binding: DirectiveBinding<any>) => {
  auth(el, binding)
}

const AuthDirective: Directive = {
  mounted
}

export function setupAuthDirectives(app: App) {
  app.directive('auth', AuthDirective)
}
