<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
  <Debrief
    title="Project 26: Google Sheets integration"
    :team="['Mike Nguyen', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>
        The docs were easy to find and made integration very straight forward.
      </p>
    </template>
    <template #find-confusing>
      <debrief-item bug>
        Google app has a warning that the app is not verified

        ![](/p26/verified.png)
      </debrief-item>

      <debrief-item improvement>
        Google app has overly permissive permissions. These should be reduced in
        scope if able
        
        ![](/p26/permissions.png)
      </debrief-item>

      <debrief-item improvement>
        When adding a field the option will reorder as you interact. should only
        reorder when it initaly is opened
        
        ![](/p26/jumping_option.gif)
      </debrief-item>

      <debrief-item suggestion>
        Test integration should provide better default dummy data.
        
        First time the modal showed up we tested without any modification and an empty row
        was added to the sheet
      </debrief-item>

      <debrief-item improvement>
        After initalzing a test run we got ~107 rows added to the sheet but we
        expected only 1 row. 
        
        Also after some time we seemed to receive more rows
        but we were not able to reproduce that.
      </debrief-item>
    </template>
  </Debrief>
</template>
