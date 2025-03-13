<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
  <Debrief
    title="Project 30: Collect KYC documents"
    :team="['Francis Dortort', 'Matthew Sanford']"
  >
    <template #made-you-smile>
      <p>Google places is working now!</p>
    </template>
    <template #find-confusing>
      <debrief-item>
        Unintuitive placement of KYC request in automation rule event (Gateway account requested).
      </debrief-item>
      <debrief-item bug>
        In the rule Request KYC action in Recomm, the entire bloc unexpectedly disappeared when clearing the document type dropdown.
        ![](/p30/recomm-kyc.png)
      </debrief-item>
      <debrief-item>
        In Recomm Request KYC action, irrelevant options remain selectable, ie. "For optional requests" section when "Mandatory" selected.
      </debrief-item>
      <debrief-item bug>
        Automatic KYC document rejection (unreviewed) sometimes leads to blocking user from proceeding.
        ![](/p30/kyc-user-reject.png)
      </debrief-item>
      <debrief-item bug>
        KYC Document OCR hallucination.
        ![](/p30/ocr-hallucination.png)
      </debrief-item>
      <debrief-item>
        Unintuitive/ unclear automatic document rejection, ie. rejection even when all checks pass.
        ![](/p30/kyc-rejection.png)
      </debrief-item>
      <debrief-item>
        Unintuitive/ unclear flow completion with automatic document acceptance (required click of "Continue" button on final step).
      </debrief-item>
      <debrief-item bug>
        Google Places input above KYC modal.
        ![](/p30/places-modal.png)
      </debrief-item>
    </template>
  </Debrief>
</template>
