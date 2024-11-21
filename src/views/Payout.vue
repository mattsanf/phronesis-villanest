<script setup>
import { onMounted, reactive, watch } from "vue";
import RebillyInstrumentsLayout from "../components/RebillyInstrumentsLayout.vue";
import { useBaseConfig, websiteId } from "../components/RebillyInstruments.js";
import { useRebillySDK } from "../vendor/rebilly-js-sdk/index.js";

const api = useRebillySDK();
const state = reactive({
  showAmountInput: true,
  currency: "USD",
  amount: 150,
  token: null,
});

watch(
  () => state.showAmountInput,
  (newState) => {
    console.log({ newState });
    if (newState === true) {
      RebillyInstruments.destroy();
    }
  }
);

async function applyButton() {
  state.showAmountInput = false;
  const requestPayoutData = {
    websiteId: websiteId,
    customerId: "cus_01J56B1FAQ1M4Y29E3VWCB41EQ",
    currency: state.currency,
    amount: state.amount,
  };
  const { fields: payoutFields } = await api.payoutRequests.create({
    data: requestPayoutData,
  });

  const config = {
    ...useBaseConfig({
      deleteKeys: ["publishableKey", "websiteId", "organizationId"],
    }),
    jwt: state.token,
    payout: {
      payoutRequestId: payoutFields.id,
    },
  };

  RebillyInstruments.mount(config);
}

onMounted(async () => {
  const password = await api.actions.passwordlessLogin({
    customerId: "cus_01J56B1FAQ1M4Y29E3VWCB41EQ",
  });
  state.token = password.token;
});
</script>

<template>
  <RebillyInstrumentsLayout>
    <template #pre-form v-if="state.showAmountInput">
      <div class="form-field">
        <label class="form-field-label" for="amount">Amount</label>
        <input
          id="amount"
          type="number"
          step="0.01"
          class="form-field-input"
          placeholder="20.00"
          v-model="state.amount"
          required
        />
      </div>

      <button
        @click="applyButton"
        type="submit"
        class="rebilly-instruments-button"
        style="margin-top: 1rem"
      >
        Apply
      </button>
    </template>
    <template #pre-form v-else>
      <button
        class="rebilly-instruments-button rebilly-instruments-button-secondary"
        style="margin-top: 0; margin-bottom: var(--rebilly-spacingL)"
        @click="state.showAmountInput = true"
      >
        Choose another amount
      </button>
    </template>
  </RebillyInstrumentsLayout>
</template>
