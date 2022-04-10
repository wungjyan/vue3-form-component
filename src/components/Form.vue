<template>
    <form>
        <slot></slot>
    </form>
</template>

<script>
export default {
    name: "WForm"
}
</script>


<script setup>
import { provide } from 'vue'

const props = defineProps({
    model: Object,
    rules: Object
})
provide('model', props.model)
provide('rules', props.rules)

</script>