<script setup>
import { useState } from "../utils/useState";
import man from "../assets/man.png";
import { watch } from "vue";

// props
const {heroLawan, showHeroLawan, powerLevelLawan} = defineProps(["heroLawan", "showHeroLawan", "powerLevelLawan"]);

// state
const [showStats, setShowStats] = useState(false);

// handlers
const handleShowStats = () => {
  setShowStats(!showStats.value);
};

watch(showStats, () => console.log(showStats.value))
</script>

<template>
  <div className="hero-lawan text-center">
    <h5 className="text-center mb-2">Opponent Character</h5>
    <figure v-if="heroLawan && showHeroLawan">
      <img className="w-full" :src="heroLawan.image" :alt="heroLawan.name" />
      <h4>{{ heroLawan.name }}</h4>
      <button
        class="py-2 px-4 bg-gray-500 text-white leading-6 text-center rounded hover:bg-gray-600 mt-4"
        @click="handleShowStats"
      >
        show stats
      </button>
      <div
        v-show="showStats"
        className="border border-gray-500 rounded-lg py-3 px-0 text-left mt-2"
      >
        <ul className="list-disc pl-8">
          <li>Total Power Level: {{ powerLevelLawan }}</li>
          <li>Intelligence: {{ heroLawan.intelligence }}</li>
          <li>Strength: {{ heroLawan.strength }}</li>
          <li>Speed: {{ heroLawan.speed }}</li>
          <li>Durability: {{ heroLawan.durability }}</li>
          <li>Power: {{ heroLawan.power }}</li>
          <li>Combat: {{ heroLawan.combat }}</li>
        </ul>
      </div>
    </figure>
    <div v-else className="bg-gray-500 max-w-full rounded-2xl">
      <img className="mx-auto max-w-80pct py-35pct px-0" :src="man" alt="man" />
    </div>
  </div>
</template>
