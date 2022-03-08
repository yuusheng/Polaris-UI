<template>
  <!-- <button @click="childClick">child test</button> -->
  <!-- <div>{{ fatherContent }}</div> -->
  <input type="text" placeholder="输入您的内容" :childContent="fatherContent" @input="childInputMethod" />

  父组件内容： {{ fatherContent }}
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Test',
})
</script>
<script setup lang="ts">
const emits = defineEmits<{
  (e: 'fatherThing'): void
  (e: 'update:modelValue', content: string): void
}>()

const props = defineProps({
  fatherContent: {
    type: String,
    default: '',
  },
  modelValue: {
    type: String,
  },
})
const childClick = () => {
  emits('fatherThing')
}

const childInputMethod = (e: Event) => {
  const childInputContent = (e.target as HTMLInputElement).value
  emits('update:modelValue', childInputContent)
}
</script>

<style scoped></style>
