<script setup>
defineProps([
  "heroUser1",
  "heroUser2",
  "heroUser3",
  "heroUser4",
  "handleClick",
  "showTableHeroUser",
  "loading",
]);
</script>

<template>
  <div :class="showTableHeroUser ? 'block' : 'hidden'" class="tabel-hero">
    <h5 class="text-center mb-2">Select Your Character</h5>

    <figure
      v-if="loading"
      class="loading-hero bg-gray-500 max-w-full rounded-2xl"
    >
      <h2 class="py-65pct px-0 text-center text-4xl text-gray-200">
        Loading...
      </h2>
    </figure>
    <div
      v-else
      class="flex flex-wrap justify-center my-6 items-center sm:px-2 md:px-4"
    >
      <div class="basis-6/12 text-center px-1 sm:px-2">
        <img
          class="w-full"
          :src="heroUser1?.image"
          :alt="heroUser1?.name"
          @click="heroUser1 ? () => handleClick(heroUser1) : () => {}"
        />
        <p class="text-xs mb-4">{{ heroUser1?.name }}</p>
      </div>
      <div class="basis-6/12 text-center px-1 sm:px-2">
        <img
          class="w-full"
          :src="heroUser2?.image"
          :alt="heroUser2?.name"
          @click="heroUser2 ? () => handleClick(heroUser2) : () => {}"
        />
        <p class="text-xs mb-4">{{ heroUser2?.name }}</p>
      </div>
      <div class="basis-6/12 text-center px-1 sm:px-2">
        <img
          class="w-full"
          :src="heroUser3?.image"
          :alt="heroUser3?.name"
          @click="heroUser3 ? () => handleClick(heroUser3) : () => {}"
        />
        <p class="text-xs mb-4">{{ heroUser3?.name }}</p>
      </div>
      <div class="basis-6/12 text-center px-1 sm:px-2">
        <img
          class="w-full"
          :src="heroUser4?.image"
          :alt="heroUser4?.name"
          @click="heroUser4 ? () => handleClick(heroUser4) : () => {}"
        />
        <p class="text-xs mb-4">{{ heroUser4?.name }}</p>
      </div>
    </div>
  </div>
</template>
