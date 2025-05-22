<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
    <Debrief
        title="Project 40: Lead source attribution"
        :team="['Andrew Lepekha', 'Matthew Sanford']"
    >
    <template #made-you-smile>
        <p>Once we understood how to add the affiliate value, the system worked well</p>
    </template>
    <template #find-confusing>
        <debrief-item>
            It was not clear we could add lead source values to the url when using Rebilly instruments.

            Also wasn't sure what the exact param would be. We found docs that outlined different types of params but we had to use our best guess to figure out what the param would be in the actual url.
        </debrief-item>
        <debrief-item suggestion>
            When creating the automated data export we searched for a column but it was not available. If showed all possible columns, it should have displayed a message that the column was not available for this export.

            ![](/p40/all-columns.png)
        </debrief-item>
        <debrief-item bug>
            When clicking the back button on the reports automation rules matched screen we ended up looping back and not able to go back properly.

            ![](/p40/loop-back.gif)
        </debrief-item>
    </template>
  </Debrief>
</template>
