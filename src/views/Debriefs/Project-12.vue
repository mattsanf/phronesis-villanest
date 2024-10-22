<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
  <Debrief
    title="Project 12: Casino deposit strategies"
    :team="['Arman Tuyakbayev', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>This time almost everything worked as expected.</p>
    </template>
    <template #find-confusing>
      <p>
        We are missing example for deposit request with deposit strategy id.
      </p>
      <p>
        We got Ready to pay errors when we were providing incorrect deposit
        request ID and lead to confusion
      </p>
      <p>
        Needing to do 2 calls for a token exchange and another call for customer
        data before loading instruments was annoying
      </p>
    </template>
  </Debrief>
</template>
