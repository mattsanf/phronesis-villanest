<script setup>
import { reactive, onMounted } from 'vue';
import { useRebillySDK } from '../vendor/rebilly-js-sdk/index.js';
import { useFormatters } from '../components/Formaters.js';

const { formatDate, formatCurrency } = useFormatters();
const api = useRebillySDK();
const state = reactive({
  invoices: [],
});

onMounted(async () => {
  const customerId = "cus_01J56B1FAQ1M4Y29E3VWCB41EQ";
  const { token } = await api.actions.passwordlessLogin({ customerId });
  api.storefront.setSessionToken(token);

  const { items: invoices } = await api.storefront.invoices.getAll();
  state.invoices = invoices.map(({ fields }) => fields);
});
</script>

<template>
  <main>
    <table id="invoices">
      <thead>
        <tr>
          <th>Id</th>
          <th>Issued date</th>
          <th>Status</th>
          <th>Amount Due</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody id="invoices">
        <tr v-for="invoice in state.invoices" :key="invoice.id">
          <td class="rigth">{{ invoice.id }}</td>
          <td>{{ formatDate(invoice.issuedTime) }}</td>
          <td>{{ invoice.status }}</td>
          <td>{{ formatCurrency(invoice.amountDue, invoice.currency) }}</td>
          <td>
            <router-link v-if="['unpaid', 'past-due', 'partially-paid'].includes(invoice.status)" custom :to="{
              name: 'invoice', query: { id: invoice.id, }
            }" v-slot="{ navigate }">
              <button class="rebilly-instruments-button rebilly-instruments-button-secondary" style="margin-top: 0"
                @click="navigate">Pay</button>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<style lang="css" scoped>
table {
  background: white;
  border-collapse: collapse;
  margin: auto;
  width: 100%;
}

th {
  padding: var(--rebilly-spacingM);
  background: #f9fafb;
  border-bottom: 1px solid #e1e1e1;
  text-align: left;
}

td {
  padding: var(--rebilly-spacingS);
}

tbody tr:nth-child(even) {
  background-color: #f9fafb;
}
</style>