<template>
  <button class="pl-btn">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'pl-button',
})
</script>

<style lang="scss" scoped>
@import '~/styles/varibles.scss';
.pl-btn {
  background-color: $btn-color;
  border-radius: 0.5rem;
  border: 0;
  width: 5rem;
  height: 2rem;
  color: $text-color;
  &:hover {
    background-color: red;
  }
}
</style>
