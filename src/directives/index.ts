/**
 *  Coonfigure and register global directives
 */

import type { App } from 'vue'
import { setupLazyImgDirectives } from './lazyImg'
import { setupAuthDirectives } from './auth'

export function setupGlobDirectives(app: App) {
  setupLazyImgDirectives(app)
  setupAuthDirectives(app)
}
