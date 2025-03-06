<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
  <Debrief
    title="Project 29: Deposits Again"
    :team="['Francis Dortort', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>Google places is working now!</p>
    </template>
    <template #find-confusing>
      <debrief-item bug>
        Missing the ability to edit the address of an exisiting address
      </debrief-item>
      <debrief-item suggestion>
        CSS rule was needed to override a overflow setting on a unnamed div.

        Was unexpected
      </debrief-item>
      <debrief-item>
        Minimum was set higher than the lowest button value. The button did not show up and was unexpected.
        
        Should have some feedback for developer implementing
      </debrief-item>
      <debrief-item suggestion>
        When looking a the gateway list view, we did not know which gateway had Google Pay configured at a glance.
      </debrief-item>
    </template>
  </Debrief>
</template>
