<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
  <Debrief
    title="Project 32: Support Team"
    :team="['Francis Dortort', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>While still being a lot to parse, having all the available permissions in one document page was nice</p>
    </template>
    <template #find-confusing>
      <debrief-item suggestion>
        List of permissions was hard to manage.

        Large list of items in a small textarea.

        Would be nice to comment out permissions

        Would be nice to have gui to quickly add all "view" or "edit" permissions for common resources. 
      </debrief-item>
      <debrief-item bug>
        Saw a blank page and nothing else because we were missing fundimental permissions to make the app useable.
        It was not clear these were needed until we inspected the failed network calls.

        ![](/p32/blank-user-page.png)
      </debrief-item>
      <debrief-item>
        Not clear what are the needed permissions for a functional user.

        We need to inspect the network tab for failed API call and trial and error our way to useable permissions.
      </debrief-item>
      <debrief-item bug>
        We would see results in the search for resources the user did not have permissions for.

        ![](/p32/wrong-results-in-search.png)
      </debrief-item>
      <debrief-item suggesiton>
        KPI is a odd home page when you do not have permissions to view anything on it. Would be nice to just view Data view.

        ![](/p32/blank-kpi.png)
      </debrief-item>
      <debrief-item bug>
        To view any GUI for KYC we needed to POST permissions even though the role was to just view it.

        ![](/p32/aml-toast.png)
      </debrief-item>
      <debrief-item suggestion>
        Would be nice to emulate role permissions directly from the roles table instead of assigning the role to a user and emulating that user.
      </debrief-item>
      <debrief-item bug>
        We are not able to generate a link for a customer to self mange the instrument.

        A customer support role could manually edit the instrument on behalf of the customer though.
      </debrief-item>
    </template>
  </Debrief>
</template>
