<script setup>
import { onMounted } from "vue";
import RebillyInstrumentsLayout from "../components/RebillyInstrumentsLayout.vue";
import { useBaseConfig, websiteId } from "../components/RebillyInstruments.js";
import { useRebillySDK } from "../vendor/rebilly-js-sdk/index.js";

const api = useRebillySDK();

onMounted(async () => {
  const { token } = await api.actions.passwordlessLogin({
    customerId: "cus_01J56B1FAQ1M4Y29E3VWCB41EQ",
  });

  const { fields: customerFields } = await api.customers.get({
    id: "cus_01J56B1FAQ1M4Y29E3VWCB41EQ",
  });
  console.log(customerFields);
  const strategyId =
    customerFields.customFields.defaultCurrency === "USD"
      ? "dep_str_01JATHGCV7GZ9XJXH1MQ5CRXYN"
      : "dep_str_01JATHJ48E2YS93BVZPH30S87N";

  const requestDepositData = {
    websiteId: websiteId,
    customerId: "cus_01J56B1FAQ1M4Y29E3VWCB41EQ",
    currency: customerFields.customFields.defaultCurrency,
    strategyId: strategyId,
  };
  const { fields: depositFields } = await api.depositRequests.create({
    data: requestDepositData,
  });

  const config = {
    ...useBaseConfig({
      deleteKeys: ["publishableKey", "websiteId", "organizationId"],
    }),
    jwt: token,
    deposit: {
      depositRequestId: depositFields.id,
    },
  };

  RebillyInstruments.mount(config);
});
</script>

<template>
  <RebillyInstrumentsLayout></RebillyInstrumentsLayout>
</template>
