<script setup lang="ts">
import LoginForm from './components/LoginForm.vue'
import ForgetPasswordForm from './components/ForgetPasswordForm.vue'
</script>

<template>
  <div class="login">
    <div class="w-400px">
      <login-form />
      <!-- <forget-password-form /> -->
    </div>
  </div>
</template>

<style lang="less">
.login {
  @apply  h-full flex justify-center items-center;

  .ant-divider-inner-text {
    font-size: 12px;
    color: #00000073;
  }

  .sign-in-way {
    .anticon {
      font-size: 22px;
      color: #888;
      cursor: pointer;
      transform: color 0.3s ease;

      &:hover {
        color: #1890ff;
        transform: color 0.3s ease;
      }
    }
  }
}
</style>
