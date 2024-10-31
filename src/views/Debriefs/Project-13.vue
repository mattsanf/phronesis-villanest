<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
  <Debrief
    title="Project 13: Casino deposit payment methods"
    :team="['Samuel Lafrenaye', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>Didn't really need to read the docs, adding more gateway configs made sense and worked as expected.</p>
    </template>
    <template #find-confusing>
      <p>
        In the docs, expand for additional context is tiny and not obvious.
      </p>
      <p>
        Docs for deposits don't have any info for additional payment methods.
      </p>
      <p>
        First looked at the deposit strategy - nothing for additional payment methods
        Then looked at existing gateway settings - nothing for additional payment methods.
        Then I added new gateways - bank transfer had a dozen options with no info on the difference between them.
        Skrill had 2 options with no addditional info on either.
        After adding the gateways, I had no real feedback on if anything worked like I thought until I tested the site.
      </p>
    </template>
  </Debrief>
</template>