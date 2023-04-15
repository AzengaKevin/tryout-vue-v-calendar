<script setup>
import { ref } from "vue";
const date = ref(new Date());
const dateTime = ref(new Date());
const time = ref(new Date());
</script>

<template>
  <div class="flex p-12 bg-gray-200 gap-8 flex-col">
    <div class="grid gap-4 grid-cols-12">
      <div class="col-span-4">
        <h2 class="text-2xl font-bold text-gray-900">Selecting The Date Only</h2>
        <p class="mt-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda consequatur animi neque, sunt facilis illo atque rerum quae sint odit exercitationem. Eius illum sint dolorum enim nam rerum iure, commodi labore?</p>
      </div>
      <div class="col-span-8">
        <VDatePicker v-model="date" mode="date" is24hr hide-time-header />
      </div>
    </div>
    <div class="grid gap-4 grid-cols-12">
      <div class="col-span-4">
        <h2 class="text-2xl font-bold text-gray-900">Selecting The Time Only</h2>
        <p class="mt-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda consequatur animi neque, sunt facilis illo atque rerum quae sint odit exercitationem. Eius illum sint dolorum enim nam rerum iure, commodi labore?</p>
      </div>
      <div class="col-span-8">
        <VDatePicker v-model="time" mode="time" is24hr hide-time-header />
      </div>
    </div>
    <div class="grid gap-4 grid-cols-12">
      <div class="col-span-4">
        <h2 class="text-2xl font-bold text-gray-900">Selecting The Date and Time</h2>
        <p class="mt-6 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae assumenda consequatur animi neque, sunt facilis illo atque rerum quae sint odit exercitationem. Eius illum sint dolorum enim nam rerum iure, commodi labore?</p>
      </div>
      <div class="col-span-8">
        <VDatePicker v-model="dateTime" mode="dateTime" is24hr hide-time-header />
      </div>
    </div>
  </div>
</template>
