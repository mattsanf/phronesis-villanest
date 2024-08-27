import "./styles.css";

RebillyInstruments.mount({
  organizationId: "phronesis-villanest",
  publishableKey: "pk_sandbox_ex-Kc1qd58lihJnsejLtQMpzBBlVRu-YtsNqEG4",
  websiteId: "www.example.com-phronesis-villanest",
  apiMode: "sandbox",
  items: [
    {
      planId: "premium-monthly",
      quantity: 1,
    },
  ],
  theme: {
    colorPrimary: "#2B2D42",
  },
  paymentInstruments: {
    address: {
      name: "stacked",
      show: ["email", "phoneNumber", "address", "city", "country"],
      require: ["email", "phoneNumber", "address", "city", "country"],
    },
  },
});
// Optional
RebillyInstruments.on("instrument-ready", (instrument) => {
  console.info("instrument-ready", instrument);
});
RebillyInstruments.on("purchase-completed", (purchase) => {
  console.info("purchase-completed", purchase);
});
