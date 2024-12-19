<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
    <Debrief title="Project 20: Casino deposit improvements" :team="['Samuel Lafrenaye', 'Matthew Sanford']">
        <template #made-you-smile>
            <p>TEAMWORK!</p>
        </template>
        <template #find-confusing>
            <ul>
                <li>Stackbitz preview in docs doesn't work on firefox</li>
                <li>Struggled to setup a webpage in general. how to modify exisiting vue app and following the example. Setting up a server is more complex</li>
                <li>hard to see specific sections of the code walkthrough. highlighting was not always expected</li>
                <li>hard to know how to modify the example deposit request for the specific use case</li>
                <li>Unexpected error with multipleOf 0.01 would give error with $10.01</li>
                <li>CAD currency symbol was overlapping amount input</li>
                <li>initial setup was a little challenging, but once it was loaded the styling and great. A+ to CSS docs (pictures helped a lot)</li>
            </ul>
        </template>
    </Debrief>
</template>
