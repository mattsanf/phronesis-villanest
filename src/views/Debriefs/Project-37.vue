<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
  <Debrief
    title="Project 37: Quickbooks integration"
    :team="['Francis Dortort', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>The manual sync looked nice but could use more feedback</p>
    </template>
    <template #find-confusing>
      <debrief-item bug>
        The organization already had a quickbooks intergeration connected and when we selected to disconnect the form looked the same without clearing out the old Service credential 
      </debrief-item>
      <debrief-item bug>
        Within the app view, the quick books app does not have the installed tag
      </debrief-item>
      <debrief-item bug>
        While manually syncing a transaction or invoice. There is no feedback for when the sync is not successful. Looks like nothing happened.
      </debrief-item>
      <debrief-item>
        To successfully manually sync you must first sync the customer, and the invoice, than the transaction. If we fail the sync we should be able to lookup the "parent" resource and sync them automatically.
      </debrief-item>
      <debrief-item question> It was unclear what the difference between "always" and "issued" for automatic syncing</debrief-item>
      <debrief-item bug>Dispite having the setting for always to automatically sync we could not get exisiting or new customer/invoices/payments to sync.</debrief-item>
    </template>
  </Debrief>
</template>
