<script setup>
import { onMounted, reactive } from "vue";
import RebillyInstrumentsLayout from "../components/RebillyInstrumentsLayout.vue";
import { useBaseConfig, websiteId } from "../components/RebillyInstruments.js";
import { useRebillySDK } from "../vendor/rebilly-js-sdk/index.js";
import { useRouter } from "vue-router";

const api = useRebillySDK();
const state = reactive({
  currency: "USD",
  token: null,
});
const router = useRouter();

onMounted(async () => {
  const password = await api.actions.passwordlessLogin({
    customerId: "cus_01J56B1FAQ1M4Y29E3VWCB41EQ",
  });
  state.token = password.token;

  changeCurrency(state.currency);
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
    customerId: "cus_01J56B1FAQ1M4Y29E3VWCB41EQ", //works...
    // customerId: "cus_01JF0A0GKC52SFY5V49MY4BPC9",
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
};
</script>

<template>
  <button @click="router.to({ name: 'payout' })">Payout</button>
  <RebillyInstrumentsLayout>
    <template #pre-form>
      <button
        class="rebilly-instruments-button"
        :class="{
          'rebilly-instruments-button-secondary': state.currency !== 'USD',
        }"
        @click="() => changeCurrency('USD')"
      >
        USD
      </button>
      <button
        class="rebilly-instruments-button"
        :class="{
          'rebilly-instruments-button-secondary': state.currency !== 'CAD',
        }"
        @click="() => changeCurrency('CAD')"
      >
        CAD
      </button>
      <button
        class="rebilly-instruments-button"
        :class="{
          'rebilly-instruments-button-secondary': state.currency !== 'EUR',
        }"
        @click="() => changeCurrency('EUR')"
      >
        EUR
      </button>
    </template>
  </RebillyInstrumentsLayout>
</template>
