<script setup>
import { reactive, onMounted } from 'vue';
import RebillyInstrumentsLayout from '../components/RebillyInstrumentsLayout.vue';
import DonateWidget from '../components/DonateWidget.vue';
import { useBaseConfig } from '../components/RebillyInstruments.js';

const state = reactive({
  period: 'monthly',
});

onMounted(() => {
  const config = {
    ...useBaseConfig(),
    items: [
      {
        planId: "premium-monthly",
        quantity: 1,
      },
    ],
    paymentInstruments: {
      address: {
        name: "stacked",
        show: ["email", "phoneNumber", "address", "city", "country"],
        require: ["email", "phoneNumber", "address", "city", "country"],
      },
    },
    addons: [
      {
        planId: "personal-travel-plan",
        quantity: 1,
      },
    ],
    bumpOffer: [
      {
        planId: "platinum-monthly",
        quantity: 1,
      },
    ],
  };

  RebillyInstruments.mount(config);
});

async function togglePeriod() {
  state.period = state.period === 'monthly' ? 'yearly' : 'monthly';

  await RebillyInstruments.update({
    items: [
      {
        planId: `premium-${state.period}`,
      },
    ],
    bumpOffer: [
      {
        planId: `platinum-${state.period}`,
      },
    ],
  });
}
</script>

<template>
  <main>
    <RebillyInstrumentsLayout>
      <template #pre-summary>
        <button class="rebilly-instruments-button rebilly-instruments-button-secondary" style="margin-top: 0"
          @click="togglePeriod">Switch to {{ state.period === 'monthly' ? 'yearly' : 'monthly' }} plan</button>
      </template>
      <template #post-summary>
        <DonateWidget />
      </template>
    </RebillyInstrumentsLayout>
  </main>
</template>