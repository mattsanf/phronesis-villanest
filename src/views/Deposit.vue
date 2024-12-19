<script setup>
import { onMounted } from 'vue';
import { useRebillySDK } from "../vendor/rebilly-js-sdk/index.js";
import { websiteId } from "../components/RebillyInstruments.js";

async function CreateDepositRequest() {
    const rebilly = useRebillySDK();
    return await rebilly.depositRequests.create({
        data: {
            websiteId,
            customerId: "cus_01J56B1FAQ1M4Y29E3VWCB41EQ",
            currency: 'CAD',
            amounts: [10, 50, 100],
            customAmount: {
                minimum: 10,
                maximum: 10000,
                multipleOf: 1,
            },
            amountLimits: {
                minimum: 10,
                maximum: 10000,
            },
        }
    });
}

onMounted(async () => {
    const response = await CreateDepositRequest();

    const mountElement = document.querySelector('#deposit');
    const token = response.fields.cashierToken;

    if (window.RebillyCashier) {
        RebillyCashier.renderDeposit({
            mountElement,
            token,
        });
    } else {
        console.error('RebillyCashier library not loaded');
    }
});
</script>

<template>
    <div id="deposit"></div>
</template>

<style lang="css">
:root {
    --r-border-radius: 0px;
    --r-font-family: "Inter", serif;
    --r-border-color: #AFE1AF;
}
#deposit {
    padding: 1em;
}
</style>