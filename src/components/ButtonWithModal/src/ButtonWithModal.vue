<script setup lang="ts">
import { ref } from 'vue'

const { modalTitle, modalType, okText, cancelText, ...buttonOptions } = withDefaults(defineProps<{
  type?: string
  modalType?: 'modal' | 'pop'
  modalTitle?: string
  okText?: string
  cancelText?: string
}>(), {
  type: 'primary',
  modalType: 'pop',
  modalTitle: '确认',
  okText: '确认',
  cancelText: '取消'
})
const emit = defineEmits(['ok', 'cancel'])

const visible = ref<boolean>(false)

const showModal = () => {
  visible.value = true
}

const handleOk = (e: MouseEvent) => {
  emit('ok')
  if (modalType === 'modal')
    visible.value = false
}
const handleCancel = (e: MouseEvent) => {
  emit('cancel')
}
</script>

<template>
  <template v-if="modalType === 'modal'">
    <a-button v-bind="buttonOptions" @click="showModal">
      <slot />
    </a-button>
    <a-modal v-model:visible="visible" :title="modalTitle" :ok-text="okText" :cancel-text="cancelText" :closable="false" @ok="handleOk" @cancel="handleCancel" />
  </template>
  <template v-else>
    <a-popconfirm
      :title="modalTitle"
      :ok-text="okText"
      :cancel-text="cancelText"
      @confirm="handleOk"
      @cancel="handleCancel"
    >
      <a-button v-bind="buttonOptions">
        <slot />
      </a-button>
    </a-popconfirm>
  </template>
</template>
