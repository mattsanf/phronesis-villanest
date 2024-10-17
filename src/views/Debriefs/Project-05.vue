<script setup>
import Debrief from '../../components/Debrief.vue';
</script>

<template>
  <Debrief title="Project 5: Support our developer widget" :team="['Arman Tuyakbayev', 'Matthew Sanford']">
    <template #made-you-smile>
      <p>learning new things about JS</p>
    </template>
    <template #find-confusing>
      <p>Trying to mount instruments again in a new element on the same page is not supported</p>
      <p>Had to implment non ideal plan with 1 quantity equaled $1. Storefront should enable some way to chnage price of
        plan in some cases.</p>
    </template>
  </Debrief>
</template>