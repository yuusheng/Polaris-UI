<template>
  <div class="flex justify-center">
    <div>
      <div class="dropdown relative">
        <a
          class="dropdown-toggle px-6 py-2.5 bg-indigo-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap"
          href="#"
          type="button"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          @click="handleOpen"
        >
          {{ title }}
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            class="w-2 ml-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            ></path>
          </svg>
        </a>
        <button v-if="open" @click="open = false" class="fixed top-0 right-0 left-0 border-0"></button>
        <ul
          class="dropdown-menu min-w-max absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded-lg shadow-lg mt-1 m-0 bg-clip-padding border-none"
          aria-labelledby="dropdownMenuButton2"
          v-if="open"
          @click="handleOpen"
          ref="dropMenu"
        >
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Action</a
            >
          </li>
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Another action</a
            >
          </li>
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
              href="#"
              >Something else here</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'

export default defineComponent({
  name: 'pl-dropdown',
})
</script>
<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'DROPDOWN BUTTON',
  },
})

let open: Ref<boolean> = ref(false)
const handleOpen = (e: MouseEvent) => {
  open.value = !open.value
}

// const dropMenu = ref(null)
window.addEventListener('click', (e) => {
  // console.log(e.x, e.y)
  // // const  = document.getElementById('#dropMenu')?.()
  // let dropdownMenu = dropMenu.value?.getClientRects()
  // console.log('dropdown', dropdownMenu)
  // open.value = false
})
</script>

<style scoped></style>
