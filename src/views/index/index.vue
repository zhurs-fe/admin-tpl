<script setup lang="ts">
import { ref } from 'vue'
import { ButtonWithModal } from '~/components/ButtonWithModal'

const handleOk = (e: MouseEvent) => {
  console.log('确定')
}
</script>

<template>
  <div v-auth="'010101'">
    <ButtonWithModal modal-type="pop" modal-title="确认" type="primary" @ok="handleOk">
      删除
    </ButtonWithModal>
  </div>
</template>

<style lang="scss"></style>
