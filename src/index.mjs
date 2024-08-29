import "./styles.css";

let config = {
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

let button = document.getElementById("switch-period");
let period = "monthly";

button.addEventListener("click", async function () {
  button.innerHTML = `Switch to ${period} plan`;
  period = period === "yearly" ? "monthly" : "yearly";

  try {
    await RebillyInstruments.update({
      items: [
        {
          planId: `premium-${period}`,
        },
      ],
      bumpOffer: [
        {
          planId: `platinum-${period}`,
        },
      ],
    });
  } catch (error) {
    console.log("Error updating instruments: ", error);
  } finally {
    e.target.disabled = false;
  }
});
// Optional
/*RebillyInstruments.on("instrument-ready", (instrument) => {
  console.info("instrument-ready", instrument);
});
RebillyInstruments.on("purchase-completed", (purchase) => {
  console.info("purchase-completed", purchase);
});*/
