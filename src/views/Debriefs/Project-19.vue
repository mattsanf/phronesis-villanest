<script setup>
import Debrief from "../../components/Debrief.vue";
</script>

<template>
    <Debrief title="Project 19: VIP customers" :team="['Samuel Lafrenaye', 'Cesar Level', 'Matthew Sanford']">
        <template #made-you-smile>
            <p>Switching up who could take the lead</p>
        </template>
        <template #find-confusing>
            <ul>
                <li>Searching the doc for `Lifetime Revenue` gave article about KPI</li>
                <li>We receive a 404 for GET deposit request after creating a one on any customer except a specific customer</li>
                <li>Consfusion between Lifetime Revenue > Amount USD and just Amount. Only "Amount" worked and "Amount USD" did not even with USD currency</li>
                <li>Tested with one customer by toggling on off the VIP tag but other customers do not work</li>
            </ul>
        </template>
    </Debrief>
</template>
