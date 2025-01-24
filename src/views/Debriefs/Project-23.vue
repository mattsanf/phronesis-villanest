<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
    <Debrief title="Project 23: Integrate Checkout.com" :team="['Mike Nguyen', 'Matthew Sanford']">
        <template #made-you-smile>
            <p>Seems to work very well once configured the gateway properly</p>
        </template>
        <template #find-confusing>
            <ul>
                <li>We had a bit of confusion about setting up an account we got an error with checkout.com about an invalid "business" email</li>
                <li>We were unsure about what was required to integrate with checkout.com. There were no guides</li>
                <li>We had errors about "processing channel id" and after adding one to the gateway configureation it was working</li>
                <li>We didn't know specific test cards from checkout.com were needed until the Rebilly test cards were not working for us</li>
            </ul>
            <h3><strong>Side quests</strong></h3>
            <ul>
                <li>How realistic is wanting to turn on/off gateway accounts often?</li>
            </ul>
        </template>
    </Debrief>
</template>

<style lang="css" scoped>
img {
    width: 300px;
}
</style>