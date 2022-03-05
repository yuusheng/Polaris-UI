<template>
  <div class="container">
    <h1>组件示例</h1>
    <div>{{ count }}</div>
    <pl-button @click="handleClick">按钮</pl-button>
    <pl-card imgSrc="u1.jpg">
      summary slot test
      <template #footer>
        <div>footer slot test</div>
      </template>
    </pl-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    handleClick() {
      this.count++
    },
  },
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.container {
  // display: flex;
}
</style>
