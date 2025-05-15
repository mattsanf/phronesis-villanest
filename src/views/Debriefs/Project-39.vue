<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
    <Debrief
        title="Project 39: Change orders"
        :team="['Máté Farkas', 'Andrew Lepekha', 'Matthew Sanford']"
    >
    <template #made-you-smile>
        <p>Didn't encounter any flow breaking bugs! Mostly just confusion about where to find things.</p>
    </template>
    <template #find-confusing>
        <debrief-item suggestion>
            It wasn't very clear what order/plans spanned what periods of time. Had to dig through the invoices to see what the customers current plans and periods were for.

            Could be helpful to clearly outline a customer service periods for their orders. This could also be an API for merchants to easily integrate with.
        </debrief-item>
        <debrief-item bug>
            After creating a new order we got a 404 for fetching that order when viewing the invoice for that order. New order should be passed as a prop instead of fetching from the API.
        </debrief-item>
        <debrief-item confusion>
            After changing the upcoming invoice with a prorated rate. We were confused why the invoice had the "Expert" plan twice. But it was actually the future period and the current period.

            We expected an interim invoice to be created. Could be helpful to add a flag to immediately create the interim invoice during the change items process.

            ![](/p39/invoice-change-item-summary.png)

            The view above made us think this would be what the final invoice would look like.

            ![](/p39/invoice-post-prorated.png)

            So we were confused why the price was much higher than expected.
        </debrief-item>
        <debrief-item confusion>
            After creating an interim invoice we were confused why the invoice was not showing up in the invoices list. We had to refresh the page to see the new invoice.

            ![](/p39/interm-invoice-prereload.png)

            The interim invoice is visible in the timeline but it's not clear that this is the interim invoice.
        </debrief-item>
        <debrief-item suggestion>
            It could be helpful if the invoice list had a badge to identify the invoice as `upcoming` or `interim`. 
        </debrief-item>
    </template>
  </Debrief>
</template>
