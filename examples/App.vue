<template>
  <div>
    <pl-nav navLogo="ranbow1.jpg"></pl-nav>
    <pl-dropdown></pl-dropdown>
    <h1>组件示例</h1>
    <div>{{ count }}</div>
    <pl-button type="" @click="handleClick">按钮</pl-button>
    <div>
      <pl-card imgSrc="ranbow1.jpg" imgCustomSet="top: -120px;">
        summary slot test
        <template #footer>
          <div>footer slot test</div>
        </template>
      </pl-card>
    </div>

    <pl-checkbox>插槽</pl-checkbox>
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
}
</style>
