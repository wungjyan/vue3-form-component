<template>
    <input type="text" :value="modelValue" @input="handleInput" />
</template>

<script>
export default {
    name: 'WInput'
}
</script>

<script setup>
import { getCurrentInstance } from 'vue'

defineProps({
    modelValue: String
})

const emits = defineEmits(['update:modelValue'])

const instance = getCurrentInstance()
const handleInput = (e) => {
    emits('update:modelValue', e.target.value)
    instance?.parent.exposed?.handleValidate()

}
</script>