<script setup>
import { onMounted, ref, watch } from "vue";
import { useState } from "../utils/useState";
import { randomNumber } from "../utils/generateRandom";
import { fetchHero } from "../utils/fetchHero";

// import components
import TitleText from "../components/TitleText.vue";
import Footer from "../components/Footer.vue";
import Opening from "../components/Opening.vue";
import Versus from "../components/Versus.vue";

const [heroLawan, setHeroLawan] = useState(null);
const [heroUser1, setHeloUser1] = useState(null);
const [heroUser2, setHeroUser2] = useState(null);
const [heroUser3, setHeroUser3] = useState(null);
const [heroUser4, setHeroUser4] = useState(null);
const [loading, setLoading] = useState(false);
const [opening, setOpening] = useState(true);

// onMounted
onMounted(() => {
  const idLawan = randomNumber(1, 731);
  const idUser = [
    randomNumber(1, 731),
    randomNumber(1, 731),
    randomNumber(1, 731),
    randomNumber(1, 731),
  ];

  async function fetchAll() {
    const [lawan, user1, user2, user3, user4] = await Promise.all([
      fetchHero(idLawan),
      fetchHero(idUser[0]),
      fetchHero(idUser[1]),
      fetchHero(idUser[2]),
      fetchHero(idUser[3]),
    ]);
    setHeroLawan(lawan);
    setHeloUser1(user1);
    setHeroUser2(user2);
    setHeroUser3(user3);
    setHeroUser4(user4);
  }

  setLoading(true);
  fetchAll();
  setLoading(false);
});

// Handlers
const handleStart = () => {
  setOpening(!opening);
};

const handleResetHero = () => {
  setLoading(true);
  setHeroLawan(null);
  setHeloUser1(null);
  setHeroUser2(null);
  setHeroUser3(null);
  setHeroUser4(null);
};

const handleHeroRematch = (
  heroLawan,
  heroUser1,
  heroUser2,
  heroUser3,
  heroUser4
) => {
  setHeroLawan(heroLawan);
  setHeloUser1(heroUser1);
  setHeroUser2(heroUser2);
  setHeroUser3(heroUser3);
  setHeroUser4(heroUser4);
  setLoading(false);
};

// display/hidden logic using tailwind css
const showOpening = ref("block");
const showVersus = ref("hidden");

const heroUser = [heroUser1, heroUser2, heroUser3, heroUser4];

watch(opening, () => (showOpening.value = opening.value ? "block" : "hidden"));
watch(opening, () => (showVersus.value = opening.value ? "hidden" : "block"));
// watch(showOpening, () => console.log("showOpening", showOpening));
// console.log("showOpening", showOpening);
</script>

<template>
  <div className="container mx-auto tanding max-w-6xl">
    <TitleText />
    <Opening :className="showOpening" @click="handleStart" />
    <Versus
      :className="showVersus"
      :heroLawan="heroLawan"
      :heroUser="heroUser"
      :handleResetHero="handleResetHero"
      :handleHeroRematch="handleHeroRematch"
      :loading="loading"
    />
    <Footer :isTanding="true" />
  </div>
</template>

<style></style>
