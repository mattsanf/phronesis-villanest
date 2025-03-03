<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
  <Debrief
    title="Project 28: Subscription reactivations"
    :team="['Mike Nguyen', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>
        Was one of the more intuative project we've done
      </p>
    </template>
    <template #find-confusing>
      <debrief-item question>
        Where can we create a subscription?
        
        UI doesn't make it clear the difference between order and subscriptions.
      </debrief-item>

      <debrief-item>
        Was not initally clear the quote was in a draft state.
      </debrief-item>

      <debrief-item suggestion>
        Selecting multiple event in webhook menu akward.

        We would type to search and after selction the filtering would be removed.
        Even when we wanted to select simular events.
      </debrief-item>

      <debrief-item suggestion>
        The webhook url could not contain any dynamic information.

        Such as the event that was triggered when multiple events were linked together.
        (the body does contain this information)
      </debrief-item>

      <debrief-item suggestion>
        When creating a new order, the check box for enabling pro rata credit should have a closer relation to the options selected.

        ![](/p28/now-selected.png)
        _When **"Now"** option is selected the "add pro rata credit" option looks like it's for **"Specific time"** option_
      </debrief-item>
    </template>
  </Debrief>
</template>
