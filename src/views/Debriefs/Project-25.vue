<script setup>
import Debrief from "../../components/Debrief.vue";
import DebriefItem from "../../components/DebriefItem.vue";
</script>

<template>
    <Debrief title="Project 25: Integrate Checkout.com dispute notifications" :team="['Mike Nguyen', 'Matthew Sanford']">
        <template #made-you-smile>
            <p>Once working it's nice but more docs to explain some core concepts would help people without more industry knowledge navigate the usecase better.</p>
        </template>
        <template #find-confusing>
            <debrief-item>
                When testing an email there is no data to ensure correct placeholders
            </debrief-item>
            <debrief-item>
                Confused what the data flow should be, what api's are called, and what order they should be called.
            </debrief-item>
            <debrief-item bug>
                Rebilly website says it does not support disputes with checkout.com gateway
                
                ![](/p25/checkoutCom-gateway-details.png)
            </debrief-item>
            <debrief-item question>
                What is an "**IPN**"?

                Would not know what this is without external help.
            </debrief-item>
            <debrief-item suggestion>
                More laymen terms in docs to help guide less knowledgeable users
            </debrief-item>
            <debrief-item improvement>
                Having an example integration for the usecase (even if not 100% the same) would help guide expectations
            </debrief-item>
            <debrief-item>
                Was on sure of the dispute process. Should rebilly trigger it? how is it triggered on gateway?
            </debrief-item>
            <debrief-item bug>
                Not every dispute test case was supported, we should more boardly support gateway checkout cards in sandbox
            </debrief-item>
        </template>
    </Debrief>
</template>

<style lang="css" scoped>
img {
    width: 300px;
}
</style>