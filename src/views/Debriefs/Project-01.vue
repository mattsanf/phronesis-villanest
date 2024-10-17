<script setup>
import Debrief from '../../components/Debrief.vue';
</script>

<template>
  <Debrief title="Project 1: Set up an organization & accept payments" :team="['Arman Tuyakbayev', 'Matthew Sanford']">
    <template #made-you-smile>
      <p>Test gateway was ready to use and seems like it would fit most merchants first usecase</p>
    </template>
    <template #find-confusing>
      <p>There were some navigation bugs when flipping between view in the setting > notifications</p>
    </template>
  </Debrief>
</template>