<script setup>
import { onMounted, reactive } from "vue";
import RebillyInstrumentsLayout from "../components/RebillyInstrumentsLayout.vue";
import { useBaseConfig, websiteId } from "../components/RebillyInstruments.js";
import { useRebillySDK } from "../vendor/rebilly-js-sdk/index.js";

const api = useRebillySDK();
const state = reactive({
  currency: 'USD',
  token: null
})

onMounted(async () => {
  const password = await api.actions.passwordlessLogin({
    customerId: "cus_01J56B1FAQ1M4Y29E3VWCB41EQ",
  });
  state.token = password.token;
});

const changeCurrency = async (currency) => {
  state.currency = currency;
  if (RebillyInstruments.state.hasMounted) {
    RebillyInstruments.destroy();
  }
  const strategyId =
    state.currency === "CAD"
      ? "dep_str_01JATHJ48E2YS93BVZPH30S87N"
      : "dep_str_01JATHGCV7GZ9XJXH1MQ5CRXYN";

  const requestDepositData = {
    websiteId: websiteId,
    customerId: "cus_01J56B1FAQ1M4Y29E3VWCB41EQ",
    currency: state.currency,
    strategyId: strategyId,
  };
  const { fields: depositFields } = await api.depositRequests.create({
    data: requestDepositData,
  });

  const config = {
    ...useBaseConfig({
      deleteKeys: ["publishableKey", "websiteId", "organizationId"],
    }),
    jwt: state.token,
    deposit: {
      depositRequestId: depositFields.id,
    },
  };

  RebillyInstruments.mount(config);
}
</script>

<template>
  <RebillyInstrumentsLayout>
    <template #pre-form>
      
    </template>
  </RebillyInstrumentsLayout>
</template>
