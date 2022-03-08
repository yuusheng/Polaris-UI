<template>
  <input type="checkbox" :checked="modelValue" :indeterminate="disabled" @click="handleClick" class="" />
  <label class="pl-checkbox-label mx-auto"><slot></slot></label>
</template>

<script lang="ts">
import { defineComponent, ref, watch, watchEffect } from 'vue'
export default defineComponent({
  name: 'pl-checkbox',
})
</script>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

const emits = defineEmits<{
  (e: 'update:modelValue', checked: boolean): void
}>()

const checked = ref<boolean>(props.modelValue)

// watch(checked, () => {
//   emits('update:modelValue', checked.value)
//   console.log('watch')
// })
const handleClick = (e: MouseEvent) => {
  if (props.disabled) {
    e.preventDefault()
    return
  }
  checked.value = !checked.value
  emits('update:modelValue', checked.value)
  console.log('handleClick')
}
</script>

<style scoped></style>
