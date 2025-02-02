<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
    <Debrief title="Project 24: Route 3DS with checkout.com on Rebilly" :team="['Mike Nguyen', 'Matthew Sanford']">
        <template #made-you-smile>
            <p>Working as expected but with challenges with testing</p>
        </template>
        <template #find-confusing>
            <ul>
                <li>Can't confirm previous secret key in gateway settings</li>
                <li>
                    <p>Deposit form modal is not rendering correctly</p>
                    <img src="/p24/modal-breaking.png" />
                </li>
                <li>Had to use Rebilly test cards as the checkout.com ones did not work for 3ds. confusing what cards are needed</li>
                <li>Not clear what the chosen gateway should be</li>
                <li>No non-US manual 3ds test cards</li>
                <li>How do you test bin list? Had to add 4111 card and remove it after testing</li>
                <li>Deposit request uses customer address instead of instrument's billing address</li>
                <li>confused about how gateway filter and rules interact. Seems if we have gateway filters the rules are not followed</li>
                <li>Would be nice if timeline had infinite scroll instead of clicking more</li>
                <li>Are conditions AND or OR? How do multiple conditions stack?</li>
                <li>We got an odd error where dispite all gateways not having sticky gateways set, a specific customer of ours was always getting a sticky instrument. deactivating the instrument did not work, but using another customer worked as expected.</li>
            </ul>
        </template>
    </Debrief>
</template>

<style lang="css" scoped>
img {
    width: 300px;
}
</style>