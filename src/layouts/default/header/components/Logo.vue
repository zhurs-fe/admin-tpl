<script setup lang="ts">
import LogoUrl from '~/assets/logo.png'

defineProps({
  showTitle: { type: Boolean, default: true }
})
</script>

<template>
  <div class="logo">
    <img class="max-h-full" :src="LogoUrl" alt="Logo">
    <span v-show="showTitle" class="ml-8px text-base font-bold">OCS</span>
  </div>
</template>

<style scoped lang="less">
.logo {
  @apply flex items-center p-10px w-full;

  height: var(--header-height);
}
</style>
