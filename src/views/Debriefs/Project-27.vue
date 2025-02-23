<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
  <Debrief
    title="Project 27: Notify customers about trial ending"
    :team="['Mike Nguyen', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>
        Functionality seems like it would be needed, just difficult to test.
      </p>
    </template>
    <template #find-confusing>
      <debrief-item suggestion>
        Should be a better way to sort the events for email notifications.

        Core and billing events are not intuative categories. 
      </debrief-item>

      <debrief-item suggestion>
        In email notifications form, we lose context for the event we are creating the notification for.

        Title bar should mention the event that the action is being created for.
      </debrief-item>

      <debrief-item>
        No controll over when the email would be sent. (Always 3 days out)      
      </debrief-item>

      <debrief-item question>
        What candence do the emails get sent? If once a day, what time of day does it get sent?
      </debrief-item>

      <debrief-item>
        We have to wait days to verify the notifications are configured correctly.
        
        There were no docs to guide and explain how and when the emails were sent (that we should find)
      </debrief-item>

      <debrief-item bug>
        Calendar input does not allow for keyboard input directly into the input field
      </debrief-item>

      <debrief-item bug>
        Trial end in order form was in UTC explictly and would be expected to input in local time or have copy to express the value should be in UTC time.

        ![](/p27/unexpected-end-time-in-future.png)

        > _**Note:** the screenshot was taken at 3:30pm local time_
      </debrief-item>

      <debrief-item bug>
        Within this [docs page](https://www.rebilly.com/docs/automations/webhook-events#subscription-trial-will-end-reminder) the "see Subscription trial will end reminder" link loops back to the same section.

        Simular links on the same page behave the same.
      </debrief-item>
    </template>
  </Debrief>
</template>
