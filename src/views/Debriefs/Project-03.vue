<script setup>
import Debrief from '../../components/Debrief.vue';
</script>

<template>
  <Debrief title="Project 3: Rebilly Instruments introduction" :team="['Arman Tuyakbayev', 'Matthew Sanford']">
    <template #made-you-smile>
      <p>Was able to make a nice looking UI with much frontend experience</p>
    </template>
    <template #find-confusing>
      <p>The documentation was not very well organized. It was hard to find all the correct values. Confused checkout
        forms, hosted payment forms, and integrated payment form. <a
          href="https://github.com/mattsanf/phronesis-villanest">code/hosting here</a></p>
    </template>
  </Debrief>
</template>