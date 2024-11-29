<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
  <Debrief
    title="Project 17: Casino payout payment methods"
    :team="['Samuel Lafrenaye', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>Learning from previous projects is making knowing how it should work more clear.</p>
    </template>
    <template #find-confusing>
      <ul>
        <li>Payment methods in the gateway are not alphabetical (Capital before lower case) - recurring issue from previous projects.</li>
        <li>Not clear on the different payment methods like Interac and Interac-etransfer, etc. - also recurring.</li>
        <li>Echeck no showing up at all in UI (both USD or CAD) but showing up in ready-to-pay API response. <br/> Instruments previouly documented supported methods but that documentation is no longer availiable</li>
        <li>No test creds documented for bank account testing - but writing 1111111111 for both boxes works.</li>
        <li>Gateway details page or gateway list does not show which gateways have payout enabled, need to drill down in settings page.</li>
        <li>Can't find docs to reorder payment methods in instruments - It's in the rules engine but could not find docs, knowledge of the product is required.</li>
        <li>Difficult to find docs about rules engine, I would not have known ordering payment methods would be there.</li>
      </ul>
    </template>
  </Debrief>
</template>