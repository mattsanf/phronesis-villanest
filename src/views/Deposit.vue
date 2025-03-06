<script setup>
import { onMounted } from 'vue';
import { useRebillySDK } from "../vendor/rebilly-js-sdk/index.js";
import { websiteId } from "../components/RebillyInstruments.js";
import { useRoute } from "vue-router";

async function CreateDepositRequest() {
    const rebilly = useRebillySDK();
    const route = useRoute();
    const currency = route.query?.currency ?? 'CAD';
    const id = route.query?.id ?? 'cus_01J56B1FAQ1M4Y29E3VWCB41EQ';
    return await rebilly.depositRequests.create({
        data: {
            websiteId,
            customerId: id,
            currency,
            amounts: [5, 10, 25, 50, 100],
            customAmount: {
                minimum: 5,
                maximum: 10000,
                multipleOf: 1,
            },
            amountLimits: {
                minimum: 5,
                maximum: 10000,
            },
        }
    });
}

onMounted(async () => {
    const response = await CreateDepositRequest();

    const mountElement = document.querySelector('#deposit');
    const cashierToken = response.fields.cashierToken;

    if (window.RebillyCashier) {
        RebillyCashier.renderDeposit({
            mountElement,
            cashierToken,
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
    --r-border-radius: 4px;
    --r-button-background: cornflowerblue;
    --r-button-background-hover: coral;
    --r-button-primary-background-hover: coral;
}
#deposit {
    padding: 1em;
}

.r-payment-method-item {
  filter: drop-shadow(grey 5px 5px 3px);
}

.choose-payment-methods-wrapper.r-show-payment-methods-list > div {
  overflow: visible;
}
</style>