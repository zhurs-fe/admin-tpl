<script setup lang="ts">
import { useCollapsed } from '../useCollapsed'
import Menu from './components/Menu.vue'

const { getCollapsed } = useCollapsed()

const getSidebarClass = computed(() => {
  return ['layout-sidebar', 'layout-sidebar--fixed']
})
</script>

<template>
  <a-layout-sider
    v-model:collapsed="getCollapsed"
    :class="getSidebarClass"
    :trigger="null"
    collapsible
    collapsed-width="56"
  >
    <Menu />
  </a-layout-sider>
</template>

<style scoped lang="less">
.layout-sidebar {
  margin-top: var(--header-height);
  background-color: #fff;
  &--fixed {
    @apply z-20 fixed top-0 bottom-0 left-0;
  }
}
</style>
