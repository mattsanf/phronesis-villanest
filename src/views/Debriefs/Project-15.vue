<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
  <Debrief
    title="Project 15: Casino deposit 3ds"
    :team="['Samuel Lafrenaye', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>Quite straightforward and simple</p>
    </template>
    <template #find-confusing>
      <ul>
        <li>Able to seek out gateway setting right away but the list of required inputs was overwhelming and did not know where to find docs from Recomm</li>
        <li>No clear documentation about what is Challege flow and Frictionless flow. this seems to be assumed knowledge</li>
        <li>Can't test CAD card for manual 3ds check, no test card is availiable</li>
        <li>We found ourselves needing to copy gateway settings for different currencies. May be only an issue for sandbox but being able to clone a gateway could be helpful</li>
      </ul>
    </template>
  </Debrief>
</template>