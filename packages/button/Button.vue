<template>
  <button :class="switchClass">
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
  computed: {
    switchClass() {
      let tempClass: string[] = []
      switch (this.type) {
        case 'button':
          tempClass.push('pl-btn-primary')
          break
        case 'text':
          tempClass.push('pl-btn-text')
          break
        default:
          tempClass.push('pl-btn-primary')
          break
      }
      return tempClass.join(' ')
    },
  },
})
</script>

<style scoped>
/* // @import '~/styles/varibles.scss';
// .pl-btn {
//   background-color: $btn-color;
//   border-radius: 0.5rem;
//   border: 0;
//   width: 5rem;
//   height: 2rem;
//   color: $text-color;
//   box-shadow: 0 6px 10px 0 rgba(95, 101, 105, 0.25);
//   &:hover {
//     background-color: #384d76;
//   }
// } */

.pl-btn-primary {
  @apply hover:bg-indigo-600 bg-indigo-500 w-20 h-10 rounded-md text-white;
}
.pl-btn-text {
  @apply text-blue-600;
}
</style>
