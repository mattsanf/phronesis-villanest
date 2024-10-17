<script setup>
import { reactive, onMounted } from 'vue';
import RebillyInstrumentsLayout from '../components/RebillyInstrumentsLayout.vue';
import { websiteId, useBaseConfig } from '../components/RebillyInstruments.js';
import { useRebillySDK } from '../vendor/rebilly-js-sdk/index.js';

const api = useRebillySDK();
const state = reactive({
  invoice: null,
  customAmount: null,
})

onMounted(async () => {
  const { fields: subscription } = await api.subscriptions.create({
    data: {
      orderType: "one-time-order",
      customerId: "cus_01J56B1FAQ1M4Y29E3VWCB41EQ",
      websiteId: websiteId,
      currency: "USD",
      items: [
        {
          planId: "deposit",
          quantity: 1,
        },
      ],
    },
  });

  let invoiceId = subscription.recentInvoiceId;
  const { fields: invoice } = await api.invoices.get({ id: invoiceId });
  state.invoice = invoice;

  const config = {
    ...useBaseConfig(),
  };
  config.money = {
    amount: getAmountPercent(0.2),
    currency: "USD",
  };
  RebillyInstruments.mount(config);
});

function updateAmount(amount) {
  RebillyInstruments.update({
    money: {
      amount,
      currency: 'USD',
    }
  })
}

function getAmountPercent(percentage) {
  const amount = parseFloat(state.invoice.amount ?? 0.0) * parseFloat(percentage);
  return amount;
}
function customAmount() {
  updateAmount(state.customAmount);
}
function percentageAmount(percentage) {
  updateAmount(getAmountPercent(percentage));
}
</script>

<template>
  <main>
    <RebillyInstrumentsLayout>
      <template #pre-summary>
        <div class="rebilly-instruments-button-group" style="margin-top: 0; margin-bottom: var(--rebilly-spacingM);">
          <button class="rebilly-instruments-button rebilly-instruments-button-secondary"
            @click="() => percentageAmount(0.2)">Pay 20%</button>
          <button class="rebilly-instruments-button rebilly-instruments-button-secondary"
            @click="() => percentageAmount(0.3)">Pay 30%</button>
          <button class="rebilly-instruments-button rebilly-instruments-button-secondary"
            @click="() => percentageAmount(0.5)">Pay 50%</button>
        </div>
        <form @submit.prevent="customAmount">
          <div class="form-field">
            <label class="form-field-label" for="amount">Custom Amount</label>
            <div class="form-field-button-input">
              <input id="amount" type="number" step="0.01" placeholder="200" class="form-field-input" required
                v-model="state.customAmount" />
              <button class="rebilly-instruments-button rebilly-instruments-button-secondary"
                style="margin-top: 0">Apply</button>
            </div>
          </div>
        </form>
      </template>
    </RebillyInstrumentsLayout>
  </main>
</template>