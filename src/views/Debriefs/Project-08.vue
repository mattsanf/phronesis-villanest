<script setup>
import Debrief from '../../components/Debrief.vue';
</script>

<template>
  <Debrief title="Project 8: Add consent check to the payment flow" :team="['Arman Tuyakbayev', 'Matthew Sanford']">
    <template #made-you-smile>
      <p>Was relatively straightforward use new </p>
    </template>
    <template #find-confusing>
      <p>Used Rebilly SDK to exchange token client side instead of in a server</p>
      <p>Invoice not showing partially paid for invoice in summary</p>
      <p>Making payment for partially paid invoice not working as expected</p>
    </template>
  </Debrief>
</template>