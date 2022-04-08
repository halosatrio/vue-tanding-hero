<script setup>
import batman from "../assets/batman.png";
import ironman from "../assets/ironman.png";
import swords from "../assets/swords.png";

defineProps(["className", "handleStart"]);
</script>

<template>
  <div class="my-6 font-sans" :class="className">
    <div class="flex flex-row px-6 my-8 items-center justify-around">
      <div class="basis-5/12 lg:basis-4/12 px-4">
        <img class="w-full" :src="ironman" alt="batman" />
      </div>
      <div class="basis-2/12 px-4">
        <img class="w-full" :src="swords" alt="batman" />
      </div>
      <div class="basis-5/12 lg:basis-4/12 px-4">
        <img class="w-full" :src="batman" alt="batman" />
      </div>
    </div>
    <div class="text-center my-4">
      <button
        class="py-2 px-12 bg-red-600 text-white border border-red-500 leading-8 inline-block text-xl text-center align-middle rounded-md hover:bg-red-700 duration-100"
        @click="handleStart"
      >
        S T A R T
      </button>
    </div>
    <h3 class="text-center text-3xl mb-2">
      Superhero Match using
      <a
        class="text-blue-500 hover:text-blue-700 hover:underline"
        href="https://www.superheroapi.com/"
      >
        Superhero-API
      </a>
    </h3>
    <h6 class="text-center">
      Both your character and the opponent character are generated randomly
    </h6>
  </div>
</template>
