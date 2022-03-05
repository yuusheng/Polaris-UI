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

<style scoped></style>
