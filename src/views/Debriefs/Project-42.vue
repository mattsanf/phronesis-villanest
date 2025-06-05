<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
    <Debrief
        title="Project 42: Email invoices"
        :team="['Andrew Lepekha', 'Matthew Sanford']"
    >
        <template #made-you-smile>
            <p>Nice conversation and good team communication. Got to meet each other's pets!</p>
        </template>
        <template #find-confusing>
            <debrief-item suggestion>
                No email boilerplate emails. Would be nice to be able to set up a default email template.
            </debrief-item>
            <debrief-item suggestion>
                Invoice amount placeholder can not be formatted as a proper currency value.

                Also unsure if we can format the dates times.

                ![](/p42/Screenshot-2.png)
            </debrief-item>
            <debrief-item confusion>
                Within the invoice timeline, we thought did not include the email attachment. But it was visible in the bottom corner as an icon that we initially missed.

                ![](/p42/Screenshot-3.png)
            </debrief-item>
            <debrief-item confusion>
                Was not clear what property of the invoice would properly show the paid time. Would need to access within the invoices transaction.

                Also needing to use "transaction.0" the ".0" is confusing to non-technical users. We should provide humanized placeholders and helper placeholders for common data needed.

                Also not sure how to know which transaction is relevant for the email. If there was initially a declined transaction, and then a successful one, how could we know which for the email? 
            </debrief-item>
            <debrief-item bug>
                Date for the paid invoice did not show up in the email.

                ![](/p42/Screenshot-4.png)
                ![](/p42/Screenshot-5.png)
            </debrief-item>
            <debrief-item suggestion>
                Generated pdf's have the exact same file name for the issued invoice and the paid invoice. Would be nice to have a suffix or prefix to differentiate them.

                ![](/p42/Screenshot-6.png)
            </debrief-item>
        </template>
    </Debrief>
</template>
