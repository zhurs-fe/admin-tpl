<script setup lang="ts">
import { useCollapsed } from '../useCollapsed'
import Logo from './components/Logo.vue'
import UserDropdown from './components/UserDropdown.vue'
const { getCollapsed } = useCollapsed()

const getHeaderClass = computed(() => {
  return {
    'layout-header': true,
    'layout-header--fixed': true,
    'layout-header--light': true,
    'layout-header--collapsed': getCollapsed.value
  }
})
</script>

<template>
  <a-layout-header :class="getHeaderClass">
    <div class="h-full flex items-center">
      <logo :show-title="!getCollapsed" />
    </div>

    <div class="flex h-full">
      <user-dropdown class="layout-header-action" />
    </div>
  </a-layout-header>
</template>

<style lang="less">
.layout-header {
  @apply flex justify-between items-center pr-0 transition-all duration-200;

  // padding-left: var(--sidebar-width);
  height: var(--header-height);
  line-height: var(--header-height);

  &--light {
    @apply bg-white;
  }

  &--fixed {
    @apply z-10 fixed top-0 right-0 left-0;
  }

  &--collapsed {
    padding-left: var(--sidebar-collapsed-width);
  }

  &-action {
    @apply flex justify-center items-center px-10px h-full text-base cursor-pointer transition-color hover:bg-gray-100;
  }
}
</style>
