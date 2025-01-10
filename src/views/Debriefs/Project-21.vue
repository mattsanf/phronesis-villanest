<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
    <Debrief title="Project 21: Casino fraud prevention" :team="['Mike Nguyen', 'Matthew Sanford']">
        <template #made-you-smile>
            <p>Functionality works and has clear value for merchants</p>
        </template>
        <template #find-confusing>
            <ul>
                <li>Had to look at Stripe docs to understand what Payment Card Velocity means</li>
                <li>Unclear what the default condition does? What do the response code mean?</li>
                <li>Does `0` mean permanently? Looking at the regular block list 0 is default (which seems to be 30 seconds?)</li>
                <li>What is the difference between predefined and custom block lists? Both have the same option and inputs but predefined does not allow to change the name</li>
                <li>If you activate a custom blocklist and deactivate it, trying to save gives an error saying you must have at least 1 custom block list. (not toggling the custom block list doesn't cause this issue)</li>
                <li>Can't create more than 1 automatic blocklist. predefined blocklist shows up as a custom blocklist on edit</li>
                <li>How to test? Used auto declined card, is it the card or the blocklist?</li>
                <li>Editing automated blocklist gave error that the name is not correct, even though we did not define it and it was generated for me from predefined blocklist.</li>
                <li>`Transaction > Payment card > Risk metadata > Payment instrument velocity` not working. Needed `Transaction > Risk metadata > Payment instrument velocity`</li>
                <li>Can't use "No Condition", gives error for requiring at least 1 option. (Why is no condition an option?)</li>
                <li>Timeline name just says `Cancled` would be nice to have more clear reason for the cancel without drilling into transaction data</li>
                <li>Non automated blocklist would be nice to see all blocklist and allow filtering</li>
                <li>"has mismatched bank country" and "has mismatched billing country" mismatch to what? previous transaction? we thought it would check the billing address against the bank address for both and was confused</li>
                <li>Getting an approved transaction and then having it canceled? Is that expected?</li>
                <li>"Blocked due to blocklist" in timeline, but what block list (can find it if you drill into transaction data)</li>
                <li>Blocklist can not detect when transaction was happening with a VPN active (Used NordVPN, 3rd party site was able to detect that the VPN was being used)</li>
                <li>What are the "high risk" counties?</li>
            </ul>
            <h3><strong>Side quests</strong></h3>
            <ul>
                <li>Recomm search would be nice to search for setting/automations/data tables</li>
                <li>When creating a customer, the make default radio should only be visible if you have multiple emails and the first email should be treated as the primary and only show the radio if there are options for it (same for phone numbers)</li>
                <li>
                    <p>Customers default instrument in Collect Payment is empty div after changing the default instrument.</p>
                    <img src="/p21/collect-payment-bug.png" />
                </li>
                <li>No google auto complete within recomm</li>
            </ul>
        </template>
    </Debrief>
</template>

<style lang="css" scoped>
img {
    width: 300px;
}
</style>