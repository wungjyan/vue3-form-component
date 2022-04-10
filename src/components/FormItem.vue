<template>
    <div>
        <label for>{{ label }}</label>
        <div>
            <slot></slot>
            <p class="error-msg" v-if="errStatus">{{ errMessage }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "WFormItem"
}
</script>

<script setup>
import { ref, inject } from 'vue'
import Schema from 'async-validator'

// 接收 props
const props = defineProps({
    label: String,
    prop: String
})

// 定义错误状态和错误信息
const errStatus = ref(false)
const errMessage = ref('')

// 接收 From 组件提供的 model 和 rules
const model = inject('model', {})
const rules = inject('rules', {})

// 定义表单校验方法
const handleValidate = () => {
    // 当前校验的字段值
    const value = model[props.prop]

    // 当前字段的校验规则
    const rule = rules[props.prop]

    // 校验描述对象
    const descriptor = { [props.prop]: rule }

    // 传入描述对象，创建验证实例
    const validator = new Schema(descriptor)

    // 校验
    validator.validate({ [props.prop]: value }, errors => {
        if (errors) {
            errMessage.value = errors[0].message
            errStatus.value = true
        } else {
            errMessage.value = ''
            errStatus.value = ''
        }
    })
}

defineExpose({
    handleValidate
})

</script>

<style scoped>
.error-msg {
    font-size: 12px;
    color: red;
    margin: 5px 0;
}
</style>