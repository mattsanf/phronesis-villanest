<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
    <Debrief title="Project 18: Add digital wallets to deposit flow" :team="['Samuel Lafrenaye', 'Matthew Sanford']">
        <template #made-you-smile>
            <p>Teamwork is fun and great!</p>
        </template>
        <template #find-confusing>
            <ul>
                <li>Selected `google-pay` in gateway method is incorrect and invalid. (Should be removed)</li>
                <li>Need docs how to add specific methods to instruments (explain gateways are required)</li>
                <li>Google pay test card? How to not have real credit card as option. Adding 4111 card gave error</li>
                <li>No indication of limitations of apple pay in library implementation (just did not show with no explination, could give some error log or disabled button)</li>
                <li>Fighting with uploading required file to AWS deployment. Turns out we required a .txt extenstion that was undocumented (in Rebilly & Apple docs)</li>
            </ul>
        </template>
    </Debrief>
</template>