<script setup>
import { useState } from "../utils/useState";

defineProps(["showHeroUser", "selectedHero", "powerLevelUser"]);

// state
const [showStats, setShowStats] = useState(false);

// handlers
const handleShowStats = () => {
  setShowStats(!showStats);
};
</script>

<template>
  <div class="hero-user text-center" :class="showHeroUser ? 'block' : 'hidden'">
    <h5 class="text-center mb-2">Your Character</h5>
    <figure v-if="selectedHero">
      <img :src="selectedHero.image" :alt="selectedHero.name" />
      <h4>{{ selectedHero.name }}</h4>
      <button
        class="py-2 px-4 bg-gray-500 text-white leading-6 text-center rounded hover:bg-gray-600 mt-4"
        @click="handleShowStats"
      >
        show stats
      </button>
      <div
        v-if="showStats.value"
        class="border border-gray-500 rounded-lg py-3 px-0 text-left mt-2"
      >
        <ul class="list-disc pl-8">
          <li>Total Power Level: {{ powerLevelUser }}</li>
          <li>Intelligence: {{ selectedHero.intelligence }}</li>
          <li>Strength: {{ selectedHero.strength }}</li>
          <li>Speed: {{ selectedHero.speed }}</li>
          <li>Durability: {{ selectedHero.durability }}</li>
          <li>Power: {{ selectedHero.power }}</li>
          <li>Combat: {{ selectedHero.combat }}</li>
        </ul>
      </div>
    </figure>
    <p v-else>No Hero Selected!</p>
  </div>
</template>
