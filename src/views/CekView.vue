<script setup>
import { watch, ref } from "vue";
import Modal from "../components/Modal.vue";
import { useState } from "../utils/useState";

// const [isOpen, setIsOpen] = useState(false);
let isOpen = ref(false);
const handleModalOpen = () => {
  // setIsOpen(true);
  isOpen.value = true;
};
const handleModalClose = () => {
  // setIsOpen(false);
  isOpen.value = false;
};
console.log(isOpen.value);
// watch(isOpen, (newOpen) => console.log(newOpen));
</script>

<template>
  <button class="p-4 bg-red-400 text-2xl" @click="handleModalOpen">
    open modal
  </button>
  <Modal :isOpen="isOpen" @onClose="handleModalClose">hehehe</Modal>
</template>
