<script setup lang="ts">
import { message } from 'ant-design-vue'
import { LockOutlined, PoweroffOutlined } from '@ant-design/icons-vue'
import { useUserStore } from '~/stores'

const user = useUserStore()

const handleLogout = () => {
  user.logout()
  message.success('用户退出成功')
}
</script>

<template>
  <div>
    <span>欢迎</span>
    <span class="ml-10px text-base text-black">{{ user.getUserInfo.username }}</span>
  </div>
  <span class="ml-10px flex items-center" @click="handleLogout">
    <span>退出系统</span>
  </span>
</template>
