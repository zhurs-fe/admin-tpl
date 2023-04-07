<script setup lang="ts">
import type { FormInstance } from 'ant-design-vue'

import { LoginStateEnum, useLoginState } from '../useLogin'
import { useUserStore } from '~/stores/modules/user'

interface FormState {
  username: string
  password: string
}

const { setLoginState, getLoginState } = useLoginState()

const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN)

const formRules = {
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' }
  ]
}

const formRef = ref<FormInstance>()
const loading = ref(false)
const remember = ref(true)

const formData = reactive<FormState>({
  username: 'admin',
  password: 'admin'
})

const user = useUserStore()
const handleLogin = async () => {
  const form = unref(formRef)
  if (!form)
    return
  const data = await form.validate() as FormState
  user.loginAction(data)
}
</script>

<template>
  <a-form
    v-show="getShow"
    ref="formRef"
    :model="formData"
    :rules="formRules"
    @keypress.enter="handleLogin"
  >
    <a-form-item
      class="enter-x"
      name="username"
    >
      <span>手机号</span>
      <a-input
        v-model:value="formData.username"
        placeholder="账号"
        size="large"
      />
    </a-form-item>

    <a-form-item
      class="enter-x"
      name="password"
    >
      <span>密码</span>
      <a-input-password
        v-model:value="formData.password"
        placeholder="密码"
        size="large"
      />
    </a-form-item>

    <a-row class="enter-x">
      <a-col :span="12">
        <a-form-item class="enter-x">
          <a-checkbox v-model:checked="remember" size="small">
            自动登录
          </a-checkbox>
        </a-form-item>
      </a-col>
      <a-col :span="12">
        <a-form-item :style="{ 'text-align': 'right' }" class="enter-x">
          <a-button type="link" size="small" @click="setLoginState(LoginStateEnum.RESET_PASSWORD)">
            忘记密码?
          </a-button>
        </a-form-item>
      </a-col>
    </a-row>

    <a-form-item class="enter-x">
      <a-button size="large" type="primary" block :loading="loading" @click="handleLogin">
        登录
      </a-button>
    </a-form-item>
  </a-form>
</template>
