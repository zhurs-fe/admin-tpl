<script setup lang="ts">
import LayoutFeatures from './features/index.vue'
import LayoutHeader from './header/index.vue'
import LayoutSidebar from './sidebar/index.vue'
import LayoutContent from './content/index.vue'
import Breadcrumb from './header/components/Breadcrumb.vue'

import { useCollapsed } from './useCollapsed'

const { getCollapsed } = useCollapsed()

const getLayoutClass = computed(() => {
  return {
    'default-layout-main': true,
    'default-layout-main--collapsed': getCollapsed.value
  }
})
</script>

<template>
  <a-layout>
    <layout-features />
    <layout-header />
    <a-layout>
      <layout-sidebar />
      <a-layout :class="getLayoutClass">
        <breadcrumb />
        <layout-content />
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<style scoped lang="less">
.default-layout-main {
  @apply transition-all duration-200;

  padding-top: var(--header-height);
  padding-left: var(--sidebar-width);

  &--collapsed {
    padding-left: var(--sidebar-collapsed-width);
  }
}
</style>
