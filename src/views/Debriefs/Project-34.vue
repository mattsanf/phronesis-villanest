<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
  <Debrief
    title="Project 34: AML"
    :team="['Francis Dortort', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>Teamwork!</p>
    </template>
    <template #find-confusing>
      <debrief-item bug>
        Francis Eytan Dortort experienced a login issue, repeatedly being redirected from the sandbox environment.
        After exploring several solutions, including clearing browser data and using a different browser
      </debrief-item>
      <debrief-item bug>
        They couldnot review any AML checks and would get an error about an invalid tag. Applying tags to the AML check did not resolve this and appears to be the implementation that is sending incorrect "tag" to the API.
        ![](/p34/AML-API-error.png)
      </debrief-item>
      <debrief-item bug>
        They got a blank AML check with "reviewed by: null"

        ![](/p34/AML-reviewed-by-null.png)
      </debrief-item>
      <debrief-item bug>
        When trying to cycle through the AML check we would land on a specific check and would loop only on that check without seeing any of the other ones.
      </debrief-item>
      <debrief-item>
        The Webhook payload does not give any information about the AML check its self. Would need additional API calls to retreive the data.

        ![](/p34/AML-webhook-payload.png) 
      </debrief-item>
    </template>
  </Debrief>
</template>
