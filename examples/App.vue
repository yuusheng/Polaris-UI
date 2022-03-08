<template>
  <pl-nav navLogo="rainbow1.jpg"></pl-nav>
  <pl-dropdown></pl-dropdown>
  <h1>组件示例</h1>
  <div>{{ count }}</div>
  <pl-button @click="handleClick">按钮</pl-button>
  <div>
    <pl-card imgSrc="rainbow1.jpg" imgCustomSet="top: -120px;">
      summary slot test
      <template #footer>
        <div>footer slot test</div>
      </template>
    </pl-card>
  </div>

  <pl-checkbox v-model="checked">插槽</pl-checkbox>
  <pl-checkbox v-model="checked">插槽</pl-checkbox>
  <div>{{ checked }}</div>
  <pl-input v-model="input"></pl-input>
  <div>input内容: {{ input }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      count: 0,
      checked: true,
      input: '',
    }
  },
  methods: {
    handleClick() {
      this.checked = !this.checked
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
