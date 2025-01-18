<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
    <Debrief title="Project 22: Manage volume limits" :team="['Mike Nguyen', 'Matthew Sanford']">
        <template #made-you-smile>
            <p>Volume limits appear to be working as implemented but some of the UI is confusing</p>
        </template>
        <template #find-confusing>
            <ul>
                <li>Would be nice to enable/disable gateways from the table view</li>    
                <li>Disabled gateways were appearing in the action "Pick gateway account"</li>
                <li>AI in docs only referenced API endpoint and did not direct to docs</li>
                <li>We were getting cases where the volume limit was not stopping transactions. Limit appears to only count once every 5 minutes but you can have as many transaction in that period</li>
                <li>No clear way to set a priority for gateway preference, only random chance</li>
                <li>Would be nice to clearly check the flow of the transaction. eg. Gateway A triend by failed for X reason, Gateway B tried and was accepted</li>
                <li>Can't see the current volume of the gateway. Or any realtime meterics of the tranaction via the gateway</li>
                <li>Can't change the currency of the volume limit. Where was it getting to currency from?</li>
                <li>Gateway being put into downtime was suprising and we didn't understand why to begin with</li>
            </ul>
            <h3><strong>Side quests</strong></h3>
            <ul>
                <li>Should be able to set a users default organization</li>
            </ul>
        </template>
    </Debrief>
</template>

<style lang="css" scoped>
img {
    width: 300px;
}
</style>