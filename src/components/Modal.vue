<script setup>
import { watch } from "vue";

const { isOpen, hasilTanding } = defineProps(["isOpen", "hasilTanding"]);

const emit = defineEmits(["onClose"]);

// console.log(isOpen);
watch(isOpen, (newOpen) => console.log(newOpen));
</script>

<template>
  <div
    v-if="isOpen.value"
    class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
  >
    <!-- modal -->
    <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3">
      <!-- modal body -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <div class="p-3">
          <h2 className="mb-3">{{ hasilTanding }}</h2>
          <button
            className="py-1 px-2 bg-gray-500 text-white leading-6 text-center rounded hover:bg-gray-600"
            @click="emit('onClose')"
          >
            close
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
