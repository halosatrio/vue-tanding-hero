<script setup>
// Import
import { useState } from "../utils/useState";

// assets & utils
import swords from "../assets/swords.png";
import { fetchHero } from "../utils/fetchHero";
import { randomNumber } from "../utils/generateRandom";
import {
  calculatePowerLevel,
  bandingUserLawan,
} from "../utils/calculatePowerLevel";

// components
import TableHeroUser from "./TableHeroUser.vue";
import HeroUser from "./HeroUser.vue";
import HeroLawan from "./HeroLawan.vue";

// props
const props = defineProps([
  "className",
  "heroLawan",
  "heroUser",
  "handleResetHero",
  "handleHeroRematch",
  "loading",
]);

// LOGICSSSS
// states
const [showTable, setShowTable] = useState(true);
const [selectedHero, setSelectedHero] = useState(null);
const [showHeroLawan, setShowHeroLawan] = useState(false);
const [modalIsOpen, setModalIsOpen] = useState(false);

const powerLevelUser = calculatePowerLevel(selectedHero.value);
const powerLevelLawan = calculatePowerLevel(props.heroLawan);

const [heroUser1, heroUser2, heroUser3, heroUser4] = props.heroUser;
const hasilTanding = bandingUserLawan(powerLevelUser, powerLevelLawan);

// handlers
const handleSelectHeroUser = (hero) => {
  setShowTable(!showTable.value);
  setShowHeroLawan(!showHeroLawan.value);
  setSelectedHero(hero);
  setTimeout(handleOpenModal, 1000);
};
const handleOpenModal = () => {
  setModalIsOpen(true);
};
const handleCloseModal = () => {
  setModalIsOpen(false);
};
const handleRematch = async () => {
  setShowTable(true);
  setShowHeroLawan(false);
  setSelectedHero(null);

  handleResetHero();
  const idLawan = randomNumber(1, 730);
  const idUser = [
    randomNumber(1, 730),
    randomNumber(1, 730),
    randomNumber(1, 730),
    randomNumber(1, 730),
  ];

  const [heroLawan, heroUser1, heroUser2, heroUser3, heroUser4] =
    await Promise.all([
      fetchHero(idLawan),
      fetchHero(idUser[0]),
      fetchHero(idUser[1]),
      fetchHero(idUser[2]),
      fetchHero(idUser[3]),
    ]);
  handleHeroRematch(heroLawan, heroUser1, heroUser2, heroUser3, heroUser4);
};
</script>

<template>
  <div class="versus" :class="className">
    <Modal
      :isOpen="modalIsOpen"
      :hasilTanding="hasilTanding"
      @click="handleCloseModal"
    />
    <div className="flex flex-row justify-center my-6 items-center">
      <div className="basis-5/12 lg:basis-4/12 px-4">
        <TableHeroUser
          :heroUser1="heroUser1"
          :heroUser2="heroUser2"
          :heroUser3="heroUser3"
          :heroUser4="heroUser4"
          @handleClick="handleSelectHeroUser"
          :showTableHeroUser="!showTable.value"
          :loading="loading"
        />
        <HeroUser
          showHeroUser="showTable"
          selectedHero="selectedHero"
          powerLevelUser="powerLevelUser"
        />
      </div>
      <div className="basis-2/12 sword">
        <img :src="swords" alt="batman" />
      </div>
      <div className="basis-5/12 lg:basis-4/12 px-4">
        <HeroLawan
          :heroLawan="heroLawan"
          :showHeroLawan="showHeroLawan"
          :powerLevelLawan="powerLevelLawan"
        />
      </div>
    </div>
    <div className="text-center mt-2 mb-4">
      <button
        className="py-2 px-12 bg-red-600 text-white border border-red-500 leading-8 inline-block text-xl text-center align-middle rounded-md hover:bg-red-700 duration-100"
        style="padding-left: 50; padding-right: 50"
        @click="handleRematch"
      >
        R E M A T C H
      </button>
    </div>
  </div>
</template>
