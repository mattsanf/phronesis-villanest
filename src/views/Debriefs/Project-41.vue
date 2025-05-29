<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
    <Debrief
        title="Project 41: Taxes"
        :team="['Andrew Lepekha', 'Matthew Sanford']"
    >
    <template #made-you-smile>
        <p>Took us a minute to figure out everything but the AI search in the docs helped bring up the details we were missing.</p>
    </template>
    <template #find-confusing>
        <debrief-item confusion>
            Taxes seemed to not be applied to the invoice after selecting the product to be taxable.

            Re-reviewing the documentation revealed we were missing an address.
        </debrief-item>
        <debrief-item suggestion>
            When applying taxes it could be helpful to provide a message that an address for the organization (or additional tax locations are required if there are non present) 
        </debrief-item>
        <debrief-item suggestion>
            When entering an address within recomm it would be helpful to have Google Place autocomplete to help speed up the input and provide better accuracy.

            We confused Georgia the country and the state and though we had entered the address correctly.
        </debrief-item>
    </template>
  </Debrief>
</template>
