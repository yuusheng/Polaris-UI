<template>
  <input type="text" :placeholder="placeholder" :value="modelValue" @input="updateValue" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'pl-input',
})
</script>
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '请输入...',
  },
})

const emits = defineEmits<{
  (a: 'update:modelValue', data: string): void
}>()

const updateValue = (e: Event) => {
  const targetValue = (e.target as HTMLInputElement).value
  emits('update:modelValue', targetValue)
}
</script>

<style scoped></style>
