<template>
  <div>
    <input type="checkbox" class="" />
    <label class="pl-checkbox-label mx-auto"><slot></slot></label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'

export default defineComponent({
  name: 'pl-checkbox',
  data() {
    return {}
  },
})
</script>

<style scoped>
.pl-checkbox {
}
.pl-checkbox-label {
}
</style>
