<script setup>
import {
  // reactive,
  onMounted
} from 'vue';
import RebillyInstrumentsLayout from '../components/RebillyInstrumentsLayout.vue';
import { useBaseConfig } from '../components/RebillyInstruments.js';
import { useRebillySDK } from '../vendor/rebilly-js-sdk/index.js';
import { useRoute } from 'vue-router';

const api = useRebillySDK();
const route = useRoute();

onMounted(async () => {
  const customerId = "cus_01J56B1FAQ1M4Y29E3VWCB41EQ";
  const { token } = await api.actions.passwordlessLogin({ customerId });

  const config = {
    ...useBaseConfig({ deleteKeys: ['publishableKey', 'websiteId', 'organizationId'] }),
    jwt: token,
    invoiceId: route.query.id,
  };

  RebillyInstruments.mount(config);
});
</script>

<template>
  <main>
    <RebillyInstrumentsLayout>
    </RebillyInstrumentsLayout>
  </main>
</template>