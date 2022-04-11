<script setup>
const modal = document.querySelector(".modal");

const showModal = document.querySelector(".show-modal");
const closeModal = document.querySelectorAll(".close-modal");

showModal.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

closeModal.forEach((close) => {
  close.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
});

defineProps(["isOpen", "onRequestClose", "overlayClassName", "className"]);
</script>

<template>
  <div
    class="modal h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-50"
  >
    <!-- modal -->
    <div class="bg-white rounded shadow-lg w-10/12 md:w-1/3">
      <!-- modal header -->
      <div class="border-b px-4 py-2 flex justify-between items-center">
        <h3 class="font-semibold text-lg">Modal Title</h3>
        <button class="text-black close-modal">&cross;</button>
      </div>
      <!-- modal body -->
      <div class="p-3">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
