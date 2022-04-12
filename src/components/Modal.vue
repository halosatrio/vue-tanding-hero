<script setup>
// const modal = document.querySelector(".modal");

import { watch } from "vue";

const { isOpen } = defineProps(["isOpen"]);

const emit = defineEmits(["onClose"]);

// console.log(isOpen);
watch(isOpen, (newOpen) => console.log(newOpen));
</script>

<template>
  <div
    v-if="isOpen"
    class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
  >
    <!-- modal -->
    <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3">
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Modal Title</h3>
        <button class="text-black close-modal" @click="emit('onClose')">
          &cross;
        </button>
      </div>
      <!-- modal body -->
      <div class="p-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
