<template>
  <w-form :model="form" :rules="rules" ref="formRef">
    <w-form-item label="用户名" prop="username">
      <w-input v-model="form.username"></w-input>
    </w-form-item>

    <w-form-item label="密码" prop="password">
      <w-input v-model="form.password"></w-input>
    </w-form-item>

    <w-form-item label="确认密码" prop="checkPass">
      <w-input v-model="form.checkPass"></w-input>
    </w-form-item>
  </w-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import WInput from '@/components/Input.vue'
import WFormItem from '@/components/FormItem.vue'
import WForm from '@/components/Form.vue'



// 定义表单数据对象
const form = reactive({
  username: '',
  password: '',
  checkPass: ''
})

const formRef = ref(null)
// 自定义密码校验方法
const validatePass = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入密码'))
  } else {
    if (form.checkPass !== '') {
      formRef.value.validateField('checkPass')
    }
    callback()
  }
}
// 自定义确认密码校验方法
const validatePass2 = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== form.password) {
    callback(new Error('两次输入密码不一致!'))
  } else {
    callback()
  }
}

// 定义表单验证规则
const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
  ],
  password: [
    { validator: validatePass, trigger: 'blur' }
  ],
  checkPass: [
    { validator: validatePass2, trigger: 'blur' }
  ]
})


</script>

