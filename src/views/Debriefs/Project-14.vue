<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
  <Debrief
    title="Project 13: Casino deposit currency"
    :team="['Samuel Lafrenaye', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>figuring out the markup was on the conversion rate </p>
    </template>
    <template #find-confusing>
      <ul>
        <li>Did not naturally find the docs. Deposits did not mention DCC at all.</li>
        <li>We could not unslect forced conversions, we had to remove DCC and re-add it</li>
        <li>Can't cancel once DCC is offered</li>
        <li>DCC shows different locale than instruments</li>
        <li>We were confused about how the 2% markup would show up</li>
        <li>We assumed that 2% would show up on base amount instead of the conversion rate</li>
        <li>We did not know how to have the customer local currency show up</li>
        <li>We were confused about the local currency and seemed like it was wrong in the DCC offer</li>
        <li>Docs not clear about what is expected or logic is wrong</li>
        <li>We have to specify the expected currency but we can't do a conversion on that currency if it's accepted</li>
      </ul>
    </template>
  </Debrief>
</template>