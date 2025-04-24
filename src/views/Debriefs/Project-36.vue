<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
  <Debrief
    title="Project 36: Custom domains"
    :team="['Francis Dortort', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>SSL Certificates auto generation works well</p>
    </template>
    <template #find-confusing>
       <debrief-item bug>
         Recomm / transaction.approvalURL does not include the custom domain but will redirect correctly.

         ![](/p36/recomm-modal.png)
         ![](/p36/transaction-approvalUrl.png)
         ![](/p36/correct-url.png)
       </debrief-item>
    </template>
  </Debrief>
</template>
