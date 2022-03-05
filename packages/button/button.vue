<template>
  <button class="pl-btn">
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'pl-button',
  props: {
    type: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'primary',
    },
  },
  data() {
    return {
      primary: '',
    }
  },
  computed: {},
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
  box-shadow: 0 6px 10px 0 rgba(95, 101, 105, 0.25);
  &:hover {
    background-color: #384d76;
  }
}
</style>
