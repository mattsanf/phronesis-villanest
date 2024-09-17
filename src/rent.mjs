import "./styles.css";
import { baseConfig } from "./instruments.mjs";
import RebillyAPI from "rebilly-js-sdk";

(async () => {
  const api = new RebillyAPI({
    apiKey: "sk_sandbox_bg4aWLG58j48J_xaKR15ZFiDbxU1UutzYSHLcs2",
    organizationId: baseConfig.organizationId,
    sandbox: true,
  });

  const { fields: subscription } = await api.subscriptions.create({
    data: {
      orderType: "one-time-order",
      customerId: "cus_01J56B1FAQ1M4Y29E3VWCB41EQ",
      websiteId: baseConfig.websiteId,
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

  let config = {
    ...baseConfig,
  };

  config.money = {
    amount: getAmountPercent({ invoice, percentage: 0.2 }),
    currency: "USD",
  };

  RebillyInstruments.mount(config);

  RebillyInstruments.on("purchase-completed", async (transaction) => {
    console.log(transaction);
    const response = await api.invoices.applyTransaction({
      id: invoiceId,
      data: {
        transactionId: transaction.id,
      },
    });
  });

  // Bind UI
  function getAmountPercent({ invoice, percentage }) {
    const amount = parseFloat(invoice.amount ?? 0.0) * parseFloat(percentage);
    return amount;
  }

  function handlePercentButton({ invoice, percentage }) {
    RebillyInstruments.update({
      money: {
        amount: getAmountPercent({ invoice, percentage }),
        currency: "USD",
      },
    });
  }

  document.querySelectorAll(".select-amount").forEach((button) => {
    let percentage = parseFloat(button.dataset.amount);
    button.addEventListener("click", () => {
      return handlePercentButton({
        invoice,
        percentage,
      });
    });
  });

  const customAmountBtn = document.getElementById("custom-amount-btn");
  const customAmountInput = document.getElementById("custom-amount");

  customAmountBtn.addEventListener("click", () => {
    const amount = parseFloat(customAmountInput.value);
    if (amount > 0.0) {
      RebillyInstruments.update({
        money: {
          amount,
          currency: "USD",
        },
      });
    }
  });
})();
