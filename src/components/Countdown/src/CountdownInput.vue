<script setup lang="ts">
import type { PropType } from 'vue'

import CountdownButton from './CountdownButton.vue'

defineProps({
  size: {
    type: String,
    validator: (v: string) => ['default', 'large', 'small'].includes(v)
  },
  count: { type: Number, default: 60 },
  sendCodeApi: {
    type: Function as PropType<() => Promise<boolean>>,
    default: null
  }
})
</script>

<template>
  <a-input class="count-down" v-bind="$attrs" :size="size">
    <template #addonAfter>
      <CountdownButton :size="size" :count="count" :before-start-func="sendCodeApi" />
    </template>
  </a-input>
</template>

<style lang="less">
.count-down {
  .ant-input-group-addon {
    padding-right: 0;
    background-color: transparent;
    border: none;

    button {
      font-size: 14px;
    }
  }
}
</style>
