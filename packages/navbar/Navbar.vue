<template>
  <nav class="navbar navbar-expand-md shadow-lg py-2 bg-white relative flex items-center w-screen justify-between">
    <div class="px-6 flex">
      <button v-if="navLogo" class="border-0 w-auto h-9" type="button">
        <img class="h-full w-auto" :src="navLogo" alt="" />
      </button>
      <div id="navbarSupportedContentX">
        <ul class="navbar-nav mr-auto flex flex-col md:flex-row">
          <li v-for="item in leftItems" :key="item.name" class="nav-item">
            <a
              class="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              :href="item.link"
            >
              {{ item.name }}
            </a>
          </li>

          <!-- <li class="nav-item">
            <a
              class="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              >Home</a
            >
          </li> -->
        </ul>
      </div>
      <div class="absolute right-2">
        <ul class="navbar-nav flex flex-col md:flex-row">
          <li v-for="item in rightItems" :key="item.name" class="nav-item">
            <a
              :href="item.link"
              class="nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700 transition duration-150 ease-in-out"
              >{{ item.name }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'pl-nav',
})
</script>
<script setup lang="ts">
interface leftItem {
  name: string
  link: string
}
interface rightItem {
  name: string
  link: string
  drop?: boolean
}
const props = defineProps({
  navLogo: {
    type: String,
    default: '',
  },
  leftItems: {
    type: Array as PropType<leftItem[]>,
    default: [
      {
        name: 'Home',
        link: '#!',
      },
      {
        name: 'Features',
        link: '#!',
      },
      {
        name: 'Pricing',
        link: '#!',
      },
      {
        name: 'About',
        link: '#!',
      },
    ],
  },
  rightItems: {
    type: Array as PropType<rightItem[]>,
    default: [
      {
        name: 'login',
        link: '#',
      },
    ],
  },
})
</script>

<style scoped>
/* .nav-item {
  @apply nav-link block p-2 text-gray-600 hover:text-gray-700 focus:text-gray-700;
} */
</style>
