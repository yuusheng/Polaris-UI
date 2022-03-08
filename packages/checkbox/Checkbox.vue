<template>
  <div>
    <input type="checkbox" :checked="checked" :indeterminate="disabled" @click="handleClick" class="" />
    <label class="pl-checkbox-label mx-auto"><slot></slot></label>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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

const handleClick = () => {
  checked.value = !checked.value
  // checked.value = false
  emits('update:modelValue', checked.value)
}
</script>

<style scoped></style>
