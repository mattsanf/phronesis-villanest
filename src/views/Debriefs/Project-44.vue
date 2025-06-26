<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
    <Debrief
        title="Project 44: Cancellations (again)"
        :team="['Andrew Lepekha', 'Matthew Sanford']"
    >
        <template #made-you-smile>
            <p>Happy the feature flag works!</p>
            <p>Broken finger 😢</p>
        </template>
        <template #find-confusing>
            <debrief-item suggestion>
                The name of the credit memo is not useful as it is a number.

                ![](/p44/apply-credit-memo.png)
            </debrief-item>
            <debrief-item bug>
                Option to reactive a one-time sale should not be available.

                ![](/p44/reactivate-one-time-order-action.png)
                ![](/p44/reactivate-one-time-order.png)
            </debrief-item>
            <debrief-item question>
                Unable to repeat but we got an credit memo that was $7.97 but the invoice was $10. So we are unsure how or why that happened.
            </debrief-item>
            <debrief-item>
                When we had a credit memo for $10 we tried to apply $5 to the invoice and the later try to add it up to $8. 
                But when we applied the $8 we expected the invoice to have $2 left but it had $0 and was fully paid.
            </debrief-item>
            <debrief-item>
                Voiding the credit memo after it has been applied to an invoice did not work as expected. Nothing seemed to change on the invoice.
            </debrief-item>

            <h3 style="margin-top: 2rem">Other issues found.</h3>
            <debrief-item suggestion>
                No way to verify which feature flags are enabled for the current organization.

                We should display the feature flags in the organization settings page.
            </debrief-item>
            <debrief-item suggestion>
                Organization dropdown in the top left corner of the header has an odd delay even though there is no API calls happening.
            </debrief-item>
        </template>
    </Debrief>
</template>
