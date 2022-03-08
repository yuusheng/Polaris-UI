<template>
  <div class="pl-card" :style="width ? { width: width + 'px' } : {}">
    <div class="pl-card-img" :style="imgHeight ? { height: imgHeight + 'px' } : {}">
      <img :src="imgSrc" alt="img" :style="imgCustomSet" />
    </div>
    <div v-if="summary" class="pl-card-summary">{{ summary }}</div>
    <div v-else class="pl-card-summary">
      <slot></slot>
    </div>
    <slot name="footer"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
export default defineComponent({
  name: 'pl-card',
  props: {
    width: {
      type: Number,
      default: 0,
    },
    imgSrc: {
      type: String,
      default: '',
    },
    imgHeight: {
      type: Number,
      default: 0,
    },
    summary: {
      type: String,
      default: '',
    },
    imgCustomSet: {
      type: String,
      default: '',
    },
  },
  mounted() {},
})
</script>

<style scoped>
.pl-card {
  @apply w-72 rounded-lg bg-white overflow-hidden shadow-md pb-1;
}
.pl-card-img {
  @apply h-40 overflow-hidden;
}
img {
  @apply w-full h-auto relative;
}
</style>
