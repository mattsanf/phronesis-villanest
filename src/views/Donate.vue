<script setup>
import { onMounted } from 'vue';
import RebillyInstrumentsLayout from '../components/RebillyInstrumentsLayout.vue';
import { useBaseConfig } from '../components/RebillyInstruments.js';
import { useRoute } from 'vue-router';

const route = useRoute();

onMounted(() => {
  const config = {
    ...useBaseConfig(),
  };

  if (route.query.type === 'one-time') {
    config.money = {
      amount: parseFloat(route.query.amount),
      currency: "USD",
    };
  } else {
    config.items = [
      {
        planId: "monthly-2",
        quantity: {
          default: parseInt(route.query.amount),
          minimum: 1,
          maximum: 1000,
          multipleOf: 1,
        },
      },
    ];
  }

  RebillyInstruments.mount(config);
});

</script>

<template>
  <main>
    <RebillyInstrumentsLayout></RebillyInstrumentsLayout>
  </main>
</template>