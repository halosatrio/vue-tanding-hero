<script setup>
// Import
import { useState } from "../utils/useState";

// State
const [showTable, setShowTable] = useState(true);
const [selectedHero, setSelectedHero] = useState(null);
const [showHeroLawan, setShowHeroLawan] = useState(false);
const [modalIsOpen, setModalIsOpen] = useState(false);

defineProps([
  "className",
  "heroLawan",
  "heroUser",
  "handleResetHero",
  "handleHeroRematch",
  "loading",
]);
</script>

<template>
  <div class="versus" :class="className">
    <!-- <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      overlayClassName="ReactModal__Overlay"
      className="ReactModal__Content"
    >
      <h2 className="mb-3">{hasilTanding}</h2>
      <button
        className="py-1 px-2 bg-gray-500 text-white leading-6 text-center rounded hover:bg-gray-600"
        onClick={handleCloseModal}
      >
        close
      </button>
    </Modal> -->
    <div className="flex flex-row justify-center my-6 items-center">
      <div className="basis-5/12 lg:basis-4/12 px-4">
        <TabelHeroUser
          :heroUser1="heroUser1"
          :heroUser2="heroUser2"
          :heroUser3="heroUser3"
          :heroUser4="heroUser4"
          :handleClick="handleSelectHeroUser"
          :showTableHeroUser="!showTable"
          :loading="loading"
        />
        <HeroUser
          showHeroUser="showTable"
          selectedHero="selectedHero"
          powerLevelUser="powerLevelUser"
        />
      </div>
      <div className="basis-2/12 sword">
        <img src="{swords}" alt="batman" />
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
