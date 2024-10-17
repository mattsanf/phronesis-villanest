<script setup>
import Debrief from '../../components/Debrief.vue';
</script>

<template>
  <Debrief title="Project 6: Deposits" :team="['Arman Tuyakbayev', 'Matthew Sanford']">
    <template #made-you-smile>
      <p>We created a subscrioption, than use rebilly instruments money flow and the instruments event
        `purchase-completed` to then use API to call transactionApply to the subscriptions invoice.</p>
    </template>
    <template #find-confusing>
      <p>finding this solution required our experience at Rbbilly to solve and would not come to a regular merchant</p>
    </template>
  </Debrief>
</template>