<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
    <Debrief title="Project 25: Integrate Checkout.com dispute notifications" :team="['Mike Nguyen', 'Matthew Sanford']">
        <template #made-you-smile>
            <p>Once working it's nice but more docs to explain some core concepts would help people without more industry knowledge navigate the usecase better.</p>
        </template>
        <template #find-confusing>
            <ul>
                <li>When testing an email there is no data to ensure correct placeholders</li>
                <li>Confused what the data flow should be, what api's are called, and what order they should be called.</li>
                <li>
                    <p>Rebilly website says it does not support disputes with checkout</p>
                    <img src="/p25/checkoutCom-gateway-details.png">
                </li>
                <li>What is an "IPN"? Would not know what this is without external help.</li>
                <li>More laymen terms in docs to help guide less knowledgeable users</li>
                <li>Having an example integration for the usecase (even if not 100% the same) would help guide expectations</li>
                <li>Was on sure of the dispute process. Should rebilly trigger it? how is it triggered on gateway?</li>
                <li>Not every dispute test case was supported, we should more boardly support gateway checkout cards in sandbox</li>
            </ul>
        </template>
    </Debrief>
</template>

<style lang="css" scoped>
img {
    width: 300px;
}
</style>